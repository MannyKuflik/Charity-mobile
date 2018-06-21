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
    charity1.logoUrl = "https://upload.wikimedia.org/wikipedia/commons/6/63/Diceros_bicornis.jpg";

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Dog Poaching";
    charity2.description = "Save the dogs!";
    charity2.link="www.savethedogs.com";
    charity2.logoUrl = "https://upload.wikimedia.org/wikipedia/commons/b/ba/African_wild_dog_%28Lycaon_pictus_pictus%29.jpg";

    var charity3 = new Charity();
    charity3.id = 3;
    charity3.name = "Elephant Poaching";
    charity3.description = "Save the elephants!";
    charity3.link="www.savetheelephants.com";
    charity3.logoUrl = "https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/rf/image_960w/2010-2019/WashingtonPost/2015/10/08/Production/Health/Images/03902456-UZVE.jpg&w=1484";

    var charity4 = new Charity();
    charity4.id = 4;
    charity4.name = "Lion Poaching";
    charity4.description = "Save the lions!";
    charity4.link="www.savethelions.com";
    charity4.logoUrl = "https://cdn.images.express.co.uk/img/dynamic/galleries/x701/67639.jpg";

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
