import {Download,Menu} from 'lucide-react'
function Header() {
 
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    {name:'Skills', href:'/skills'},  
    {name: 'Experience', href:'/experience'},
    {name: 'Contact', href:'/contact'}
  ]



  return (
    <>
      <header className='flex justify-between items-center  bg-[#03060C] w-full lg:p-3.5 p-2.5'>
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
              <button className="lg:hidden text-white "><Menu/></button>

        
     
        
      </header>
         <div className='bg-[#03070D]  text-1xl p-1 text-center font-black'>
           <div className="bg-[#06294d] from-20% w-full  lg:w-37 lg:h-15   text-center  p-2 ">
              <p>Home</p>
             </div>
           <div className="bg-[#061b32] w-full  lg:w-37 lg:h-15   text-center  p-2 ">
              <p>About</p>
             </div>
          <div className="bg-[#081f39] w-full  lg:w-37 lg:h-15   text-center  p-2 ">
              <p>Skills</p>
             </div>
         <div className="bg-[#061a35] w-full  lg:w-37 lg:h-15  text-cent er  p-2 ">
              <p>Experience</p>
             </div>
         <div className="bg-[#091f38] w-full  lg:w-37 lg:h-15   text-center  p-2 ">
              <p>contact</p>
             </div>
        </div>
    </>
  )
}
  
export default Header