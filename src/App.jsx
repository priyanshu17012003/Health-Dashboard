import Home from "./pages/HomeTab";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientsTab from "./pages/PatientsTab";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<PatientsTab />} />
        </Routes>

        <Toaster />
      </Router>
    </>
  );
}

export default App;
