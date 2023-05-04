from rest_framework import serializers
from .models import Product
from store.models import Store
import time


class ProductSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data["inventory_updated_at"] = instance.inventory_updated_at.strftime(
            "%m/%d/%Y, %H:%M:%S"
        )
        return data

    class Meta:
        model = Product
        fields = "__all__"
