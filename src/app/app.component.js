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
var header_component_1 = require('./header/header.component');
var cityCard_service_1 = require('./cityCard/cityCard.service');
var cityCard_component_1 = require('./cityCard/cityCard.component');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var AppComponent = (function () {
    function AppComponent(cityCardService) {
        this.cityCardService = cityCardService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityCardService.getCities().then(function (cities) {
            _this.cities = cities;
            var _loop_1 = function(i) {
                _this.cityCardService.getWeather(cities[i].name).then(function (response) {
                    _this.cities[i].humidity = response.main.humidity;
                    _this.cities[i].pressure = response.main.pressure;
                    _this.cities[i].temp = Math.round(response.main.temp - 273.15);
                    _this.cities[i].temp_max = Math.round(response.main.temp_max - 273.15);
                    _this.cities[i].temp_min = Math.round(response.main.temp_min - 273.15);
                    _this.cities[i].clouds = response.weather[0].main;
                    _this.cities[i].wind = response.wind.speed;
                });
            };
            for (var i = 0; i < cities.length; i++) {
                _loop_1(i);
            }
        });
    };
    AppComponent.prototype.onClick = function (modal) {
        modal.open();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './src/app/app.component.html',
            styles: [String(require('./app.component.css'))],
            directives: [header_component_1.HeaderComponent, cityCard_component_1.CityCardComponent, ng2_bs3_modal_1.MODAL_DIRECTIVES],
            providers: [cityCard_service_1.CityCardService]
        }), 
        __metadata('design:paramtypes', [cityCard_service_1.CityCardService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map