import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { CharityListPage } from '../charity-list/charity-list';
import { SettingsPage } from '../settings/settings';
import { PortfolioPage } from '../portfolio/portfolio';

// export interface PageInterface {
//   title: string;
//   pageName: string;
//   tabComponent?: any;
//   index?: number;
//   icon: string;
// }

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  private rootPage;
  private profilePage;
  private settingsPage;
  private portfolioPage;
  private charityList;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = ProfilePage;
    this.settingsPage = SettingsPage;
    this.portfolioPage = PortfolioPage;
    this.charityList = CharityListPage;
  }

  ionViewDidLoad() {
    // if (localStorage.getItem("TOKEN")) {
    //   this.navCtrl.setRoot(ProfilePage);
    //   this.rootPage = ProfilePage;
    // }
  }

  navigateToSettings() {
    this.navCtrl.push(this.settingsPage);
  }
  

  // openPage(p) {
  //   this.rootPage = p;
  // }
}
