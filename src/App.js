import logo from './logo.svg';
import './App.css';
import Headers from './Pages/Headers';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
     <Headers></Headers>
     <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/home' element={<Home></Home>}> </Route>
     </Routes>
    </div>
  );
}

export default App;
