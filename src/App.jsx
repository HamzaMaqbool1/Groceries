import React,{ useState } from 'react'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'
import Login from './Page/Login'
import Product from './Page/Product'
function App() {
  return (
    <Router basename="/Groceries/">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>
  </Router>
  )
}

export default App
