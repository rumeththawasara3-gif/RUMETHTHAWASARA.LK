/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { 
  Film, 
  Disc3, 
  TrendingUp, 
  ArrowUpRight, 
  Play, 
  Radio,
  MapPin, 
  Calendar,
  Sparkles,
  Music2,
  Tv
} from 'lucide-react';

interface MusicProject {
  title: string;
  url: string;
  youtubeId: string;
  genre: string;
  bgGradient: string;
}

const MUSIC_PROJECTS: MusicProject[] = [
  {
    title: 'Siri parakum (EDM Remix)',
    url: 'https://youtu.be/Cts6ralAzqc',
    youtubeId: 'Cts6ralAzqc',
    genre: 'EDM Remix',
    bgGradient: 'from-amber-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'HAWK | උකුZA',
    url: 'https://youtu.be/VumE2EuyPwQ',
    youtubeId: 'VumE2EuyPwQ',
    genre: 'Rap / Trap',
    bgGradient: 'from-rose-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'Kaviyak',
    url: 'https://youtu.be/Ikp-XPefeuA',
    youtubeId: 'Ikp-XPefeuA',
    genre: 'Ambient / Poetry',
    bgGradient: 'from-sky-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'DRILLA',
    url: 'https://youtu.be/hM2n9kEi5J8',
    youtubeId: 'hM2n9kEi5J8',
    genre: 'Drill',
    bgGradient: 'from-emerald-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'L I F E',
    url: 'https://youtu.be/Iy0zf9FdTX0',
    youtubeId: 'Iy0zf9FdTX0',
    genre: 'Ambient Hip-Hop',
    bgGradient: 'from-indigo-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'KUSH',
    url: 'https://youtu.be/DZfFPNJb1Yk',
    youtubeId: 'DZfFPNJb1Yk',
    genre: 'Rap',
    bgGradient: 'from-purple-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'NOTHING',
    url: 'https://youtu.be/fp1iCLFSa1s',
    youtubeId: 'fp1iCLFSa1s',
    genre: 'Atmospheric Beats',
    bgGradient: 'from-zinc-900 via-neutral-900 to-neutral-950'
  },
  {
    title: 'KILL ME',
    url: 'https://youtu.be/rbAF31aCi-I',
    youtubeId: 'rbAF31aCi-I',
    genre: 'Dark Ambient / Rap',
    bgGradient: 'from-red-950/60 via-neutral-900 to-neutral-950'
  },
];

interface YTLiveStream {
  title: string;
  url: string;
  youtubeId: string;
  category: string;
  bgGradient: string;
}

const YT_LIVES: YTLiveStream[] = [
  {
    title: 'NTE SINHALA GAMEPLAY',
    url: 'https://www.youtube.com/live/AOgCVgPQ_AI',
    youtubeId: 'AOgCVgPQ_AI',
    category: 'Gameplay Stream',
    bgGradient: 'from-blue-950/50 via-neutral-900 to-neutral-950'
  },
  {
    title: 'NTE EP2',
    url: 'https://www.youtube.com/live/EhtQDMw7hp4',
    youtubeId: 'EhtQDMw7hp4',
    category: 'Episode 02',
    bgGradient: 'from-violet-950/50 via-neutral-900 to-neutral-950'
  },
  {
    title: 'NTE EP3',
    url: 'https://www.youtube.com/live/8cLOs8WXwEg',
    youtubeId: '8cLOs8WXwEg',
    category: 'Episode 03',
    bgGradient: 'from-cyan-950/50 via-neutral-900 to-neutral-950'
  },
  {
    title: 'ets 2',
    url: 'https://www.youtube.com/live/xmaqoxyiQOs',
    youtubeId: 'xmaqoxyiQOs',
    category: 'Simulation Stream',
    bgGradient: 'from-amber-950/50 via-neutral-900 to-neutral-950'
  },
  {
    title: 'ets 2 | බස් පිස්සෙක් වුනි මා',
    url: 'https://www.youtube.com/live/QDlRmtidkys',
    youtubeId: 'QDlRmtidkys',
    category: 'Special Road Trip',
    bgGradient: 'from-teal-950/50 via-neutral-900 to-neutral-950'
  },
];

