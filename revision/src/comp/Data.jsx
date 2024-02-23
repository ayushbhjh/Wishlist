import React from 'react'
import "./Data.css"
const Data = ({wishlist}) => {
 let list= wishlist.map((item,index)=> <li key={index}>{item}</li> )
  return (
    <div>
      <div className='datalist'>
        <h2>Wish list:</h2>
        <ul>{list}</ul>
        </div>

    </div>
  )
}

export default Data
