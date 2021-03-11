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
    //console.log(data.data);
    return data.find(({ name }) => name === bootes.name);  //This returns true if this name already exists in our 'database'
})
    .then((exists) => {       // 'exists' holds the true or false value returned above
        if (exists) throw `Constellation "${bootes.name}" already exists.`;
        return axios.post(constellationsUrl, bootes)
            .then(({ data }) => console.log(data));
    })
    .catch(console.log);