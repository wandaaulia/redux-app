import React from 'react'
import img from './img/cookies.svg'

const Header = () => {
    return ( 
     
         <div className="mt-4 p-3 justify-content-center row m-auto">
              <div className="col-md col-12 mt-md-5 mt-0 col-md-6 my-lg-auto justify-content-center">
                <h3 className="fw-bolder font-header">  Biskuitku </h3> 
                  <p className="font-textheader"> order your favorite cookies and tea </p>
                  <button className="btn btn-sm font-buttonheader  btn-warning text-white rounded-pill"> See cookies  </button>
              </div>

              <div className="col-12 mt-3 col-md-5 ">
                <img src={img} className="rounded width-80-persen" alt="gambar-heading" />
              </div>
            </div>
       
     );
}
 
export default Header;