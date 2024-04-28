import { createContext, useState } from "react";
import useFetch from './../Hooks/useFetch';
//8

export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({children}) =>{

   const url = './trails.json'; // Substitua pela URL do seu arquivo JSON
   const trilhas = useFetch(url);

   // function getusers() {
   //    fetch("http://localhost:3000/users")
   //      .then((response) => response.json())
   //      .then((data) => setUsers(data))
   //      .catch((error) => console.log(error));
   //  }

   // const [trilhas, setTrilhas] = useState("18")
   return(
<TrilhasContext.Provider value={{trilhas}}>
{children}
</TrilhasContext.Provider>


   )
}