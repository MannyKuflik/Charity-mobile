import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Chart } from 'chart.js';
import { Http } from "@angular/http";
import { decode } from 'jsonwebtoken';
import { AuthServ } from '../../authserv';

@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html'
})
export class PortfolioPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  token: string;
  user_id: number;
  total: number;
  chars: string[];
  amnts: number[];
  numchar: number;



  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public authService: AuthServ) {
    this.token = localStorage.getItem("TOKEN");
    var details = decode(this.token);
    this.user_id = (details as any).user.id;
  }

  ionViewDidLoad() {
    {
      this.http
        .get(this.authService.getBaseUrl() + "/donations/money/" + this.user_id, {

        })

        .subscribe(
          result => {
              console.log(result);
              this.total = result.json();
          },
          error => {
            console.log(error);
            this.total = 0;
          }
        );
    }
    {
      this.http
        .get(this.authService.getBaseUrl() + "/donations/names/" + this.user_id, {

        })
        .subscribe(
          result => {
            if (typeof result === "undefined") {
              this.chars = [];
            }
            else {
              this.chars = result.json();
              console.log(result);
            }
          },
          error => {
            console.log(error);
            this.chars = [];
          }
        );
    }
    {
      this.http
        .get(this.authService.getBaseUrl() + "/donations/amnts/" + this.user_id, {

        })
        .subscribe(
          result => {
            if (typeof result === "undefined") {
              this.amnts = [];
            }
            else {
              this.amnts = result.json();
              console.log(this.amnts);
              if (this.amnts == []) {
                this.numchar = 0;
              }
              else {
              this.numchar = this.amnts.length;
              console.log(this.numchar);
              }
            }
          },
          error => {
            console.log(error);
            this.amnts = [];
          }
        );
    }
  }

  profileSend() {
    this.navCtrl.push(ProfilePage);
  }

  updater() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: 'Percentage of Monthly Pay',
          data: [],
          backgroundColor: [
            'lightskyblue',
            'deepskyblue',
            'dodgerblue',
            'royalblue',
            'steelblue'
          ],
          hoverBackgroundColor: [
            'coral',
            'coral',
            'coral',
            'coral',
            'coral',
          ]
        }]
      }
    })
    for (var i = 0; i < this.numchar; i++) {
      console.log(this.chars[i] + " and " + this.amnts[i])
      this.addData(this.doughnutChart, this.chars[i], this.amnts[i]);
    }
  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }
}

