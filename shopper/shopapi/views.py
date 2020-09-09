from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import SaleItemSerializer, SaleHistorySerializier
from .models import SaleItems, SaleHistory
from rest_framework import views
from rest_framework import status
from rest_framework import authentication
from rest_framework import generics
from rest_framework import mixins


# Create your views here.
class SaleItemViewSet(viewsets.ModelViewSet):
    queryset = SaleItems.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = SaleItemSerializer


class SaleHistoryViewSet(viewsets.ModelViewSet):
    # queryset = SaleHistory.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = SaleHistorySerializier

    def get_queryset(self):
        return SaleHistory.objects.filter(user = self.request.user)
    
    # def perform_create(self, serializer):
    #     data = self.request.data['products']
    #     for product in data:
    #         print(product)
    #         serializer.save(user=self.request.user, product = SaleItems.objects.get(pk= product['product_id']))

    def create(self, request, *args, **kwargs):
        is_many = isinstance(request.data, list)
        bought_items = request.data['products']
        products = []
        for item in bought_items:
            product = SaleItems.objects.get(pk=item['product_id'])
            products.append(product)
        print(products)

        if not is_many:
            return super(SaleHistoryViewSet, self).create(request, *args, **kwargs)
        else:
            serializer = self.get_serializer(data=request.data, many=True)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class SalehistoryView(views.APIView):
    '''
    sale history using api view
     TODO = still not able to create posts from  list of data. 
    '''
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        sale_history = SaleHistory.objects.filter(user = request.user)
        serializer = SaleHistorySerializier(sale_history, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SaleHistorySerializier(data=request.data)

        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status= status.HTTP_201_CREATED)

        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

class SaleHistoryDetailView(views.APIView):
    '''
    this is the individual detail of the salehistory view.
    i.e individual items in the whole list
    '''
    
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self, id):
        '''
            get the objects in the model for a particular user with authentication
        '''
        try:
            return SaleHistory.objects.get(pk=id)
        except:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        '''
        get info about an individual items about in the sale history for that particular user only
        '''
        item = self.get_object(id)
        if item.user.pk == request.user.id:
            serializer = SaleHistorySerializier(item)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

    def put(self, request, id):
        '''
            change individual item details (changeableby that user only) not required in this context just did for the sake of completion
        '''
        item = self.get_object(id)
        if item.user.pk == request.user.id:
            serializer = SaleHistorySerializier(item, data = request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data)
            return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)
            
    def delete(self, request, id):
        '''
            delete individual  item details (deleteable by  that user only) not required in this context just did for the sake of completion

        '''
        item = self.get_object(id)
        if item.user.pk == request.user.id:
            item.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)
            

class SaleHistoryGenerics(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin, mixins.UpdateModelMixin):
    '''
    using generic view
    lookup field reads the varying fields in the url (here <int:id>)
    '''
    serializer_class= SaleHistorySerializier
    # queryset = SaleHistory.objects.all()
    permission_classes=[permissions.IsAuthenticated]
    lookup_field = 'id'

    def get_queryset(self):
        '''
        returning qqueryset of only the autheticatd user
        '''
        return SaleHistory.objects.filter(user = self.request.user)

    def get(self, request, id=None):
        '''
        listing the queryset using listmodel mixin
        '''
        if id is None:
            return self.list(request)
        else:
            return self.retrieve(request, id)

    def perform_create(self, serializer):
        '''
        ovrriding the perform_create of createmodelmixin so that 
        the user is always the authenticated user that creates the post(slaehistory)
        '''
        serializer.save(user = self.request.user)

    def post(self, request):
        '''
        creating a new post(salehistory)
        '''
        return self.create(request)

    def put(self, request, id):
        '''
        update a single history item (not needed in this context ,just cause)
        '''
        return self.update(request, id)

    def delete(self, request, id):
        '''
        delete a single history item (not needed in this context ,just cause)
        '''
        return self.destroy(request, id)


class SaleHistoryVS(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
   
    '''
    viewsets.Viewset
    viewset is similar to apiview ie no predefined methods and actions bit unlike apiview it can 
    accomodate both the details and the list parts uder one class.
    in genericapiview we need two seperate urls  in Viewset it is all sorted out by router
    butunlike genericapiView we need to define the individual methods like list, retrive etc to get th respective functioning
    in viewsets.ViewSet we need to define serializer and queryet in each method
    
    viewsets.GenericViewset
    here we have get_object and get-queryset methods but doesnt provide any actions by default
    use with mixins for the various action methods

    viewsets.modelvieset
    this provides all all genericviewsets methods along with the behaviour ot the default mixinclassses 
    i.e list, retrieve, create, update, destroy
    '''
    
    def list(self, request):
        queryset = SaleHistory.objects.filter(user = request.user)
        serializer = SaleHistorySerializier(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = SaleHistorySerializier(data=request.data, many=True)

        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status= status.HTTP_201_CREATED)

        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)


    def retrieve(self, request, pk=None):
        queryset = SaleHistory.objects.filter(user = request.user)
        item  = get_object_or_404(queryset, pk=pk)

        serializer = SaleHistorySerializier(item)
        return Response(serializer.data) 

    def update(self, request, pk=None):
        queryset = SaleHistory.objects.filter(user = request.user)
        item  = get_object_or_404(queryset, id=pk)

        serializer = SaleHistorySerializier(item, data = request.data)
        if serializer.is_valid() :
            serializer.save(user = request.user)
            return Response(serializer.data)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        queryset = SaleHistory.objects.filter(user = request.user)
        item  = get_object_or_404(queryset, id=pk)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)