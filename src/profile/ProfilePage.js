import Typewriter from 'typewriter-effect';
import "./ProfilePage.css";

export default function ProfilePage() {
    return (
        <>
        <div className="proBox boxes">
            <h1>Profile:
            <span className='font2'>
                <Typewriter onInit={(typewriter) => {typewriter
                    .start()
                    .pauseFor(1000)
                    .typeString('Some personal and professional data.')
                  }}
                />
            </span>
            </h1>
        </div>
        <div className="pBox boxes">
            <p>
<b>Designer. Maker. Problem Solver.</b><br></br>
<br></br>
My personal interests include Interior Design,<br></br>
 Home Remodeling, Architectual Design and<br></br> 
 “How To” videos.  I am passionate about learning<br></br>
 and trying new things.<br></br>
 <br></br>
I spend my free time crafting, woodworking and working<br></br>
in the yard - essentially anything “hands on”.<br></br> 
<br></br>
<b>Technician. Manager. Veteran.</b><br></br>
<br></br>
I am an experienced professional with credentials from the<br></br>
 IT world, management, building trades and the military.<br></br> 
 <br></br>
Each previous career field has added both technical and<br></br>
 professional skills that uniquely position me for this new <br></br>
 adventure in Web Development.<br></br>
 <br></br>
<b>Professional Experience.</b><br></br>
<br></br>
10+ years in Facilities Management leading a small team<br></br>
 of facilities and grounds technicians.<br></br>
 <br></br>
10+ years in IT as a Platform Support Technician, Product<br></br>
 Manager and Platform Support Engineer.<br></br>
 <br></br>
10+ years U.S. Army as a Administrative Support Specialist<br></br> 
 and Senior Administrative Assistant.<br></br>
 <br></br>
</p>
        </div>
        </>
    )
}
