import { sculptureList } from "./data"
import React,{useState} from "react"
const Welcome = () => {
const [index,setIndex]=useState(0)
const[show,setshow]=useState(false)
let srcuc= sculptureList[index]
let check =index<sculptureList.length-1;
function updateindex(){
  if(check){
    setIndex(index+1)
  }else{
    setIndex(0)
  }
}
function handleShow(){
  setshow(!show);
}
  return (
    <>
    <button onClick={updateindex}>Next</button>
    <h1>{srcuc.name}</h1>
    <h2> ({index+1} of {sculptureList.length})</h2>
    <button onClick={handleShow} > {show?'Hide':'Show'}details</button>
    <p>{show? srcuc.description:""}</p>
    <img src={srcuc.url} alt={srcuc.alt}/>
    </>
  )
}

export default Welcome
