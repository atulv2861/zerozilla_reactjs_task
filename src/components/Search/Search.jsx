import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from "../Search/Search.module.css";
import { useNavigate } from 'react-router-dom';

function Search({ handleSearchResult }) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [suggestions, setSuggestions] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const navigate=useNavigate();
  // Fetch all products once for suggestions and searching
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setAllProducts(response.data))
      .catch(error => console.error(error));
  }, []);

 
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); 

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  // Handle debounced search
  useEffect(() => {
    if (debouncedQuery.trim() === '') {
        handleSearchResult([]); 
      setSuggestions([]); 
      return;
    }

 
    navigate('/');
    // Filter results and suggestions based on debounced query    
    const results = allProducts.filter(product =>
      product.title.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    handleSearchResult(results);
    setSuggestions(results.slice(0, 5)); // Limit suggestions to top 5 results
  }, [debouncedQuery, allProducts]);

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search products..."
        className={Style.SearchInputField}
      />
      
      {suggestions.length > 0 && (
        <ul className={Style.Suggestions} >
          {suggestions.map((product) => (
            <li
              key={product.id}
              style={{ padding: '8px', cursor: 'pointer' }}
              onClick={() => {setQuery(product.title); setSuggestions([])}} // Set query on suggestion click
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
