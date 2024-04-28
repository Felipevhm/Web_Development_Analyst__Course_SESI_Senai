import { createContext, useState } from "react";

export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({children}) =>{

   const [trilhas, setTrilhas] = useState("18")
   return(
<TrilhasContext.Provider value={{trilhas,setTrilhas}}>
{children}
</TrilhasContext.Provider>


   )
}