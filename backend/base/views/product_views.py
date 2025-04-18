from django.shortcuts import render
#La classe JsonResponse permet de renvoyer une réponse JSON à un client. C'est très utile pour les API ou les projets avec des interfaces React ou Vue.js.


from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import Product


from base.serializers import ProductSerializer

from rest_framework import status

@api_view(['GET'])
def getProducts(request):
   products = Product.objects.all()
   serializer = ProductSerializer(products, many=True)
   return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)   


