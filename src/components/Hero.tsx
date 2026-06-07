import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.15 });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 40, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.55, ease: 'power2.out' }
    )
      .fromTo(
        sublineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out' },
        '-=0.25'
      );

    // Floating orbs animation
    gsap.to('.hero-orb', {
      y: -30,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
    
      {/* Ambient orbs */}
      <div className="hero-orb absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="hero-orb absolute bottom-1/3 right-10 w-48 h-48 rounded-full bg-secondary/10 blur-3xl" />
      <div className="hero-orb absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-primary/5 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          <span className="block text-foreground">Hi, I'm</span>
          <span className="block gradient-text mt-2 animate-text-glow">Bassam</span>
          <span className="block text-foreground mt-2">Software Engineer</span>
        </h1>

        <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary group">
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
          </a>
          <a href="#projects" className="btn-secondary">
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm font-medium tracking-wide">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay" />
    </section>
  );
};

export default Hero;
