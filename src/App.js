import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Book from "./components/ui/Book";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { books } from "./data";
import Home from "./pages/Home";
import Books from "./pages/Books";  // 👈 new list component
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          {/* Home Page */}
          <Route path="/" exact element={
              <>
                <Home />
              </>
            }
          />

          {/* Books Page */}
          <Route path="/books" element={<Books books={books} />} />
            {/* Book Page */}
          <Route path ="/books/:id" element ={<BookInfo books = {books}/>}/>
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