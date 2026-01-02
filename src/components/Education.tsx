import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Certificate, Books } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: 'CS50x',
    provider: 'Harvard University',
    subtitle: 'Computer Science Fundamentals',
    description:
      'Completed an intensive course covering algorithms, data structures, web development, and programming using C, Python, SQL, and JavaScript.',
    icon: Books,
  },
  {
    title: 'Deep Dive into Clean Architecture in Flutter',
    provider: 'Udemy',
    subtitle: 'Scalable Flutter Engineering',
    description:
      'Learned how to structure Flutter applications using Clean Architecture principles for scalability, testability, and long-term maintainability.',
    icon: Certificate,
  },
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Education card animation
      gsap.fromTo(
        eduRef.current,
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: eduRef.current,
            start: 'top 80%',
          },
        }
      );

      // Floating icon animation
      gsap.to('.edu-icon', {
        y: -10,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      // Certification cards stagger
      gsap.fromTo(
        '.cert-card',
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: certsRef.current,
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
      id="education"
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Education Section */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div
          ref={eduRef}
          className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-20 hover:border-primary/30 transition-all duration-300"
        >
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
            {/* Icon */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl animate-glow-pulse" />
                <div className="edu-icon relative w-32 h-32 rounded-full glass-card flex items-center justify-center border border-primary/20">
                  <GraduationCap className="w-16 h-16 text-primary" weight="light" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Faculty of Information Technology Engineering
              </h3>
              <p className="text-lg text-primary font-semibold mt-2">
                Damascus University
              </p>
              <p className="text-muted-foreground mt-3">
                <span className="text-secondary font-medium">Bachelor of Software Engineering</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Oct 2020 – Oct 2025
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            Professional <span className="gradient-text">Learning</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Continuous learning and architectural depth
          </p>
        </div>

        <div ref={certsRef} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="cert-card glass-card p-6 hover:border-primary/30 transition-all duration-500 group hover:shadow-glow hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <cert.icon className="w-6 h-6 text-primary" weight="light" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              {/* Provider */}
              <p className="text-primary font-semibold mt-1">{cert.provider}</p>

              {/* Subtitle */}
              <p className="text-sm text-secondary mt-2">{cert.subtitle}</p>

              {/* Description */}
              <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
