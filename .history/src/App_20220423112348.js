import React from "react";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import "./styles/Avatar.scss";
import "./styles/Feautures.scss";
import "./styles/Home.scss";
import "./styles/Variables.scss";
import "./styles/About.scss";
import "./styles/Components.scss";
import "./styles/Contact.scss";
import "./styles/Counter.scss";
import "./styles/Footer.scss";
import "./styles/General.scss";
import "./styles/Helper.scss";
import "./styles/Menu.scss";
import "./styles/Testimontal.scss";
import "./styles/Pricing.scss";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/feautures" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
