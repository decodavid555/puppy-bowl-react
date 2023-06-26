import { useState, useEffect } from "react";
import { fetchSinglePlayer, removePlayer } from "../API";
import { useParams, useNavigate } from "react-router-dom";

function SinglePlayer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState({});

  useEffect(() => {
    async function fetchPlayer() {
      const fetchedPlayer = await fetchSinglePlayer(id);
      setPlayer(fetchedPlayer);
    }
    fetchPlayer();
  }, []);

  console.log(player);

  return (
    <div>
      <img style={{ height: "300px", }} src={player.imageUrl}/>
      <h4>{player.name}</h4>
      <button
        onClick={async () => {
          await removePlayer(player.id);
          navigate(`/`);
        }}
      >
        Delete Puppy
      </button>
    </div>
  );
}

export default SinglePlayer;