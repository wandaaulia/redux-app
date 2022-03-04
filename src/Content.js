import React from 'react'
import data from './data';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, getLoading} from './features/cart/cartSlice'


const Content = () => {


 
  const dispatch = useDispatch();

  const dataBestItem = data.filter((item) => item.category === 'best');
  const dataNewItem = data.filter((item) => item.category === 'new');


  const Swal = require('sweetalert2');

  const handleClick = (e) => {

    dispatch(addItemToCart(e));

    Swal.fire(
      '',
    ` "${e.name}" has been added to your cart`,
      'success'
    )

  }



    return ( 
        <>

   <div className="row mt-5 content-css p-sm-3 justify-content-center p-lg-4 mb-lg-0">
            <h4> <span className="text-warning"> Best </span> seller </h4>

          <div className="row w-90 pb-1 pb-lg-0 p-4 pt-lg-5 p-md-4 p-sm-4 p-lg-5 gap-sm-1 gap-md-2 gap-lg-1 justify-content-center ">     
          
      
          { dataBestItem.map((result) => {

            const {img, name, id, price} = result;
           
              return (
                <div className="col-md col-6 col-sm col-lg pt-0 pb-md-0 pb-0 p-lg-2" key={id}> 
                <div className="card shadow p-1 pt-0 pb-0 pt-md-0 my-md-2 my-3 pb-md-0 mb-lg-5 m-sm-3 m-md-4 p-md-3 p-lg-1 p-sm-2
                rounded border-0 h-90 bg-white">
                
                
                <div className="card-body mt-0">
                <img src={img}  width="50" className="gambar-product"/>            
                <p className="mb-1 pt-3"> {name} </p>
                <p className="text-custom mb-1 fw-bolder"> ${price} <span className="text-muted small"> / pcs </span>  </p>
                <button className="btn btn-primary pointer text-white text-center btn-sm rounded-pill"
                onClick={() => {handleClick(result)}}> 
                  Add to cart
                </button>
                </div>
             
                </div>
                </div>
              )
          })}
        </div>
        </div> 
            
        <div className="row justify-content-center mt-sm-4 mt-5 content-css mt-lg-0 p-sm-3 p-lg-4 pt-lg-0 mb-lg-0">
        <h4> <span className="text-warning"> News </span> item </h4>
  
            <div className="row w-90 pb-1 pb-lg-0 p-4 pt-lg-5 p-md-4 p-sm-4 p-lg-5 gap-sm-1 gap-md-2 gap-lg-1 justify-content-center "> 
            
            { dataNewItem.map((data) => {
                return (
                <div className="col-md col-6 col-sm col-lg pt-0 pb-md-0 pb-0 p-lg-2" key={data.id}> 
            <div className="card shadow p-1 pt-0 pb-0 pt-md-0 my-md-2 my-3 pb-md-0 mb-lg-5 m-sm-3 m-md-4 p-md-3 bg-white p-lg-1 p-sm-3 rounded border-0 h-90 ">
              <div className="card-body mt-0">
              <img src={data.img} width="50" />            
                <p className="mb-1 pt-3"> {data.name} </p>
                <p className="text-custom mb-1 fw-bolder"> ${data.price}  <span className="text-muted small"> / pack </span>  </p>
                <button className="btn btn-primary pointer text-center btn-sm rounded-pill"
                onClick={() => {handleClick(data)}}> 
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