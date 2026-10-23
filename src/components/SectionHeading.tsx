import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <p className="font-mono text-xs tracking-[0.25em] text-emerald-400 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">
          {description}
        </p>
      )}
    </Reveal>
  );
}
