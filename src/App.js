
import './App.css';
import React,{useEffect,useState} from 'react'; 
import Form from './Form';

function App() {
const [data,setData] =useState([])
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
    result.json().then((Response)=>{
    // console.log("result",Response)
    setData(Response)
      })
  })
},[])
//console.log(data)
  return (

    <div className="App">
      <div > <Form /></div>
     
     
      <table>
        <tr>
          <th>id</th>
          <th>title</th>
        </tr>
        {
          data.map((i)=>
          <tr>
            <td>{i.id}</td>
            <td>{i.title}</td>
          </tr>)
        }
      </table>
   
      
    </div>
  );
}

export default App;
