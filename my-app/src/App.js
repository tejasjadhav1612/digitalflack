import './App.css';
import Login from './Component/login';

import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import City from './pages/city';
import State from './pages/state';
import WareHouse from './pages/warehouse';

import Welcome from './pages/welcome';
import Sidebar from './Component/sidebar';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar style={{}}/>
        <div style={{ display: 'flex',height:"90vh" }}>

          {/* <Login /> */}
          <Sidebar />
          <Routes>
            <Route path='/' element={<Welcome />}></Route>
            <Route path='/city' element={<City />}></Route>
            <Route path="/state" element={<State />}></Route>
            <Route path="/warehouse" element={<WareHouse />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;


