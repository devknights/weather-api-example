
(function () {
    'use strict';

    var _atomic;
    var _weatherEndpoint = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=16e48e710562389863f4671cb6166d9f';
    var _temperatureDisplayEl;

    function init () {

        _temperatureDisplayEl = document.querySelector('.temperature-display');

        _atomic = window.atomic;
        _atomic.get(_weatherEndpoint).success(dataReceived).error(dataError);

    }

    function dataReceived (data) {
        console.log(kelvinToCelcius(data.main.temp));
        _temperatureDisplayEl.innerHTML = kelvinToCelcius(data.main.temp);
    }

    function kelvinToCelcius (kelvin) {
        var zeroCelciusInKelvin = 273.15;
        return Math.round((kelvin - zeroCelciusInKelvin) * 10) / 10;
    }

    function dataError (data) {

        console.log('dataError:', data);
    }

    document.addEventListener('DOMContentLoaded', init);
})();