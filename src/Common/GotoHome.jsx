import React from 'react'
import {Link} from "react-router-dom";
import backarrow  from "../assets/images/backarrow.jpg";
const GotoHome = () => {
    return (
        <div  className="gotohome">  
            <Link  to ="/"> <img src={backarrow} alt="bak-arrow" />go to home</Link>     
        </div>
    )
}

export default GotoHome;
