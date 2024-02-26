import React, { useState } from 'react'
import ParentContainer from './comp/ParentContainer'
import Display from './comp/Display'
import Button from './comp/Button'
export default function App() {
  const[data,setdata]=useState(' ');
  function handleclick(val){
   if(val==="="){
    setdata(eval(data));
    // eval :- "1+2= comes 3 with the use of eval function"
   }else if(val==="C"){
    setdata("")
   }else if(val==="<X"){
    let res =data+''
    setdata(res.slice(0,-1))
   }else{
    setdata(data+val)
   }
  }
  return (
    <ParentContainer>
      <Display data={data}/>  
      <Button btnclick={handleclick}/>
    </ParentContainer>
  )
}

