
import './App.css';
import Login from './components/views/login'
import Error404 from './components/views/error404'
import Home from './components/views/home';
import Header from './components/header';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </>
  );
}

export default App;
