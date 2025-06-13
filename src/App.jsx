import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AMainFrontPage from "./Pages/AMainFrontPageFolder/AMainFrontPage";
import "./App.css";
import Zenith from "./Pages/Zenith";

const App = () => {
  return (
    <main className=" overflow-hidden h-screen w-screen  text-white">
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
