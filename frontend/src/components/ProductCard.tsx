import React from 'react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView }) => {
  return (
    <div className="group relative bg-white">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
        
        {/* Quick actions on hover */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-black text-white py-2 text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={() => onQuickView(product)}
            className="px-4 bg-white text-black border border-black hover:bg-gray-100 transition-colors"
          >
            Quick View
          </button>
        </div>
        
        {product.stock < 20 && (
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-2 py-1 font-medium">
            Low Stock
          </span>
        )}
      </div>
      
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
        <p className="text-sm font-semibold text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
