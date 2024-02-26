
export default function Todo() {
  let data =[{'task': "Assigment" ,'key':1},{'task': "Leetcode",'key':2},{'task': "Reels", 'key':3},{'task': "Youtube" ,'key':4}];
  let list = data.map((kuch)=>
    <li key = {kuch.key}>{kuch.task}</li>)
  return (
    <>
    <ul>
      {list} 
    </ul>
    </>
  )
}
