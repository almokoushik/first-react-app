import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  let names=["Abir","Jamal","Kamal","Robin","Kuddus","Jobbar"]
  let data=[
    {name:"Abir",Age:24},
    { name: "Abir1", Age: 25 },
    { name: "Abir2", Age: 26 },
    { name: "Abir3", Age: 27 },
    { name: "Abir4", Age: 28 },
    { name: "Abir5", Age: 29 }

  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {
          data.map(person=><Component name={person}></Component>)
        }
        <Component name={data[0]}></Component> */}
        <PlaceholderUser></PlaceholderUser>
      </header>
    </div>
  );
}
function PlaceholderUser(props){
  let [user,setUser]=useState([])
  console.log("Working")
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])
  return (
    <div>
      {
        user.map(person=> <li>{person.name}</li> )      
      }
    </div>
  )
}
function Component(props){
  let [state,setState]=useState(0)
  const style={
    color:"navy",
    border:"2px solid white",
    borderRadius:"10px",
    margin:"5px 0px",
    width:"300px",
    backgroundColor:"lightGreen"
  }  
  return (
    <div style={style}>
      <h1>Name :{props.name.name}</h1>
      <h1>Age:{props.name.Age}</h1>
      <h3>State:{state}</h3>
      <button onClick={()=>setState(state+1)}>Increment</button>
      <button onClick={()=>setState(state-1)}>Decrement</button>
    </div>
  )

}
export default App;
