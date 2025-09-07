import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AMainFrontPage from "./Pages/AMainFrontPageFolder/AMainFrontPage";
import FallbackScreen from "./Pages/AMainFrontPageFolder/FrontPageComponents/DisplayComponentFolder/FallbackScreen";
import "./App.css";
import Zenith from "./Pages/Zenith";

const App = () => {
  return (
    <main className="h-screen w-screen overflow-hidden text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Zenith />} />
          <Route path="/AMainFrontPage" element={<AMainFrontPage />} />
          <Route path="/FallbackScreen" element={<FallbackScreen />} />
          
        </Routes>
      </Router>
    </main>
  );
};

export default App;
