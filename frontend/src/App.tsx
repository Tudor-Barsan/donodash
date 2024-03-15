import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/login';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Main />} /> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App
