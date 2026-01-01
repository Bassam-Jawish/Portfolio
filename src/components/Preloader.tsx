import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial logo animation
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );

    // Progress bar animation
    const progressTween = gsap.to(
      { value: 0 },
      {
        value: 100,
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: function () {
          const currentValue = Math.round(this.targets()[0].value);
          setProgress(currentValue);
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${currentValue}%`;
          }
        },
        onComplete: () => {
          // Exit animation
          gsap.to(preloaderRef.current, {
            opacity: 0,
            scale: 0.95,
            filter: 'blur(10px)',
            duration: 0.8,
            ease: 'power3.inOut',
            onComplete: () => {
              onComplete();
            },
          });
        },
      }
    );

    return () => {
      progressTween.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      {/* Animated background noise */}
      <div className="noise-overlay" />

      {/* Ambient orbs */}
      <div className="ambient-orb absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20" />
      <div className="ambient-orb absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20" />

      {/* Logo */}
      <div ref={logoRef} className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight gradient-text neon-text">
          Bassam Jawish
        </h1>
      </div>

      {/* Subtitle */}
      <div ref={subtitleRef} className="mb-12">
        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-widest uppercase">
          Mobile Engineer
        </p>
      </div>

      {/* Progress bar container */}
      <div className="w-64 md:w-96 relative">
        {/* Background track */}
        <div className="h-1 bg-muted/30 rounded-full overflow-hidden">
          {/* Progress fill */}
          <div
            ref={progressBarRef}
            className="h-full rounded-full relative"
            style={{
              width: '0%',
              background: 'linear-gradient(90deg, hsl(187 100% 50%) 0%, hsl(263 70% 58%) 100%)',
              boxShadow: '0 0 20px hsl(187 100% 50% / 0.6), 0 0 40px hsl(263 70% 58% / 0.4)',
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>

        {/* Percentage counter */}
        <div className="mt-4 text-center">
          <span
            ref={counterRef}
            className="text-2xl font-mono font-semibold text-primary"
          >
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
