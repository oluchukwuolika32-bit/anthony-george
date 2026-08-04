import typescript from "../assets/typescript.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import nodejs from "../assets/nodejs.png"
import expressjs from "../assets/expressjs.png"
import nextjs from "../assets/nextjs.png"
import postgresql from "../assets/postgresql.png"
import mongodb from "../assets/mongodb.png"
import tailwindcss from "../assets/tailwindcss.png"
import redis from "../assets/redis.png"
import git from "../assets/git.png"
import docker from "../assets/docker.png" 
import  aws from "../assets/aws.png"
import linux from "../assets/linux.png"
import figma from "../assets/figma.png"
function Skills() {
  return (
    <div className="bg-[#040910] w-full h-160">
      <div className="m-5">
         <h5>WHAT I USE</h5>
         <h1 className="">Skills & Technologies</h1>
         <p>Technologies i work with to bring ideas to life</p>
      
      </div>
     

      <div className="flex m-4 items-center">
        <div>
              <div className="w-6px h-40px">
            <img src={typescript} className="w-full h-full object-contain " alt="hero background" />
                </div>
        </div>
        <div>
            <div className="w-6px h-40px m-3">
          <img src={javascript} className="w-full h-full object-contain " alt="hero background" />
            </div>
        </div>
  <div className="w-6px h-40px m-3">
          <img src={react} className="w-full h-full object-contain " alt="hero background" />
            </div>
        <div>
          
        </div>
        
        <div>
           <div className="w-6px h-40px m-3">
          <img src={nodejs} className="w-full h-full object-contain " alt="hero background" />
            </div>
  
        </div>

        <div>
           <div className="w-6px h-40px m-3">
          <img src={expressjs} className="w-full h-full object-contain " alt="hero background" />
            </div>
  
        </div>
        <div>
           <div className="w-6px h-40px m-3">
          <img src={nextjs} className="w-full h-full object-contain " alt="hero background" />
            </div>
  
        </div>
        <div>
           <div className="w-6px h-40px m-3">
          <img src={postgresql} className="w-full h-full object-contain " alt="hero background" />
            </div>
  
        </div>
        <div>
           <div className="w-6px h-40px m-3">
          <img src={mongodb} className="w-full h-full object-contain " alt="hero background" />
            </div>
  
        </div>

      </div>
        
      <div  className="flex m-4 items-center">
        <div>
           <div className="w-6px h-40px m-3">
          <img src={tailwindcss} className="w-full h-full object-contain " alt="hero background" />
            </div>
        </div>

        <div>
            <div className="w-6px h-40px m-3">
          <img src={redis} className="w-full h-full object-contain " alt="hero background" />
            </div>
        </div>
        <div>
            <div className="w-6px h-40px m-3">
          <img src={git} className="w-full h-full object-contain " alt="hero background" />
            </div>
        </div>
        <div>
            <div className="w-6px h-40px m-3">
          <img src={docker} className="w-full h-full object-contain " alt="hero background" />
            </div>
        </div>
        <div>
            <div className="w-6px h-40px m-3">
          <img src={aws} className="w-full h-full object-contain " alt="hero background" />
            </div>
        </div>
        <div>
            <div className="w-6px h-40px m-3">
          <img src={linux} className="w-full h-full object-contain " alt="hero background" />
            </div>
        </div>
        <div>
            <div className="w-6px h-40px m-3">
          <img src={figma} className="w-full h-full object-contain " alt="hero background" />
            </div>
        </div>
      </div>




    </div>
  )
}

export default Skills