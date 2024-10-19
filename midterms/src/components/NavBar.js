import './NavBar.css'
import {Link, Navigate} from "react-router-dom";
export default function NavBar() {
return (
<>
<div className="navbar">
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ul>
</div>
</>
);
}
