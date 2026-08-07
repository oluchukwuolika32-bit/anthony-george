import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import {ArrowRight} from "lucide-react"
function Project(){

    const projectCard = [
        {url:p1,description:'Memory-integrated Reasoning Architecture for LLM agents with persistent memory, graph retrieval and session management.',tag:['Typescript']},
    ]

    



    return (
        <div className="bg-[#030811] w-full ">

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

            <div className="flex justify-around gap-4 p-6">

                
          {
            projectCard.map((project)=>{
                return       <div className="bg-[#0D141D]  rounded-3xl ">
                    <div className="bg-amber-200   rounded-2xl  m-2">
                        <div className="w-1.5 h-13.75 ">
                            <img src={project.url} className="w-full h-full object-contain " alt="hero background" />
                        </div>  
                    </div>

                    <div className="text-[#EDEEF0] m-6">
                        <h1 className="font-bold text-2xl ">MIRA</h1>
                        <h1>project.description</h1>
                        <div className="flex gap-4">
                        <div className='rounded-2xl p-1 bg-blue-500'>


                            <p className="text-sm">TypeScript</p></div>
            

                        </div>
                      
                    </div>
        
                </div>

            })
          }



            </div>

</div>
    )
}

export default Project