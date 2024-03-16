import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/login";
import Signup from "../src/pages/signup";
import CharityLogin from "../src/pages/charityLogin";
import CharitySignup from "../src/pages/charitySignup";
import CharityDashboard from "../src/pages/charityDashboard";
import DonorDashboard from "../src/pages/donorDashboard";
import PDFViewer from "../src/pages/pdf";
import Main from "../src/pages/main";
import OrgPage from "./pages/OrgPage";

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
        <Route path="/:type/tax" element={<PDFViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
