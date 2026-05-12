import { motion } from 'framer-motion';
import content from '../content';
import TypewriterHeading from './TypewriterHeading';
import AudioPlayer from './AudioPlayer';
import { Paragraph, PullQuote } from './Section';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function InterviewSection() {
  const { sectionNumber, sectionTitle, intro, clips } = content.interview;

  return (
    <section
      data-section="interview"
      className="max-w-3xl mx-auto px-6 py-24 md:py-32"
    >
      <TypewriterHeading number={sectionNumber} title={sectionTitle} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
      >
        <Paragraph>{intro}</Paragraph>
      </motion.div>

      <div className="space-y-16 mt-12">
        {clips.map((clip) => (
          <motion.div
            key={clip.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <AudioPlayer title={clip.title} audioFile={clip.audioFile} />
            <PullQuote>{clip.pullQuote}</PullQuote>
            <p
              className="text-sm text-muted leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {clip.transcript}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
