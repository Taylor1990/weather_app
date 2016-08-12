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
var city_1 = require('./city');
var cityCard_service_1 = require('./cityCard.service');
var CityCardComponent = (function () {
    function CityCardComponent(cityCardService) {
        this.cityCardService = cityCardService;
    }
    CityCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityCardService.getTemperature(this.city.name).then(function (response) { return _this.temp = Math.round(response.main.temp - 273.15); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', city_1.City)
    ], CityCardComponent.prototype, "city", void 0);
    CityCardComponent = __decorate([
        core_1.Component({
            selector: 'city-card',
            template: require('./cityCard.component.html'),
            styles: [String(require('./cityCard.component.css'))]
        }), 
        __metadata('design:paramtypes', [cityCard_service_1.CityCardService])
    ], CityCardComponent);
    return CityCardComponent;
}());
exports.CityCardComponent = CityCardComponent;
//# sourceMappingURL=cityCard.component.js.map