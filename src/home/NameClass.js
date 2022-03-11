import Typewriter from 'typewriter-effect';
import "./NameClass.css";

export default function CoverHeader() {
    return (
        <>
        <div className="NameBox">
            <h1>Name:
                <span className='font2'>
                <Typewriter onInit={(typewriter) => {typewriter
                    .start()
                    .pauseFor(100)
                    .typeString('Parish Neighbors')
                  }}
                />
                </span>
            </h1>


            <h1>Classification:
                <span className="font2">
                <Typewriter onInit={(typewriter) => {typewriter
                    .start()
                    .pauseFor(4000)
                    .typeString('Junior Web Developer')
                  }}
                />
                </span>
            </h1>
        </div>
        </>
    )
}
