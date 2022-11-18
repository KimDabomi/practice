import React,{memo} from 'react';
import {Routes,Route} from 'react-router-dom';
import TrafficAccList from './pages/TrafficAccList';
import TrafficAccAdd from './pages/TrafficAccAdd';
import TrafficAccEdit from './pages/TrafficAccEdit';
import TrafficAccView from './pages/TrafficAccView';

const App = memo(() => {
  return (
    <div>
      <h1>Redux-CRUD-TrafficAcc</h1>
      <hr />
      <Routes>
        <Route path='/' exapt={true} element={<TrafficAccList />} />
        <Route path='/traffic_acc_add' element={<TrafficAccAdd />} />
        <Route path='/traffic_acc_view/:id' element={<TrafficAccView />} />
        <Route path='/traffic_acc_edit/:id' element={<TrafficAccEdit />} />
      </Routes>
    </div>
  );
});

export default App;