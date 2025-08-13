from django.shortcuts import render, get_object_or_404
from .models import Category, Product

# Create your views here.

def store_home(request):
    products = Product.objects.all()
    categories = Category.objects.all()
    query = request.GET.get('q')
    if query:
        products = products.filter(title__icontains=query)
    # icontains means case insensitive contains

    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')

    if min_price:
        products = products.filter(price__gte=min_price)

    if max_price:
        products = products.filter(price__lte=max_price)

    
    return render(request, 'store/home.html', {
                'products': products,
                   'categories': categories
    })


def category_detail(request, slug):
    category = get_object_or_404(Category, slug=slug)
    products = Product.objects.filter(category=category)
    # search within category
    query = request.GET.get('q')
    if query:
        products = products.filter(title__icontains=query)
    
    # price filter within catefory
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')

    if min_price:
        products = products.filter(proce__gte=min_price)

    if max_price:
        products = products.filter(price__lte=max_price)

    
    return render(request, 'store/category_detail.html', {
        'category': category,
        'products': products
    })

def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    return render(request, 'store/product_detail.html', {'product': product})