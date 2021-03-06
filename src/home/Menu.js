import { Link } from "react-router-dom";
import "./Menu.css";
import Pdf from "../Images/032822.pdf";

export default function Menu() {
    return (
        <div className="MenuBox">
            <h1 className="h1"><u>Files Enclosed</u></h1>
            <Link to="/profile"><h1 className="head2">-Profile</h1></Link>
            <Link to="/projects"><h1 className="head2">-Projects</h1></Link>
            <Link to="/projects2"><h1 className="head2">-Projects 2</h1></Link>
            <a href ={Pdf}><h1 className="head2">-Resume</h1></a>
        </div>
        
    )
}
