const url = "https://coa-back.herokuapp.com";
// const url = "http://localhost:3001";

const API = {

//--User--
getUserById:userId=>{
  return fetch(`${url}/api/users/${userId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to find User with ID ${userId}`);
    }
  });
},
loginUser:(userObj)=>{
  return fetch(`${url}/api/users/login`, {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {"Content-Type": "application/json",},
  }).then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error("Failed to login user");
    }
  });
},
createUser:(userObj)=>{
  return fetch(`${url}/api/users`, {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {"Content-Type": "application/json",},
  }).then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error("Failed to create user");
    }
  });
},
verifyToken:(token)=>{
  return fetch(`${url}/api/users/verifytoken`,{
      headers:{"authorization":`Bearer ${token}`}
  }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Failed to verify token");
      }
    });
},

//--World-- 
getAllWorlds:()=>{
  return fetch(`${url}/api/worlds`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch worlds`);
    }
  })
},
getWorldsByType:worldType=>{
  return fetch(`${url}/api/worlds/type/${worldType}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch worlds with type ${worldType}`);
    }
  })
},
getWorldsByUser:userId=>{
  return fetch(`${url}/api/worlds/user/${userId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch worlds from user ${userId}`);
    }
  })
},
getOneWorld:worldId=>{
  return fetch(`${url}/api/worlds/${worldId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch world with ID ${worldId}`);
    }
  })
},
createWorld:(worldObj)=>{
  return fetch(`${url}/api/worlds`, {
    method: "POST",
    body: JSON.stringify(worldObj),
    headers: {"Content-Type": "application/json",},
  }).then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error("Failed to create world");
    }
  });
},

//--Lore--
getLoresByWorld:worldId=>{
  return fetch(`${url}/api/lores/world/${worldId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch lores from world ${worldId}`);
    }
  })
},
getOneLore:loreId=>{
  return fetch(`${url}/api/lores/${loreId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch lore with ID ${loreId}`);
    }
  })
},
createLore:(loreObj)=>{
  return fetch(`${url}/api/lores`, {
    method: "POST",
    body: JSON.stringify(loreObj),
    headers: {"Content-Type": "application/json",},
  }).then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error("Failed to create lore");
    }
  });
},

//--Location--
getLocationsByWorld:worldId=>{
  return fetch(`${url}/api/locations/world/${worldId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch locations from world ${worldId}`);
    }
  })
},
getOneLocation:locId=>{
  return fetch(`${url}/api/locations/${locId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch location with ID ${locId}`);
    }
  })
},
createLocation:(locationObj)=>{
  return fetch(`${url}/api/locations`, {
    method: "POST",
    body: JSON.stringify(locationObj),
    headers: {"Content-Type": "application/json",},
  }).then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error("Failed to create location");
    }
  });
},

//--Character--
getCharactersByWorld:worldId=>{
  return fetch(`${url}/api/characters/world/${worldId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch characters from world ${worldId}`);
    }
  })
},
getOneCharacter:charId=>{
  return fetch(`${url}/api/characters/${charId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch character with ID ${charId}`);
    }
  })
},
createCharacter:(characterObj)=>{
  return fetch(`${url}/api/characters`, {
    method: "POST",
    body: JSON.stringify(characterObj),
    headers: {"Content-Type": "application/json",},
  }).then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error("Failed to create character");
    }
  });
},

//--SideCharacter--
getSideCharactersByWorld:worldId=>{
  return fetch(`${url}/api/sidecharacters/world/${worldId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch sidecharacters from world ${worldId}`);
    }
  })
},
getOneSideCharacter:sideId=>{
  return fetch(`${url}/api/sidecharacters/${sideId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch side character with ID ${sideId}`);
    }
  })
},
createSideCharacter:(sideObj)=>{
  return fetch(`${url}/api/sidecharacters`, {
    method: "POST",
    body: JSON.stringify(sideObj),
    headers: {"Content-Type": "application/json",},
  }).then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error("Failed to create side character");
    }
  });
},

//--Adventure--
getAdventuresByWorld:worldId=>{
  return fetch(`${url}/api/adventures/world/${worldId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch adventures from world ${worldId}`);
    }
  })
},
getOneAdventure:advId=>{
  return fetch(`${url}/api/adventures/${advId}`)
  .then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Failed to fetch adventure with ID ${advId}`);
    }
  })
},
createAdventure:(adventureObj)=>{
  return fetch(`${url}/api/adventures`, {
    method: "POST",
    body: JSON.stringify(adventureObj),
    headers: {"Content-Type": "application/json",},
  }).then(res=>{
    if (res.ok){
      return res.json();
    } else {
      throw new Error("Failed to create adventure");
    }
  });
},

};

export default API;
