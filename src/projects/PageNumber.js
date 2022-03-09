import { Link } from "react-router-dom";
import "./ProfileHeader.css";

export default function PageNumber() {
    return (
                <>
                <div className="PrflBox">
                    <h1 className="hd1">Page: 1</h1>
                    <Link to="/">
                        <h2 className="hd2">Home</h2>
                    </Link>
                </div>
                </>
        
    )
}
