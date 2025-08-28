import './App.css'
import Home from './home/home'   
import Course from './components/course'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
      {/*<Home />  
      <Course /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
      </Routes>
    </>
  )
}

export default App
