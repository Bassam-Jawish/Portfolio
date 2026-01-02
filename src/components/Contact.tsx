import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, EnvelopeSimple, PaperPlaneTilt, Clock, Sparkle } from '@phosphor-icons/react';
import { toast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    name: 'GitHub',
    icon: GithubLogo,
    href: 'https://github.com/bassamjawish',
  },
  {
    name: 'LinkedIn',
    icon: LinkedinLogo,
    href: 'https://linkedin.com/in/bassamjawish',
  },
  {
    name: 'Email',
    icon: EnvelopeSimple,
    href: 'mailto:contact@bassamjawish.dev',
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form inputs animation
      gsap.fromTo(
        '.contact-input',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      );

      // Social links animation
      gsap.fromTo(
        '.social-link',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.social-links',
            start: 'top 85%',
          },
        }
      );

      // Decorative orbs animation
      gsap.to('.contact-orb', {
        y: -15,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.6,
      });

      // Sparkle icons animation
      gsap.to('.contact-sparkle', {
        rotate: 360,
        duration: 4,
        ease: 'none',
        repeat: -1,
        stagger: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message sent!',
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });

    setIsSubmitting(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6 flex flex-col h-full"
          >
            <div className="contact-input">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="glass-input"
                placeholder="Your name"
              />
            </div>

            <div className="contact-input">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="glass-input"
                placeholder="your@email.com"
              />
            </div>

            <div className="contact-input flex-1">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="glass-input resize-none min-h-[120px]"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="contact-input btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  Send Message
                  <PaperPlaneTilt className="w-5 h-5" weight="bold" />
                </>
              )}
            </button>
          </form>

          {/* Info & Social */}
          <div className="flex flex-col h-full">
            <div className="glass-card p-8 flex flex-col justify-between h-full relative overflow-hidden">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Get in touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities, exciting
                  projects, and ways to collaborate. Feel free to reach out!
                </p>
              </div>

              {/* Decorative Animated Section */}
              <div className="flex-1 flex flex-col items-center justify-center relative my-6">
                {/* Floating Orbs */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="contact-orb absolute left-1/4 w-16 h-16 rounded-full bg-primary/10 blur-xl animate-glow-pulse" />
                  <div className="contact-orb absolute right-1/4 w-20 h-20 rounded-full bg-secondary/10 blur-xl animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="contact-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/5 blur-lg" style={{ animationDelay: '1s' }} />
                </div>

                {/* Sparkle Icons */}
                <div className="relative z-10 flex items-center gap-8 mt-8">
                  <div className="contact-sparkle text-primary/40">
                    <Sparkle className="w-6 h-6" weight="duotone" />
                  </div>
                  <div className="flex flex-col items-center gap-2 px-6 py-4 rounded-xl bg-muted/20 border border-border/30 backdrop-blur-sm">
                    <Clock className="w-5 h-5 text-primary" weight="light" />
                    <span className="text-xs text-muted-foreground font-medium">
                      Response Time
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      &lt; 24 hours
                    </span>
                  </div>
                  <div className="contact-sparkle text-secondary/40" style={{ animationDelay: '0.5s' }}>
                    <Sparkle className="w-6 h-6" weight="duotone" />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links flex gap-4 mt-auto">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link w-14 h-14 rounded-2xl glass-card flex items-center justify-center border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
                    aria-label={link.name}
                  >
                    <link.icon
                      className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors"
                      weight="light"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
