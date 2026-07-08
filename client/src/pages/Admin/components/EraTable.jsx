import { useEffect, useState } from "react";

import { getAllEras, deleteEra } from "../../../services/eraService";

import EraForm from "./EraForm";
import DeleteModal from "./DeleteModal";

function EraTable() {
  const [eras, setEras] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [selected, setSelected] = useState(null);

  async function loadEras() {
    try {
      const data = await getAllEras();
      setEras(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadEras();
  }, []);

  async function handleDelete() {
    try {
      const token = localStorage.getItem("token");

      await deleteEra(selected.id, token);

      setShowDelete(false);
      setSelected(null);

      loadEras();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Eras
        </h2>

        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700"
        >
          Add Era
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-neutral-800">
        <table className="w-full bg-neutral-900">
          <thead>
            <tr className="border-b border-neutral-700 bg-neutral-800">
              <th className="p-4 text-left">Name</th>
              <th className="text-left">Duration</th>
              <th className="text-left">Climate</th>
              <th className="text-left">Dinosaurs</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {eras.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="p-8 text-center text-neutral-400"
                >
                  No eras found.
                </td>
              </tr>
            ) : (
              eras.map((era) => (
                <tr
                  key={era.id}
                  className="border-b border-neutral-800"
                >
                  <td className="p-4 text-white">
                    {era.name}
                  </td>

                  <td className="text-neutral-300">
                    {era.duration}
                  </td>

                  <td className="text-neutral-300">
                    {era.climate}
                  </td>

                  <td className="text-neutral-300">
                    {era.dinosaurs?.length ?? 0}
                  </td>

                  <td className="space-x-2 text-center">
                    <button
                      onClick={() => {
                        setEditing(era);
                        setShowForm(true);
                      }}
                      className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        setSelected(era);
                        setShowDelete(true);
                      }}
                      className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showForm && (
        <EraForm
          era={editing}
          onClose={() => {
            setShowForm(false);
            setEditing(null);
            loadEras();
          }}
        />
      )}

      {showDelete && selected && (
        <DeleteModal
          itemName={selected.name}
          itemLabel="Era"
          onCancel={() => {
            setShowDelete(false);
            setSelected(null);
          }}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
}

export default EraTable;