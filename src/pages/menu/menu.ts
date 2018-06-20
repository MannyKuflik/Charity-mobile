import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav, IonicPage } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { CharityListPage } from '../charity-list/charity-list';
import { SettingsPage } from '../settings/settings';
import { PortfolioPage } from '../portfolio/portfolio';
import { HomePage } from '../home/home';

// export interface PageInterface {
//   title: string;
//   pageName: string;
//   tabComponent?: any;
//   index?: number;
//   icon: string;
// }

@IonicPage()
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
    this.profilePage = ProfilePage;
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

  // navigateToProfile() {
  //   this.navCtrl.push(this.profilePage);
  // }
  // navigateToSettings() {
  //   this.navCtrl.push(this.settingsPage);
  // }
  
  navigateToHome() {
    localStorage.clear();
    this.navCtrl.push(HomePage);
}

  openPage(p) {
    this.rootPage = p;
  }
} 
