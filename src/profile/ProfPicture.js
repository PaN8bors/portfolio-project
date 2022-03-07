import "./ProfPicture.css";
import MyPic from "../Images/bw.png";

export default function ProfPicture() {
    return (
        <div className="picBox">
            <img src={MyPic} alt="This is my selfie" />
        </div>
        
    )
}
