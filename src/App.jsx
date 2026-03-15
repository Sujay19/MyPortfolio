import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import GlobalBackground from "./components/GlobalBackground";

const App = () => (
  <>
    {/* Global background - stays fixed across all sections */}
    <GlobalBackground />
    
    {/* All content with relative positioning to appear on top */}
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoShowcase /> */}
      <FeatureCards />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  </>
);

export default App;
