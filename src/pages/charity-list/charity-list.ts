import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { CharityProfilePage } from '../charity-profile/charity-profile';
import { ProfilePage } from '../profile/profile';

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
    charity1.photo1 = "assets/imgs/Rhino2.jpg";
    charity1.photo2 = "assets/imgs/Rhino1.jpg";
    charity1.photo3 = "assets/imgs/Rhino3.jpg";

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Painted Dog";
    charity2.description = "Painted Dog Conservation is an organisation entirely dedicated to conserving the endangered African wild dog aka painted dog.";
    charity2.link="https://www.painteddog.org";
    charity2.logoUrl = "assets/imgs/painteddog.png";
    charity2.photo1 = "assets/imgs/dog1.jpg";
    charity2.photo2 = "assets/imgs/dog2.jpg";
    charity2.photo3 = "assets/imgs/dog3.jpg";

    var charity3 = new Charity();
    charity3.id = 3;
    charity3.name = "Stop Ivory";
    charity3.description = "Stop Ivory is an independent non-government organisation which aims to protect elephants and stop the ivory trade by implementing the Elephant Protection Initiative with support from Conservation International.";
    charity3.link="http://stopivory.org";
    charity3.logoUrl = "assets/imgs/stopivory.png";
    charity3.photo1 = "assets/imgs/elephant1.jpg";
    charity3.photo2 = "assets/imgs/elephant2.jpg";
    charity3.photo3 = "assets/imgs/elephant3.jpg";

    var charity4 = new Charity();
    charity4.id = 4;
    charity4.name = "LionAid";
    charity4.description = "LionAid is the UK charity working globally to save lions and end the decline of wild lion populations. We carry out world leading research into lion conservation. We are at the forefront of highlighting the true plight of lion populations. The only sustainable solutions involve all stake-holders, which is why we do more than just talk about it, we are working directly with tribes-people and their leaders in Africa to put in place sustainable and effective programs to help save lions. When you support LionAid, you support lions.";
    charity4.link="https://lionaid.org";
    charity4.logoUrl = "assets/imgs/lionaid.png";
    charity4.photo1 = "assets/imgs/lion1.jpg";
    charity4.photo2 = "assets/imgs/lion2.jpg";
    charity4.photo3 = "assets/imgs/lion3.jpg";

    var charity5 = new Charity();
    charity5.id = 5;
    charity5.name = "Cheetah Conservation Fund";
    charity5.description = "Founded in Namibia in 1990, Cheetah Conservation Fund (CCF) is the global leader in research and conservation of cheetahs. CCF is dedicated to saving the cheetah in the wild.";
    charity5.link="https://cheetah.org/about-us/";
    charity5.logoUrl = "assets/imgs/cheetah.png";
    charity5.photo1 = "assets/imgs/cheetah1.jpg";
    charity5.photo2 = "assets/imgs/cheetah2.jpg";
    charity5.photo3 = "assets/imgs/cheetah3.jpg";

    var charity6 = new Charity();
    charity6.id = 6;
    charity6.name = "World Wide Fund for Nature";
    charity6.description = "Our mission is to conserve nature and reduce the most pressing threats to the diversity of life on Earth.";
    charity6.link="https://www.worldwildlife.org";
    charity6.logoUrl = "assets/imgs/wwf.png";
    charity6.photo1 = "assets/imgs/wwf1.jpg";
    charity6.photo2 = "assets/imgs/wwf2.jpg";
    charity6.photo3 = "assets/imgs/wwf3.jpg";

    var charity7 = new Charity();
    charity7.id = 7;
    charity7.name = "Wildlife Conservation Society";
    charity7.description = "We have solutions that work. Together, we can restore healthy forests filled with growing elephant families. Donate today.";
    charity7.link="https://www.wcs.org";
    charity7.logoUrl = "assets/imgs/wcs.png";
    charity7.photo1 = "assets/imgs/wcs1.jpg";
    charity7.photo2 ="assets/imgs/wcs2.jpg";
    charity7.photo3 = "assets/imgs/wcs3.jpg";

    this.charities.push(charity1);
    this.charities.push(charity2);
    this.charities.push(charity3);
    this.charities.push(charity4);
    this.charities.push(charity5);
    this.charities.push(charity6);
    this.charities.push(charity7);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityListPage');
  }

  navigateToCharity(charity: Charity) {
    this.navCtrl.push(CharityProfilePage, {
      charity: charity
    });
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
  }

}
