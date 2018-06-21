import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { decode} from 'jsonwebtoken';
import { ProfilePage } from '../profile/profile';
import { Http } from "@angular/http";
import { AuthServ } from '../../authserv';


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
  npassword: string;
  cpassword: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public http: Http, public authService: AuthServ) {
    this.token = localStorage.getItem("TOKEN");
    var details = decode(this.token);
    this.userid = (details as any).user.id;
    this.firstname = (details as any).user.firstname;
    this.lastname = (details as any).user.lastname;
    this.email = (details as any).user.email;
    this.password = "";
    this.npassword = "";
    this.cpassword = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  update() {
    if (this.npassword == this.cpassword) {
    this.http
    .put(this.authService.getBaseUrl() + "/users/settings", {
      user: {
        id: this.userid,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      },
      npassword: this.npassword,
    })
    .subscribe(
      result => {
        var UserToken = result.json();
        localStorage.clear();
        localStorage.setItem("TOKEN", UserToken.token);
        this.navCtrl.setRoot(ProfilePage);
      },
      error => {
        console.log(error);
      }
    );
  }
  else {
    alert("New passwords do not match!")
  }
}

}
