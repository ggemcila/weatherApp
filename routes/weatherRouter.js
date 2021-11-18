const express = require('express');
const router = express.Router();
const getWeather = require('../lib/getWeather');

router.get('/', (req,res) => {
    res.render('weather');
});

router.post('/', async(req,res) => {
    let location = req.body.city;
    let countryCode = req.body.code;
    let data = await getWeather(location, countryCode);

    if (data.cod == '404') {
        res.render('weather', {
            err: 'The provided location doesn\'t exist'
        });
        return;
    }
    let name = data.name;
    let Temperature = data.main.temp;
    let Description = data.weather[0].description;
    res.render('weather', {
        name,
        data: { Description, Temperature},
        dataExists: true  
    });
});

module.exports = router;