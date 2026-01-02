import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: GithubLogo, href: 'https://github.com/bassamjawish', label: 'GitHub' },
  { icon: LinkedinLogo, href: 'https://linkedin.com/in/bassamjawish', label: 'LinkedIn' },
  { icon: EnvelopeSimple, href: 'mailto:jawishbassam@gmail.com', label: 'Email' },
];

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative py-12 border-t border-border/30">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-primary/40 animate-float" />
        <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-secondary/40 animate-float-slow" />
        <div className="absolute bottom-5 left-1/3 w-1.5 h-1.5 rounded-full bg-primary/30 animate-float" />
        <div className="absolute top-10 right-1/4 w-2 h-2 rounded-full bg-secondary/30 animate-float-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold gradient-text">
            Bassam Jawish
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center border border-border/30 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" weight="light" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-5 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Bassam Jawish
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
