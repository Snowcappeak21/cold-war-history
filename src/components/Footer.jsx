import content from '../content';

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2520] py-12 text-center">
      <p
        className="text-xs text-muted tracking-[0.2em] uppercase"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {content.footer.attribution}
      </p>
    </footer>
  );
}
