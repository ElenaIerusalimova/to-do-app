import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/screens/Home/Home';
import Layout from './Layout/Layout'
import { BrowserRouter, Route, Routes } from "react-router";
import Entrance from './components/screens/Entrance/Entrance.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<>Shop</>} />
          <Route path="/entrance" element={<Entrance />} />
        </Routes>
      </Layout>  
    </BrowserRouter>
  </React.StrictMode>,
);
