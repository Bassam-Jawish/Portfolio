import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'FikraTech',
    role: 'Mobile Developer',
    period: 'Apr 2025 – Present',
    location: 'Dubai, UAE',
    description:
      'Worked on secure e-wallet apps for Android and iOS, contributing to a major redesign, performance improvements, and security enhancements. Improved user engagement and optimized CI/CD workflows using Scrum and Azure DevOps.',
  },
  {
    company: 'Rand Service Provider',
    role: 'Mobile Specialist Engineer',
    period: 'Jun 2024 – Oct 2025',
    location: 'Damascus, Syria',
    description:
      'Key contributor to the Doremi music app, delivering features that significantly grew the user base. Led the migration to Flutter, optimized performance, and supported monetization improvements.',
  },
  {
    company: 'Doodles Agency',
    role: 'Mobile Application Developer',
    period: 'May 2023 – May 2024',
    location: 'Dubai, UAE',
    description:
      'Built and maintained Flutter apps including Taverna, focusing on scalable architecture and stable state management using Bloc and GetX.',
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
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      );

      // Experience cards animation
      gsap.utils.toArray('.experience-card').forEach((card, index) => {
        const direction = index % 2 === 0 ? -60 : 60;
        gsap.fromTo(
          card as Element,
          { opacity: 0, x: direction, filter: 'blur(8px)' },
          {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card as Element,
              start: 'top 80%',
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
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A journey through impactful roles in mobile development
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
