from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import SaleItemSerializer
from .models import SaleItems

# Create your views here.
class SaleItemViewSet(viewsets.ModelViewSet):
    queryset = SaleItems.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = SaleItemSerializer