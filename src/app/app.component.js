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
var AppComponent = (function () {
    function AppComponent(cityCardService) {
        this.cityCardService = cityCardService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityCardService.getCities().then(function (cities) { return _this.cities = cities; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './src/app/app.component.html',
            styles: [String(require('./app.component.css'))],
            directives: [header_component_1.HeaderComponent],
            providers: [cityCard_service_1.CityCardService]
        }), 
        __metadata('design:paramtypes', [cityCard_service_1.CityCardService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map