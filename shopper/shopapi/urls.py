from django.urls  import path, include
from rest_framework import routers
from .views import SaleItemViewSet,SaleHistoryViewSet

routes = routers.DefaultRouter()
routes.register('api/saleitems', SaleItemViewSet, basename='saleitem')
routes.register('api/salehistory', SaleHistoryViewSet, basename='salehistory')
urlpatterns = [ path('',include(routes.urls))

]