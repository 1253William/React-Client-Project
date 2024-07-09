import { useState } from "react";
const products = [
        {id:'1', product:'1', price: 20.4},
        {id:'2', product:'2', price: 70.67},
        {id:'3', product:'3', price: 90.05},
];

const Cart = () => {
    const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  
    return (
        <>
          <div className="App">
      <header className="header">
        <h1 className="title">My E-commerce Store</h1>
        <div className="cart">
          <span>Cart ({cart.length})</span>
        </div>
      </header>
      <main className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
            {cart.some(cartItem => cartItem.id === product.id) && (
              <button
                onClick={() => removeFromCart(product.id)}
                className="remove-from-cart-button"
              >
                Remove from Cart
              </button>)}
          </div>
        ))}        
      </main>
      <footer className="footer">
        <p>�� 2024 My E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
        </>
    )
}

export default Cart;