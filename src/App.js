import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/ProductDetails/ProductDetails';
import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';
import PageNotFound from "../src/pages/NotFound/NotFound.jsx";
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [productDetails,setProductDetails]=useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const handleSearchResult=(data)=>{    
    setSearchResults(data);    
    } 

  return (
    <Router>
      <Header cartCount={cartCount} handleSearchResult={handleSearchResult}/>
      <Routes>
        <Route path="/" exact element={<Home setProductDetails={setProductDetails} searchResults={searchResults}  setSearchResults={setSearchResults}/>}/>        
        <Route path="/carts" element={<Cart/>} />
        <Route path="/product/:id" element={<ProductDetail productDetails={productDetails} addToCart={addToCart} />} />
        <Route path="/profiles" element={<Profile/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
