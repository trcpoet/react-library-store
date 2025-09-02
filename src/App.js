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
    setCart([...cart, book])
  }
  
    useEffect(() => {
      console.log(cart)
    }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          {/* Home Page */}
          <Route path="/" exact element={<><Home /></>}/>

          {/* Books Page */}
          <Route path="/books" element={<Books books={books} />} />

            {/* Book Page */}
          <Route path ="/books/:id" element ={<BookInfo books = {books} addToCart={addToCart} cart={cart}/>}/>

            {/* Cart Page */}
          <Route path ="/cart" element ={<Cart books = {books}/>}/>
            
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

<Route path= "/" exact component = {Home} />








  //   const dupeItem = cart.find(item => +item.id === +book.id)

  //   if (dupeItem){
  //     // Update quantity
  //     setCart(cart.map(item => {
  //       if (item.id === dupeItem.id) {
  //         return {
  //           ...item, 
  //           quantity: item.quantity +1,
  //         }
  //       }
  //       else {
  //         return item
  //       }
  //     }))
  //   }
  //   else{
  //     setCart([...cart, {...book, quantity:1}])
  //   }
    // setCart([...cart, {...book, quantity : 1}])
  // }

//   useEffect(() => {
//     console.log("Cart State:", cart);
//  }, [cart])