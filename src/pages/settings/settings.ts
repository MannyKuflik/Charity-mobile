import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { decode} from 'jsonwebtoken';
import { ProfilePage } from '../profile/profile';


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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.token = localStorage.getItem("TOKEN");
    var details = decode(this.token);
    this.firstname = (details as any).user.firstname;
    this.firstname = (details as any).user.lastname;
    this.firstname = (details as any).user.email;
    this.firstname = (details as any).user.password;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  update(){
    this.navCtrl.push(ProfilePage);
  }

}
