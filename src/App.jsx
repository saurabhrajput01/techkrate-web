import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import SolutionsPage from "./pages/Solutions";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Login from "./components/Login";
import AddBlog from "./pages/Addblog";
import BlogDetail from "./pages/BlogDetail";
import Header from "./components/Header";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndCondition";
import LoadingScreen from './pages/LoadingScreen';
import RequestDemo from "./pages/RequestDemo";
import Footer from "./components/Footer";
import PremiumCTA from "./components/PremiumCTA";


function AppContent({ isAuthenticated, setIsAuthenticated }) {
  const location = useLocation();
  const isRequestDemo = location.pathname === "/request-demo";

  return (
    <div className="bg-black min-h-screen">
      {!isRequestDemo && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/moval" element={<Product1 />} />
        <Route path="/cars" element={<Product2 />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/request-demo" element={<RequestDemo />} />

        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/addblog"
          element={isAuthenticated ? <AddBlog /> : <Navigate to="/login" replace />}
        />
      </Routes>
      {!isRequestDemo && <PremiumCTA />}
      {!isRequestDemo && <Footer />}
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <LoadingScreen />}
      {!loading && (
        <AppContent isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      )}
    </Router>
  );
}

export default App;

