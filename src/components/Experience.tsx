import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'FikraTech',
    role: 'Mobile Developer',
    period: 'Apr 2025 – Jun 2026',
    location: 'Dubai, UAE',
    description:
      'Developed and maintained secure, large-scale fintech applications — Hawelli, Dinarak, and Sahab — spanning digital wallets, remittances, and payments. Architected Hawelli on Clean Architecture across 40+ modules and 110+ screens with QR/NFC payments and KYC, engineered advanced mobile security (RSA-2048 signing, AES-GCM storage, certificate pinning, biometrics), and managed 8 build flavors with CI/CD — improving app performance by ~30%.',
  },
  {
    company: 'Rand LLC',
    role: 'Mobile Engineer',
    period: 'Jun 2024 – Apr 2025',
    location: 'Damascus, Syria',
    description:
      'Built cross-platform streaming and lifestyle apps — Livo, DoReMi, and Emaniyat — using Clean Architecture, BLoC, and modular feature design. Converted native Android code to Flutter (cutting development time by ~50%) and introduced monetization features that grew revenue by ~70% and doubled DoReMi’s user base within six months.',
  },
  {
    company: 'Doodles Agency',
    role: 'Mobile Application Developer',
    period: 'May 2023 – May 2024',
    location: 'Damascus, Syria',
    description:
      'Built Taverna, a Flutter on-demand marketplace connecting users with nearby restaurants and supermarkets for menu browsing, ordering, and real-time delivery tracking — reaching 5,000+ users and lifting vendor engagement by 30%. Managed state with BLoC and GetX and integrated Google Maps live tracking, reducing crashes by 20%.',
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line animation
      gsap.fromTo(
        '.timeline-progress',
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            end: 'bottom 55%',
            scrub: 0.4,
          },
        }
      );

      // Experience cards animation
      gsap.utils.toArray('.experience-card').forEach((card, index) => {
        const direction = index % 2 === 0 ? -40 : 40;
        gsap.fromTo(
          card as Element,
          { opacity: 0, x: direction, filter: 'blur(4px)' },
          {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card as Element,
              start: 'top 88%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-12 md:py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A journey through impactful roles in software development
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-muted/30 md:-translate-x-1/2">
            <div
              className="timeline-progress absolute top-0 left-0 w-full"
              style={{
                background:
                  'linear-gradient(180deg, hsl(187 100% 50%) 0%, hsl(263 70% 58%) 100%)',
                boxShadow: '0 0 20px hsl(187 100% 50% / 0.5)',
              }}
            />
          </div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`experience-card relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary md:-translate-x-1/2 z-10 shadow-glow" />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}
                >
                  <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-primary font-semibold mt-1">
                      {exp.company}
                    </p>

                    <div
                      className={`flex items-center gap-4 mt-3 text-sm text-muted-foreground ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" weight="light" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" weight="light" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
