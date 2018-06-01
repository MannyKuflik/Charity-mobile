import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProfilePage } from "../profile/profile";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login() {
    this.navCtrl.push(ProfilePage, {
      username: this.username,
      password: this.password
    });
  }
}
