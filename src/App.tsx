import Grid from "./components/Grid";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Episodes from "./components/Episodes";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route path="/characters/:slug" element={<Details />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </Router>
  );
}

export default App;
