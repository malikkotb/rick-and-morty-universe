import Grid from "./components/Grid";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Episodes from "./components/Episodes";
import AppHeader from "./components/Header";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><AppHeader /><Grid /></>} />
        <Route path="/characters/:slug" element={<><AppHeader /><Details /></>} />
        <Route path="/episodes" element={<><AppHeader /><Episodes /></>} />
      </Routes>
    </Router>
  );
}

export default App;
