import React, { useState, useRef } from 'react';
import { products, Product } from '@/data/products';
import Navbar from './Navbar';
import Hero from './Hero';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';
import CartDrawer, { CartItem } from './CartDrawer';
import QuickViewModal from './QuickViewModal';
import AuthModal from './AuthModal';
import CheckoutModal from './CheckoutModal';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const productsRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = (product: Product, size?: string) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        size: size
      }]);
    }
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handlePayment = (method: 'mpesa' | 'card', details: any) => {
    console.log('Payment:', method, details);
    alert(`Payment successful! Order confirmation sent to ${details.email}`);
    setCartItems([]);
  };

  const handleLogin = (email: string, password: string) => {
    console.log('Login:', email);
    alert('Login successful!');
  };

  const handleRegister = (name: string, email: string, password: string) => {
    console.log('Register:', name, email);
    alert('Account created! Verification email sent.');
  };

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  let filteredProducts = products;
  
  if (selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }
  
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 && subtotal < 100 ? 10 : 0;
  const cartTotal = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
        onSearchClick={scrollToProducts}
      />
      
      <Hero onShopNow={scrollToProducts} />
      
      <div ref={productsRef} className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Shop All</h2>
          <p className="text-gray-600">Discover our full collection of premium streetwear</p>
        </div>
        
        <FilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onQuickView={setSelectedProduct}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 py-12">No products found</p>
        )}
      </div>
      
      <Footer />
      
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
      
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
      
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        total={cartTotal}
        onPayment={handlePayment}
      />
    </div>
  );
};

export default AppLayout;
