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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_1 = require("./service");
var BlogComponent = /** @class */ (function () {
    function BlogComponent(service) {
        this.service = service;
        this.name = "Blog Component";
        this.url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ylmazbarscan";
    }
    BlogComponent.prototype.getRepos = function () {
        var _this = this;
        this.service.getRepos(this.url).subscribe(function (result) { _this.blogList = result.items; }, function (error) { alert(error); });
    };
    BlogComponent.prototype.ngOnInit = function () { this.getRepos(); };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'blog-app',
            templateUrl: './Views/blog.component.html'
        }),
        __metadata("design:paramtypes", [service_1.DataService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map