import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {

  const[count,setcount] = useState(1)
  useEffect(()=>{
    console.warn(count)
  },[count==5])
  return (
    <div>
      <h1>Count Hooks...{count}</h1>
      <button onClick={()=>setcount(count+1)}>Click Here</button>
      
    </div>
  );
}
