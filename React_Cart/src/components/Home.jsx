import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from './Cart';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      alert(`${item.title} is already in your cart!`);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  //Remove items from the cart
  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // Toggle cart modal
  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  // Close the cart modal
  const handleCloseCart = () => {
    setShowCart(false);
  };

  // Show loading and error messages
  if (loading) {
    return (
      <div className="flex items-center center">
    <div><h1>Loading...</h1></div>
    <div><img src="walk.gif" style={{width:'30px'}}></img></div>
    </div>
    );
  }

  if (error) {
    return (
    <div>Error: {error}</div>
    );
  }

  return (
    <div>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Zen Shopping</h1>
        <button
          onClick={handleCartClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </button>
      </nav>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Add products to cart</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-5 p-2">
  {data.map((item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    const quantity = existingItem ? existingItem.quantity : 0;

    return (
      <div key={item.id} className="bg-white shadow-md rounded-md overflow-hidden flex flex-col justify-between w-40 h-[18rem]">
        <div className="flex justify-center items-center p-1 w-full h-32 bg-gray-50">
          <img
            src={item.image}
            alt={item.title}
            className="object-contain w-28 h-28"
          />
        </div>
        <div className="p-2 flex-grow flex flex-col items-center text-center">
          <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">{item.title}</h2>
          <p className="text-sm text-gray-600 font-bold">$ {item.price}</p>
        </div>
        <div className="p-2">
          <button
            onClick={() => handleAddToCart(item)}
            className="bg-blue-500 text-white w-full py-1 rounded-md text-sm hover:bg-blue-600"
          >
            {quantity > 0 ? `Already Added (${quantity})` : 'Add to Cart'}
          </button>
        </div>
      </div>
    );
  })}
</div>


      </div>

      {/* Show Cart Modal if showCart is true */}
      {showCart && (
        <Cart cartItems={cart} onRemove={handleRemoveFromCart} onClose={handleCloseCart} />
      )}
    </div>
  );
};

export default Home;
