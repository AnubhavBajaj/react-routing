import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import { Taskbar } from './components/Taskbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Taskbar></Taskbar>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
