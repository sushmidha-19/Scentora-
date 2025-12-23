from django.contrib import admin
from django.urls import path
from api.views import signup_view, login_view ,place_order,get_user_orders  # ✅ Correct names



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/signup/', signup_view),  # ✅ match the function name
    path('api/login/', login_view),
    path('place-order/', place_order, name='place_order'), 
    path('my-orders/', get_user_orders),
  # ✅ match the function name
]

