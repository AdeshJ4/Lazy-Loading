import React, { lazy } from 'react';
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const Courses = lazy(() => import('./pages/Courses'));
const NotFoundPage = lazy(()=> import ('./pages/NotFoundPage'));


const App = () => {
  return (
    <>

      <nav >
        <ul >
          <li><Link to='/'>Home</Link></li>
          <li><Link to='about'>About</Link></li>
          <li><Link to='contact'>Contact</Link></li>
          <li><Link to='courses'>Courses</Link></li>
        </ul>
      </nav>

      <div className='routesDiv' >
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='courses' element={<Courses />} />
            <Route path='*' element={<NotFoundPage />}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App