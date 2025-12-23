# myapp/views.py
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserSignup
from django.utils import timezone
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
import traceback
from .models import Order

@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')

            if UserSignup.objects.filter(email=email).exists():
                return JsonResponse({'error': 'Email already exists'}, status=400)

            user = UserSignup.objects.create(
                username=username,
                email=email,
                password=password  # plain-text (again: insecure)
            )
            return JsonResponse({'message': 'Signup successful'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            user = UserSignup.objects.filter(email=email, password=password).first()

            if user:
                return JsonResponse({'message': 'Login successful'}, status=200)
            else:
                return JsonResponse({'error': 'Invalid email or password'}, status=401)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
@csrf_exempt
def place_order(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        Order.objects.create(
            customer_name=data['customer_name'],
            customer_email=data['customer_email'],  # ✅ Make sure this comes from Angular
            address=data['address'],
            quantity=data['quantity'],
            product_name=data['product_name'],
            product_price=data['product_price']
        )

        return JsonResponse({'message': 'Order placed successfully'})


@csrf_exempt
def get_user_orders(request):
    email = request.GET.get('email')
    if email:
        orders = Order.objects.filter(customer_email=email).values(
            'product_name', 'product_price', 'quantity'
        )
        return JsonResponse(list(orders), safe=False)
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)

