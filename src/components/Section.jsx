import { motion } from 'framer-motion';
import TypewriterHeading from './TypewriterHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Section({ id, number, title, children }) {
  return (
    <section
      data-section={id}
      className="max-w-3xl mx-auto px-6 py-24 md:py-32"
    >
      <TypewriterHeading number={number} title={title} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function Paragraph({ children }) {
  return (
    <motion.p
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="text-lg leading-relaxed text-cream/90 mb-6"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {children}
    </motion.p>
  );
}

export function PullQuote({ children }) {
  return (
    <motion.blockquote
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="border-l-2 border-amber/50 pl-6 my-8 text-xl italic text-cream/80"
      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
    >
      "{children}"
    </motion.blockquote>
  );
}
