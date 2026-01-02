import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  DeviceMobile,
  Code,
  Lightning,
  Cloud,
  MapPin,
  GitBranch,
  Gear,
  CaretLeft,
  CaretRight,
  DownloadSimple,
} from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Flutter', icon: DeviceMobile },
  { name: 'Dart', icon: Code },
  { name: 'Android/iOS', icon: DeviceMobile },
  { name: 'Firebase', icon: Cloud },
  { name: 'Clean Architecture', icon: Lightning },
  { name: 'Bloc/GetX', icon: Gear },
  { name: 'Google Maps', icon: MapPin },
  { name: 'CI/CD', icon: GitBranch },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollSkills = (direction: 'left' | 'right') => {
    if (skillsContainerRef.current) {
      const scrollAmount = 200;
      skillsContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Image slide in from left
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -80, filter: 'blur(10px)' },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Content fade in
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );

      // Skills stagger animation
      gsap.fromTo(
        '.skill-item',
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative mx-auto lg:mx-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl animate-glow-pulse" />
              
              {/* Glass frame */}
              <div className="relative w-full h-full rounded-full glass-card overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:rotate-3">
                {/* Photo */}
                <img
                  src="/bassam-jawish-photo.png"
                  alt="Bassam Jawish"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary animate-float opacity-60" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mobile Developer specializing in <span className="text-primary font-semibold">Flutter</span> and cross-platform apps, with experience in building scalable, high-performance applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Skilled in <span className="text-secondary font-semibold">clean architecture</span>, state management, and enhancing user experience in Agile environments. Passionate about delivering polished, secure, and user-centric mobile solutions.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 glass-card text-sm text-primary border border-primary/20">
                Clean Architecture
              </span>
              <span className="px-4 py-2 glass-card text-sm text-secondary border border-secondary/20">
                SOLID Principles
              </span>
              <span className="px-4 py-2 glass-card text-sm text-foreground border border-border">
                Performance Focused
              </span>
              <span className="px-4 py-2 glass-card text-sm text-foreground border border-border">
                Security-First
              </span>
            </div>

            {/* Resume Download Button */}
            <a
              href="/Bassam-Jawish-Mobile-Developer-Resume.pdf"
              download="Bassam-Jawish-Resume.pdf"
              className="btn-primary inline-flex items-center gap-2 mt-4"
            >
              <DownloadSimple className="w-5 h-5" weight="bold" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Skills Grid with Marquee */}
        <div ref={skillsRef} className="mt-32">
          <h3 className="section-title text-center mb-10">
            Tech <span className="gradient-text">Stack</span>
          </h3>
          
          <div className="relative flex items-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={() => scrollSkills('left')}
              className="flex-shrink-0 w-12 h-12 rounded-full glass-card border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 flex items-center justify-center group"
              aria-label="Scroll left"
            >
              <CaretLeft className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" weight="bold" />
            </button>

            {/* Skills Container */}
            <div
              ref={skillsContainerRef}
              className="flex-1 overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className={`flex gap-4 ${!isPaused ? 'animate-marquee' : ''}`}>
                {[...skills, ...skills].map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="skill-item flex-shrink-0 skill-icon flex-col gap-3 p-6 min-w-[140px]"
                  >
                    <skill.icon className="w-12 h-12 text-primary" weight="light" />
                    <span className="text-sm font-medium text-muted-foreground text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollSkills('right')}
              className="flex-shrink-0 w-12 h-12 rounded-full glass-card border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 flex items-center justify-center group"
              aria-label="Scroll right"
            >
              <CaretRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
