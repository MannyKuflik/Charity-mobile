import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { User } from '../../models/user';
import { CharityListPage } from '../charity-list/charity-list';
import { PortfolioPage } from '../portfolio/portfolio';
import { DonationsPage } from '../donations/donations';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User();
  }

  ionViewDidLoad() {
    this.user.firstname = this.navParams.get('firstname');
    this.user.lastname = this.navParams.get('lastname');
    this.user.email = this.navParams.get("email");
    this.user.password = this.navParams.get("password");
  }

  navToCharityList() {
    this.navCtrl.push(CharityListPage);
  }

  navToPortfolio() {
    this.navCtrl.push(PortfolioPage);
  }

  navigateToHome() {
    this.navCtrl.push(HomePage);
    // this.navCtrl.popToRoot();
    // this.app.getRootNav().setRoot(HomePage);
}

  navigateToSettings() {
    this.navCtrl.push(SettingsPage);
  }

}
