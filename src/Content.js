import React from 'react'
import data from './data';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, getLoading} from './features/cart/cartSlice'

const Content = () => {

  
  const dispatch = useDispatch();

  const dataBestItem = data.filter((item) => item.category === 'best');
  const dataNewItem = data.filter((item) => item.category === 'new');

    return ( 
        <>

   <div className="row mt-5  justify-content-center m-lg-5 p-lg-4 mb-lg-0">
            <div className="h4"> <span className="text-warning"> Best </span> seller </div>

          <div className="row w-90 pb-1 pb-lg-0 p-5 p-lg-5 gap-sm-2 gap-lg-1 gap-md-2 justify-content-center ">     
          
      
          { dataBestItem.map((result) => {

            const {img, name, id, price} = result;
           
              return (
                <div className="col-md col-6 col-sm p-1 col-lg pt-0" key={id}> 
                <div className="card shadow p-2 mb-5 mb-lg-5 m-sm-3 bg-white p-lg-2 p-sm-4 rounded border-0 h-75 ">
                <div className="card-body mt-0">
                <img src={img}  width="50" className="gambar-product"/>            
                <p className="mb-1 pt-3"> {name} </p>
                <p className="text-custom mb-1 fw-bolder"> ${price}  </p>
                <button className="btn btn-primary text-white text-center btn-sm rounded-pill"
                onClick={() => {
                  dispatch(addItemToCart(result))
                }}> 
                  Add to cart
                </button>
                </div>
                </div>
                </div>
              )
          })}
        </div>
        </div> 
            
        <div className="row justify-content-center mt-sm-4  m-lg-5 mt-lg-0 p-lg-4 pt-lg-0 mb-lg-0">
        <h4> <span className="text-warning"> News </span> item </h4>
  
            <div className="row w-90 pb-1 pb-lg-0 p-5 p-lg-5 gap-sm-2 gap-lg-1 gap-md-2 justify-content-center "> 
            
            { dataNewItem.map((data) => {
                return (
                <div className="col-md col-6 col-sm p-1  pt-0" key={data.id}> 
            <div className="card shadow p-2 mb-5 mb-lg-5 m-sm-3 bg-white p-lg-2 p-sm-4 rounded border-0 h-75 ">
              <div className="card-body mt-0">
              <img src={data.img} width="50" />            
                <p className="mb-1 pt-3"> {data.name} </p>
                <p className="text-custom mb-1 fw-bolder"> ${data.price}  </p>
                <button className="btn btn-primary text-center btn-sm rounded-pill"
                onClick={() => {
                  dispatch(addItemToCart(data))
                }}
                > 
                  Add to cart
                </button>
              </div>
              </div>
            </div>
                )

            })}
               </div>
            </div> 
        </>
     );
}
 
export default Content;