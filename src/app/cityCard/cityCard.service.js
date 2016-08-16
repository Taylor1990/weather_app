"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var mock_cities_1 = require('./mock-cities');
require('rxjs/add/operator/toPromise');
var CityCardService = (function () {
    function CityCardService(http) {
        this.http = http;
    }
    CityCardService.prototype.getCities = function () {
        return Promise.resolve(mock_cities_1.CITIES);
    };
    CityCardService.prototype.getWeather = function (city) {
        var open_weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
        return this.http.get(open_weather + city + '&appid=13cb7fc7bbcbb873b6c84b9e84df4507').
            toPromise().then(function (response) { return response.json(); });
    };
    CityCardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CityCardService);
    return CityCardService;
}());
exports.CityCardService = CityCardService;
//# sourceMappingURL=cityCard.service.js.map