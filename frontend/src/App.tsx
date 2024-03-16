import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/login';
import Signup from '../src/pages/signup';
import Main from '../src/pages/main'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Main />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
