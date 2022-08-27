import logo from './logo.svg';
import './App.css';
import Headers from './Pages/Headers';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/LogSign/Login';
import SignUp from './Pages/LogSign/SignUp';
import Shop from './Pages/Home/Shop/Shop';
import RequireAuth from './Pages/RequireAuth';

function App() {
  return (
    <div className="">
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/shop' element={
          <RequireAuth>
            <Shop></Shop>
          </RequireAuth>
        }> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/siginUp' element={<SignUp></SignUp>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
