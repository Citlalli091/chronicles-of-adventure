const url = "https://coa-back.herokuapp.com";

const API = {
  getWorldsByType:worldType=>{
    return fetch(`${url}/api/worlds/type/${worldType}`)
    .then(res=>{
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`Failed to fetch worlds with type ${worldType}`);
      }
    })
  },
  getOneWorld:worldId=>{
    return fetch(`${url}/api/worlds/${worldId}`)
    .then(res=>{
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`Failed to fetch world with ID ${worldId}`);
      }
    })
  },
};

export default API;
