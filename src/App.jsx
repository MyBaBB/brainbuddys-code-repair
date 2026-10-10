import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/AMainFrontPageFolder/HomePage.jsx";
import BrettPage from "./Pages/BrettFolder/Brett";
import AmberPage from "./Pages/AmberFolder/Amber";
import BlairPage from "./Pages/BlairFolder/Blair";
import BrucePage from "./Pages/BruceFolder/Bruce";
import Zenith from "./Pages/Zenith";
import "./App.css";

const App = () => {
  return (
    <main className="text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Zenith />} />
          <Route path="/frontpage" element={<HomePage />} />
          <Route path="/brett" element={<BrettPage />} />
          <Route path="/amber" element={<AmberPage />} />
          <Route path="/blair" element={<BlairPage />} />
          <Route path="/bruce" element={<BrucePage />} />

          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;