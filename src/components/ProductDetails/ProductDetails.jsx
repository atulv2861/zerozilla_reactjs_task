import React, { useEffect, useState } from 'react';
import Style from "../ProductDetails/ProductDetails.module.css";

function ProductDetail({ productDetails, addToCart }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(productDetails);
    }, [productDetails]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className={Style.ProductDetailsContainer}>
            <img className={Style.Image} src={product.image} alt={product.title} />
            <div className={Style.ProductDetails}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p><strong>Category:</strong> {product?.category}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductDetail;
