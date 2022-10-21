import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Footer from './common/Footer';
import Navbar from './common/Navbar';
import Main from './pages/Main';
import About from './pages/Main/About';
import Menu from './pages/Main/Menu';
import Contact from './pages/Main/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact={true} element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;