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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
