from django.urls  import path, include
from rest_framework import routers
from .views import SaleItemViewSet,SaleHistoryViewSet, SalehistoryView, SaleHistoryDetailView, SaleHistoryGenerics, SaleHistoryVS

routes = routers.DefaultRouter()
routes.register('api/saleitems', SaleItemViewSet, basename='saleitem')
routes.register('api/viewset/salehistory', SaleHistoryVS, basename='salehistoryVS')
# routes.register('api/salehistory', SaleHistoryViewSet, basename='salehistory')

urlpatterns = [ path('',include(routes.urls)),
# as apiviws
path('api/salehist', SalehistoryView.as_view()),
path('api/salehist/detail/<int:id>', SaleHistoryDetailView.as_view() ),
# as genericapi view
path('api/generic/salehistory', SaleHistoryGenerics.as_view() ),
path('api/generic/salehistory/<int:id>', SaleHistoryGenerics.as_view() ),


]