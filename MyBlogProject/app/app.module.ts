import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog.component';
import { ContactComponent } from './contact.component';
import { DataService } from './service';
import {
    ToastrModule,
    ToastNoAnimation,
    ToastNoAnimationModule,
} from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { Ng2GoogleRecaptchaModule } from 'ng2-google-recaptcha';

@NgModule({
    imports: [BrowserModule, ToastNoAnimationModule,
        ToastrModule.forRoot({
            toastComponent: ToastNoAnimation,
        }), FormsModule, Ng2GoogleRecaptchaModule, HttpClientModule],
    declarations: [BlogComponent, ContactComponent],
    bootstrap: [BlogComponent, ContactComponent],
    providers: [ DataService]
})
export class AppModule { }
