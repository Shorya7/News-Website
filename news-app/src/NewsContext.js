import React, {createContext, useEffect, useState} from "react";
import axios from 'axios'
export const NewsContext=createContext()
export const NewsContextProvider=(props)=>{
    const apiKey="c83000efbe8c48258946721ed8660079";
    const [data,setData]=useState()
    useEffect(()=>{
        axios.get(`http://newsapi.org/v2/everything?q=technology&from=2022-10-31&to=2022-11-1&sortBy=popularity&apiKey=${apiKey}`)
        .then((response)=>setData(response.data))
        .catch((error)=>console.log(error));
    },[]);

    return (
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    )
}
