import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import DinosaurTable from "./components/DinosaurTable";
import EraTable from "./components/EraTable";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(circle_at_10%_0%,rgba(34,197,94,0.06)_0%,transparent_35%)] text-white">
      <div className="flex">

        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="min-w-0 flex-1">

          <Header onMenuClick={() => setSidebarOpen(true)} />

          <main className="p-4 sm:p-8">

            <StatsCards />

            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-6 w-1 rounded-full bg-green-500" />
                <h2 className="font-display text-2xl text-white">Eras</h2>
              </div>
              <EraTable />
            </div>

            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-6 w-1 rounded-full bg-green-500" />
                <h2 className="font-display text-2xl text-white">Dinosaurs</h2>
              </div>
              <DinosaurTable />
            </div>

          </main>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;