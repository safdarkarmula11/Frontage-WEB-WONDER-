function TimelineNav() {
  return (
    <section className="sticky top-16 z-40 border-y border-neutral-800 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-4">
        <a
          href="#triassic"
          className="font-medium text-green-400 transition hover:text-green-300"
        >
          Triassic
        </a>

        <a
          href="#jurassic"
          className="font-medium text-green-400 transition hover:text-green-300"
        >
          Jurassic
        </a>

        <a
          href="#cretaceous"
          className="font-medium text-green-400 transition hover:text-green-300"
        >
          Cretaceous
        </a>

        <a
          href="#extinction"
          className="font-medium text-green-400 transition hover:text-green-300"
        >
          Extinction
        </a>
      </div>
    </section>
  );
}

export default TimelineNav;