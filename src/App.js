import logo from './logo.svg';
import './App.css';
import Headers from './Pages/Headers';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/LogSign/Login';
import SignUp from './Pages/LogSign/SignUp';
import Shop from './Pages/Home/Shop/Shop';
import RequireAuth from './Pages/RequireAuth';
import Inventory from './Pages/Inventory/Inventory';
import AddItem from './Pages/AddItem/AddItem';
import Items from './Pages/Items/Items';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={<AddItem></AddItem>}> </Route>
        <Route path='/items' element={<Items></Items>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/siginUp' element={<SignUp></SignUp>}> </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
