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

   <div className="row mt-5 width-content-xl mx-auto content-css p-sm-3 justify-content-center p-lg-4 mb-lg-0">
            <h4 className="fs-2"> <span className="text-warning"> Best </span> seller </h4>
          

          <div className=" d-flex flex-row flex-wrap gap-3 gap-md-5 gap-lg-5 pb-1 width-xxl-persen pb-lg-5 p-3 pt-lg-5 p-md-4 p-sm-4 p-lg-5  justify-content-center align-lg-start">     
        
      
          { dataBestItem.map((result) => {

            const {img, name, id, price} = result;
           
              return (
                <div className="m-1 card shadow p-3 pb-0 d-flex flex-column width-50-persen p-xl-2  rounded border-0 h-90 bg-white" key={id}>
                
                
                <div className="card-body mt-0">
                <img src={img}  width="50" className="gambar-product"/>            
                <p className="mb-1 pt-3"> {name} </p>
                <p className="text-custom mb-1 fw-bolder"> ${price} <span className="text-muted small"> / pcs </span>  </p>
                <button className="btn btn-primary mt-xl-3 pointer text-white text-center btn-sm rounded-pill"
                onClick={() => {handleClick(result)}}> 
                  Add to cart
                </button>
                </div>
             
                </div>
    

                
              )
          })}
        </div>
        </div> 
            
        <div className="row width-content-xl mx-auto  justify-content-center mt-sm-4 mt-5 mb-5  content-css mt-lg-0 p-sm-3 p-lg-4 pt-lg-0 mb-lg-0">
        <h4 className='fs-2'> <span className="text-warning"> News </span> item </h4>
  
        <div className=" d-flex flex-row flex-wrap gap-3 gap-md-2 gap-lg-5 pb-1 width-xxl-persen pb-lg-5 p-3 pt-lg-5 p-md-4 p-sm-4 p-lg-5  justify-content-center align-lg-start">                 
            { dataNewItem.map((data) => {
                return (
                <div className="m-1 card shadow p-3 pb-0 d-flex flex-column width-50-persen p-xl-2  rounded border-0 h-90 bg-white" key={data.id}>
              <div className="card-body mt-0">
              <img src={data.img} width="50" />            
                <p className="mb-1 pt-3"> {data.name} </p>
                <p className="text-custom mb-1 fw-bolder"> ${data.price}  <span className="text-muted small"> / pack </span>  </p>
                <button className="btn btn-primary mt-xl-3 pointer text-center btn-sm rounded-pill"
                onClick={() => {handleClick(data)}}> 
                  Add to cart
                </button>
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