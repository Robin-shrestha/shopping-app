from rest_framework import serializers
from .models import SaleItems, SaleHistory
class SaleItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaleItems
        fields = '__all__'


class SaleHistorySerializier(serializers.ModelSerializer):
    class Meta:
        model = SaleHistory
        fields = '__all__'
