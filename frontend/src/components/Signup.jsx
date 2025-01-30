import{Link, Navigate} from 'react-router-dom';
import{useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Signup=()=>{
    var [firstname,setFirstName]=useState('');
    var [lastname,setLastName]=useState('');
    var [username,setUserName]=useState('');
    var [email,setEmail]=useState('');
    var [password,setPassword]=useState('');
    var Navigate=useNavigate();
    const HandleSignup= async (event)=>{
        event.preventDefault();
        console.log("Event triggered")
        try{
             
        const req= await axios.post('http://localhost:3000/signup',{
            firstName:firstname,
            lastName:lastname,
            userName:username,
           email: email,
           password: password
        })
        alert(req.data)
        // console.log(req)
        Navigate('/')
    } catch(err){
        console.log(err)
    }
}
    return(
     
        <div>
            <h1 style={{ textAlign: "center" }}>Signup</h1>
            <div className="container">
                <div>
                    <form method='POST' onSubmit={HandleSignup} >
            <label for="firstname" required>First Name: </label>
            <input type="text" id="firstname" value={firstname} onChange={(e)=>setFirstName(e.target.value) } required />
            <br /><br />
            <label for="lastname">Last Name:  </label>
            <input type="text" id="lastname" value={lastname} onChange={(e)=>setLastName(e.target.value)} required />
            <br /><br />
            <label for="username" required>Username: </label>
            <input type="text" id="username" value={username} onChange={(e)=>setUserName(e.target.value)} required />
            <br /><br />
            <label for="email">Email:  </label>
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <br /><br />
            <label for="password">Password: </label>
            <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            <br /><br />
            <button type='submit'>Signup</button><br />
            Already have an account?<Link to="/login">Login</Link>
            </form>
            
           
            </div>
            </div>
        </div>
    )
}
export default Signup