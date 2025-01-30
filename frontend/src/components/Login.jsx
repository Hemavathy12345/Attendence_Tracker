import{useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../css/Login.css'
const Login=()=>{
    var [email,setEmail]=useState('');
    var [password,setPassword]=useState('');
    var Navigate=useNavigate();
    const HandleLogin= async (event)=>{
        event.preventDefault();
        console.log("Event triggered")
        try{
             
        const req= await axios.post('http://localhost:3000/login',{
            
            email:email,
           password: password
        })
        if(req.data="Login Successful"){
            Navigate("/Home")
        }
        else{
            alert("Login Failed")
        }
        
    } catch(err){
        console.log(err)
    }
}
    return(
        <div>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <div className="container">
            <form method='POST' onSubmit={HandleLogin} >
    <div>
    <label htmlFor="email" required>Email: </label>
    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <label htmlFor="password" required>Password: </label>
        <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
        <br /><br />
        <button type='submit'>Login</button>
    </div>
</form>
            </div>
           
        </div>
    )
}
export default Login;