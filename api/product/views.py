from rest_framework import permissions, viewsets
from .models import Product
from django.shortcuts import get_object_or_404
from store.models import Store
from .serializers import ProductSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from django.utils import timezone

# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    permission_classes = [permissions.AllowAny]

    def list(self, request, *args, **kwargs):
        store_id = request.query_params.get("store_id", None)
        if store_id == "":
            return Response({"detail": "store_id parameter is required"}, status=400)

        if store_id is None:
            return super().list(request, *args, **kwargs)

        store = get_object_or_404(Store, id=store_id)
        products = Product.objects.filter(store=store)
        serializer = ProductSerializer(products, many=True)
        data = {"store_name": store.name, "products": serializer.data}
        return Response(data)

    @action(
        methods=["PATCH"],
        detail=True,
        url_path="inventory",
        url_name="inventory",
    )
    def update_inventory(self, request, pk=None):
        product = get_object_or_404(Product, id=pk)
        inventory_quantity = request.data.get("inventory_quantity", None)
        if inventory_quantity is None:
            return Response({"detail": "inventory_quantity parameter is required"}, status=400)
        product.inventory_quantity = inventory_quantity
        product.inventory_updated_at = timezone.now()
        product.save()
        serializer = ProductSerializer(product)
        return Response(serializer.data)
