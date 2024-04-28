import { createContext, useState } from "react";
import useFetch from './../Hooks/useFetch';
import {useNavigate } from "react-router-dom";



export const TrilhasContext = createContext()
export const TrilhasContextProvider = ({children}) =>{
 
 const navigate = useNavigate()
 const trilhas = useFetch('./trails.json');

   function addTrail(trailData) {
trilhas.setData( (t) =>[ ...t,trailData])
 navigate('/lista-trilha')

   }

 return(
<TrilhasContext.Provider value={{trilhas,addTrail}}>
{children}
</TrilhasContext.Provider>


   )
}