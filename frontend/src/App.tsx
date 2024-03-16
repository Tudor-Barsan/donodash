import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/login";
import Signup from "../src/pages/signup";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";

function App() {
  return (
    <BrowserRouter>
      <AppProvider i18n={translations}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/home" element={<Main />} /> */}
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
