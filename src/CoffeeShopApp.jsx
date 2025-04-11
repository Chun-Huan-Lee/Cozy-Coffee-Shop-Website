import { useState, createContext, useContext, useEffect } from 'react';
import './CoffeeShop.css';

// Create Context for Cart
const CartContext = createContext();

// Menu Data
const coffeeMenu = [
  {
    id: 1,
    name: 'Espresso',
    description: 'A concentrated form of coffee served in small, strong shots.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Espresso with steamed milk foam, perfect balance of strong coffee and creamy milk.',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Espresso with steamed milk and a light layer of foam, smooth and mild.',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Americano',
    description: 'Espresso diluted with hot water, similar strength to regular coffee but different flavor.',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk, topped with whipped cream.',
    price: 5.25,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Cold Brew',
    description: 'Coffee steeped in cold water for 12+ hours, resulting in a smooth, less acidic flavor.',
    price: 4.95,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  }
];

// Cart Provider Component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('coffee-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('coffee-cart', JSON.stringify(cart));
  }, [cart]);
  
  const addToCart = (item) => {
    setCart(prevCart => {
      // Check if item is already in cart
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        // Increase quantity if already in cart
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        // Add new item with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  
  const removeFromCart = (id) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === id);
      
      if (existingItem && existingItem.quantity > 1) {
        // Decrease quantity
        return prevCart.map(item => 
          item.id === id 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      } else {
        // Remove item entirely
        return prevCart.filter(item => item.id !== id);
      }
    });
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        getCartTotal, 
        getCartCount,
        isCartOpen,
        toggleCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Header Component
const Header = () => {
  const { getCartCount, toggleCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-amber-800 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Cozy & Coffee</h1>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="relative group">
            <span className="hover:transition">Home</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#menu" className="relative group">
            <span className="hover:transition">Menu</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="relative group">
            <span className="hover:transition">About</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="relative group">
            <span className="hover: transition">Contact</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        
        {/* Cart Button */}
        <button 
          className="flex items-center text-white hover:transition"
          onClick={toggleCart}
        >
          <span className="mr-2">Cart</span>
          <span className="bg-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {getCartCount()}
          </span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-900 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a href="#" className="text-white hover:text-amber-200 transition">Home</a>
            <a href="#menu" className="text-white hover:text-amber-200 transition">Menu</a>
            <a href="#about" className="text-white hover:text-amber-200 transition">About</a>
            <a href="#contact" className="text-white hover:text-amber-200 transition">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <div className="bg-amber-900 text-white py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Cozy & Coffee</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Artisan coffee, freshly roasted and brewed to perfection
        </p>
        <a 
          href="#menu" 
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition inline-block"
        >
          View Our Menu
        </a>
      </div>
    </div>
  );
};

// Menu Component
const Menu = () => {
  return (
    <section id="menu" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">Our Coffee Menu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeMenu.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Coffee Card Component
const CoffeeCard = ({ coffee }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
      <div className="h-56 overflow-hidden">
        <img 
          src={coffee.image} 
          alt={coffee.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-amber-900">{coffee.name}</h3>
          <span className="font-bold text-amber-800">${coffee.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mb-6">{coffee.description}</p>
        <button 
          onClick={() => addToCart(coffee)}
          className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 rounded-md transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-16 bg-amber-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-900">About Cozy & Coffee</h2>
          <p className="text-lg mb-6 text-amber-900">
            Founded in 2020, Cozy & Coffee is committed to serving the highest quality coffee sourced from sustainable farms around the world. 
            Our expert baristas are passionate about crafting the perfect cup of coffee, tailored to your preferences. 
            We believe in building community through coffee, creating a warm and welcoming space for everyone to enjoy.
            Visit us today and experience the difference in every sip!
          </p>
          {/* <p className="text-lg mb-6 text-gray-700">
            Our expert baristas are passionate about crafting the perfect cup of coffee, tailored to your preferences.
          </p>
          <p className="text-lg text-gray-700">
            We believe in building community through coffee, creating a warm and welcoming space for everyone to enjoy.
          </p> */}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">Visit Us</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-800">Location</h3>
            <p className="mb-2 text-gray-700">123 Coffee Street</p>
            <p className="mb-2 text-gray-700">Beantown, BC 12345</p>
            <p className="mb-6 text-gray-700">United States</p>
            
            <h3 className="text-xl font-bold mb-4 text-amber-800">Hours</h3>
            <p className="mb-2 text-gray-700">Monday - Friday: 6:30am - 8:00pm</p>
            <p className="mb-2 text-gray-700">Saturday: 7:00am - 9:00pm</p>
            <p className="text-gray-700">Sunday: 7:00am - 6:00pm</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-800">Contact Us</h3>
            <p className="mb-4 text-gray-700">Have questions? Reach out to us!</p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full p-3 border rounded-md"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-6 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cozy & Coffee</h3>
            <p className="mb-4">Serving the finest coffee since 2020.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-200 transition">Facebook</a>
              <a href="#" className="hover:text-amber-200 transition">Instagram</a>
              <a href="#" className="hover:text-amber-200 transition">Twitter</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-200 transition">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-200 transition">Menu</a></li>
              <li><a href="#about" className="hover:text-amber-200 transition">About</a></li>
              <li><a href="#contact" className="hover:text-amber-200 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">123 Coffee Street</p>
            <p className="mb-2">Beantown, BC 12345</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Email: info@beanandbrew.com</p>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 Cozy & Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Cart Component
const Cart = () => {
  const { cart, removeFromCart, addToCart, getCartTotal, isCartOpen, toggleCart, clearCart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  const handleCheckout = (e) => {
    e.preventDefault();
    // Simulate checkout process
    setOrderComplete(true);
    clearCart();
    // Reset after 3 seconds
    setTimeout(() => {
      setOrderComplete(false);
      setIsCheckout(false);
      toggleCart();
    }, 3000);
  };
  
  if (!isCartOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col">
        <div className="p-4 bg-amber-800 text-white flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={toggleCart} className="text-white">
            Close
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {orderComplete ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Order Complete!</h3>
              <p className="text-lg">Thank you for your order.</p>
            </div>
          ) : isCheckout ? (
            <div className="py-4">
              <h3 className="text-xl font-bold mb-6 text-amber-900">Checkout</h3>
              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label className="block text-amber-900 mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-3 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-amber-900 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full p-3 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-amber-900 mb-2">Address</label>
                  <textarea 
                    required
                    rows="3"
                    className="w-full p-3 border rounded-md"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-amber-900 mb-2">Payment Method</label>
                  <select className="w-full p-3 border rounded-md">
                    <option>Credit Card</option>
                    <option>PayPal</option>
                    <option>Cash on Delivery</option>
                  </select>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xl font-bold text-amber-900">
                    Total: ${getCartTotal().toFixed(2)}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsCheckout(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 rounded-md transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-md transition"
                  >
                    Complete Order
                  </button>
                </div>
              </form>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">Your cart is empty</p>
              <button 
                onClick={toggleCart}
                className="mt-4 bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-md transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex border-b pb-4">
                    <div className="w-24 h-24 overflow-hidden rounded-md">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-bold text-amber-900">{item.name}</h3>
                        <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="bg-gray-600 hover: px-2 py-1 rounded-md"
                        >
                          -
                        </button>
                        <span className="text-gray-600 px-3">{item.quantity}</span>
                        <button 
                          onClick={() => addToCart(item)}
                          className="bg-gray-600 hover: px-2 py-1 rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between mb-4">
                  <span className="text-lg">Total:</span>
                  <span className="text-lg font-bold">${getCartTotal().toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => setIsCheckout(true)}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 rounded-md transition"
                >
                  Proceed to Checkout
                </button>
                <button 
                  onClick={clearCart}
                  className="w-full mt-2 bg-white hover:bg-gray-100 text-amber-800 border border-amber-800 font-bold py-3 rounded-md transition"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const CoffeeShopApp = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="pt-16">
          <Hero />
          <Menu />
          <About />
          <Contact />
          <Footer />
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default CoffeeShopApp;