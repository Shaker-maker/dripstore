import React, { useState } from 'react';
import { X, CreditCard, Smartphone } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onPayment: (method: 'mpesa' | 'card', details: any) => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, total, onPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('card');
  const [mpesaPhone, setMpesaPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = paymentMethod === 'mpesa' 
      ? { phone: mpesaPhone, email, address }
      : { cardNumber, cardExpiry, cardCvv, email, address };
    onPayment(paymentMethod, details);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white max-w-2xl w-full my-8" onClick={(e) => e.stopPropagation()}>
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-2xl font-bold">Checkout</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Payment Method Selection */}
            <div className="space-y-3">
              <label className="block text-sm font-medium">Payment Method</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border-2 flex items-center gap-3 transition-colors ${
                    paymentMethod === 'card' ? 'border-black bg-gray-50' : 'border-gray-300'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="font-medium">Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('mpesa')}
                  className={`p-4 border-2 flex items-center gap-3 transition-colors ${
                    paymentMethod === 'mpesa' ? 'border-black bg-gray-50' : 'border-gray-300'
                  }`}
                >
                  <Smartphone className="w-5 h-5" />
                  <span className="font-medium">M-Pesa</span>
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Shipping Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:outline-none"
                  rows={2}
                  required
                />
              </div>
            </div>

            {/* Payment Details */}
            {paymentMethod === 'mpesa' ? (
              <div>
                <label className="block text-sm font-medium mb-2">M-Pesa Phone Number</label>
                <input
                  type="tel"
                  value={mpesaPhone}
                  onChange={(e) => setMpesaPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:outline-none"
                  placeholder="254712345678"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">You'll receive an STK push to complete payment</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:outline-none"
                    placeholder="4242 4242 4242 4242"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Expiry</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:outline-none"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CVV</label>
                    <input
                      type="text"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:outline-none"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Total */}
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-900 transition-colors"
            >
              Complete Payment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
