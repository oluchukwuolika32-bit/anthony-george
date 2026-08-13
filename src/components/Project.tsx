import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import {ArrowRight} from "lucide-react"
function Project(){

    const projectCard = [
        {title:'MIRA',url:p1,description:'Memory-integrated Reasoning Architecture for LLM agents with persistent memory, graph retrieval and session management.',tag:['Typescript','NodeJs','PostgreSQL']},
        {title:'Linkskool v3',url:p2,description: 'School admin portal for managing academia,  students, staff,courses and performance analytics.',tag:['React','TypeScript','TailwindCSS']},
        {title: 'Drift' , url:p3,description: 'Non-custodial smart portfolio manager on Monad Testnet using smart accounts and AI-driven rebalancing.',tag:['Node.js','TypeScript','postgreSQL']},
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

            <div className="lg:flex lg:justify-around lg:gap-4 lg:p-6 p-2">

                
          {
            projectCard.map((project)=>{
                return       <div className="bg-[#0D141D]  rounded-3xl p-2 m-2">
                    <div className="bg-amber-200   rounded-2xl  m-2 ">
                    
                            <img src={project.url} className="w-full" alt="hero background" />
               
                    </div>

                    <div className="text-[#EDEEF0] lg:m-6 p-4">

                            <h1 className="font-bold text-2xl ">{project.title}</h1>
                             <h1>{project.description}</h1>

                        <div className="flex gap-2 size-12">

                            {project.tag?.map((tag)=>{
                                return(
                                   <div className="bg-[#1C2432]  lg:w-23  rounded-sm  text-center p-2 mt-3">
                                    <p className="text-sm">{tag}</p>
                                    </div>
                                )
                            })}
            

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