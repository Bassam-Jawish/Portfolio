import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from '@phosphor-icons/react';
import { projects } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.fromTo(
          card as Element,
          { opacity: 0, y: 32, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card as Element,
              start: 'top 92%',
            },
            delay: (index % 3) * 0.03,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-12 md:py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Featured projects showcasing software engineering excellence
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="project-card group glass-card p-6 flex flex-col hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
            >
              {/* Logo */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 p-2`}
              >
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-2xl font-extrabold text-background">
                    {project.title.charAt(0)}
                  </span>
                )}
              </div>

              {/* Category */}
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mt-1.5 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Tagline */}
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                {project.tagline}
              </p>

              {/* CTA */}
              <span className="flex items-center gap-2 mt-5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                View Details
                <ArrowRight className="w-4 h-4" weight="bold" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
