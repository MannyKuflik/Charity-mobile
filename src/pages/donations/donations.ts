import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Charity } from '../../models/charity';
import { CharityProfilePage } from '../charity-profile/charity-profile';
import { User } from '../../models/user';
import { DEFAULT_PACKAGE_URL_PROVIDER } from '@angular/platform-browser-dynamic/src/compiler_factory';
import { ProfilePage } from '../profile/profile';
import { PortfolioPage } from '../portfolio/portfolio';

@Component({
  selector: 'page-donations',
  templateUrl: 'donations.html',
})
export class DonationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

navToPortfolioTakeTwo() {
  this.navCtrl.push(PortfolioPage);
}  
}