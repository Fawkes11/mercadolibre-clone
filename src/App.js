
import './App.css';
import Login from './components/views/login'
import Error404 from './components/views/error404'
import Home from './components/views/home';
import {Routes, Route} from 'react-router-dom'
import Register from './components/views/register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </>
  );
}

export default App;
