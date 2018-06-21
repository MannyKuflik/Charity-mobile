import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Charity } from '../../models/charity';
import { CharityProfilePage } from '../charity-profile/charity-profile';
import { User } from '../../models/user';
import { DEFAULT_PACKAGE_URL_PROVIDER } from '@angular/platform-browser-dynamic/src/compiler_factory';
import { ProfilePage } from '../profile/profile';
import { PortfolioPage } from '../portfolio/portfolio';
import { Http } from "@angular/http";
import { decode } from 'jsonwebtoken';

declare var Stripe;

@Component({
  selector: 'page-donations',
  templateUrl: 'donations.html',
})
export class DonationsPage {

  stripe = Stripe('pk_test_a2Z2CqvGIBgIJi3MdNvYj3W6');
  card: any;
  monthly: boolean;
  one_time: boolean;


  public amount: number;
  public user_id: number;
  public token: string;
  charity_id: number;
  charity_name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.token = localStorage.getItem("TOKEN");
    var details = decode(this.token);
    this.user_id = (details as any).user.id
    this.charity_id = this.navParams.get("charity_id");
    this.charity_name = this.navParams.get("charity_name");
  }

  navToPortfolioTakeTwo() {
    this.navCtrl.push(PortfolioPage);
  }

  ionViewDidLoad() {
    this.setupStripe();
  }

  setupStripe() {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });

    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();

      if ((this.monthly && this.one_time) || (!this.monthly && !this.one_time)) {
        alert("Please select either a Monthly or a One Time donation")
      }
      else if (this.amount <= 0) {
        alert("Please enter a valid amount")
      }
      else {
        if (this.monthly) {
          // this.stripe.createToken(this.card)
          this.stripe.createSource(this.card).then(result => {
            if (result.error) {
              var errorElement = document.getElementById('card-errors');
              errorElement.textContent = result.error.message;
            } else {
              console.log(result);
            }
          });
        }
        else if (this.one_time) {
          // this.stripe.createToken(this.card)
          this.stripe.createToken(this.card).then(result => {
            if (result.error) {
              var errorElement = document.getElementById('card-errors');
              errorElement.textContent = result.error.message;
            } else {
              console.log(result);
            }
          });
        }

        {
          this.http
            .post("https://full-smacked-api.herokuapp.com/donations", {
              amount: this.amount,
              user_id: this.user_id,
              charity_id: this.charity_id,
              charity_name: this.charity_name
            })
            .subscribe(
              result => {
                console.log(result);
              },
              error => {
                console.log(error);
              }
            );
        }
        this.navCtrl.push(PortfolioPage, { amount: this.amount, charity_name: this.charity_name});
      }

    });
  }

}