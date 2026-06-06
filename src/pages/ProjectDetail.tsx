import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  CaretLeft,
  CaretRight,
  GooglePlayLogo,
  AppleLogo,
  GithubLogo,
  Buildings,
} from '@phosphor-icons/react';
import { getProjectBySlug } from '@/data/projects';
import NotFound from './NotFound';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll to top whenever the project changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [slug]);

  // Auto-advance the slider
  useEffect(() => {
    if (!project || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  const hasImages = project.images.length > 0;
  const hasLinks = !!(project.playStoreUrl || project.appStoreUrl || project.githubUrl);

  const scrollImages = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-10 md:py-16 relative z-10 max-w-5xl">
        {/* Back link */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" weight="bold" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Logo */}
          <div
            className={`w-24 h-24  shadow-glow`}
          >
            {project.logo ? (
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-4xl font-extrabold text-background">
                {project.title.charAt(0)}
              </span>
            )}
          </div>

          {/* Title block */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-1">
              <span className="gradient-text">{project.title}</span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Buildings className="w-4 h-4 text-secondary" weight="light" />
                Created in <span className="text-foreground font-medium">{project.company}</span>
              </span>
              {project.period && (
                <span className="text-muted-foreground/70">• {project.period}</span>
              )}
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-lg text-muted-foreground leading-relaxed mt-8 max-w-3xl">
          {project.summary}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 glass-card text-xs font-medium text-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Store / GitHub buttons */}
        {hasLinks && (
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-3"
              >
                <GooglePlayLogo className="w-6 h-6" weight="fill" />
                <div className="text-left">
                  <div className="text-[10px] opacity-80">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            )}
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-3"
              >
                <AppleLogo className="w-6 h-6" weight="fill" />
                <div className="text-left">
                  <div className="text-[10px] opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-3"
              >
                <GithubLogo className="w-6 h-6" weight="fill" />
                <div className="text-left">
                  <div className="text-[10px] opacity-80">View on</div>
                  <div className="text-sm font-semibold">GitHub</div>
                </div>
              </a>
            )}
          </div>
        )}

        {/* Image slider */}
        {hasImages && (
          <div className="mt-12">
            <div className="flex items-center gap-2 md:gap-4">
              {/* Left arrow */}
              <button
                onClick={() => scrollImages('left')}
                className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full glass-card border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 flex items-center justify-center group z-10"
                aria-label="Previous image"
              >
                <CaretLeft className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" weight="bold" />
              </button>

              {/* Images */}
              <div className="flex-1 overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {project.images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full flex justify-center">
                      <div className="relative rounded-2xl overflow-hidden border border-border/30 shadow-lg w-full max-w-[920px] h-[420px] md:h-[540px]">
                        <img
                          src={image}
                          alt={`${project.title} screen ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right arrow */}
              <button
                onClick={() => scrollImages('right')}
                className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full glass-card border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 flex items-center justify-center group z-10"
                aria-label="Next image"
              >
                <CaretRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" weight="bold" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center flex-wrap gap-2 mt-5">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-primary w-6'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Full description */}
        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            About the <span className="gradient-text">Project</span>
          </h2>
          {project.overview.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Feature sections */}
        {project.featureSections && project.featureSections.length > 0 && (
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {project.featureSections.map((section) => (
              <div
                key={section.title}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Bottom back link */}
        <div className="mt-16">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" weight="bold" />
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
