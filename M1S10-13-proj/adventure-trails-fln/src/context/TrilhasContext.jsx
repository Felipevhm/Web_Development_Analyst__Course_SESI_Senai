import { createContext, useState } from "react";
import useFetch from './../Hooks/useFetch';
//8

export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({children}) =>{

   const trilhas = useFetch('./trails.json');

   function addTrail(trailData) {
trilhas.setData( (t) =>[ ...t,trailData])
   }

 return(
<TrilhasContext.Provider value={{trilhas,addTrail}}>
{children}
</TrilhasContext.Provider>


   )
}