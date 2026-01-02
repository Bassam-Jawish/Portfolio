import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Wallet, ShoppingCart, Truck, MusicNote, CaretLeft, CaretRight, GooglePlayLogo, AppleLogo } from '@phosphor-icons/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Dinarak',
    category: 'E-Wallet App',
    description:
      'Secure digital wallet for Android & iOS with seamless money transfers, bill payments, and financial management.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Bloc'],
    icon: Wallet,
    gradient: 'from-blue-500 to-cyan-400',
    images: [
      '/dinarak/Dinarak (1).png',
      '/dinarak/Dinarak (2).png',
      '/dinarak/Dinarak (3).png',
      '/dinarak/Dinarak (4).png',
      '/dinarak/Dinarak (5).png',
      '/dinarak/Dinarak (6).png',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=dinarak.customer.com',
    appStoreUrl: 'https://apps.apple.com/us/app/dinarak/id1187712940',
  },
  {
    title: 'QuickSale',
    category: 'Marketplace App',
    description:
      'Feature-rich marketplace platform enabling users to buy and sell products with real-time messaging and secure payments.',
    tech: ['Flutter', 'GetX', 'REST API', 'Maps'],
    icon: ShoppingCart,
    gradient: 'from-emerald-500 to-teal-400',
    images: [
      '/quick-sale/Quick Sale (1).png',
      '/quick-sale/Quick Sale (2).png',
      '/quick-sale/Quick Sale (3).png',
      '/quick-sale/Quick Sale (4).png',
      '/quick-sale/Quick Sale (5).png',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mahairi.quicksale',
    appStoreUrl: 'https://apps.apple.com/us/app/quick-sale/id6753071419',
  },
  {
    title: 'TruckLink',
    category: 'Logistics Platform',
    description:
      'Comprehensive logistics solution with real-time tracking, route optimization, and fleet management capabilities.',
    tech: ['Flutter', 'Google Maps', 'Firebase', 'Bloc'],
    icon: Truck,
    gradient: 'from-orange-500 to-amber-400',
    images: [
      '/trucklink/TruckLink (1).png',
      '/trucklink/TruckLink (2).png',
      '/trucklink/TruckLink (3).png',
    ],
    playStoreUrl: '',
    appStoreUrl: '',
  },
  {
    title: 'Doremi',
    category: 'Music Streaming',
    description:
      'Premium music streaming app with personalized playlists, offline playback, and social sharing features.',
    tech: ['Flutter', 'Dart', 'Audio API', 'Bloc'],
    icon: MusicNote,
    gradient: 'from-purple-500 to-pink-400',
    images: [
      '/doremi/Doremi (1).png',
      '/doremi/Doremi (2).png',
      '/doremi/Doremi (3).png',
      '/doremi/Doremi (4).png',
      '/doremi/Doremi (5).png',
      '/doremi/Doremi (6).png',
    ],
    playStoreUrl: '',
    appStoreUrl: '',
  },
];

type Project = typeof projects[0];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.fromTo(
          card as Element,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card as Element,
              start: 'top 85%',
            },
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-scroll images in dialog
  useEffect(() => {
    if (!selectedProject) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProject]);

  const scrollImages = (direction: 'left' | 'right') => {
    if (!selectedProject) return;
    
    if (direction === 'left') {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const openProjectDialog = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="relative py-16 md:py-20 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Featured projects showcasing mobile engineering excellence
            </p>
          </div>

          {/* Projects grid */}
          <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.title}
                className="project-card group glass-card p-6 lg:p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className="w-7 h-7 text-white" weight="light" />
                </div>

                {/* Category */}
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* CTA */}
                <button 
                  onClick={() => openProjectDialog(project)}
                  className="flex items-center gap-2 mt-6 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" weight="bold" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-border/50 bg-background/95 backdrop-blur-xl">
          <DialogHeader className="pb-2">
            <DialogTitle className="text-xl md:text-2xl font-bold gradient-text">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>

          {/* Image Carousel */}
          <div className="relative mt-3">
            <div className="flex items-center gap-2 md:gap-3">
              {/* Left Arrow */}
              <button
                onClick={() => scrollImages('left')}
                className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full glass-card border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 flex items-center justify-center group z-10"
                aria-label="Previous image"
              >
                <CaretLeft className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" weight="bold" />
              </button>

              {/* Images Container */}
              <div 
                ref={imagesContainerRef}
                className="flex-1 overflow-hidden rounded-xl"
              >
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {selectedProject?.images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full flex justify-center">
                      <div className="relative rounded-xl overflow-hidden border border-border/30 shadow-lg max-w-[500px] max-h-[400px]">
                        <img
                          src={image}
                          alt={`${selectedProject?.title} mockup ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scrollImages('right')}
                className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full glass-card border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 flex items-center justify-center group z-10"
                aria-label="Next image"
              >
                <CaretRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" weight="bold" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-3">
              {selectedProject?.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* App Store Buttons */}
          {(selectedProject?.playStoreUrl || selectedProject?.appStoreUrl) && (
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              {selectedProject?.playStoreUrl && (
                <a
                  href={selectedProject.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-3 flex-1"
                >
                  <GooglePlayLogo className="w-6 h-6" weight="fill" />
                  <div className="text-left">
                    <div className="text-[10px] opacity-80">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              )}
              {selectedProject?.appStoreUrl && (
                <a
                  href={selectedProject.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center gap-3 flex-1"
                >
                  <AppleLogo className="w-6 h-6" weight="fill" />
                  <div className="text-left">
                    <div className="text-[10px] opacity-80">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
              )}
            </div>
          )}
          {!selectedProject?.playStoreUrl && !selectedProject?.appStoreUrl && (
            <div className="mt-4 text-center">
              <span className="text-sm text-muted-foreground italic">Coming Soon</span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;