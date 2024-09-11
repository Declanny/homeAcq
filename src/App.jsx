import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Buy from './component/BuyPage/Buy';
import Sell from './component/SellPage/Sell';
import Mortgage from './component/MortgagePage/Mortgage';
import AgentFinder from './component/AgentFinderPage/AgentFinder';
import Rent from './component/RentPage/Rent';
import Reviews from './component/Reviews/Reviews';
import PageNotFound from './component/PageNotFound/PageNotFound';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import DetailPage from './component/shared/DetailPage';
import About from './component/About/About';

import HomeIcon from './assets/HomeIcon.png'; // Adjust the path as needed
import BuyIcon from './assets/BuyIcon.png'; // Adjust the path as needed
// import SellIcon from './assets/SellIcon.png'; // Adjust the path as needed
import RentIcon from './assets/RentIcon.png'; // Adjust the path as needed
import MortgageIcon from './assets/MortgageIcon.png'; // Adjust the path as needed
import AgentFinderIcon from './assets/AgentFinderIcon.png'; // Adjust the path as needed

import {SellIcon} from "./assets/index"

function App() {
  const links = [
    { path: "/", label: "Home", icon: HomeIcon },
    { path: "/buy", label: "Buy", icon: BuyIcon },
    { path: "/sell", label: "Sell", icon: SellIcon },
    { path: "/rent", label: "Rent", icon: RentIcon },
    { path: "/mortgage", label: "Mortgage", icon: MortgageIcon },
    { path: "/agentfinder", label: "AgentFinder", icon: AgentFinderIcon },
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
          logoImage="/Images/Logo.png"
          logoText="HomeAcq" 
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
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer /> {/* Footer will display on all pages */}
      </div>
    </Router>
  );
}

export default App;
