import React from 'react'
import { Navbar,  Nav, NavDropdown, Container} from 'react-bootstrap';
import { FaCartPlus} from 'react-icons/fa'
import { useNavigate} from 'react-router-dom';
import { useSelector} from 'react-redux';
import { getCartItems} from './features/cart/cartSlice'

const NavbarApp = () => {

    const cartItems = useSelector(getCartItems);

    const notif = cartItems.reduce((total, item) => total+item.quantity, 0);

  

    let navigate = useNavigate();

    const handleCart = () => {

        navigate('/cart');
    }

    const handleHome = () => {

        navigate('/');
    }

    return ( 
        <>
         <Navbar bg="light" expand="lg" className="bg-transparent border border-bottom border-0">
            <Container>
                <Navbar.Brand href="#home"> Biskuitku </Navbar.Brand>
                <div className="position-relative badgee" onClick={handleCart}> 
                <FaCartPlus size={18} className="pointer"/>
                 <span className="badge pointer bg-warning position-absolute top-1 start-100 translate-middle rounded-pill"> {notif} </span>  </div> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="hitam">
                    <Nav className="nav-link " onClick={handleHome} className="pointer">Home</Nav>
                </Nav>
                </Navbar.Collapse>
                
            </Container>
            </Navbar>
        </>
     );
}
 
export default NavbarApp;