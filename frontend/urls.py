from django.urls import path
from .views import index

app_name = 'frontend'

urlpatterns = [
    path("", index, name=""),
    path("login", index),
    path("profile", index),
    path("player", index),
]