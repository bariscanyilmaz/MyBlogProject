import { Component } from '@angular/core';
import { DataService } from './service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'contact-app',
    templateUrl: './Views/contact.component.html'
})
export class ContactComponent {

    name = 'Contact Component';
    state: boolean = false;
    chaptchaValid: boolean = false;
    model = new contactPost("", null, "", "");
    pattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_ {|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$";

    constructor(private post: DataService, private toastService: ToastrService) {}

    checkVale(e: any) {
        if (e.which >= 48 && e.which <= 57) {
            return true;
        } else {
            return false;
        }
    }

    checkValeStr(e: any) {
        if (e.which < 48 || e.which > 57) {
            return true;
        } else {
            return false;
        }
    }


    postForm() {
        this.post.post(this.model).subscribe(
            (result: boolean) => {
                this.state = result;
                this.toastMessage();
            } 
        )
    }

    toastMessage() {
        if (this.state) {
            this.toastService.success("Mesajınız başarılı şekilde iletilmiştir", "Başarılı");
        } else {
            this.toastService.warning("Bir hata yüzünden mesajınızı iletemdik ütfen tekrar deneyiniz", "Hata");
        }
    }

    private recaptchaSiteKey = '6Le1H04UAAAAAPBvCZw3mBlP5hLUTT8nChmZYYse';

    private onCaptchaComplete(response: any) {
        if (response.success) {
            this.chaptchaValid = true;
        }
    }

}

export class contactPost {

    NameSurname: string;
    PhoneNumber: number;
    Mail: string;
    Message: string;

    constructor(nameSurname: string, phoneNumber: number, email: string, message: string) {
        this.NameSurname = nameSurname;
        this.PhoneNumber = phoneNumber;
        this.Mail = email;
        this.Message = message;
    }
    
}