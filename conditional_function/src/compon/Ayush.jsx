

export default function Ayush(props) {
  
 if(props.display){
  return (
    <div>
    <h1>Hello {props.name}</h1>
    <img src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9ib3R8ZW58MHx8MHx8fDA%3D" alt="remote"/>
    </div>
  )
 }else{
  return(
    <img src="https://plus.unsplash.com/premium_photo-1681397247109-4933a1a75002?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJvYm90fGVufDB8fDB8fHww" alt ="remote " ></img>  
  )
 }
}
