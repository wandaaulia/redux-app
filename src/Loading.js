import React from 'react'
import { Puff} from 'react-loader-spinner';



export const Loading = () => {
    return (
        <div className="d-flex mt-5 text-center align-items-sm-center align-items-md-center align-items-lg-center p-2 justify-content-center justify-content-sm-center justify-content-md-center total-size"> 
        <Puff color="#00BFFF" height={90} width={90} />
        </div>
    )
}
