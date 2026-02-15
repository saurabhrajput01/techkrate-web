// src/pages/HomePage.jsx
import HeroSection from "../components/HeroSection";
import Solutions from "../components/Products";
import RealWorldAISection from "../components/RealWorldAISection";
import Features from "../components/ServiceSection";
import LatestArticles from "../components/LatestArticles";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <main className="space-y-0">
        <HeroSection />
        <Solutions />
        <RealWorldAISection />
        <Features />
        <LatestArticles />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
