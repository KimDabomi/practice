import React,{memo} from 'react';
import {Routes,Route} from 'react-router-dom';
import ProfessorList from './pages/ProfessorList';
import ProfessorAdd from './pages/ProfessorAdd';
import ProfessorEdit from './pages/ProfessorEdit';
import ProfessorView from './pages/ProfessorView';

const App = memo(() => {
  return (
    <div>
      <h1>Redux-CRUD-Professor</h1>
      <hr />
      <Routes>
        <Route path='/' exapt={true} element={<ProfessorList />} />
        <Route path='/professor_add' element={<ProfessorAdd />} />
        <Route path='/professor_view/:id' element={<ProfessorView />} />
        <Route path='/professor_edit/:id' element={<ProfessorEdit />} />
      </Routes>
    </div>
  );
});

export default App;