import { useState } from 'react';


const QuantityButton = () => {
    const [quantity, setQuantity] = useState(1);

    const substractQuantity = () => {
        if(quantity <=1 ) return;

        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    return (  
        <div className="quantityButton">
        <button onClick={substractQuantity}> &#8772; </button>
        <span> 10 </span>
        <button onClick={addQuantity}> &#43;</button>
        </div>
    );
}
 
export default QuantityButton;