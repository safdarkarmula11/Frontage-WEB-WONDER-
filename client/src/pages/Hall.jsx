import HallBanner from "../features/exhibits/components/HallBanner";
import HallInfo from "../features/exhibits/components/HallInfo";
import DinosaurGrid from "../features/exhibits/components/DinosaurGrid";

import useHall from "../features/exhibits/hooks/useHall";

function Hall() {
  const { currentEra, dinosaurs } = useHall();

  return (
    <>
      <HallBanner era={currentEra} />
      <HallInfo era={currentEra} />
      <DinosaurGrid dinosaurs={dinosaurs} />
    </>
  );
}

export default Hall;