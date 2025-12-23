from django.db import models
from django.utils import timezone

class UserSignup(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100) 
    flag = models.IntegerField(default=0)  # 0 = active, 1 = deleted
    set_date = models.DateTimeField(default=timezone.now)
    update_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username
class Order(models.Model):
    id = models.AutoField(primary_key=True)
    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField() 
    address = models.TextField()
    quantity = models.PositiveIntegerField(default=1)
    product_name = models.CharField(max_length=100)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    order_date = models.DateTimeField(default=timezone.now)
    
    update_date = models.DateTimeField(auto_now=True)
    flag = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.customer_name} - {self.product_name}"