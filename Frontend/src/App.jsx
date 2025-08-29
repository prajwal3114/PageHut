import './App.css'
import Home from './home/home'   
import Courses from './courses/Courses'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
      {/*<Home />  
      <Course /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
      </Routes>
    </>
  )
}

export default App
