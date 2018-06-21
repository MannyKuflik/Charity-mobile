import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProfilePage } from "../profile/profile";
import { Http } from "@angular/http";
import { AuthServ } from '../../authserv';
import { MenuPage } from "../menu/menu";
import { RegistrationPage } from "../registration/registration";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public authService: AuthServ) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login() {
    // this.http
    //   .post(this.authService.getBaseUrl() + "/login", {
    //     email: this.email,
    //     password: this.password
    //   })
    //   .subscribe(
    //     result => {
    //       var UserToken = result.json();
    //       localStorage.setItem("Token", UserToken.token);
    //       this.navCtrl.setRoot(MenuPage);
    //       this.navCtrl.popToRoot();
    // this.navCtrl.setRoot(MenuPage);
    // this.navCtrl.popToRoot();
    //       console.log(result.json().firstname);
    //       var user = result.json();


    //       // Our username and password (on this) should have data from the user
    //       this.navCtrl.push(ProfilePage, {
    //         email: this.email,
    //         password: this.password,
    //         firstname: user.firstname
    //       });
    //     },

    //     error => {
    //       console.log(error);
    //   }
    // );
    let cb = (err) => {
      if (err) {
        return;
      }
      // this.navCtrl.setRoot(ProfilePage);
      this.navCtrl.setRoot(MenuPage);
      this.navCtrl.popToRoot();
    }
    this.authService.login(this.email, this.password, cb)


  }
  register() {
    this.navCtrl.push(RegistrationPage);
  }
}
