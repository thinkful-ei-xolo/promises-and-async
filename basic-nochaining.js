const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;

const orion = {
  name: "Orion",
  meaning: "Archer/Hunter",
  starsWithPlanets: 5,
  quadrant: "NQ3",
};

axios.get(constellationsUrl).then(({ data }) => {
  if(!data.find((constellation)=> constellation.name == orion.name)){
  axios.post(constellationsUrl, orion).then(({ data }) => console.log(data));
  } else{
      console.log("This already exists")
  }
});
