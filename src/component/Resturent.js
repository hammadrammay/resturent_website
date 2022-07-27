import React,{useState}from "react";
import {Menu} from "./menu.js";
import { Cardapi } from "./cardapi.js";
import {Card} from "./card";
import "./style.css";

const uniquelist=[...new Set(Cardapi.map((uniquelistdata)=>{
    return uniquelistdata.category;
    })),"All"];



export const Resturent = () => {
      
    const [apiData, setapiData] = useState(Cardapi); 
    const [menucatagery,setmenucatagery] = useState(uniquelist);     


    const SortApi=(apisort)=>{
        if(apisort==="All")
        {
            setapiData(Cardapi);
            return;
        }
        const sortedapi=Cardapi.filter((updatedapi)=>{
            return updatedapi.category===apisort;
        });
        setapiData(sortedapi);
        };
    return (
       <>
       
       <Menu SortApi={SortApi} menucatagery={menucatagery}/>
      
           <Card apiData={apiData}/>  
          
       </>
    )
}

