import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html'
})
export class PortfolioPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Rhinos", "Dogs", "Elephants"],
        datasets: [{
          label: 'Percentage of Monthly Pay',
          data: [35, 55, 20],
          backgroundColor: [
            'rgba(255, 0, 0, 0.2)',
            'rgba(0, 0, 255, 0.2)',
            'rgba(0, 255, 0, 0.2)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
          ]
        }]
      }

    })
  }
}

