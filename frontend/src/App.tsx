import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/login";
import Signup from "../src/pages/signup";
import Main from "../src/pages/main";
import OrgPage from "./pages/OrgPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Main />} />
        <Route path="/charity/:id" element={<OrgPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
