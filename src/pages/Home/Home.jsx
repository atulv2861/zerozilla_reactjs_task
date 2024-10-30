import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Style from "../Home/Home.module.css";
import { useNavigate } from 'react-router-dom';
function Home({ setProductDetails,searchResults,setSearchResults }) {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);   

    const navigate=useNavigate();
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(()=>{       
        if(categories?.length && searchResults?.length==0)
            handleCategoryClick(categories[0]);
    },[categories])

    // useEffect(()=>{
    //     console.log("searchData")
        
    // },[searchResults]);

    const handleCategoryClick = (category) => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => {                
                setProducts(response.data);
                setSearchResults([]);
            })
            .catch(error => console.error(error));
    };

    const handleViewProductDetails=(product)=>{
        setProductDetails(product)
        navigate(`product/${product?.id}`);
    }

    return (
        <div className={Style.Container}>
            <h1>High range of products</h1>
            <div className={Style.Category}>
                {categories.map((category, index) => (
                    <button key={index} onClick={() => handleCategoryClick(category)}>
                        {category}
                    </button>
                ))}
            </div>
            
            <div className={Style.Products}>
                {searchResults?.length > 0 ? searchResults?.map(product => (
                    <div key={product?.id}>
                        <img className={Style?.Image} src={product?.image} alt="product" />
                        <h3>{product?.title.slice(0,50)}{product?.title?.length>50?'...':''}</h3>
                        <p>{product?.description.slice(0,100)}{product?.description?.length>100?'...':''}</p>
                        <button onClick={() => handleViewProductDetails(product)}>View Details</button>
                    </div>
                ))
                : products?.map(product => (
                    <div key={product?.id}>
                        <img className={Style?.Image} src={product?.image} alt="product" />
                        <h3>{product?.title.slice(0,50)}{product?.title?.length>50?'...':''}</h3>
                        <p>{product?.description.slice(0,100)}{product?.description?.length>100?'...':''}</p>
                        <button onClick={() => handleViewProductDetails(product)}>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
