import TimelineHero from "./components/TimelineHero";
import TimelineNav from "./components/TimelineNav";
import ExtinctionSection from "./components/ExtinctionSection";

import TimelineItem from "../../components/TimelineItem/TimelineItem";
import timeline from "../../data/timeline";

function Timeline() {
  return (
    <>
      <TimelineHero />

      <TimelineNav />

      <section className="bg-black py-24">
        <div className="mx-auto max-w-6xl px-6">
          {timeline.map((era) => (
            <TimelineItem
              key={era.id}
              era={era}
            />
          ))}
        </div>
      </section>

      <ExtinctionSection />
    </>
  );
}

export default Timeline;