import logo from './logo.svg';
import './App.css';
import { Profiler, useEffect, useState } from 'react';

function App() {
  let names=["Abir","Jamal","Kamal"]
  let products=[
    {name:"Photoshop",price:"20.99"},
    {name:"Premier Pro",price:"20.99"},
    {name:"Premier Rush",price:"9.99"},
    {name:"Illustrator",price:"11"},
    { name: "Illustrator", price: "11" }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Users></Users>
        <Counter></Counter>
        {
          products.map(product=><li>{product.name}</li> )
        }
        {
          names.map(name=><li>{name}</li> )
        }
        {
          products.map(product=> <SingleElement data={product}></SingleElement> )
        }
        {
          names.map(name=><AppData name={name} age={24}></AppData>)
        }
      </header>
      
    </div>
  );
}
function Users(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h3>Users:</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
      
    </div>
  )

}
function Counter(){
  const [count,setCount]=useState(0)
  return (
    <div>
      <h2>Counter:{count} </h2>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function SingleElement(props){
const style={
  padding:"5px 0px",
  color:"navy",
  border:"2px solid green",
  backgroundColor:"lightblue",
  borderRadius:"10px",
  width:"300px",
  float:"left"
}
let {name,price}=props.data
  return (
    <div style={style}>
      <h3> name: {name}</h3>
      <h2>Price:{price}</h2>
      <button>Buy Now</button>      
    </div>
  )
}
function AppData(props){
  const styleElement = {
    border: "2px solid navy",
    margin: "10px",
    backgroundColor: "green",
    borderRadius: "10px",
    width: "300px"
  }
  return (
    <div style={styleElement}>
      <h1>Name:{props.name}</h1>
      <h3>Age: {props.age}</h3>
    </div>
  )
}

export default App;
