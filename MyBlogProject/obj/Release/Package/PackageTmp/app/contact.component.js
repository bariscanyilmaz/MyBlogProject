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
var ngx_toastr_1 = require("ngx-toastr");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(post, toastService) {
        this.post = post;
        this.toastService = toastService;
        this.name = 'Contact Component';
        this.state = false;
        this.chaptchaValid = false;
        this.model = new contactPost("", null, "", "");
        this.pattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_ {|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$";
        this.recaptchaSiteKey = '6Le1H04UAAAAAPBvCZw3mBlP5hLUTT8nChmZYYse';
    }
    ContactComponent.prototype.checkVale = function (e) {
        if (e.which >= 48 && e.which <= 57) {
            return true;
        }
        else {
            return false;
        }
    };
    ContactComponent.prototype.checkValeStr = function (e) {
        if (e.which < 48 || e.which > 57) {
            return true;
        }
        else {
            return false;
        }
    };
    ContactComponent.prototype.postForm = function () {
        var _this = this;
        this.post.post(this.model).subscribe(function (result) {
            _this.state = result;
            _this.toastMessage();
        });
    };
    ContactComponent.prototype.toastMessage = function () {
        if (this.state) {
            this.toastService.success("Mesajınız başarılı şekilde iletilmiştir", "Başarılı");
        }
        else {
            this.toastService.warning("Bir hata yüzünden mesajınızı iletemdik ütfen tekrar deneyiniz", "Hata");
        }
    };
    ContactComponent.prototype.onCaptchaComplete = function (response) {
        if (response.success) {
            this.chaptchaValid = true;
        }
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact-app',
            templateUrl: './Views/contact.component.html'
        }),
        __metadata("design:paramtypes", [service_1.DataService, ngx_toastr_1.ToastrService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
var contactPost = /** @class */ (function () {
    function contactPost(nameSurname, phoneNumber, email, message) {
        this.NameSurname = nameSurname;
        this.PhoneNumber = phoneNumber;
        this.Mail = email;
        this.Message = message;
    }
    return contactPost;
}());
exports.contactPost = contactPost;
//# sourceMappingURL=contact.component.js.map