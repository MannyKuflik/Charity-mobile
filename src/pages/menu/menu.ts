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
  private settingsPage;
  private portfolioPage;
  private charityList;

  @ViewChild(Nav) nav: Nav;

  // pages: PageInterface [] = [
  //   { title: 'List of Charities', pageName: CharityListPage}
  // ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = ProfilePage;
    this.settingsPage = SettingsPage;
    this.portfolioPage = PortfolioPage;
    this.charityList = CharityListPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(p) {
    this.rootPage = p;
  }
}
