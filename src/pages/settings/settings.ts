import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { decode} from 'jsonwebtoken';
import { ProfilePage } from '../profile/profile';
import { Http } from "@angular/http";


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  token: string;
  userid: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public http: Http) {
    this.token = localStorage.getItem("TOKEN");
    var details = decode(this.token);
    this.userid = (details as any).user.id;
    this.firstname = (details as any).user.firstname;
    this.lastname = (details as any).user.lastname;
    this.email = (details as any).user.email;
    this.password = (details as any).user.password;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  update(){
    this.http
    .put("http://localhost:3000/'/users/settings'", {
      id: this.userid,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
    })
    .subscribe(
      result => {
        this.navCtrl.push(ProfilePage);
      },
      error => {
        console.log(error);
      }
    );
  }

}
