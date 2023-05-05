from django.utils import timezone
from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    sku = models.CharField(max_length=100, unique=True)
    inventory_quantity = models.IntegerField()
    inventory_updated_at = models.DateTimeField(default=timezone.now())
    store = models.ForeignKey("store.Store", on_delete=models.CASCADE)
