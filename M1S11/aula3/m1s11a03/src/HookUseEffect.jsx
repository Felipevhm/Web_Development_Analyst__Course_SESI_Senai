import { useEffect } from "react"

function HookUseEffect() {

  useEffect(()=>{
    console.log("UseEffect called. Primeira renderizacao");
  },[])
   return (<></>)
 }
 
 export default HookUseEffect
 