import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { DonationsPage } from "../donations/donations";
@Component({
  selector: 'page-charity-profile',
  templateUrl: 'charity-profile.html',
})
export class CharityProfilePage {

  public charity: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charity = this.navParams.get("charity");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityProfilePage');
  }

  navToDonations() {
    this.navCtrl.push(DonationsPage, {charity_id: this.charity.id, charity_name: this.charity.name});
  }  
}
