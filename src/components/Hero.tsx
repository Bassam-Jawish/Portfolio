import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 60, filter: 'blur(12px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        sublineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
        '-=0.4'
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
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/orb-gI2A3I7RNrZsHPvXyDYt4NGf/"
          frameBorder="0"
          className="w-full h-full"
          style={{ pointerEvents: 'none' }}
          title="3D Background"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

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
          <span className="block text-foreground mt-2">Mobile Engineer</span>
        </h1>

        <p
          ref={sublineRef}
          className="mt-8 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto"
        >
          <span className="text-primary">Flutter</span> •{' '}
          <span className="text-secondary">Cross-Platform</span> •{' '}
          <span className="text-foreground">Scalable Apps</span>
        </p>

        <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary group">
            <span className="relative z-10">Hire Me</span>
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
