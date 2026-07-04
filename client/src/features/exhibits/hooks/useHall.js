import { useParams } from "react-router-dom";

import { getEraBySlug } from "../../../services/eraService";
import { getDinosaursByEra } from "../../../services/dinosaurService";

function useHall() {
  const { era } = useParams();

  const currentEra = getEraBySlug(era);
  const dinosaurs = getDinosaursByEra(era);

  return {
    currentEra,
    dinosaurs,
  };
}

export default useHall;