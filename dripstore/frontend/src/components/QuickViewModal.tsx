import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '@/data/products';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');

  if (!product) return null;

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 1 && !selectedSize) {
      alert('Please select a size');
      return;
    }
    onAddToCart(product, selectedSize || product.sizes?.[0] || '');
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2 bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            
            {/* Details */}
            <div className="md:w-1/2 p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
                  <h2 className="text-2xl font-bold mt-1">{product.name}</h2>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-2xl font-bold">${product.price}</p>
              
              <p className="text-gray-600">{product.description}</p>
              
              {product.sizes && product.sizes.length > 1 && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Size</label>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border transition-colors ${
                          selectedSize === size
                            ? 'border-black bg-black text-white'
                            : 'border-gray-300 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-2 text-sm">
                <span className={product.stock > 20 ? 'text-green-600' : 'text-orange-600'}>
                  {product.stock > 20 ? 'In Stock' : `Only ${product.stock} left`}
                </span>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-900 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickViewModal;
