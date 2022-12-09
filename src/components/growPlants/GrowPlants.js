import React, { Fragment, useEffect } from "react";
// import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
import Product from "./ProductCard";
import { CgMouse } from "react-icons/cg";
import "./GrowPlants.css";
import Metadata from "../layout/Metadata";
import { clearErrors, getProduct } from "../../actions/productAction";
import {useSelector, useDispatch} from "react-redux";
import Loader from "../layout/loader/Loader";
import {useAlert} from "react-alert";
import Search from "../product/Search";
import { useNavigate } from 'react-router-dom';

const GrowPlants = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {loading, error, products, productCount} = useSelector(state => state.products)
    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);
    return <Fragment>
            {loading? <Loader /> : <Fragment>
        <Metadata title="GROW PLANTS"/>
        <div className="product-banner">
            <p>Grow Plants with us!</p>
            <h2>Find the plant that you like and help this planet by growing it.</h2>
            {/* <a href="#container">
                <button>
                    Scroll <CgMouse/>
                </button>
            </a> */}
            <h2 className="productHeading">Featured Products</h2>
            <div className="productContainer" id="productContainer">
                {products && products.map(product => (
                    <Product product={product}></Product>
                ))}
            </div>
            <div className="productButton">
                <button onClick={navigate(`/products`)}>
                    More Products: 
                </button>
            </div>
        </div>
        
        </Fragment>}
        </Fragment>;
}

export default GrowPlants;
