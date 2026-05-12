import { motion } from 'framer-motion';
import content from '../content';
import TypewriterHeading from './TypewriterHeading';

export default function SourcesSection() {
  const { sources } = content;

  return (
    <section
      data-section="sources"
      className="max-w-3xl mx-auto px-6 py-24 md:py-32"
    >
      <TypewriterHeading number="V" title="Sources" />

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        {sources.map((source, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="text-amber text-xs mt-1.5 shrink-0"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              [{String(i + 1).padStart(2, '0')}]
            </span>
            <div>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-amber transition-colors underline decoration-amber/30 underline-offset-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {source.title}
              </a>
              <span
                className="block text-xs text-muted mt-0.5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {source.publisher}
              </span>
            </div>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
