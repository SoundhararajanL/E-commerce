import React from 'react';
import mobiles from "../images/mobiles.jpg";
import Tv from "../images/Tv & ap.jpg";
import electronics from "../images/electronics.jpg";
import fashion from "../images/fashion.jpg";
import furnitures from "../images/furnitures.jpg";
import grocery from "../images/grocery.jpg";
import './ProductCategory.css';

const ProductCategory = () => {
    return (
        <div className='container' style={{ width: '80%' }}>
            <div className='row'> 
                <div className='card-group ' >
                    <div className='card mx-2 my-2 text-center ' style={{border:"none"}}>
                        <img src={mobiles} className='card-img-top' alt='mobiles' />
                        <div className='card-body'>
                            <h5 className='card-title  fw-bold'>Mobiles</h5>
                        </div>
                    </div>
                    <div className='card mx-2 my-2 text-center' style={{border:"none"}}>
                        <img src={Tv} className='card-img-top' alt='Tv' />
                        <div className='card-body'>
                            <h5 className='card-title  fw-bold'>Tv & Appliances</h5>
                        </div>
                    </div>
                    <div className='card mx-2 my-2 text-center' style={{border:"none"}}>
                        <img src={electronics} className='card-img-top' alt='electronics' />
                        <div className='card-body'>
                            <h5 className='card-title  fw-bold'>Electronics</h5>
                        </div>
                    </div>
                    <div className='card mx-2 my-2 text-center' style={{border:"none"}}>
                        <img src={fashion} className='card-img-top' alt='fashion' />
                        <div className='card-body'>
                            <h5 className='card-title  fw-bold'>Fashion</h5>
                        </div>
                    </div>
                    <div className='card mx-2 my-2 text-center' style={{border:"none"}}>
                        <img src={furnitures} className='card-img-top' alt='furnitures' />
                        <div className='card-body'>
                            <h5 className='card-title  fw-bold'>Furnitures</h5>
                        </div>
                    </div>
                    <div className='card mx-2 my-2 text-center' style={{border:"none"}}>
                        <img src={grocery} className='card-img-top' alt='grocery' />
                        <div className='card-body'>
                            <h5 className='card-title  fw-bold'>Grocery</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory;
