import React, { useState, useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    type: 'hls',
    src: 'https://customer-cbeadsgr09pnsezs.cloudflarestream.com/12a9780eeb1ea015801a5f55cf2e9d3d/manifest/video.m3u8',
    heading: "Hi, I'm Anu Soni.",
    subheading: 'A Passionate Full-Stack Developer.',
  },
  {
    type: 'mp4',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260322_013248_a74099a8-be2b-4164-a823-eddd5e149fa1.mp4',
    heading: 'Work Experience',
    subheading: 'Building scalable and robust web applications for various companies.',
  },
  {
    type: 'mp4',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4',
    heading: 'Featured Projects',
    subheading: 'Showcasing the intersection of design, technology, and user experience.',
  },
];

const BackgroundVideo = ({ src, type, isActive, onEnded }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (type === 'hls' && Hls.isSupported()) {
      const hls = new Hls({ 
        capLevelToPlayerSize: false, // Don't artificially restrict quality based on element size
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      
      // Force the highest available quality level once the manifest parses
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        hls.currentLevel = hls.levels.length - 1;
      });

      return () => {
        hls.destroy();
      };
    } else if (type === 'mp4' || video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }
  }, [src, type]);

  useEffect(() => {
    const video = videoRef.current;
    if (isActive && video) {
      video.currentTime = 0;
      video.play().catch((e) => console.log('Autoplay prevented', e));
    } else if (!isActive && video) {
      video.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      onEnded={onEnded}
      className="absolute top-0 left-0 w-full h-full object-cover"
      muted
      playsInline
      crossOrigin="anonymous"
    />
  );
};

const CinematicSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: currentSlide === index ? 1 : 0 }}
        >
          <BackgroundVideo
            src={slide.src}
            type={slide.type}
            isActive={currentSlide === index}
            onEnded={() => {
              if (currentSlide === index) nextSlide();
            }}
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </motion.div>
      ))}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 space-y-4 z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg text-white tracking-wide">
              {slides[currentSlide].heading}
            </h1>
            <p className="text-xl md:text-3xl font-medium text-neutral-300 drop-shadow-md">
              {slides[currentSlide].subheading}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CinematicSlider;
