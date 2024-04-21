import { createBrowserRouter } from "react-router-dom";

import Home from "./../pages/Home"
import CadastroTrilha from "./../pages/CadastroTrilha.jsx"
import ListaTrilhas from "./../pages/ListaTrilhas"
import App from "../App.jsx";


const routes = createBrowserRouter([

   { path:'/',
 element: <App/>,
 children: [

   {path: "/",
   element:<Home/>},

   {path:"/cadastro-trilha",
      element:<CadastroTrilha/>},

   {path:"/lista-trilha",
         element:<ListaTrilhas/>},

  ]  } 

])

export default routes