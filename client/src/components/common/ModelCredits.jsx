import { useEffect, useState } from "react";
import { getAllDinosaurs } from "../../services/dinosaurService";

function ModelCredits({ compact = false }) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function loadCredits() {
      try {
        const dinosaurs = await getAllDinosaurs();

        const withCredits = Array.isArray(dinosaurs)
          ? dinosaurs.filter(
              (dino) => dino.model3d && dino.model3dCreditName
            )
          : [];

        setCredits(withCredits);
      } catch (error) {
        console.error(error);
      }
    }

    loadCredits();
  }, []);

  if (credits.length === 0) return null;

  return (
    <ul
      className={
        compact
          ? "space-y-1 text-xs text-neutral-500"
          : "space-y-1.5 text-sm text-neutral-400"
      }
    >
      {credits.map((dino) => (
        <li key={dino.id}>
          "{dino.name}" model by{" "}
          {dino.model3dCreditUrl ? (
            <a
              href={dino.model3dCreditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-300"
            >
              {dino.model3dCreditName}
            </a>
          ) : (
            dino.model3dCreditName
          )}
          {dino.model3dLicense ? `, ${dino.model3dLicense}` : ""}.
        </li>
      ))}
    </ul>
  );
}

export default ModelCredits;