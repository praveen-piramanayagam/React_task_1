// src/components/Cart.jsx
import React from 'react';

const Cart = ({ cartItems, onRemove, onClose }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center items-center transition-opacity duration-300 ease-in-out">
  <div className="bg-white p-8 rounded-xl shadow-2xl w-96 transform transition-all duration-500 ease-in-out scale-100">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
    {cartItems.length === 0 ? (
      <p className="text-gray-600 text-lg text-center">Your cart is empty.</p>
    ) : (
      cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold text-gray-700">{item.title} <span className="text-gray-500">({item.quantity})</span></h3>
            <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
            <p className="text-sm font-bold text-gray-800">Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Remove
          </button>
        </div>
      ))
    )}
    <div className="mt-6 text-lg font-bold text-gray-800 border-t pt-4">
      <p>Total Amount: <span className="text-blue-500">${totalAmount.toFixed(2)}</span></p>
    </div>
    <div className="mt-6 flex justify-end">
      <button
        onClick={onClose}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Close
      </button>
    </div>
  </div>
</div>

  );
};

export default Cart;
