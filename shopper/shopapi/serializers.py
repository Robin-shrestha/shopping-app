from rest_framework import serializers
from .models import SaleItems
class SaleItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaleItems
        fields = '__all__'