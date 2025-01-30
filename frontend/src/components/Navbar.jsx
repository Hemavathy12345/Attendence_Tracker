import { Link } from "react-router-dom";
import '../css/Navbar.css'
const Navbar=()=>{
    return(
        <div>
            <ol>
            <li><Link to="/Home" className='link'>Home</Link></li>
            <li><Link to="/markattedence" className='link'>Mark Attedence</Link></li>
            <li><Link to="/viewattedence" className='link'>View Attedence</Link></li>
            <li><Link to="/llogin" className='link'>Logout</Link></li>
            </ol>
        </div>
    )
}
export default Navbar