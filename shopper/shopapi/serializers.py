from rest_framework import serializers
from .models import SaleItems, SaleHistory
from django.contrib.auth.models import User
class SaleItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaleItems
        fields = '__all__'


class SaleHistorySerializier(serializers.ModelSerializer):
    class Meta:
        model = SaleHistory
        fields = '__all__'
        read_only_fields  = ('user',)

    

# class SaleHistorySerializier(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     user = serializers.PrimaryKeyRelatedField(read_only=True)
#     product = serializers.PrimaryKeyRelatedField(queryset=SaleItems.objects.all() )
#     date_bought = serializers.DateTimeField(read_only=True) 

#     def create(self, validated_data):
#         return SaleHistory(**validated_data)

