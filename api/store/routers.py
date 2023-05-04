from rest_framework import routers

from .views import StoreViewSet

router = routers.DefaultRouter(trailing_slash=False)

router.register(r"", StoreViewSet)
