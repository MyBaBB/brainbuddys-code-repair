import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import AMainFrontPage from "./Pages/AMainFrontPageFolder/AMainFrontPage";
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
          <Route path="/amainfrontpage" element={<AMainFrontPage />} />
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