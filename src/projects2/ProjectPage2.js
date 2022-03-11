import Typewriter from 'typewriter-effect';
import "./ProjectPage2.css";
import Fun from "../Images/some-fun.png";
import Pro from "../Images/pro-portfolio.png";
import HTML from "../Images/html-5.png";
import CSS from "../Images/css.png";
import REACT from "../Images/react.png";

export default function ProjectPage() {
  return (
    <>
      <div className="projBox boxes">
        <h1>Projects:
        <span className='font2'>
        <Typewriter onInit={(typewriter) => {typewriter
                    .start()
                    .pauseFor(1000)
                    .typeString('Designed in Figma. Built with React.')
                  }}
                />
        </span>
        </h1>
      </div>
      <div className="pjBox boxes">
        <p className="flexRow">
          <div className="blue">
            <a href='https://www.figma.com/file/oQgTN0cNYEHrh7eSIQAsKV/Greeting-Card?node-id=0%3A1'>
              <img src={Fun} />
            </a>
          </div>
          <div className="green">
            <p>
            <a href="https://github.com/PaN8bors/my-ecard">
              <b><u>Send Some Fun!</u></b>
            </a>
              <br />
              Personalized eGreeting Card project.
            </p>
            <div className="iconBox">
              <img src={HTML} />
            </div>
            <div className="iconBox">
              <img src={CSS} />
            </div>
            <div className="iconBox">
              <img src={REACT} />
            </div>
          </div>
          <div className="blue">
            <a href='https://www.figma.com/file/sVeMhJ3rJ2WP2YjnGZklYi/Portfolio?node-id=24%3A4'>
              <img src={Pro} />
            </a>
          </div>
          <div className="green">
            <p>
            <a href="https://github.com/PaN8bors/portfolio-project">
              <b><u>Personal Portfolio Website</u></b>
            </a>
              <br />
              Created to introduce myself to the web development world.
            </p>
            <div className="iconBox">
              <img src={HTML} />
            </div>
            <div className="iconBox">
              <img src={CSS} />
            </div>
            <div className="iconBox">
              <img src={REACT} />
            </div>
          </div>
        </p>
      </div>
    </>
  );
}
