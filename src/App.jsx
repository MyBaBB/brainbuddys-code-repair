import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AMainFrontPage from "./Pages/AMainFrontPageFolder/AMainFrontPage";
import "./App.css";
import Zenith from "./Pages/Zenith";

const App = () => {
  return (
    <main className="bg-slate-900">
      <Router>
        <Routes>
          <Route path="/" element={<Zenith />} />
          <Route path="/AMainFrontPage" element={<AMainFrontPage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
