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
  Volume2, 
  Sliders, 
  MapPin, 
  Calendar,
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState<'all' | 'directing' | 'audio' | 'marketing'>('all');

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
            const parallaxOffset = currentScroll * 0.15;
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
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#hero" 
            className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 text-interactive"
          >
            Rumeth Thawasara
          </a>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#directing" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Directing
            </a>
            <a href="#audio" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Audio Production
            </a>
            <a href="#marketing" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Digital Marketing
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

              {/* Big Bold Header */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-interactive text-balance">
                Rumeth Thawasara
              </h1>

              {/* Role Title Line */}
              <div className="text-base sm:text-lg font-medium text-neutral-300 text-interactive flex items-center gap-2">
                <span>Director</span>
                <span className="text-neutral-600">/</span>
                <span>Producer</span>
                <span className="text-neutral-600">/</span>
                <span>Digital Marketer</span>
              </div>

              {/* Bio Text */}
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal text-interactive">
                Rumeth Thawasara (born July 12, 2008) is a Director, Producer, and Digital Marketer based in Nittabuwa, Sri Lanka. As a multidisciplinary creative professional, he bridges the gap between high-end audiovisual production and strategic digital marketing.
              </p>

              {/* Second Paragraph */}
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-interactive">
                He specializes in delivering cinematic visuals for commercial advertising and music videos. In addition to his visual directorial work, Rumeth operates as a dedicated audio engineer, with a distinct focus on producing and engineering sound for the rap and ambient music genres. By combining commercial marketing strategies with complete audiovisual production, he controls the entire creative direction of a project from the initial sound to the final visual cut.
              </p>

              {/* Action Buttons & Directorial Links */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#directing"
                  className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg border border-neutral-700 hover:border-neutral-500 transition-all duration-200 flex items-center gap-2 group shadow-lg"
                >
                  <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                  <span>Cinematic Showreel</span>
                </a>
                
                <a
                  href="#audio"
                  className="px-6 py-3 bg-transparent hover:bg-neutral-800/60 text-neutral-300 hover:text-white text-sm font-medium rounded-lg border border-neutral-800 hover:border-neutral-600 transition-all duration-200 flex items-center gap-2"
                >
                  <Disc3 className="w-4 h-4" />
                  <span>Rap & Ambient Audio</span>
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
                    {/* Hand-drawn arrow curve */}
                    <path 
                      d="M85 15 C65 10 30 25 25 65" 
                      stroke="currentColor" 
                      strokeWidth="5" 
                      strokeLinecap="round"
                    />
                    {/* Arrow head */}
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
                    {/* Viewfinder corner */}
                    <path 
                      d="M65 40 V65 H40" 
                      stroke="currentColor" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    {/* Little sparkle star in the corner */}
                    <path 
                      d="M30 40 L34 44 L30 48 L26 44 Z" 
                      fill="currentColor" 
                    />
                  </svg>
                </div>

                {/* 5. FLOATING GRAFFITI ELEMENT: Halo Scribble / Crown Crown Doodle (Floating Top Center) */}
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

                {/* Main Profile Image Frame */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-700/60 bg-neutral-800 shadow-2xl transition-transform duration-300">
                  {/* Subtle Inner Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent z-10 pointer-events-none" />

                  {/* Profile Image with filter: drop-shadow and dynamic scroll animation ref */}
                  <img
                    ref={imageRef}
                    src="./profile.png"
                    alt="Rumeth Thawasara - Director, Producer, Audio Engineer & Digital Marketer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center rounded-2xl profile-glow-filter transition-transform ease-out will-change-transform"
                    style={{
                      filter: 'drop-shadow(0 0 24px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 50px rgba(255, 255, 255, 0.18))'
                    }}
                    onError={(e) => {
                      // Fallback if local relative image path resolves differently
                      const target = e.currentTarget;
                      if (!target.src.includes('/profile.png')) {
                        target.src = '/profile.png';
                      }
                    }}
                  />

                  {/* Quiet Director Badge Overlay in bottom corner */}
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 bg-neutral-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/80 text-xs font-mono text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>AUDIOVISUAL & MARKETING</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: CORE DISCIPLINES & EXPERTISE (Allows page scroll to experience parallax) */}
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

        {/* SECTION 3: BIOGRAPHY & PHILOSOPHY */}
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

        {/* SECTION 4: CONTACT & INQUIRIES */}
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

      {/* FOOTER */}
      <footer className="border-t border-neutral-800/80 py-8 px-6 text-center text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-interactive">
            © {new Date().getFullYear()} Rumeth Thawasara. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-neutral-400">
            <a href="#hero" className="hover:text-white transition-colors text-interactive">Back to Top</a>
            <span>·</span>
            <a href="#directing" className="hover:text-white transition-colors text-interactive">Directing</a>
            <span>·</span>
            <a href="#audio" className="hover:text-white transition-colors text-interactive">Audio</a>
            <span>·</span>
            <a href="#marketing" className="hover:text-white transition-colors text-interactive">Marketing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
