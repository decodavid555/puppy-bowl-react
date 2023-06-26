const URL = "https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players"



export const fetchAllPlayers = async() => {
  try{
    const response = await fetch(`${URL}`);
    const result = await response.json();
    if (result.error) throw result.error
    return result.data.players;
  } catch (error){
    console.error('Sorry! Trouble fetching players', error);
  }
};
  
export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${URL}/players/${playerId}`);
    const result = await response.json();
    if (result.error) throw result.error;
    return result.data.player;
  } catch (error){
    console.error(`Oops! Cannot fetch player #${playerId}, error`);
  }
};

export const  addNewPlayer = async (playerObject) => {
  try {
    const response = await fetch(`${URL}/players`,{
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerObject),
    });
    const result = await response.json();
    if (result.error) throw result.error;
    return result.data.player;
  } catch (error) {
    console.error('Oh No! Cannot add new player!', error);
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${URL}/players/${playerId}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    if (result.error) throw result.error;
    return;
  } catch (error){
    console.error(
      `404, Currently cannot remove player #${playerId} from the roster!`,
      error
    );
  }
};

export const createPuppy = async (name, breed) => {
  try {
    const playerObject = {
      name: name,
      breed: breed,
    };
    const newPlayer = await addNewPlayer(playerObject);
    console.log('New player created:', newPlayer);
  } catch (error) {
    console.error('Failed to create a new player:', error);
  }
};