import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import Process from './components/Process';
import Showcase from './components/Showcase';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <Process />
        <Showcase />
        <Industries />
        <CaseStudies />
        <CTASection />
        <FAQ />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
