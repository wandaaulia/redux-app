import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems, updateItemToCart, removeItemCart} from './features/cart/cartSlice'
import data from './data';
import { FaTrashAlt} from 'react-icons/fa'

const CartItem = ({id, productdId, name, quantity, img, totalPrice}) => {

    const dispatch = useDispatch();

    const cartItems = useSelector(getCartItems);
    const [newQuantity,setNewQuantity] = useState(quantity);
    const [price, setPrice] = useState(totalPrice);
   
    const findData = data.find(item => item.id === productdId);

    const addQuantity = () => {
      
        const newItem = newQuantity + 1;
        setNewQuantity(newItem);
     

        const newPrice = price+findData.price;
        setPrice(newPrice);

        dispatch(updateItemToCart({id, newItem, newPrice}));
    }


     const substractQuantity = () => {

        if(newQuantity <= 1) return;

        const newItem = newQuantity - 1;
        setNewQuantity(newItem);

        const newPrice = price-findData.price;
        setPrice(newPrice);

        dispatch(updateItemToCart({id, newItem, newPrice}));
    }
  
    return ( 
        <div className="mt-2 text-center rounded row cart-size justify-content-center mb-1"> 
            <div className="col-3 border border-light border-3 my-auto justify-content-center p-2 rounded">
                <img src={img} width="50" />
            </div>
            <div className="col-7 text-start my-auto p-4"> 
            <p>  {name} </p>
            <div className="row justify-content-center gap-2"> 
            <button className="btn btn-sm bg-light col border border-light border-4" onClick={substractQuantity}> - </button>
            <button className="col btn btn-sm bg-light "> {newQuantity} </button>
            <button className="btn btn-sm bg-light col" onClick={addQuantity}> + </button>    
            </div>
            </div>
            <div className="col-2 p-2 my-auto">  
            <p>  ${price} </p>
            <button className="btn btn-sm btn-danger text-center my-auto" onClick={() => dispatch(removeItemCart({id}))}> <FaTrashAlt /> </button>    
            </div>

        </div>
     );
}
 
export default CartItem;