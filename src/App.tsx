import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Edit3 } from 'lucide-react';

/* ─── Image URLs ─── */
const IMG = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMKxhFlHMJhU0XCMYPpX70L0MOV6cV4pujoJfQHP_kyrL6v8vxSRZ-ivjntu8Kw1tMbWZXd8ddlylngc9e1ofTGjug5LrZ2fVwJirKHLLNa0gKkz0vwzniBvqr6qoAYLJqWsUFK4F6uwOSMfNFeXM_c-emCUzxsHY0Rbud9FfxgVZFwFj2PXPNZlhxujp0l8JRBb-gxXmLtPEc2tkQN0Ji9rkPEYS_Zi6-O447NoqUllS6-3J0CubK19JJTQmxjR9DZ_YSX2lMe0o',
  shonen: '/assets/manga_shonen_1772202101421.png',
  classic: '/assets/manga_classic_1772202117742.png',
  seinen: '/assets/manga_seinen_1772202132459.png',
};

/* ─── Data ─── */
const NAV_LINKS = [
  { href: '#create', label: 'Create' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#community', label: 'Community' },
];

const FEATURES = [
  { icon: '✍️', title: 'AI Story Writer', desc: 'Describe your plot in plain text. Our engine weaves compelling narratives with authentic manga pacing.' },
  { icon: '🎨', title: '50+ Art Styles', desc: 'Switch between Shonen, Seinen, Chibi, Watercolor, Cyberpunk, and more with a single click.' },
  { icon: '📐', title: 'Panel Layouts', desc: 'Dynamic panel arrangements from classic 3-strip to complex action spreads. Full control over composition.' },
  { icon: '👤', title: 'Character Design', desc: 'Build unique characters with custom hair, outfits, expressions, and poses. Consistent across all pages.' },
  { icon: '💬', title: 'Speech Bubbles', desc: 'Auto-generated dialogue with stylized speech bubbles, thought clouds, and SFX onomatopoeia.' },
  { icon: '📥', title: 'Export & Share', desc: 'Download as print-ready PDF or high-res PNG. Share directly to your social feeds.' },
];

const STEPS = [
  { num: '01', title: 'Describe Your Idea', desc: 'Write your story concept, choose a genre, and set the tone. A few sentences is all it takes.' },
  { num: '02', title: 'Pick Your Style', desc: 'Select from our library of art styles. Each is trained on thousands of professional manga pages.' },
  { num: '03', title: 'AI Creates Panels', desc: 'Our neural engine generates characters, backgrounds, dialogue, and effects in seconds.' },
  { num: '04', title: 'Download & Share', desc: 'Export your finished manga in cinema-quality resolution. Print it, post it, own it.' },
];

const GALLERY_ITEMS = [
  { title: 'Blade of Shadows', author: '@NinjaArt', genre: 'Shōnen', likes: '2.8k', color: 'border-red-500/30', bg: 'from-red-900/20 via-card-dark to-card-dark', image: '/assets/blade_of_shadows_1772199894466.png' },
  { title: 'Sakura Dreams', author: '@PetalStudio', genre: 'Shōjo', likes: '3.9k', color: 'border-pink-400/30', bg: 'from-pink-900/20 via-card-dark to-card-dark', image: '/assets/sakura_dreams_1772199913686.png' },
  { title: 'Chrome District', author: '@NeonInk', genre: 'Seinen', likes: '4.2k', color: 'border-purple-500/30', bg: 'from-purple-900/20 via-card-dark to-card-dark', image: '/assets/chrome_district_1772199930093.png' },
  { title: 'Spirit Academy', author: '@DimensionX', genre: 'Isekai', likes: '3.1k', color: 'border-cyan-400/30', bg: 'from-cyan-900/20 via-card-dark to-card-dark', image: '/assets/spirit_academy_1772199976353.png' },
  { title: 'Iron Giant Legacy', author: '@SteelPen', genre: 'Mecha', likes: '1.9k', color: 'border-blue-400/30', bg: 'from-blue-900/20 via-card-dark to-card-dark', image: '/assets/iron_giant_legacy_1772199992092.png' },
  { title: 'Cooking Clash', author: '@ChefManga', genre: 'Comedy', likes: '2.5k', color: 'border-amber-400/30', bg: 'from-amber-900/20 via-card-dark to-card-dark', image: '/assets/cooking_clash_1772200007583.png' },
];

/* ─── Animation Variants ─── */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ═══════════════════════════════════════════
   APP COMPONENT
   ═══════════════════════════════════════════ */
export function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="antialiased font-sans">
      {/* ── Background mesh ── */}
      <div className="mesh-gradient" />

      {/* ══════════════ NAV ══════════════ */}
      <nav className="sticky top-0 z-50 px-4 sm:px-6 pb-4 pt-2 slide-down">
        <div className="max-w-full mx-auto flex items-center justify-between glass-card px-4 sm:px-8 py-3 rounded-lg border-b border-white/60 shadow-lg">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ink-blue rounded flex items-center justify-center sketch-border !border-white">
              <span className="text-white font-black hand-drawn-font text-sm">M</span>
            </div>
            <span className="text-xl font-black tracking-tighter italic">
              MANGA<span className="text-ink-blue italic hand-drawn-font">AI</span> PRO
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-widest uppercase text-gray-400">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-ink-blue hover:underline decoration-2 underline-offset-4 decoration-ink-blue transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop login */}
          <button className="hidden md:block bg-white text-black px-6 py-2 font-bold text-sm hover:bg-ink-blue hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-[2px_2px_0px_0px_#2E5CFF] sketch-border-white">
            LOGIN
          </button>

          {/* Mobile toggle */}
          <button className="md:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden glass-card mt-2 rounded-lg p-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-300 hover:text-ink-blue py-2 font-medium text-sm uppercase tracking-widest border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <button className="w-full bg-white text-black px-6 py-2 font-bold text-sm mt-2 sketch-border-white">
              LOGIN
            </button>
          </div>
        )}
      </nav>

      {/* ══════════════ HERO ══════════════ */}
      <main className="relative pt-6 sm:pt-10 pb-20 px-4 sm:px-6 overflow-hidden scan-line">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            className="z-10 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-block mb-6 px-4 py-1 border-2 border-ink-blue text-ink-blue text-xs font-bold tracking-[0.2em] uppercase bg-ink-blue/5 rounded-sm transform -rotate-1">
              Next Gen AI Engine
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-white">
              YOUR STORY,<br />
              <span className="text-stroke text-6xl sm:text-8xl md:text-[10rem] -mt-2 block opacity-30 hand-drawn-font">YOUR MANGA,</span>
              <br />
              <span className="text-ink-blue text-5xl sm:text-7xl md:text-9xl relative z-20">CREATED BY AI.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 font-light border-l-2 border-gray-700 pl-4">
              Transform your raw ideas into professional-grade manga panels. Powered by custom neural engines tuned for Shonen, Seinen, and Classic aesthetics.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <button className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-ink-blue text-white font-black text-lg sm:text-xl transition-all hover:scale-105 active:scale-95 hover:shadow-[4px_4px_0px_0px_#ffffff] sketch-border !border-transparent">
                <span className="relative z-10 flex items-center gap-2">
                  START CREATING
                  <Edit3 className="w-5 h-5" />
                </span>
              </button>
              <div className="flex items-center gap-3 bg-transparent text-white border-2 border-dashed border-gray-600 px-6 py-4 transform rotate-1">
                <div className="w-3 h-3 bg-ink-blue rounded-full animate-pulse" />
                <span className="text-sm font-bold tracking-tight">
                  FREE FOR STUDENTS<br />
                  <span className="text-xs text-gray-500 font-normal">No credit card required</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Hero Image */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <div className="absolute w-full h-full bg-ink-blue/10 blur-[80px] rounded-full mix-blend-screen" />
            <div className="relative z-10 animate-float">
              <img
                alt="Manga Character"
                className="max-w-100 h-auto grayscale contrast-125 brightness-110 drop-shadow-[0_0_30px_rgba(46,92,255,0.2)] scale-100 sm:scale-110 lg:scale-[1.4] origin-center -translate-y-6"
                src={IMG.hero}
              />
              {/* Quality badge */}
              <div className="absolute bottom-6 sm:bottom-10 -left-2 sm:-left-10 bg-off-white text-black p-3 sm:p-4 flex items-center gap-3 sm:gap-4 border-2 border-black shadow-[4px_4px_0px_0px_#2E5CFF] transform -rotate-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-black rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">4K</div>
                <div>
                  <p className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-wider">Render Quality</p>
                  <p className="font-bold hand-drawn-font text-base sm:text-lg">Cinema Standard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ══════════════ FEATURES ══════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden" id="community">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Floating Background Image Effect */}
        <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none opacity-5">
          <img
            src={IMG.hero}
            alt="Background Effect"
            className="w-full max-w-4xl h-auto grayscale animate-float-slow mix-blend-screen -rotate-6 translate-x-1/4"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-ink-blue hand-drawn-font text-4xl sm:text-5xl block mb-2">CORE</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter italic text-white">FEATURES</h2>
              <p className="text-gray-400 max-w-lg mx-auto mt-4 border-l-4 border-ink-blue pl-4 text-left">Every tool you need to turn raw ideas into polished manga, completely free.</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                className="group bg-card-dark border border-gray-800 p-6 hover:border-ink-blue transition-all duration-300 hover:shadow-[6px_6px_0px_0px_#1a1a1c] relative overflow-hidden"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{f.icon}</div>
                <h3 className="text-xl font-black mb-2 text-white group-hover:text-ink-blue transition-colors">{f.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{f.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-800 group-hover:bg-ink-blue transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ STYLIZATION SHOWCASE ══════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-surface relative" id="create">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter italic">
                <span className="text-ink-blue hand-drawn-font text-4xl sm:text-5xl md:text-6xl block mb-2">AI</span> STYLIZATION
              </h2>
              <p className="text-gray-400 max-w-lg border-l-4 border-ink-blue pl-4 mt-4">
                Switch between eras of manga history with a single click. Our AI preserves your characters across all styles.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex gap-4">
              <button className="px-6 py-2 border-2 border-gray-700 text-sm font-bold hover:border-ink-blue hover:text-ink-blue transition-colors">PREV</button>
              <button className="px-6 py-2 border-2 border-gray-700 text-sm font-bold hover:border-ink-blue hover:text-ink-blue transition-colors">NEXT</button>
            </motion.div>
          </motion.div>

          {/* 3 Style Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {/* Card 1 — Modern Shonen */}
            <motion.div variants={fadeInUp} className="perspective-card">
              <div className="card-inner group relative bg-card-dark border border-gray-800 p-3 hover:border-ink-blue transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#1a1a1c]">
                <div className="h-64 sm:h-80 overflow-hidden border border-gray-800 relative">
                  <div className="absolute inset-0 bg-ink-blue/0 group-hover:bg-ink-blue/10 z-10 transition-colors duration-300 mix-blend-overlay" />
                  <img alt="Modern Shonen Style" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500 grayscale group-hover:grayscale-0" src={IMG.shonen} />
                </div>
                <div className="pt-6 pb-2 px-2">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-ink-blue uppercase tracking-widest border border-ink-blue px-2 py-0.5 rounded-sm">Tech 01</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3 text-white group-hover:text-ink-blue transition-colors">Modern Shonen</h3>
                  <p className="text-gray-400 text-sm mb-4 font-light">Crisp lines, vibrant effects, and dynamic perspectives. Inspired by Jujutsu Kaisen &amp; Demon Slayer.</p>
                  <div className="w-full h-px bg-gray-800 group-hover:bg-ink-blue transition-colors" />
                </div>
              </div>
            </motion.div>

            {/* Card 2 — Classic Retro */}
            <motion.div variants={fadeInUp} className="perspective-card">
              <div className="card-inner group relative bg-card-dark border border-gray-800 p-3 hover:border-white transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#1a1a1c]">
                <div className="h-64 sm:h-80 overflow-hidden border border-gray-800 relative">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 z-10 transition-colors duration-300 mix-blend-overlay" />
                  <img alt="Classic Style" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500 grayscale contrast-125" src={IMG.classic} />
                </div>
                <div className="pt-6 pb-2 px-2">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-white uppercase tracking-widest border border-white px-2 py-0.5 rounded-sm">Tech 02</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3 text-white group-hover:text-gray-200 transition-colors">Classic Retro</h3>
                  <p className="text-gray-400 text-sm mb-4 font-light">Traditional screen tones, heavy ink work, and that nostalgic 90s aesthetic. Hand-drawn feel.</p>
                  <div className="w-full h-px bg-gray-800 group-hover:bg-white transition-colors" />
                </div>
              </div>
            </motion.div>

            {/* Card 3 — Dark Seinen */}
            <motion.div variants={fadeInUp} className="perspective-card">
              <div className="card-inner group relative bg-card-dark border border-gray-800 p-3 hover:border-gray-400 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#1a1a1c]">
                <div className="h-64 sm:h-80 overflow-hidden border border-gray-800 relative">
                  <img alt="Seinen Style" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500 grayscale brightness-75 group-hover:brightness-100" src={IMG.seinen} />
                </div>
                <div className="pt-6 pb-2 px-2">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border border-gray-400 px-2 py-0.5 rounded-sm">Tech 03</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3 text-white group-hover:text-gray-300 transition-colors">Dark Seinen</h3>
                  <p className="text-gray-400 text-sm mb-4 font-light">Hyper-detailed cross-hatching and cinematic lighting. Inspired by Berserk and Vagabond.</p>
                  <div className="w-full h-px bg-gray-800 group-hover:bg-gray-400 transition-colors" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-ink-blue hand-drawn-font text-4xl sm:text-5xl block mb-2">HOW</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter italic text-white">IT WORKS</h2>
              <p className="text-gray-400 max-w-md mx-auto mt-4">From idea to finished manga in four simple steps. No artistic skills required.</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {STEPS.map((s, i) => (
              <motion.div key={s.num} variants={fadeInUp} className="relative group">
                {/* Connector */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-gray-700 via-ink-blue/30 to-transparent z-0" />
                )}
                <div className="relative bg-card-dark border border-gray-800 p-6 hover:border-ink-blue transition-all duration-300 group-hover:-translate-y-2 h-full">
                  {/* Number */}
                  <div className="absolute -top-4 -right-2 w-12 h-12 bg-deep-charcoal border-2 border-ink-blue flex items-center justify-center font-black text-ink-blue hand-drawn-font text-lg transform rotate-3">
                    {s.num}
                  </div>
                  <h3 className="text-lg font-black text-white mb-3 mt-2 group-hover:text-ink-blue transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{s.desc}</p>
                  <div className="mt-4 w-8 h-px bg-ink-blue/50 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ GALLERY ══════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-surface relative" id="gallery">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-ink-blue hand-drawn-font text-4xl sm:text-5xl block mb-2">COMMUNITY</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter italic text-white">GALLERY</h2>
              <p className="text-gray-400 max-w-lg border-l-4 border-ink-blue pl-4 mt-4">Explore manga created by our community. Every piece below was generated from a simple text prompt.</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <button className="px-8 py-3 border-2 border-ink-blue text-ink-blue text-sm font-bold hover:bg-ink-blue hover:text-white transition-all">VIEW ALL →</button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {GALLERY_ITEMS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={`group bg-card-dark border ${item.color} p-3 hover:border-ink-blue transition-all duration-300 hover:shadow-[6px_6px_0px_0px_#1a1a1c] cursor-pointer`}
              >
                <div className={`h-48 sm:h-56 bg-gradient-to-br ${item.bg} border border-gray-800 relative overflow-hidden group-hover:border-ink-blue transition-colors`}>
                  {/* Manga panel image */}
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-x-3 inset-y-0 border-l border-r border-gray-700/40" />
                  {/* Genre tag */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/60 text-xs font-bold text-gray-300 uppercase tracking-widest">{item.genre}</div>
                </div>
                <div className="pt-4 pb-2 px-2">
                  <h3 className="text-lg font-black text-white group-hover:text-ink-blue transition-colors">{item.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500">{item.author}</span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <span className="text-red-400">♥</span> {item.likes}
                    </span>
                  </div>
                  <div className="w-full h-px bg-gray-800 group-hover:bg-ink-blue transition-colors mt-3" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ PRICING CTA ══════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 relative" id="pricing">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto p-8 sm:p-12 text-center relative overflow-hidden border-2 border-ink-blue/30 bg-card-dark"
        >
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ink-blue" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ink-blue" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ink-blue" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ink-blue" />

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            UNLEASH YOUR <span className="text-ink-blue hand-drawn-font">CREATIVITY</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
            Join over 50,000 creators. Whether you're an aspiring mangaka or a seasoned pro, MangaAI Pro provides the tools to build your universe.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <button className="w-full sm:w-auto bg-ink-blue text-white px-8 sm:px-12 py-4 font-black text-lg sm:text-xl hover:bg-white hover:text-black transition-all shadow-[5px_5px_0px_0px_#ffffff] hover:shadow-[2px_2px_0px_0px_#ffffff] hover:translate-x-1 hover:translate-y-1 border-2 border-ink-blue">
                GO PRO - $12/mo
              </button>
              <p className="text-xs text-gray-500 mt-3 font-mono">Priority processing &amp; 4K exports</p>
            </div>
            <div className="flex flex-col items-center">
              <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 sm:px-12 py-4 font-black text-lg sm:text-xl hover:bg-white hover:text-black transition-all hover:shadow-[2px_2px_0px_0px_#2E5CFF]">
                FREE FOREVER
              </button>
              <p className="text-xs text-ink-blue mt-3 font-bold uppercase tracking-widest">Student Discount Applied</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="py-10 sm:py-12 border-t border-white/10 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ink-blue rounded flex items-center justify-center border border-white/20">
              <span className="text-[10px] text-white font-black">M</span>
            </div>
            <span className="font-black tracking-tighter text-sm text-gray-300">
              MANGA<span className="text-ink-blue">AI</span> PRO
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <a className="hover:text-ink-blue transition-colors" href="#">Privacy</a>
            <a className="hover:text-ink-blue transition-colors" href="#">Terms</a>
            <a className="hover:text-ink-blue transition-colors" href="#">Twitter</a>
            <a className="hover:text-ink-blue transition-colors" href="#">Discord</a>
          </div>
          <p className="text-xs text-gray-600 font-mono">© 2025 MangaAI Pro. All Rights Reserved.</p>
        </div>
      </footer>

      {/* ══════════════ MOBILE BADGE ══════════════ */}
      <div className="fixed bottom-6 right-6 z-[100] md:hidden">
        <div className="bg-ink-blue text-white px-4 py-2 rounded-sm border border-white font-bold text-xs shadow-xl animate-pulse-glow">
          STUDENTS FREE
        </div>
      </div>
    </div>
  );
}
