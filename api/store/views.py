from rest_framework import permissions, viewsets
from .models import Store
from .serializers import StoreSerializer

# Create your views here.


class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer

    permission_classes = [permissions.AllowAny]
