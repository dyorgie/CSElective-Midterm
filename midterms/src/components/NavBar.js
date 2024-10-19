import './NavBar.css'
import {Link, Navigate} from "react-router-dom";
export default function NavBar() {
return (
<>
<div className="navbar">
<ul>
<li><Link to="/" className='links'>Home</Link></li>
<li><Link to="/about" className='links'>About</Link></li>
<li><Link to="/contact" className='links'>Contact</Link></li>
</ul>
</div>
</>
);
}
