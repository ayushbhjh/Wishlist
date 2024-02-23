import React,{useState} from 'react'
import "./Userinp.css" 
// import "./Userinp.css"
const Userinp = ({addtowishlist}) => {
  const [wish,setWish]=useState("");
    function handleSubmit(e){
        e.preventDefault()
        addtowishlist(wish)
        setWish(' ');
    }
    function handleChange(e){
        e.preventDefault();
        setWish(e.target.value);
    }
return (
    <>
<div className='user'>
    <form onSubmit= {handleSubmit} className='inpt'>
    <label htmlFor='wish'>Wish:</label>
        <input type='text' id='wish' value={wish} onChange={handleChange}/>
        <button className='btn'>Update</button>
    </form>
    </div>
    </>
)
}

export default Userinp

