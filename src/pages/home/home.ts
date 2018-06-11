import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { RegistrationPage } from "../registration/registration";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  posts: any;

  constructor(public navCtrl: NavController, public http: Http) {}
  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }
  navigateToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }
}
