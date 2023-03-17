import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import CoursPage from "./pages/CoursPage";
import Partners from "./pages/Partners";
import Construction from "./pages/Construction";
import Foot from "./components/Foot";
import PartnerFoot from "./components/PartnerFoot";

import './App.css';

import { BrowserRouter as Router, Route, Routes, useLocation  } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courspage" element={<CoursPage />} />
          <Route path="/partners/" element={<PartnerRoutes />} />
          <Route path="/construction" element={<Construction />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function PartnerRoutes() {
  const location = useLocation();
  const isPartnerPage = location.pathname.startsWith("/partners");

  return (
    <>
      <Routes>
        <Route path="/" element={<Partners />} />
      </Routes>
      {isPartnerPage ? <PartnerFoot /> : null}
    </>
  );
}

function Footer() {
  const location = useLocation();
  const isPartnerPage = location.pathname.startsWith("/partners");

  return (
    <>
      {isPartnerPage ? null : <Foot />}
    </>
  );
}

export default App;
