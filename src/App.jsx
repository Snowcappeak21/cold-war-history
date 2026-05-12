import content from './content';
import FilmGrain from './components/FilmGrain';
import LampLight from './components/LampLight';
import ParallaxMap from './components/ParallaxMap';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Section, { Paragraph } from './components/Section';
import SectionDivider from './components/SectionDivider';
import StorytellerSection from './components/StorytellerSection';
import InterviewSection from './components/InterviewSection';
import SourcesSection from './components/SourcesSection';
import EndStamp from './components/EndStamp';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <ParallaxMap />
      <FilmGrain />
      <LampLight />
      <Timeline />

      <main className="relative z-10">
        <Hero />

        <SectionDivider />

        <Section
          id="historical-context"
          number={content.historicalContext.sectionNumber}
          title={content.historicalContext.sectionTitle}
        >
          {content.historicalContext.paragraphs.map((text, i) => (
            <Paragraph key={i}>{text}</Paragraph>
          ))}
        </Section>

        <SectionDivider />

        <StorytellerSection />

        <SectionDivider />

        <InterviewSection />

        <SectionDivider />

        <Section
          id="reflection"
          number={content.reflection.sectionNumber}
          title={content.reflection.sectionTitle}
        >
          {content.reflection.paragraphs.map((text, i) => (
            <Paragraph key={i}>{text}</Paragraph>
          ))}
        </Section>

        <SectionDivider />

        <SourcesSection />

        <EndStamp />

        <Footer />
      </main>
    </>
  );
}
