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
  const skills = [
    {name:"typescript",url:typescript},
    {name:"javascript",url:javascript},
    {name:"react",url:react},
    {name:"nodejs",url:nodejs},
    {name:"expressjs",url:expressjs},
    {name:"nextjs",url:nextjs},
    {name:"postgresql",url:postgresql},
    {name:"mongodb",url:mongodb},
    {name:"tailwindcss",url:tailwindcss},
    {name:"redis",url:redis},
    {name:"git",url:git},
    {name:"docker",url:docker},
    {name:"aws",url:aws},
    {name:"linux",url:linux},
    {name:"figma",url:figma},
    
  ]
  return (
    <div className="bg-[#040910] w-full  p-9 ">


      <div className="text-white">
         <p className="text-base text-blue-600">WHAT I USE</p>
         <h1 className='text-2xl'>Skills & Technologies</h1>
         <p className="text-sm text-gray-400">Technologies i work with to bring ideas to life</p>
      
      </div>
     

      <div className="flex m-4 items-center justify-center flex-wrap   gap-5 p-2">
       
              {
                skills.map((skill)=>{
                  return(
                    <div className="bg-[#0C131D] p-6 rounded-2xl">
                     <div className="w-6px">
                    <img src={skill.url} className="w-full h-full object-contain " alt="hero background" />
                    </div>
                </div>
                  )

                })
              }
           
      
        

        


      </div>

      
        




    </div>

)
}

export default Skills