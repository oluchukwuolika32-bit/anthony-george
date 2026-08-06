import {Download} from 'lucide-react'
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
      <header className='flex justify-between  bg-[#03060C] w-full p-3.5'>
        <h2 className="text-[#6265FF]">A<span className="text-[#D5E0FC]">G</span></h2>
        <nav>
          {links.map((link) => (  
              <a href={link.href} className="m-9 text-white">{link.name}</a>
          ))}

        </nav>
        <button className="text-white">Download CV</button>
        
      </header>
    </>
  )
}
  
export default Header