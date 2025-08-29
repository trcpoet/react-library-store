import Nav from "./components/Nav";
import Landing from "./components/Landing"
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Book from "./components/ui/Book";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { books } from "./data";



function App() {
  return (
<Router>
      <div className="App">
        <Nav />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Landing />
                <Highlights />
                <Featured />
                <Discounted />
                <Explore />
              </>
            }
          />
          {/* Books Page */}
          <Route path="/books" element={<Book books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
