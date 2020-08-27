from django.urls  import path, include
from rest_framework import routers
from .views import SaleItemViewSet

routes = routers.DefaultRouter()
routes.register('api/saleitems', SaleItemViewSet, basename='saleitem')

urlpatterns = [ path('',include(routes.urls))


]