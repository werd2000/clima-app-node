const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5532d547f6b2af373308af98d81afe56`);

    // console.log(resp.main);
    return resp.data.main;


}

module.exports = {
    getClima
}