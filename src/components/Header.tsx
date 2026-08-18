import {Download,ChevronDownIcon} from 'lucide-react';
import { useState } from 'react';
function Header() {
 
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    {name:'Skills', href:'/skills'},  
    {name: 'Contact', href:'/contact'}
  ]
  const [hide,setHide] = useState(true);


  return (
    
    <>
      <header className='flex justify-between items-center  bg-[#03060C] w-full lg:p-3.5 p-2.5 relative border-b border-b-amber-50'>
        <h2 className="text-[#6265FF]">A<span className="text-[#D5E0FC]">G</span></h2>
        <nav className='hidden lg:block'>
          {links.map((link) => (  
              <a href={link.href} className="m-9">{link.name}</a>
          ))}

        </nav>
        <div className='lg:flex items-center border-2 border-[#2A2759] p-2.5 rounded-2xl w-40 justify-between hidden'>
          <button className="text-white">Download CV</button>
    
          <Download/>
          

        </div>
              <button className="lg:hidden text-white " onClick={()=>setHide(!hide)}><ChevronDownIcon/></button>



            <div className={`bg-[#03060C] text-1xl p-1 text-center absolute top-12 w-full right-0 ${hide ? 'hidden' : ''}`}>

            {
              links.map((link)=>(
                   <div className=" w-full  lg:w-37 lg:h-15   text-center  p-2  border-b border-b-blue-500">
                  <a href={link.href} className="m-9">{link.name}</a>
              </div>

              ))
            }
         
           
        </div>

        
     
        
      </header>
      
    </>
  )
}
  
export default Header