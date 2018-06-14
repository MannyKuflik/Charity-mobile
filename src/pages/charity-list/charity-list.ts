import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { CharityProfilePage } from '../charity-profile/charity-profile';

@Component({
  selector: 'page-charity-list',
  templateUrl: 'charity-list.html',
})
export class CharityListPage {

  public charities: Array<Charity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    var charity1 = new Charity();
    charity1.id = 1;
    charity1.name = "Rhino Poaching";
    charity1.description = "Save the Rhinos!";
    charity1.link="www.savetherhinos.com";

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Dog Poaching";
    charity2.description = "Save the dogs!";
    charity2.link="www.savethedogs.com";

    var charity3 = new Charity();
    charity3.id = 3;
    charity3.name = "Elephant Poaching";
    charity3.description = "Save the elephants!";
    charity3.link="www.savetheelephants.com";

    var charity4 = new Charity();
    charity4.id = 4;
    charity4.name = "Lion Poaching";
    charity4.description = "Save the lions!";
    charity4.link="www.savethelions.com";

    this.charities.push(charity1);
    this.charities.push(charity2);
    this.charities.push(charity3);
    this.charities.push(charity4);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityListPage');
  }

  navigateToCharity(charity: Charity) {
    this.navCtrl.push(CharityProfilePage, {
      charity: charity
    });
  }

}
