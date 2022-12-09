import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./Product.css";

const ProductCard = ({product}) => {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "#0f544a",
        size: window.innerWidth < 600 ? 15: 18,
        value: product.rating,
        isHalf: true
    };
    return <Link className="productCard" to={`/treeProduct/${product._id}`}>
        <img src={product.images[0].url} alt={product.name}/>
        <p>{product.name}</p>
        <div>
            <ReactStars {...options} />
            <span>
                ({product.numOfReviews} Reviews)
            </span>
        </div>
        <span>{`${product.price}`} {product.currency}</span>
        
    </Link>;
}

export default ProductCard;
