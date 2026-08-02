import CircuitText from "./CircuitText";

export default function SectionHeader({ tag, title, lead }) {
  return (
    <div className="mb-16">
      <div className="inline-flex items-center rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.25em] text-electric-cyan font-semibold mb-5">
        {tag}
      </div>
      <CircuitText
        as="h2"
        text={title}
        className="block text-4xl md:text-6xl font-black tracking-tight text-white mb-6"
      />
      <p className="max-w-3xl text-lg text-[#E0E6ED] leading-relaxed">
        {lead}
      </p>
    </div>
  )
}
