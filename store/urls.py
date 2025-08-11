from django.urls import path
from . import views

urlpatterns = [
    path('', views.store_home, name='store_home'),
    path('category/<slug:slug>/', views.category_detail, name='category_detail'),
    path('product/<slug:slug>/', views.product_detail, name='product_detail')
]