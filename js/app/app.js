
(function () {
    'use strict';

    var _atomic;
    var _weatherEndpoint = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=16e48e710562389863f4671cb6166d9f';

    function init () {

        console.log('init');
        
        _atomic = window.atomic;
        _atomic.get(_weatherEndpoint).success(dataReceived).error(dataError);
    }

    function dataReceived (data) {
        console.log('dataReceived:', data);
    }

    function dataError (data) {

        console.log('dataError:', data);
    }

    document.addEventListener('DOMContentLoaded', init);
})();