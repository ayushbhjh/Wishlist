import React, { useState } from 'react'

const DataSubmit = () => {
  const [to,setto]=useState('Pardeep')
  const [data,setdata]= useState('hello')
  function handlesubmit(e){
    alert(data + " " +to);

  }
  
  return (
    <>
    <form onSubmit={handlesubmit}>
      
    <label htmlFor="name">To:</label>
    <select  value= {to} onChange={(e)=>setto(e.target.value)}>
      <option value="Pardeep" id='names'>Gaurav</option>
      <option value="Pardeep giri" >Pardeep giri</option>
    </select><br /><br />
    <textarea placeholder='write your message' value={data} onChange={(e)=>setdata(e.target.value)}>

    </textarea><br />
    <button>send</button>
    </form>
    </>
  )
}

export default DataSubmit
