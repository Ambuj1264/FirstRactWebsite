import React from 'react';
import { Routes,Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Home  from './Home';
import Navbar from './Navbar';
import Blog from './Blog';
import Footer from './footer';

const App = () => {
  return (
<>
<Navbar />
<Routes>
  <Route exact path='/' element={<Home />} />
  <Route exact path='/contact' element={<Contact />} />
  <Route exact path='/about' element={<About/>} />
  <Route exact path='/service' element={<Service />} />
  <Route exact path='/blog' element={<Blog />} />

</Routes>
<Footer />
</>
    
  )
}

export default App