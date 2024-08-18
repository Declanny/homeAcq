// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Buy from './component/BuyPage/Buy';
import Sell from './component/SellPage/Sell';
import Mortgage from './component/MortgagePage/Mortgage';
import AgentFinder from './component/AgentFinderPage/AgentFinder';
import Rent from './component/RentPage/Rent';
import PageNotFound from './component/PageNotFound/PageNotFound';

function App() {
  const links = [
    { path: "/", label: "Home" },
    { path: "/buy", label: "Buy" },
    { path: "/sell", label: "Sell" },
    { path: "/rent", label: "Rent" },
    { path: "/mortgage", label: "Mortgage" },
    { path: "/agentfinder", label: "AgentFinder" },
  ];

  const buttonProps = {
    btnClass: "sign-in-btn",
    onClick: () => {},
    text: "Sign In",
    bgColor: "rgb(220, 101, 41)",
    txColor: "#fff",
    btnBorder: "none",
    borderRadius: "5px",
    padding: "8px 16px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <Router>
      <div className="App">
        <Navbar 
          logoText="HomeAcq Realty Company" 
          links={links} 
          buttonProps={buttonProps} 
        />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/mortgage" element={<Mortgage />} />
            <Route path="/agentfinder" element={<AgentFinder />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
