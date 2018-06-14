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
  public dob: string;
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
          password: this.password,
          dob: this.dob,
        })
        .subscribe(
          result => {
            console.log(result);
  
            this.navCtrl.push(LoginPage, {
              firstname: this.firstname,
              lastname: this.lastname,
              dob: this.dob,
              email: this.email,
              password: this.password,
            });
          },
  
          error => {
            console.log(error);
          }
        ); 
    
  }
}