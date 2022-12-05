import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import CreatePuppyForm from "./components/CreatePuppyForm";
import Nav from "./components/Nav.jsx";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/createPup" element={<CreatePuppyForm />} />
      </Routes>
    </div>
  );
}

export default App;