import React from 'react'
import {Link} from "react-router-dom";
import Temperature from "../Components/Temperature";
import Unit from "../Components/Unit";
import Currency from "../Components/Currency";
const cards =[
    {
        id:1,
        Title:"Temperature",
        path:"/temperature_convertor",
        component:Temperature,
    },
    {
        id:2,
        Title:"Unit",
        path:"/unit_convertor",
        component:Unit,
    },
    {
        id:3,
        Title:"Currency",
        path:"/currency_convertor",
        component:Currency,
    },
]
const Cards = () => {
    return (
        <div> 
            {    
                cards.map((el,id)=>{return(
                    <Link to ={el.path} >
                        <div key ={id}>
                            <h4>{el.Title}</h4>
                        </div>
                      </Link>
                )
            })
        }
           
        </div>
    )
}

export default Cards;
