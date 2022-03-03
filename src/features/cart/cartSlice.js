import { createSlice } from '@reduxjs/toolkit'
import data from '../../data';

export const slice = createSlice({
    name: 'cart',
    initialState : {
        cartItems:JSON.parse(localStorage.getItem('cart'))|| [],
        loading: false
    },
    reducers: {
        addItemToCart : (state, action) => {

            const addItem = state.cartItems.find(item => item.productdId === action.payload.id);
     
            const findData = data.find(item => item.id === action.payload.id);

            if(addItem) {
                const findItem = state.cartItems.findIndex(item => item.id === addItem.id);
                
                const { name, productdId, id, totalPrice, quantity, img} = state.cartItems[findItem];

                const updateCart = {
                    id: id,
                    name: name,
                    img: img,
                    productdId: productdId,
                    quantity: quantity + action.payload.quantity,
                    totalPrice : totalPrice+findData.price,
                }
                
                state.cartItems[findItem] = updateCart;

                const addCartToStorage = [...state.cartItems];
                localStorage.setItem('cart', JSON.stringify(addCartToStorage));
                
                return;
            } else {
                
            const pseudoId = (new Date()).getTime();

            state.cartItems.push({
                id: pseudoId,
                name: action.payload.name,
                img : action.payload.img, 
                productdId: action.payload.id,
                quantity: 1,
                totalPrice : action.payload.price
            });

            const addCartToStorage = [...state.cartItems];
            localStorage.setItem('cart', JSON.stringify(addCartToStorage));
        }
        },
        updateItemToCart : (state, action) => {

             const newCart = state.cartItems.findIndex(item => item.id === action.payload.id);
             const { name, productdId, img} = state.cartItems[newCart];

             const newUpdate = {
                 id : newCart,
                 name: name,
                 img: img,
                 productdId: productdId,
                 quantity: action.payload.newItem,
                 totalPrice: action.payload.newPrice
             }
             state.cartItems[newCart] = newUpdate;
             const addCartToStorage = [...state.cartItems];
             localStorage.setItem('cart', JSON.stringify(addCartToStorage));
        },
        removeItemCart : (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            const addCartToStorage = [...state.cartItems];
            localStorage.setItem('cart', JSON.stringify(addCartToStorage));
        },
        removeAll : (state) => {
            state.cartItems = [];
            const addCartToStorage = [...state.cartItems];
            localStorage.setItem('cart', JSON.stringify(addCartToStorage));
        },
        setLoading : (state, action) => {
            state.loading = action.payload;
        }
    }
})

export const getCartItems = state => state.cart.cartItems;
export const getLoading = state => state.cart.loading;

export const {addItemToCart, updateItemToCart, 
    removeItemCart, removeAll, setLoading } = slice.actions;

export default slice.reducer;