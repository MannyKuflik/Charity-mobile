import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Chart } from 'chart.js';
import { Http } from "@angular/http";
import { decode } from 'jsonwebtoken';

@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html'
})
export class PortfolioPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  token: string;
  chars: string[];
  user_id: number;
  amount: number;
  charity_name: string;
  total: number = 100;
  num: number = 3;
  clist: string = "WWF, Turtles, Help Papi ";


  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
    this.token = localStorage.getItem("TOKEN");
    var details = decode(this.token);
    this.user_id = (details as any).user.id;
    this.charity_name = this.navParams.get("charity_name");
    this.amount = this.navParams.get("amount");
    console.log(this.charity_name + " donated " + this.amount);
  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["WWF", "Turtles", "Help Papi"],
        datasets: [{
          label: 'Percentage of Monthly Pay',
          data: [25, 35, 40],
          backgroundColor: [
            'rgba(255, 0, 0, 0.2)',
            'rgba(0, 0, 255, 0.2)',
            'rgba(0, 255, 0, 0.2)',
            'rgba(150, 0, 150, 0.2)',
            'rgba(150, 150, 0, 0.2)'
          ],
          hoverBackgroundColor: [
            'rgba(155, 0, 0, 0.5)',
            'rgba(0, 0, 155, 0.5)',
            'rgba(0, 155, 0, 0.5)',
            'rgba(100, 0, 100, 0.5)',
            'rgba(100, 100, 0, 0.2)'
          ]
        }]
      }
    })
    if ((typeof this.charity_name !== 'undefined') || (typeof this.amount !== 'undefined')) {
      this.addData(this.doughnutChart, this.charity_name, this.amount);

      {
        this.http
          .get("http://localhost:3000/donations/" + this.user_id, {

          })
          .subscribe(
            result => {
              console.log(result);
              this.chars = result.json();
            },
            error => {
              console.log(error);
            }
          );
      }
      {
        this.http
          .get("http://localhost:3000/donations/" + this.user_id, {

          })
          .subscribe(
            result => {
              console.log(result);
              this.chars = result.json();
            },
            error => {
              console.log(error);
            }
          );
      }
      {
        this.http
          .get("http://localhost:3000/donations/money/" + this.user_id, {

          })

          .subscribe(
            result => {
              console.log(result);
              this.total = this.total + result.json();
            },
            error => {
              console.log(error);
            }
          );
      }
      {
        this.http
          .get("http://localhost:3000/donations/num/" + this.user_id, {

          })
          .subscribe(
            result => {
              console.log(result);
              this.num = 3 + result.json();
            },
            error => {
              console.log(error);
            }
          );
      }
      {
        this.http
          .get("http://localhost:3000/donations/names/" + this.user_id, {

          })
          .subscribe(
            result => {
              console.log(result);
              this.clist = this.clist + result.json();
            },
            error => {
              console.log(error);
            }
          );
      }
    }
    // for(var i=0; i < 50; i++) {
    //       this.addData(this.doughnutChart, this.chars[i], this.chars[i+1]);
    //     }
  }

  profileSend() {
    this.navCtrl.push(ProfilePage);
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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

