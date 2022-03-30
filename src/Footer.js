import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarker} from 'react-icons/fa'


const Footer = () => {
    return ( 
        <>
        <div className="mt-5 px-xxl-5 px-md-5 gap-md-5 bg-dark text-white p-3 pt-4 mb-0 py-md-2 pt-lg-3 gap-xxl-5 pb-lg-4 px-md-1 mt-md-5  justify-content-md-center d-flex flex-column flex-md-row pb-lg-0"> 

            <div className="p-md-3 flex-lg-fill flex-md-fill width-popular-cookies">
            <p className="p-lg-0"> Biskuitku </p>
            <p className="text-wrap text-muted mt-lg-0">   The best cookies and tea in this country  </p>
            </div>

            <div className="p-3 flex-lg-fill mx-xxl-2 mx-md-2 flex-md-fill width-popular-cookies"> 
                <p className="text-center"> Information </p>
                <ul className="text-muted list">  
                <li> Terms of service </li>
                 <li> Privary Policy </li>
                <li> FAQ  </li>
                <li> Help </li>
                </ul>
            </div>

              <div className="p-3 flex-lg-fill flex-md-fill  width-popular-cookies"> 
                <p> Contact </p>
                <ul className="text-muted list">  
                <li> <FaMapMarker /> Pondok Bambu Street </li>
                 <li> <FaPhoneAlt /> +621234567 </li>
                  <li> <FaEnvelope /> biskuit@ku.com  </li>
                </ul>
                </div>
          
             
        </div>
        </>
     );
}
 
export default Footer;
