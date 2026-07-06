import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import DinosaurTable from "./components/DinosaurTable";

function Dashboard() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="flex">

        <Sidebar />

        <div className="flex-1">

          <Header />

          <main className="p-8">

            <StatsCards />

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