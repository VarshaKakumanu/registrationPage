import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Form() {
    const data = {name:'',email:'',password:''};
    const [inputData, setInputData] =useState(data)
    const [flag,setFlag] = useState(false)

    useEffect(()=>{
        console.log("registerted")
    },[flag])

function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData)
}
function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password){
        alert(" all field are mandatory")
    }else{
       setFlag(true) 
    }
}

  return (
    <>
     <pre>{(flag)?<h2>Hello {inputData.name} ,you've registered successfully</h2>:" "}</pre>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><div>
          <h1>Resgistration Form</h1>
          </div></Card.Title>
        <Card.Text>
        <form onSubmit={handleSubmit}>
          
          <div>
              <input type="text" placeholder='enter name' name='name' value={inputData.name} onChange={handleData} />
          </div><br/>
          <div>
              <input type="text" placeholder='enter email' name='email' value={inputData.email} onChange={handleData} />
          </div><br/>
          <div>
              <input type="text" placeholder='enter password' name='password' value={inputData.password} onChange={handleData} />
          </div><br/>
          <div>
              <Button variant="primary" type='submit' name='submit'>submit</Button>
          </div>
      </form>
        </Card.Text>
        
      </Card.Body>
    </Card>
   
        
        
    
    </>
  )      
}

export default Form