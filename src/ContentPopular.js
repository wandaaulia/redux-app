import React from 'react'
import data from './dataPopular'


const ContentPopular = () => {


//   <div key={item.id} className="row justify-content-lg-between ">
//   <div className="col-md col-lg-5 mt-lg-3 mr-lg-3 p-lg-0 justify-content-end">
//       <div className="mt-3 w-100 mx-auto"> 
//           <div>
//           <img src={item.img} className="card-img-top gambar-popular h-50" />
//             </div>
//               <small className="text-muted text-wrap">
//               <a href={item.link} className="text-decoration-none text-reset text-small">
//                 {item.textLink}  </a>
//               </small>
//           </div>
//       </div>

// <div className="col-md col-lg-5 justify-content-center my-lg-auto m-lg-5 p-lg-1 ">

//  <div className="mt-2 p-3 p-lg-0"> 
//  <div className="card border-0">
//     <div className="mb-lg-4">
//    <h5 className="bg-transparent">
//      {item.name}
//    </h5>
//     </div>
//    <div className="card-body mt-0">
//      <p className="card-text text-start"> 
//   {item.detail}
//      </p>
//      <a href="#" className="btn btn-sm bg-warning btn-more float-end text-white"> More </a>
//    </div>
//  </div>
// </div>
// </div>
// </div>

    return (
  
        // <div className="row mt-4 mt-lg-3 content-css pt-lg-3 mb-lg-5 pb-lg-3 justify-content-center">

        <div className="row mt-4 mt-lg-3 px-4  px-md-5 content-css pt-lg-3 mb-lg-5 pb-lg-3 justify-content-center">

        <h4 className="fs-2"> <span className="text-warning"> Popular </span> Cookies </h4>
        <div className="mt-md-3"> 
        {
            data.map((item) => {
                return (
                   <div key={item.id} className="d-flex py-md-4 px-lg-3 flex-column flex-md-row justify-content-lg-between ">
            <div className="mb-3 width-img-popular">
                <div className="mt-3 w-100 mx-auto"> 
                    <div>
                    <img src={item.img} className="card-img-top gambar-popular h-50" />
                      </div>
                        <small className="text-muted text-wrap">
                        <a href={item.link} className="text-decoration-none text-reset text-small">
                          {item.textLink}  </a>
                        </small>
                    </div>
                </div>

         <div className="mt-2 mx-lg-4 d-flex flex-column width-text-popular px-md-3 px-xxl-4 mt-md-0 justify-content-md-center">

           <div className="mt-2 p-lg-0"> 
           <div className="d-flex flex-column gap-0">
              <div className="mb-lg-4">
                <h5 className="bg-transparent">
                  {item.name}
                </h5>
              </div>
             <div className="card-body mt-0 text-center">
                <p className="card-text text-center text-md-start text-lg-start lh-1"> 
                  {item.detail}
                </p>
                <div className='d-flex justify-content-md-end'>
                <a href="#" className="btn btn-sm bg-warning btn-more text-white width-content-popular"> More </a>
                </div>
             </div>
           </div>
         </div>
       </div>
      </div>
 
                )
            })
        }
       </div>
        </div>

    
    )

}

export default ContentPopular;