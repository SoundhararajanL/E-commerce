import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBolt } from '@fortawesome/free-solid-svg-icons';
import './ProductModal.css';
import paypal from "../images/paypal.png";
import gpay from "../images/gpay.webp";
import visa from "../images/visa.png";
import { addBuyToList } from '../slices/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductModal = (props) => {
    const [img, setImg] = useState("");
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [brand, setBrand] = useState('');
    const [spec, setSpec] = useState('');
    const [orderName, setOrderName] = useState('');
    const [orderNumber, setOrderNumber] = useState('');
    const [orderAddress, setOrderAddress] = useState('');

    const [showPayments, setShowPayments] = useState(false);

    const { selectedProducts } = useSelector((state) => state.products);
    const dispatch = useDispatch();


    useEffect(() => {
        if (Object.keys(selectedProducts).length !== 0) {
            setImg(selectedProducts.img);
            setName(selectedProducts.name);
            setPrice(selectedProducts.price);
            setBrand(selectedProducts.brand);
            setSpec(selectedProducts.spec);
        }
    }, [selectedProducts]);

    const payments = [
        { url: paypal }, { url: gpay }, { url: visa }
    ];

    const handleShowPayments = () => {
        setShowPayments(!showPayments);
    };

    const handleToBuy = () => {
        if (orderName && orderNumber && orderAddress) {
            dispatch(addBuyToList({ orderName, orderNumber, orderAddress }));
            setOrderName('');
            setOrderNumber('');
            setOrderAddress('');
            props.onHide();

            toast.success("Successfully placed order!");
        } else {
            toast.error("Please fill in all fields.");
        }
    };

    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    {name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body-scrollable">
                <div className="modal-content-flex">
                    <div className="left-section">
                        <img src={img} className="modal-img" alt={name} />
                        <div className="input-fields">
                            <input className="form-control" type='text' placeholder='Enter your name' value={orderName} onChange={(e) => setOrderName(e.target.value)} />
                            <input className="form-control" type='text' placeholder='Enter Email/Mobile Number' value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} />
                            <input className="form-control" type='text' placeholder='Enter Delivery Address' value={orderAddress} onChange={(e) => setOrderAddress(e.target.value)} />
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="modal-details">
                            <h4 className='fw-bold'>{brand}</h4>
                            <h5 className='fw-bold'>{spec}</h5>
                            <h6 style={{ color: "gray" }}>1 year warranty for {name}</h6>
                            <div style={{ color: "green" }} className="price">
                                ₹ {price}
                            </div>
                        </div>
                        <div className="payment-options">
                            <h4 onClick={handleShowPayments} style={{ cursor: 'pointer' }}>Payment Options</h4>
                            {showPayments && (
                                <div>
                                    {payments.map((pay, index) => (
                                        <div style={{ cursor: 'pointer' }} key={index}>
                                            <img src={pay.url} alt={`payment-option-${index}`} />
                                        </div>
                                    ))}
                                    <button className="btn-cod">Cash on Delivery</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className='text-end'>
                    <button type="button" style={{ backgroundColor: "#ffc107" }} className="btn text-light fw-bold"><FontAwesomeIcon icon={faBolt} /> ADD TO CART</button>
                </div>
                <div className='text-end'>
                    <button type="button" onClick={handleToBuy} style={{ backgroundColor: "#fd7e14" }} className="btn text-light fw-bold"><FontAwesomeIcon icon={faCartShopping} /> BUY NOW</button>
                </div>
            </Modal.Footer>
            <ToastContainer /> 
        </Modal>
    );
}

export default ProductModal;
