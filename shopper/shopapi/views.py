from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import SaleItemSerializer, SaleHistorySerializier
from .models import SaleItems, SaleHistory

# Create your views here.
class SaleItemViewSet(viewsets.ModelViewSet):
    queryset = SaleItems.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = SaleItemSerializer


class SaleHistoryViewSet(viewsets.ModelViewSet):
    queryset = SaleHistory.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = SaleHistorySerializier