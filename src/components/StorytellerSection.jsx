import { motion } from 'framer-motion';
import content from '../content';
import TypewriterHeading from './TypewriterHeading';
import { Paragraph } from './Section';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function StorytellerSection() {
  const { sectionNumber, sectionTitle, paragraphs, photoCaption } = content.storyteller;

  return (
    <section
      data-section="storyteller"
      className="max-w-3xl mx-auto px-6 py-24 md:py-32"
    >
      <TypewriterHeading number={sectionNumber} title={sectionTitle} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
      >
        {/* Photo placeholder */}
        <motion.figure variants={fadeUp} transition={{ duration: 0.6 }} className="mb-10">
          <div className="relative aspect-[4/3] max-w-sm bg-[#1a1611] border border-[#2a2520] rounded overflow-hidden">
            <img
              src="/images/storyteller-photo.jpg"
              alt={photoCaption}
              className="w-full h-full object-cover opacity-90"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 items-center justify-center text-muted text-sm" style={{ fontFamily: "var(--font-mono)" }}>
              [ photo placeholder ]
            </div>
          </div>
          <figcaption
            className="mt-3 text-xs text-muted tracking-wide"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {photoCaption}
          </figcaption>
        </motion.figure>

        {paragraphs.map((text, i) => (
          <Paragraph key={i}>{text}</Paragraph>
        ))}
      </motion.div>
    </section>
  );
}
