from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class SaleItems(models.Model):
    product_name = models.CharField(max_length=50)
    price = models.IntegerField()
    product_type = models.CharField(max_length=25)
    description = models.CharField(max_length=250 ,default='', blank=True)
    brand = models.CharField(max_length=25, null=True,blank=True)
    image_path = models.ImageField(upload_to='images/product_image')
    date_added = models.DateField(auto_now_add=True)
    in_stock = models.BooleanField(default=True)
    def __str__(self):
        return f"{self.product_name}, price={self.price}"


class SaleHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(SaleItems, on_delete=models.RESTRICT, default=None)

