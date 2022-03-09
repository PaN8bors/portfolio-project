import "./ProjectPage.css";
import Fun from '../Images/some-fun.png';
import Pro from '../Images/pro-portfolio.png';
import HTML from '../Images/html-5.png';
import CSS from '../Images/css.png';
import REACT from '../Images/react.png';

export default function ProjectPage() {
    return (
        <>
            <div className="projBox boxes">
                <h1>Projects:</h1>
            </div>
            <div className="pjBox boxes">
                <p className="redRow">
                    <div className="blue">
                        <a href="https://github.com/PaN8bors/portfolio-project">
                            <img src={Fun} />
                        </a>
                    </div>
                    <div className="green"><p><b>Send Some Fun!</b><br />
                        Create an eGreeting Card you can send to anyone.</p>
                        <div className="iconBox"><img src={HTML} /></div>
                            <div className="iconBox"><img src={CSS} /></div>
                            <div className="iconBox"><img src={REACT} /></div>
                    </div>
                    <div className="blue">
                        <a href="https://github.com/PaN8bors/my-ecard">
                            <img src={Pro} />
                        </a>
                    </div>
                    <div className="green"><p><b>Personal Portfolio Website</b><br />
                        Created to introduce myself to the web development world.</p>
                            <div className="iconBox"><img src={HTML} /></div>
                            <div className="iconBox"><img src={CSS} /></div>
                            <div className="iconBox"><img src={REACT} /></div>
                    </div>
                </p>
            </div>
        </>

            
        
    )
}
