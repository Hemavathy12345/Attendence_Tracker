import { Link } from "react-router-dom";
import '../css/Navbar.css'
const Navbar1=()=>{
    return(
        <div>
            <ol>
            <li><Link to="/login" className='link'>Login</Link></li>
            <li><Link to="/signup" className='link'>Signup</Link></li>
            </ol>
        </div>
    )
}
export default Navbar1