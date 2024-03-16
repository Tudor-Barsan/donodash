import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/login";
import Signup from "../src/pages/signup";
import CharityLogin from "../src/pages/charityLogin";
import CharitySignup from "../src/pages/charitySignup";
import CharityDashboard from "../src/pages/charityDashboard";
import DonorDashboard from "../src/pages/donorDashboard";
import Main from "../src/pages/main";
import OrgPage from "./pages/orgPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/charity-login" element={<CharityLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/charity-signup" element={<CharitySignup />} />
        <Route path="/:type" element={<Main />} />
        <Route path="/:type/charity/:id" element={<OrgPage />} />
        <Route path="/org/dashboard" element={<CharityDashboard />} />
        <Route path="/user/dashboard" element={<DonorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
