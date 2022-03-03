import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarker} from 'react-icons/fa'


const Footer = () => {
    return ( 
        <>
        <div className="mt-5 bg-dark text-white p-5 footer mx-lg-auto"> 

            <div className="row justify-content-center footer-item-left m-lg-0 float-sm-start">
            <p className="mb-lg-3 p-lg-0"> Biskuitku </p>
            <p className="text-wrap text-muted mt-lg-0">   The best cookies and tea in this country  </p>
            </div>

            <div className="row float-sm-end footer-item-right m-lg-0 p-lg-0"> 
            <div className="col col-12 col-lg justify-content-center"> 
                <p className="text-center"> Information </p>
                <ul className="text-muted list">  
                <li> Terms of service </li>
                 <li> Privary Policy </li>
                <li> FAQ  </li>
                <li> Help </li>
                </ul>
            </div>

              <div className="col-12 col-lg mt-3 mt-lg-0 justify-content-center"> 
                <p> Contact </p>
                <ul className="text-muted list">  
                <li> <FaMapMarker /> Pondok Bambu Street </li>
                 <li> <FaPhoneAlt /> +621234567 </li>
                  <li> <FaEnvelope /> biskuit@ku.com  </li>
                </ul>
                </div>
            </div>
             
        </div>
        </>
     );
}
 
export default Footer;
