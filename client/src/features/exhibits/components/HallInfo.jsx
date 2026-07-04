function HallInfo({ era }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-stone-900 p-6">
          <h3>Climate</h3>
          <p>{era.climate}</p>
        </div>

        <div className="rounded-xl bg-stone-900 p-6">
          <h3>Duration</h3>
          <p>{era.duration}</p>
        </div>

        <div className="rounded-xl bg-stone-900 p-6">
          <h3>Dominant Life</h3>
          <p>{era.dominantLife}</p>
        </div>
      </div>
    </section>
  );
}

export default HallInfo;