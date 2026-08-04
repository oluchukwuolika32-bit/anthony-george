import hero from "../assets/hero.png";
import{ Hand} from 'lucide-react'
function Hero() {
  return (
    <>
      <div className="flex w-full  bg-green-600">

        <div className="bg-[#040910] w-1/2 min-h-130">

        <div className="m-13 ">
           <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-400/20 bg-slate-900/80 px-4 py-2 text-white">
          <Hand className="text-yellow-300" fill="currentColor" size={18} /> Hi, I'm
        </p>
        </div>

         <div className="m-13 leading-8">
             <h1 className="text-[#FDFEFE] font-bold text-4xl mb-2.5">Anthony<span className="text-[#5F6FFC] m-2">George</span></h1> 
             <h1 className="text-[#F6F6FC] text-2xl mb-3.5">Software Engineer & Builder</h1>
             <h1 className="text-[#CACED5] font-bold text-1xl">I build scalable software and intuitive experiences <br />that solve real-world problems.</h1>
             
          </div>

          <div className="flex m-13 leading-8">

             <div className="bg-[#5D50FC] text-[]  w-37 h-15 rounded-2xl mr-4.5 text-center p-3">
              <h1>View My Work</h1>
             </div>

             <div className="bg-[#040910] text-[#F6FAFE] w-37 h-15 rounded-2xl text-center p-2.5 border-2 border-[#50555C] ">
              <h1>Contact Me</h1>
             </div>

          </div>

          <div className="m-13">
            <h1>Let's Connect</h1>
          </div>

        </div>

        <div className="flex items-center bg-blue-600  w-1/2">
        <div className="w-fit h-fit">
          <img src={hero} className="w-full h-full object-contain " alt="hero background" />

        </div>
        
        

        </div>

      </div>
    </>
  )
}

export default Hero