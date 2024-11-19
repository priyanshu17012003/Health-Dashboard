import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MetricsCard from "../components/MetricsCard";
import BarChart from "../components/BarChart";
import RecoveryChart from "../components/RecoveryChart";
import PatientsDetails from "../components/PatientsDetails";
import PatientsRecord from "../components/PatientsRecord";

function Home() {
  return (
    <>
      <div className="flex flex-row flex-auto">
        <Sidebar/>
        <div className="flex flex-col flex-auto">
          <Header />
          <MetricsCard />

          <div className="p-3 flex flex-col md:flex-row gap-4 w-full">
            <div className="w-full md:w-1/2 h-full">
              <BarChart />
            </div>
            <div className="w-full md:w-1/2 h-full">
              <RecoveryChart />
            </div>
          </div>

          

          <PatientsRecord />

        </div>
      </div>
    </>
  );
}

export default Home;
