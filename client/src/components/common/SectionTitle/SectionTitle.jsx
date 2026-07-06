function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-5xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;