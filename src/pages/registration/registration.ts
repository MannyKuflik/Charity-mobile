import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { LoginPage } from "../login/login";
import { Http } from "@angular/http";

@Component({
  selector: "page-registration",
  templateUrl: "registration.html"
})
export class RegistrationPage {

  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;
  cpassword: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  register() {
    if (!this.password || !this.email ||
      !this.firstname || !this.lastname ||
      !this.cpassword) {
      alert("Please fill out ALL entries")
    }
    else {
      if (this.password == this.cpassword) {
        if (this.email.includes("@") && this.email.includes(".")) {
          this.http
            .post("https://full-smacked-api.herokuapp.com/registration", {
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              password: this.password,
            })
            .subscribe(
              result => {
                console.log(result);

                this.navCtrl.push(LoginPage);
              },
              error => {
                console.log(error);
              }
            );
        }
        else {
          alert("Email not valid!")
        }
      }
      else {
        alert("Passwords do not match!")
      }
    }
  }
}