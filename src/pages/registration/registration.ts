import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProfilePage } from "../profile/profile";
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

    register() {
      this.http
        .post("http://localhost:3000/registration", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        })
        .subscribe(
          result => {
            console.log(result);
  
            this.navCtrl.push(ProfilePage, {
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              password: this.password
            });
          },
  
          error => {
            console.log(error);
          }
        ); 
    
  }
}