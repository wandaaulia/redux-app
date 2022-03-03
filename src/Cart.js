import { useSelector, useDispatch} from 'react-redux';
import React, { useState} from 'react';
import CartItem from './CartItem';
import { getCartItems, removeAll, getLoading, setLoading} from './features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'


const Cart = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(getCartItems);
    const [process, setProcess] = useState(false);

    const loading = useSelector(getLoading);

    const total = cartItems.reduce((total, item) => total+item.totalPrice, 0);
  
    const handleClick = () => {

        console.log('process');

        setTimeout( 
           () => {
            setProcess(true);
            dispatch(setLoading(true));
           }
        , 1000);

        setTimeout( 
            () => {
            setProcess(false);
             dispatch(removeAll());
            }
         , 2000);

         setTimeout( 
            () => {
             navigate('/');
             dispatch(setLoading(false));
            }
         , 3000);
 
      
    }

    return (
        <div className="container p-5 mt-5 mt-md-5 mt-lg-5 mb-5"> 

        { loading ? 
        <div className="row bg-light total-size"> 
        <p className="text-start fw-bold p-3"> {process ? 'process...' : 'success'} </p>
         </div>
         : 
         <>
        <h2 className="mb-2 text-start"> Your Cart </h2>
              {
                cartItems.map((cart) => {
                    return (
                        <CartItem key={cart.id} {...cart} />
                    )
                })
         
             }
        <div className="row bg-light total-size"> 
        <p className="text-start col-9 p-3"> Total </p>
        <p className="text-end fw-bold p-3 col"> ${total} </p>
         </div>

         { cartItems.length >=1  && 
         <div className="mt-4 row justify-content-md-end text-center button-checkout text-md-end"> 
            <button className="btn btn-sm bg-success button-checkout-size rounded-3 text-white" onClick={handleClick}> Checkout </button>  
         </div> 
        
         }
        </> }
        </div>


    )
}

export default Cart;