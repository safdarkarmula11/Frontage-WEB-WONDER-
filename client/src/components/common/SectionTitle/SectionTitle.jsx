function SectionTitle({ title, subtitle, eyebrow }) {
  return (
    <div className="mb-14 text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-500">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-4xl text-white lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-3xl text-neutral-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;