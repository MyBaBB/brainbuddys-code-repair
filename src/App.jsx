import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AMainFrontPage from "./Pages/AMainFrontPageFolder/AMainFrontPage";
import { Navigate } from "react-router-dom";
import "./App.css";
import Zenith from "./Pages/Zenith";

const App = () => {
  return (
    <main className="text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Zenith />} />
          <Route path="/amainfrontpage" element={<AMainFrontPage />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
