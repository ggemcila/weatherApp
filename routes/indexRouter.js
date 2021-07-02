const express = require('express');
const router = express.Router();
const getWeather = require('../lib/getWeather');

router.get('/', async(req,res) =>{
    let data = await getWeather("Manchester", "uk");
    console.log(data);
    let name = data.name;
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let feel_like = data.main.feel_like;
    res.render('index', {
        name,
        data: {description, temp, feel_like}
    });
});

module.exports = router;