import React , {useState} from "react";
import "./style.css";



export const Menu = ({SortApi,menucatagery}) => {
    
    return (
        <>
   <div className="navbar">
   
   <div className="navbar-box">
   <ul>
                {menucatagery.map((menuapiholding)=>{
                    return <>                      
          <li  onClick={()=>SortApi(menuapiholding)}><a >
          {menuapiholding}
          </a></li>
            </>
                })}

            
            </ul>
            </div>    
            </div>
        </>
    )
}

