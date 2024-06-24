import React, { useState } from 'react';
import NavBar from './navbar';
import './Products.css';
import Footer from './Footer';
import ProductModal from './productModal'; // Ensure correct capitalization

import Tv from "../images/Tv & ap.jpg";
import electronics from "../images/electronics.jpg";
import fashion from "../images/fashion.jpg";
import furnitures from "../images/furnitures.jpg";
import grocery from "../images/grocery.jpg";
import { useDispatch } from 'react-redux';
import { setSelectedProducts } from '../slices/productSlice';
const Products = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch()


    const products = [
        { id: 1, img: Tv, name: 'TV', priceFrom: 10000, brand: "SAMSUNG 183 L ", spec: "Direct Cool Single Door 4 Star Refrigerator with Base Drawer with Digital Inverter ", price: 40000 },
        { id: 2, img: electronics, name: 'Electronics', priceFrom: 20000, brand: "DELL Inspiron 3520", spec: "Intel Core i3 12th Gen 1215U - (8 GB/SSD/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop", price: 56999 },
        { id: 3, img: fashion, name: 'Fashion', priceFrom: 500, brand: "Allen Solly ", spec: "Anti-Bacterial Men Regular Fit Solid Spread Collar Casual Shirt" ,price:1298},
        { id: 4, img: furnitures, name: 'Furnitures', priceFrom: 4000, brand: "Bharat Lifestyle", spec: "Lexus Fabric 3 Seater Sofa  (Finish Color - Light Grey, DIY(Do-It-Yourself))" ,price:12599},
        { id: 5, img: grocery, name: 'Grocery', priceFrom: 100, brand: "Saffola Oats", spec: " Nutty Chocolate, Healthy & Tasty, Anytime Snack, 800g Pouch  (2 x 400 g)" ,price:399},
        { id: 6, img: Tv, name: 'TV', priceFrom: 10000, brand: "SAMSUNG 183 L ", spec: "Direct Cool Single Door 4 Star Refrigerator with Base Drawer with Digital Inverter " ,price: 40000},
        { id: 7, img: electronics, name: 'Electronics', priceFrom: 20000, brand: "DELL Inspiron 3520", spec: "Intel Core i3 12th Gen 1215U - (8 GB/SSD/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop", price: 56999 },
        { id: 8, img: fashion, name: 'Fashion', priceFrom: 500, brand: "Allen Solly ", spec: "Anti-Bacterial Men Regular Fit Solid Spread Collar Casual Shirt",price:1298 },
        { id: 9, img: furnitures, name: 'Furnitures', priceFrom: 4000, brand: "Bharat Lifestyle", spec: "Lexus Fabric 3 Seater Sofa  (Finish Color - Light Grey, DIY(Do-It-Yourself))",price:12599 },
        { id: 10, img: grocery, name: 'Grocery', priceFrom: 100, brand: "Saffola Oats", spec: " Nutty Chocolate, Healthy & Tasty, Anytime Snack, 800g Pouch  (2 x 400 g)" ,price:399}
    ];

    const handleModal = (product) => {

        setModalVisible(true);
        dispatch(setSelectedProducts(product)) 
    }



    return (
        <div>
            <NavBar />
            <div className="products-container">
                <div className='filters'>
                    <h3 className='ms-5 fw-bold'>FILTERS</h3>
                    <div>
                        <h6 className='ms-5'>Product name</h6>
                        <input className='ms-3 text-center' type='text' placeholder='Enter Product name' />
                    </div>
                    <div>
                        <h6 className='ms-5'>priceFrom</h6>
                        <input className='ms-3 text-center' style={{ width: "85px" }} type='number' placeholder='min' />
                        <input className='ms-3 text-center' style={{ width: "85px" }} type='number' placeholder='max' />
                    </div>
                    <button style={{ width: "100px", height: "40px" }} className='btn btn-primary ms-5 my-3'>Filter</button>
                </div>
                <div className='product-list-container'>
                    <div className='product-list'>
                        {products.map((product, index) => (
                            <div onClick={() => handleModal(product)} key={index} className='product-card'>
                                <img src={product.img} alt={product.name} />
                                <h3>{product.name}</h3>
                                <h6 style={{ color: "green" ,opacity:"0.7"}} >price from ₹{product.priceFrom}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />

            <ProductModal
                show={modalVisible}
                onHide={() => setModalVisible(false)} />

        </div>
    );
};

export default Products;
