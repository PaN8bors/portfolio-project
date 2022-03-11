import { Link } from "react-router-dom";
import "./ProfileHeader2";

export default function PageNumber() {
    return (
                <>
                <div className="PrflBox">
                    <h1 className="hd1">Page: 3</h1>
                    <Link to="/">
                        <h2 className="hd2">Home</h2>
                    </Link>
                </div>
                </>
        
    )
}
