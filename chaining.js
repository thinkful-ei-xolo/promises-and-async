
const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;

const bootes = {
    name: "Bootes",
    meaning: "Herdsman",
    starsWithPlanets: 5,
    quadrant: "NQ3",
};

axios.get(constellationsUrl).then(({ data }) => {
    console.log(data);
    return axios.post(constellationsUrl, bootes);
}).then(({ data }) => console.log(data));