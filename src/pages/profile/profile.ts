import { Component } from '@angular/core';
import { NavController, NavParams, App, MenuController } from 'ionic-angular';
import { User } from '../../models/user';
import { CharityListPage } from '../charity-list/charity-list';
import { PortfolioPage } from '../portfolio/portfolio';
import { DonationsPage } from '../donations/donations';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { sign, verify, decode} from 'jsonwebtoken';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public name: string;
  public token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,menu: MenuController) {
    this.token = localStorage.getItem("TOKEN");
    var details = decode(this.token);
    this.name = (details as any).user.firstname + " " + (details as any).user.lastname;
    menu.enable(true);
  }

  ionViewDidLoad() {
    this.token = localStorage.getItem("TOKEN");
    var details = decode(this.token);
    this.name = (details as any).user.firstname + " " + (details as any).user.lastname;
   console.log("updated");
    // this.user.firstname = this.navParams.get('firstname');
    // this.user.lastname = this.navParams.get('lastname');
    // this.user.email = this.navParams.get("email");
    // this.user.password = this.navParams.get("password");
  }

  navToCharityList() {
    this.navCtrl.push(CharityListPage);
  }

  navToPortfolio() {
    this.navCtrl.push(PortfolioPage);
  }

  navigateToHome() {
    localStorage.clear();
    this.navCtrl.push(HomePage);
    // this.navCtrl.popToRoot();
    // this.app.getRootNav().setRoot(HomePage);
}

  navigateToSettings() {
    this.navCtrl.push(SettingsPage);
  }

}
