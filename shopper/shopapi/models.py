from django.db import models

# Create your models here.
class SaleItems(models.Model):
    product_name = models.CharField(max_length=50)
    price = models.IntegerField()
    product_type = models.CharField(max_length=25)
    brand = models.CharField(max_length=25, null=True,blank=True)
    image_path = models.ImageField(upload_to='images/product_image')

    def __str__(self):
        return f"{self.product_name}, price={self.price}"