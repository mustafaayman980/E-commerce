import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/8-Register/Login.jsx';
import Forget from './components/8-Register/Forget.jsx';
import Profile from './components/9-profile/Profile.jsx';
import Security from './components/9-profile/Security.jsx';
import Details from './components/3-hero/10-details/Details.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Login and security" element={<Security />} />
        <Route path="/Galaxy M13 (4GB | 64 GB )" element={<Details />} />
      </Routes>
      {/* <App />
    <Login /> */}
    </BrowserRouter>
  </React.StrictMode>
);
