import React from 'react'
import { useState } from 'react'
import './Form.css'
import axios from 'axios'
const Form = () => {
  let url=""
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phonenumber:''
  });
  const [token ,setToken] = useState("")
  const[curr,setCurr]=useState("login",)
  const handleChange = (e) => {
  
    const { name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
    console.log(data)
  };
  const sendData=async (event)=>{
    event.preventDefault()
     if(curr=='login'){
      url="http://localhost:5000/user/login"
      
     }
     else
     url="http://localhost:5000/user/register"
     try {
      const response = await axios.post(url,data)
      setCurr('login')
      if(response.data.success==true){
        console.log(response)
        alert("logined")
        setToken(response.data.token)
        console.log(response.data.token)
        localStorage.setItem("loginToken",response.data.token)
      }

      
     } catch (error) {
      console.log("error during login")
     }
  }
  return (

    <div onSubmit={sendData} className='form-container'>
      <form action="" onSubmit={(e)=>{e.preventDefault()}}>
         <center>Enter your Details</center>
         <hr />
        {curr==="login" ?null:(
          <div>
            <input type="text" name='fullname' onChange={handleChange} value={data.fullname} placeholder='Enter your fullname'/><br />
            <input type="text" name='phonenumber'onChange={handleChange} value={data.phonenumber} placeholder='Enter your phonenumber'/><br />
          </div>
        )}
   
      
        <input type="email" name="email"  onChange={handleChange} value={data.email}  placeholder='Enter your email'/><br />
        <input type="password" name="password" onChange={handleChange} value={data.password} placeholder='Enter your password'/><br />
        
        <button className="btn"type='submit'>{curr === 'login'?'Login' :'Create Account'}</button>
        {curr==="login"?(
          <p  className="condition-text"onClick={()=>{
      setCurr("register")
          }}>Dont have account click to create one </p>
        ):
        <p className="condition-text" onClick={()=>{
          setCurr("login")
              }}>Already have an  account click to login </p>}
      </form>
    </div>
  )
}

export default Form