import './App.css'
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom'
import Home from './home'
import Create from './Create'
import Read from './Read'
import Update from './Update'
//import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/read/:id' element={<Read />} />
        <Route path='/edit/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
