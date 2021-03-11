const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;

async function getConstellationNameById(id) {
    const url = `${BASE_URL}/constellations/${id}`;
    try {
        const { data } = await axios.get(url);
        console.log(data.name);
        return data.name;
    } catch (error) {
        throw `Constellation with id of ${id} could not be found.`;
    }
}


getConstellationNameById("n2OEOzp").then(console.log);
//> "Libra"
getConstellationNameById("32TN5F8").then(console.log);
//Draco
getConstellationNameById("error").then(console.log).catch(console.log);