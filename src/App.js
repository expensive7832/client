import React, {lazy, Suspense} from 'react'

import { BrowserRouter, Routes, Route} from "react-router-dom"
import Loader from './components/Loader'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Navbar from './components/Navbar'

const Home = lazy(() => import("./pages/Home"))
const Signup = lazy(() => import("./pages/Signup"))
const Login = lazy(() => import("./pages/Login"))
const Update = lazy(() => import("./pages/Update"))
const Upload = lazy(() => import("./pages/Upload"))

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/update' element={<Update/>} />
        <Route path='/upload' element={<Upload/>} />
      </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App