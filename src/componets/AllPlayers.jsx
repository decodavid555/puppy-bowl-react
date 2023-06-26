import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API/index";
import { useNavigate } from "react-router-dom";

function AllPlayers() {
  const navigate = useNavigate();

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getAllPlayers() {
      const fetchedPlayers = await fetchAllPlayers();
      setPlayers(fetchedPlayers);
    }
    getAllPlayers();
  }, []);

  if (!players || players.length === 0) {
    return <div>No players found.</div>;
  }

  return (
    <div>
      <h4>Players:</h4>
      {players.map((player) => {
        return (
          <div key={player.id}>
            <img
              style={{
                height: "200px",
              }}
              src={player.imageUrl}
            />
            <h4>{player.name}</h4>
            <button
              onClick={() => {
                navigate(`/players/${player.id}`);
              }}
            >
              See Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default AllPlayers;