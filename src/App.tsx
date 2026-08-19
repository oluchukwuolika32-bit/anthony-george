import { BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import HomePage from './HomePage'
import Privacy from './components/Privacy'


function App() {

  return (
  
    <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/contact/:userName' element={<Privacy/>} />
        </Routes>
    
    </BrowserRouter>



     
    
  )
}

export default App


// In responsive design in tailwind, the base class is for mobile
// the class with md is for tablet
// the class with lg is for laptops
// so now what do you understand by what I said, what is the base class I am talking about??
// answer these means like the template you use just like h1 an other but this is for sizing or making your web perfect in other and you make use of rem 
// what do you understand by base class??
// like where the the content are structured
//no wrong try againthat a component that helps you cordinate your work
// give me an example of tailwind class
// class name like flex border 
// Give me a tailwind class name
//bg is a class name  i dont get
// can bg alone do anything??
// won't you pair it with a color
// bg-red is a class name, and it is a base class name
// mt-9 is a class name and it is a base class name
// why it is a base class name is because it is there is no md or lg prefix
// this is not a base class name md:bg-red or lg:mt-9
// so what do you understand by this 