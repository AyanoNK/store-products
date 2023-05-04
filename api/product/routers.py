from rest_framework import routers

from .views import ProductViewSet

router = routers.DefaultRouter(trailing_slash=False)

router.register(r"", ProductViewSet)
