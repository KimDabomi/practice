import React from 'react';
import {Routes,Route} from 'react-router-dom';
import MenuLink from './components/MenuLink';
import PrintStar from './pages/PrintStar';
import Calc from './pages/Calc';

const App = () => {
  return (
    <div>
      <h1>연습문제 07</h1>
      <nav>
        <MenuLink to='/printstar'>PrintStar</MenuLink>
        <MenuLink to='/calc'>Calc</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path='/printstar' element={<PrintStar />} />
        <Route path='/calc' element={<Calc />} />
      </Routes>
    </div>
  );
};

export default App;