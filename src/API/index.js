const url = "https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players"



export async function fetchAllPlayers() {
    const response = await fetch(url);
    const result = await response.json();
    return result.data.players;
  }
  
  export async function fetchPlayerById(id) {
    const response = await fetch(`${url}/${id}`);
    const result = await response.json();
    return result.data.player;
  }
  
  export async function deletePuppyById(id) {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  }
  
  export async function createPuppy(name, breed) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed,
      }),
    });
    const result = await response.json();
    return result;
  }