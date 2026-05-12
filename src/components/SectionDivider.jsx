export default function SectionDivider() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div
        className="w-full h-[1px]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, #2a2520 0, #2a2520 8px, transparent 8px, transparent 16px)',
        }}
      />
    </div>
  );
}
