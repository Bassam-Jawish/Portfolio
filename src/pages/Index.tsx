import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();
  // Only play the preloader the first time the site is opened this session,
  // and never when we arrive at a specific section (e.g. returning from a project page).
  const skipPreloader =
    typeof window !== 'undefined' &&
    (sessionStorage.getItem('preloaderShown') === 'true' || !!location.hash);

  const [isLoading, setIsLoading] = useState(!skipPreloader);
  const [showContent, setShowContent] = useState(skipPreloader);

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  // Scroll to the section referenced by the URL hash once content is visible
  useEffect(() => {
    if (!showContent || !location.hash) return;

    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      // Defer to ensure layout is ready
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'auto' }));
    }
  }, [showContent, location.hash]);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloaderShown', 'true');
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main content */}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Global noise overlay */}
      <div className="noise-overlay" />
    </>
  );
};

export default Index;
