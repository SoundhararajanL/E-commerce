import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBolt } from '@fortawesome/free-solid-svg-icons';
import logo from "../images/e-c logo.jpg";
import user from "../images/user.png";
import "./navbar.css";
import BuyProduct from './buyProduct';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';


const NavBar = () => {
    const [buyListModal, setBuyModalVisible] = useState(false);
    const[ totalorders , setTotalOrders] = useState(0);
    const { orderList } = useSelector((state) => state.products);
    useEffect(() => {
        if (Object.keys(orderList).length !== 0) {
            setTotalOrders(Object.keys(orderList).length)
        }
    }, [orderList]);
    const handleBuyList = () => {
        setBuyModalVisible(true);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            
        },
    }));

    return (
        <div className='nav'>
            <img src={logo} style={{ width: "100px" }} className='me-5 ms-5' alt="logo" />
            <form className="d-flex my-4">
                <input style={{ width: "300px", height: "50px" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button style={{ height: "50px" }} className="btn btn-outline-primary">  <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>

            <IconButton className="ms-auto p-2 bd-highlight me-3 my-4" aria-label="cart">
                <StyledBadge onClick={handleBuyList} style={{ height: "30px", color: "gray", cursor: "pointer" }} badgeContent={totalorders} color="primary">
                    <ShoppingCartIcon />
                </StyledBadge>

            </IconButton>
            <FontAwesomeIcon style={{ height: "20px", color: "gray", cursor: "pointer" }} className='me-3' icon={faBolt} />


            <img src={user} style={{ width: "70px", height: "70px" }} className='p-2 flex-shrink-1 bd-highlight me-5 my-2' alt="user" />
            <BuyProduct
                show={buyListModal}
                onHide={() => setBuyModalVisible(false)} />
        </div>
    );
};

export default NavBar;
