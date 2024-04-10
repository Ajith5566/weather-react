import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>} />
      </Routes>

  
      
      
    </>
  )
}

export default App
