import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import DinosaurTable from "./components/DinosaurTable";
import EraTable from "./components/EraTable";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="flex">

        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="min-w-0 flex-1">

          <Header onMenuClick={() => setSidebarOpen(true)} />

          <main className="p-4 sm:p-8">

            <StatsCards />

            <div className="mt-10">
              <EraTable />
            </div>

            <div className="mt-10">
              <DinosaurTable />
            </div>

          </main>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;