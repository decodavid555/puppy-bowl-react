import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css"
import Nav from "./componets/Nav";
import AllPlayers from "./componets/AllPlayers"
import SinglePlayer from "./componets/SinglePlayer"
import CreatePuppyForm from "./componets/CreatePuppyForm"


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/createPup" element={<CreatePuppyForm />} />
      </Routes>
    </div>
  );
}

export default App;