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
    charity1.name = "Save The Rhino";
    charity1.description = "More than 8,000 rhinos have been killed for their horns since 2007. Together we can halt the key threats of poaching and habitat loss so that rhinos will no longer be near extinction. But we need to act now.";
    charity1.link="https://www.savetherhino.org";
    charity1.logoUrl = "assets/imgs/savetherhino.svg";
    // charity1.photo = "assets/imgs/rhino.png";

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Painted Dog";
    charity2.description = "Painted Dog Conservation is an organisation entirely dedicated to conserving the endangered African wild dog aka painted dog.";
    charity2.link="https://www.painteddog.org";
    charity2.logoUrl = "assets/imgs/painteddog.png";
    // charity2.photo = "assets/imgs/dog.jpg";

    var charity3 = new Charity();
    charity3.id = 3;
    charity3.name = "Stop Ivory";
    charity3.description = "Stop Ivory is an independent non-government organisation which aims to protect elephants and stop the ivory trade by implementing the Elephant Protection Initiative with support from Conservation International.";
    charity3.link="http://stopivory.org";
    charity3.logoUrl = "assets/imgs/stopivory.png";
    // charity3.photo = "assets/imgs/elephant.jpg";

    var charity4 = new Charity();
    charity4.id = 4;
    charity4.name = "LionAid";
    charity4.description = "LionAid is the UK charity working globally to save lions and end the decline of wild lion populations. We carry out world leading research into lion conservation. We are at the forefront of highlighting the true plight of lion populations. The only sustainable solutions involve all stake-holders, which is why we do more than just talk about it, we are working directly with tribes-people and their leaders in Africa to put in place sustainable and effective programs to help save lions. When you support LionAid, you support lions.";
    charity4.link="https://lionaid.org";
    charity4.logoUrl = "assets/imgs/lionaid.png";
    // charity4.photo = "lion.png";

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
