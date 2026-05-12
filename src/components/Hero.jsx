import { motion } from 'framer-motion';
import content from '../content';
import DustParticles from './DustParticles';

export default function Hero() {
  const { kicker, title, subtitle, byline } = content.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Dust particles */}
      <DustParticles />

      {/* Content */}
      <div className="relative z-20 text-center max-w-3xl">
        {/* Kicker / metadata strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs tracking-[0.3em] uppercase text-amber mb-8"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {kicker}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl leading-[1.1] mb-6 text-cream"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-muted italic mb-8"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          {subtitle}
        </motion.p>

        {/* Byline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-sm text-muted"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {byline}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-amber/40" />
      </motion.div>
    </section>
  );
}
