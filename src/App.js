import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Book from "./components/ui/Book";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { books } from "./data";
import Home from "./pages/Home";
import Books from "./pages/Books";  // 👈 new list component
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from "react";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity : 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => item.id === book.id  
        ? {
          ...item, quantity: +quantity,
        }
        :  item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id))
    // Keep it in the Array if IDs don't match. And if they do match, remove it from the array
    console.log('removeItem', item)
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }
  
    useEffect(() => {
      console.log(cart)
    }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          {/* Home Page */}
          <Route path="/" exact element={<><Home /></>}/>

          {/* Books Page */}
          <Route path="/books" element={<Books books={books} />} />

            {/* Book Page */}
          <Route 
            path ="/books/:id" 
            element = {<BookInfo books = {books} addToCart={addToCart} cart={cart}/>}/>

            {/* Cart Page */}
          <Route path ="/cart" 
          element ={
            <Cart 
              books = {books} 
              cart = {cart} 
              changeQuantity={changeQuantity} 
              removeItem = {removeItem} 
          />
        }

          />
            
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
