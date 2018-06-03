import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { CharityListPage } from '../charity-list/charity-list';
import { PortfolioPage } from '../portfolio/portfolio';
import { DonationsPage } from '../donations/donations';

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
    this.user.firstname = "Connor";
    this.user.lastname = "Haynes";
    this.user.email = this.navParams.get("username");
    this.user.password = this.navParams.get("password");
  }

  navToCharityList() {
    this.navCtrl.push(CharityListPage);
  }

  navToPortfolio() {
    this.navCtrl.push(PortfolioPage);
  }

}
