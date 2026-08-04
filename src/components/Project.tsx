import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import {ArrowRight} from "lucide-react"
function Project(){

    const projectCard = [
        {url:'',description:'',project_type:''},
        {url:'',description:'',project_type:''},
        {url:'',description:'',project_type:''}
    ]



    return (
        <div className="  bg-[#030811] w-full h-150 ">

            <div className="bg-[#040A10] w-full flex justify-between items-center py-8 ">

             <div className="ml-8 leading-8">
             <p className="text-[#46539F]">MY WORK</p>
             <h1 className="text-[#FFFFFF] font-bold text-4xl">Featured Projects</h1>
             <p className="text-[#B7B8C0]">A selection of projects i'm proud of.</p>
             </div>
             
             <div className="mr-8 text-[#46539F] flex ">
                <p className="mr-2">view all project</p>
                <ArrowRight/>
             </div>

            </div>

<div className="flex justify-around space-x-">
        <div className="bg-[#0D141D] w-130 h-105 rounded-3xl m-2">
            <div className="bg-amber-200 w-120 h-60 rounded-2xl  m-2">
                <div className="w-6px h-55px ">
                  <img src={p1} className="w-full h-full object-contain " alt="hero background" />
                </div>  
            </div>

            <div className="text-[#EDEEF0] m-6">
                <h1 className="font-bold text-2xl ">MIRA</h1>
                <h1>Memory-integrated Reasoning Architecture for <br />LLM agents with persistent memory, graph <br />retrieval and session management.</h1>
                <button>TypeScript</button>
                <button>Node.js</button>
                <button>PostgreSQL</button>
                <button></button>
            </div>
        
        </div>

        <div className="bg-[#0B131D] w-130 h-105 rounded-3xl m-2">
        <div  className="bg-amber-200 w-120 h-60 rounded-2xl m-2 " >
             <div className="w-6px h-55px ">
            <img src={p2} className="w-full h-full object-contain " alt="hero background" />
                </div>
        </div>

        <div className="text-[#EDEEF0] m-6">
            <h1 className="font-bold text-2xl">Linkskool V3</h1>
            <h1>School admin portal for managing academic, <br />students, staff, courses and performance <br />analytics</h1>
        </div>

        </div>



        <div className="bg-[#0D141D] w-130 h-105 rounded-3xl m-2">
            <div className="bg-amber-200 w-120 h-60 rounded-2xl m-2">
                     <div className="w-6px h-55px ">
            <img src={p3} className="w-full h-full object-contain " alt="hero background" />
                </div>
            </div>

            <div className="text-[#EDEEF0] m-6">
                 <h1 className="font-bold text-2xl">Drift</h1>
                 <h1>Non-custodial smart portfolio manager on <br />Monad Testnet using smart accounts and <br />AI-driven rebalancing.</h1>
            </div>

        </div>




</div>
        </div>
    )
}

export default Project