export default function App() {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Dynamic scroll animation (parallax and subtle scale) on the profile image
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (imageRef.current) {
            // Subtle parallax translateY and slight dynamic scale as user scrolls
            const parallaxOffset = currentScroll * 0.14;
            const dynamicScale = Math.max(0.92, 1 - currentScroll * 0.00025);
            imageRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0) scale(${dynamicScale})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 selection:bg-neutral-100 selection:text-neutral-900 relative overflow-x-hidden font-sans">
      {/* Background Ambient Lighting Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[550px] h-[550px] bg-neutral-800/40 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] left-[-10%] w-[450px] h-[450px] bg-neutral-800/30 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-5%] right-[20%] w-[500px] h-[500px] bg-neutral-800/35 rounded-full blur-[160px]" />
      </div>

      {/* Top Bar Navigation (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-900/80 border-b border-neutral-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Small top-left navigation element with white dot and uppercase spaced text */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-200 hover:text-white whitespace-nowrap shrink-0 text-interactive transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
            <span>RUMETH THAWASARA</span>
          </a>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#projects-music" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Projects: Music
            </a>
            <a href="#yt-lives" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              YT Lives
            </a>
            <a href="#directing" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Directing
            </a>
            <a href="#about" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Biography
            </a>
            <a href="#contact" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-white rounded-md hover:bg-neutral-200 transition-all duration-200 shadow-sm hover:shadow-white/20 whitespace-nowrap shrink-0"
            >
              Direct Inquiry
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section 
          id="hero" 
          className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-12 lg:py-20 max-w-7xl mx-auto"
        >
          {/* Responsive Layout:
              Mobile: flex-col-reverse (image on top, text underneath)
              Desktop (md/lg): 50/50 side-by-side split */}
          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Text Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 lg:pr-6">
              
              {/* Context Kicker / Origin Metadata */}
              <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-neutral-400 font-medium text-interactive">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-300" />
                  Nittabuwa, Sri Lanka
                </span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-300" />
                  Born July 12, 2008
                </span>
              </div>

              {/* Massive, Bold, All-Caps Main Header Split onto Two Lines */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] text-interactive">
                <span className="block">RUMETH</span>
                <span className="block">THAWASARA</span>
              </h1>

              {/* Dark Pill-Shaped Badges with Thin Borders and Small Uppercase Text */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <span className="px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 shadow-sm text-interactive">
                  CO-FOUNDER • LOOP STUDIOS
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 shadow-sm text-interactive">
                  FOUNDER • KULT STUDIO
                </span>
              </div>

              {/* About Me Section Label */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block text-interactive">
                  ABOUT ME
                </span>
              </div>

              {/* Bio Text Styling: Wrapped in container with distinct left-side vertical border */}
              <div className="border-l-2 border-neutral-500 pl-4 sm:pl-5 space-y-4">
                {/* Main Bio Text */}
                <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal text-interactive">
                  Rumeth Thawasara (born July 12, 2008) is a Director, Producer, and Digital Marketer based in Nittabuwa, Sri Lanka. As a multidisciplinary creative professional, he bridges the gap between high-end audiovisual production and strategic digital marketing.
                </p>

                {/* Second Paragraph */}
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-interactive">
                  He specializes in delivering cinematic visuals for commercial advertising and music videos. In addition to his visual directorial work, Rumeth operates as a dedicated audio engineer, with a distinct focus on producing and engineering sound for the rap and ambient music genres. By combining commercial marketing strategies with complete audiovisual production, he controls the entire creative direction of a project from the initial sound to the final visual cut.
                </p>
              </div>

              {/* Action Buttons & Directorial Links */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#projects-music"
                  className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg border border-neutral-700 hover:border-neutral-500 transition-all duration-200 flex items-center gap-2 group shadow-lg"
                >
                  <Disc3 className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                  <span>Explore Music Projects</span>
                </a>
                
                <a
                  href="#yt-lives"
                  className="px-6 py-3 bg-transparent hover:bg-neutral-800/60 text-neutral-300 hover:text-white text-sm font-medium rounded-lg border border-neutral-800 hover:border-neutral-600 transition-all duration-200 flex items-center gap-2"
                >
                  <Radio className="w-4 h-4 text-rose-400" />
                  <span>Watch YT Lives</span>
                </a>
              </div>

              {/* Bottom Quick Metric Line */}
              <div className="pt-6 border-t border-neutral-800/80 flex items-center gap-8 text-xs text-neutral-400">
                <div className="text-interactive">
                  <span className="block text-lg font-bold text-white tabular-nums">100%</span>
                  <span>End-to-End Creative Direction</span>
                </div>
                <div className="h-8 w-[1px] bg-neutral-800" />
                <div className="text-interactive">
                  <span className="block text-lg font-bold text-white tabular-nums">4K RAW</span>
                  <span>Cinematic Visual Pipeline</span>
                </div>
                <div className="h-8 w-[1px] bg-neutral-800" />
                <div className="text-interactive">
                  <span className="block text-lg font-bold text-white tabular-nums">Hybrid</span>
                  <span>Audio & Growth Strategy</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Image & Effects */}
            <div 
              ref={containerRef}
              className="w-full md:w-1/2 flex items-center justify-center relative p-4 sm:p-8"
            >
              {/* Outer Decorative Glow Aura */}
              <div className="absolute inset-0 max-w-[420px] max-h-[420px] m-auto bg-gradient-to-tr from-neutral-700/20 via-neutral-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Profile Image Wrap Container with Relative Positioning for Graffiti Elements */}
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square flex items-center justify-center">
                
                {/* 1. FLOATING GRAFFITI ELEMENT: Hand-Drawn 4-Point Star (Top-Left) */}
                <div 
                  className="absolute -top-6 -left-4 sm:-top-8 sm:-left-8 z-20 pointer-events-none animate-float-wiggle-1"
                  title="Creative Spark"
                >
                  <svg 
                    width="64" 
                    height="64" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 sm:w-14 sm:h-14 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                  >
                    <path 
                      d="M50 0 C49 32 32 49 0 50 C32 51 49 68 50 100 C51 68 68 51 100 50 C68 49 51 32 50 0 Z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* 2. FLOATING GRAFFITI ELEMENT: Hand-Drawn Arrow Pointing Towards Profile (Top-Right) */}
                <div 
                  className="absolute -top-8 -right-4 sm:-top-10 sm:-right-8 z-20 pointer-events-none animate-float-wiggle-2"
                  title="Directorial Vision"
                >
                  <svg 
                    width="74" 
                    height="74" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 sm:w-16 sm:h-16 text-neutral-200 drop-shadow-[0_0_14px_rgba(255,255,255,0.5)] -rotate-12"
                  >
                    <path 
                      d="M85 15 C65 10 30 25 25 65" 
                      stroke="currentColor" 
                      strokeWidth="5" 
                      strokeLinecap="round"
                    />
                    <path 
                      d="M15 50 L25 67 L42 62" 
                      stroke="currentColor" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>

                {/* 3. FLOATING GRAFFITI ELEMENT: Audio Waveform Scribble / Frequency Doodle (Bottom-Left) */}
                <div 
                  className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 z-20 pointer-events-none animate-float-wiggle-3"
                  title="Audio Engineering Wave"
                >
                  <svg 
                    width="110" 
                    height="50" 
                    viewBox="0 0 120 50" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-10 sm:w-28 sm:h-12 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                  >
                    <path 
                      d="M5 25 Q15 25 20 10 T35 40 T50 5 T65 45 T80 15 T95 35 T105 25 T115 25" 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* 4. FLOATING GRAFFITI ELEMENT: Cinema Viewfinder Corner / Director Crosshair (Bottom-Right) */}
                <div 
                  className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-8 z-20 pointer-events-none animate-float-wiggle-1"
                  title="Cinematic Frame"
                >
                  <svg 
                    width="70" 
                    height="70" 
                    viewBox="0 0 80 80" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 sm:w-14 sm:h-14 text-neutral-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                  >
                    <path 
                      d="M65 40 V65 H40" 
                      stroke="currentColor" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <path 
                      d="M30 40 L34 44 L30 48 L26 44 Z" 
                      fill="currentColor" 
                    />
                  </svg>
                </div>

                {/* 5. FLOATING GRAFFITI ELEMENT: Halo Scribble / Crown Doodle (Top Center) */}
                <div 
                  className="absolute -top-12 sm:-top-16 z-20 pointer-events-none animate-float-wiggle-2"
                  title="Director Mark"
                >
                  <svg 
                    width="90" 
                    height="45" 
                    viewBox="0 0 100 50" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-8 sm:w-20 sm:h-10 text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] rotate-3"
                  >
                    <path 
                      d="M10 35 C30 15 70 15 90 35 C70 45 30 45 10 35 Z" 
                      stroke="currentColor" 
                      strokeWidth="3.5" 
                      strokeDasharray="4 2"
                      strokeLinecap="round"
                    />
                    <path 
                      d="M20 20 L25 5 L40 18 L50 2 L60 18 L75 5 L80 20" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>

                {/* Main Profile Cutout Container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Atmospheric Backdrop Disc with subtle halo */}
                  <div className="absolute inset-3 sm:inset-5 rounded-full bg-gradient-to-b from-neutral-800/60 via-neutral-900/80 to-neutral-950/90 border border-neutral-700/50 shadow-2xl pointer-events-none" />

                  {/* Profile Image with filter: drop-shadow and dynamic scroll animation ref */}
                  <img
                    ref={imageRef}
                    src="./profile.png"
                    alt="Rumeth Thawasara - Director, Producer, Audio Engineer & Digital Marketer"
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-full h-full object-contain object-bottom profile-glow-filter transition-transform ease-out will-change-transform"
                    style={{
                      filter: 'drop-shadow(0 0 16px rgba(255, 255, 255, 0.55)) drop-shadow(0 0 38px rgba(255, 255, 255, 0.25)) drop-shadow(0 0 70px rgba(255, 255, 255, 0.12))'
                    }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('WhatsApp_Image')) {
                        target.src = '/public/assets/aistudio/WhatsApp_Image_2026-11-05_at_2.01.44_PM-removebg-preview_41c0ac9c.png';
                      }
                    }}
                  />

                  {/* Director / Audiovisual pill tag anchored at bottom center */}
                  <div className="absolute -bottom-3 z-20 flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-700 text-xs font-mono text-neutral-300 shadow-xl">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>AUDIOVISUAL & MARKETING</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 1: PROJECTS: MUSIC (HORIZONTAL INFINITE MARQUEE) */}
        <section id="projects-music" className="py-20 border-t border-neutral-800/90 bg-neutral-950/60 relative overflow-hidden">
          
          {/* Header & Subheader */}
          <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold text-interactive flex items-center gap-2">
                <Music2 className="w-3.5 h-3.5 text-neutral-300" />
                <span>Music</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1 text-interactive">
                Projects
              </h2>
            </div>
            <div className="text-xs text-neutral-400 max-w-sm text-interactive flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <span>Hover over tracks to pause the continuous marquee</span>
            </div>
          </div>

          {/* Marquee Row Container (Pauses when user hovers over the track row) */}
          <div className="marquee-row relative w-full overflow-hidden py-4 cursor-pointer select-none">
            
            {/* Cinematic Gradient Vignettes for Left and Right Edge Fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-neutral-900 to-transparent z-30" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-neutral-900 to-transparent z-30" />

            {/* Seamless Infinite Looping Track (Rendered twice for seamless wrap) */}
            <div className="animate-marquee-infinite flex gap-4 sm:gap-6 px-4">
              {[...MUSIC_PROJECTS, ...MUSIC_PROJECTS].map((project, idx) => (
                <a
                  key={`music-${project.youtubeId}-${idx}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-900 card-hover-glow hover:border-neutral-500 transition-all duration-300"
                >
                  {/* YouTube Thumbnail Background with fallback gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center overflow-hidden`}>
                    <img
                      src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                      onError={(e) => {
                        // Fallback to stylized cover block if image is not reachable
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Ambient Bottom Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                  {/* Play Icon Overlay (Shows on Hover with smooth scale & glow) */}
                  <div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-[0_0_24px_rgba(255,255,255,0.8)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-neutral-950 ml-0.5" />
                    </div>
                  </div>

                  {/* Card Content / Title / Genre */}
                  <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 z-10">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                      {project.genre}
                    </span>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight line-clamp-1 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Top-Right Direct Link Arrow */}
                  <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-700/60 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-neutral-400 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 2: YT LIVES (LARGE HORIZONTAL INFINITE MARQUEE) */}
        <section id="yt-lives" className="py-20 border-t border-neutral-800 bg-neutral-900/40 relative overflow-hidden">
          
          {/* Header */}
          <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-rose-400 font-semibold text-interactive flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>Broadcasting & Gaming</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1 text-interactive">
                YT Lives
              </h2>
            </div>
            <div className="text-xs text-neutral-400 max-w-sm text-interactive flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <span>Hover over lives to pause the 16:9 widescreen marquee</span>
            </div>
          </div>

          {/* Large Marquee Row Container (16:9 Widescreen, pauses on hover) */}
          <div className="marquee-row relative w-full overflow-hidden py-4 cursor-pointer select-none">
            
            {/* Edge Fade Gradients */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-neutral-900 to-transparent z-30" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-neutral-900 to-transparent z-30" />

            {/* Seamless Infinite Looping Track (16:9 aspect ratio, significantly larger than music cards) */}
            <div className="animate-marquee-slow flex gap-5 sm:gap-7 px-4">
              {[...YT_LIVES, ...YT_LIVES, ...YT_LIVES].map((stream, idx) => (
                <a
                  key={`yt-live-${stream.youtubeId}-${idx}`}
                  href={stream.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-72 sm:w-96 md:w-[460px] lg:w-[520px] aspect-video rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-900 card-hover-glow hover:border-neutral-500 transition-all duration-300"
                >
                  {/* YouTube Thumbnail Background with fallback gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stream.bgGradient} flex items-center justify-center overflow-hidden`}>
                    <img
                      src={`https://img.youtube.com/vi/${stream.youtubeId}/hqdefault.jpg`}
                      alt={stream.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-95"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Scrim Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                  {/* Play Icon Overlay (Shows on Hover) */}
                  <div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-[0_0_28px_rgba(255,255,255,0.85)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-neutral-950 ml-0.5" />
                    </div>
                  </div>

                  {/* Live Stream Label (Top Left) */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-700/70 text-[10px] sm:text-xs font-mono text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="uppercase">{stream.category}</span>
                  </div>

                  {/* External Link Indicator (Top Right) */}
                  <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-700/60 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-neutral-400 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Bottom Metadata & Title */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10">
                    <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      YouTube Live Archive
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug line-clamp-1 group-hover:text-white transition-colors">
                      {stream.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: CORE DISCIPLINES & EXPERTISE */}
        <section id="directing" className="py-24 border-t border-neutral-800 bg-neutral-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold text-interactive">
                  Disciplines & Execution
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2 text-interactive">
                  The Complete Creative Direction
                </h2>
              </div>
              <p className="text-neutral-400 text-sm max-w-md text-interactive">
                Controlling every nuance from the initial beat and sound frequency to the final graded cut and performance marketing campaign.
              </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Pillar 1: Directing & Cinematic Visuals */}
              <div className="p-8 rounded-2xl bg-neutral-800/40 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform border border-neutral-700">
                  <Film className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-interactive">
                  Cinematic Directing
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed text-interactive mb-6">
                  Commercial advertising and high-retention music videos designed with cinematic camera movement, anamorphic lenses, and rhythmic visual pacing.
                </p>
                <div className="text-xs text-neutral-500 space-y-1 font-mono">
                  <div>· Music Videos & Commercials</div>
                  <div>· Pre-visualization & Storyboarding</div>
                  <div>· Color Grading & Post-production</div>
                </div>
              </div>

              {/* Pillar 2: Audio Engineering & Production */}
              <div id="audio" className="p-8 rounded-2xl bg-neutral-800/40 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform border border-neutral-700">
                  <Disc3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-interactive">
                  Audio Engineering
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed text-interactive mb-6">
                  Dedicated sound architecture for rap, hip-hop, and ambient music. Sculpting low-end punch, vocal presence, spatial width, and immersive atmospheres.
                </p>
                <div className="text-xs text-neutral-500 space-y-1 font-mono">
                  <div>· Rap & Hip-Hop Beat Production</div>
                  <div>· Ambient Soundscapes & Scoring</div>
                  <div>· Stem Mixing & Mastering</div>
                </div>
              </div>

              {/* Pillar 3: Digital Marketing Strategy */}
              <div id="marketing" className="p-8 rounded-2xl bg-neutral-800/40 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform border border-neutral-700">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-interactive">
                  Strategic Digital Marketing
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed text-interactive mb-6">
                  Bridging artistic output with market traction. Crafting data-informed distribution strategies, audience funnels, and viral release rollouts.
                </p>
                <div className="text-xs text-neutral-500 space-y-1 font-mono">
                  <div>· Campaign Strategy & Positioning</div>
                  <div>· Social Video Distribution</div>
                  <div>· Audience Retention Architecture</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: BIOGRAPHY & PHILOSOPHY */}
        <section id="about" className="py-20 border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold text-interactive">
              The Creative Synthesis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-interactive">
              Bridging Sound, Vision & Growth
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed text-interactive max-w-2xl mx-auto">
              "When sound design and camera rhythm are created in isolation, the work loses its heartbeat. By commanding the audio workstation, the camera rig, and the marketing pipeline in harmony, every cut hits with intended psychological weight."
            </p>
            <div className="text-sm font-semibold text-neutral-400 pt-2 text-interactive">
              Rumeth Thawasara · Director & Sound Architect
            </div>
          </div>
        </section>

        {/* SECTION 5: CONTACT & INQUIRIES */}
        <section id="contact" className="py-20 border-t border-neutral-800 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-interactive">
                Initiate a Project
              </h2>
              <p className="text-sm text-neutral-400 text-interactive">
                Commercial visual productions, custom music scoring & rap production, or marketing campaigns.
              </p>
              <div className="flex items-center gap-4 text-xs text-neutral-500 pt-2 font-mono">
                <span>Nittabuwa, Sri Lanka</span>
                <span>·</span>
                <span>rumeththawasara3@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="mailto:rumeththawasara3@gmail.com"
                className="px-6 py-3 bg-white text-neutral-900 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER & SOCIALS */}
      <footer className="border-t border-neutral-800/80 py-12 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 text-center">
          
          {/* Centered Horizontal Socials Row (Flex-wrap on mobile so they never overlap) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/rumeth_thawasara/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all duration-200 card-hover-glow"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span className="text-xs font-medium">Instagram</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@rumeth_thawasara"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all duration-200 card-hover-glow"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.28 6.28 0 0 0 1.86-4.48V8.71a8.21 8.21 0 0 0 4.91 1.62v-3.4a4.85 4.85 0 0 1-1-.24z"/>
              </svg>
              <span className="text-xs font-medium">TikTok</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/94717923228"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all duration-200 card-hover-glow"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-xs font-medium">WhatsApp</span>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@rumeth_thawasara"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all duration-200 card-hover-glow"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-xs font-medium">YouTube</span>
            </a>
          </div>

          {/* Copyright & Location Note */}
          <div className="text-xs text-neutral-500 pt-2 text-interactive">
            © {new Date().getFullYear()} Rumeth Thawasara · Nittabuwa, Sri Lanka · All Rights Reserved
          </div>

        </div>
      </footer>
    </div>
  );
}
