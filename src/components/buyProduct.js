import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const BuyProduct = (props) => {
    const [img, setImg] = useState("");
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState(0);

    const { selectedProducts } = useSelector((state) => state.products);
    const { orderList } = useSelector((state) => state.products);

    useEffect(() => {
        if (Object.keys(selectedProducts).length !== 0) {
            setImg(selectedProducts.img);
            setPrice(selectedProducts.price);
            setBrand(selectedProducts.brand);
        }
    }, [selectedProducts]);

    return (
        <div>
            <Modal
                {...props}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        ORDERS
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-scrollable">
                    {orderList.length > 0 ? (
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Address</th>
                                    <th>Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderList.map((order, index) => (
                                    <tr key={order.id}>
                                        <td>{index + 1}</td>
                                        <td>{order.orderName}</td>
                                        <td>{order.orderNumber}</td>
                                        <td>{order.orderAddress}</td>
                                        <td><img></img></td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No orders found.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BuyProduct;
