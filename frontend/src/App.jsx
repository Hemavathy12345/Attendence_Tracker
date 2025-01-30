import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import MarkAttendence from './components/MarkAttendence'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import ViewAttendence from './components/ViewAttendence'
import Navbar1 from './components/Navbar1'
function App() {
 return(

    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<><Navbar1/><Login/></>}></Route>
    <Route path='/Home' element={<><Navbar/><Home/></>}></Route>
    <Route path='markattedence' element={<><Navbar/><MarkAttendence/></>}></Route>
    <Route path='viewattedence'  element={<><Navbar/><ViewAttendence/></>}></Route>
    <Route path="/llogin" element={<><Navbar1/><Login/></>}></Route>
    <Route path="/signup" element={<><Navbar1/><Signup/></>}></Route>
    <Route path="/login" element={<><Navbar1/><Login/></>}></Route>
    </Routes>
    </BrowserRouter>

 )
}

export default App
