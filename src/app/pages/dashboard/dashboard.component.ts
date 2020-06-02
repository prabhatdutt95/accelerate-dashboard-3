import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart1;
  public salesChart2;

  constructor() { }

  ngOnInit() {
    const chartSales1 = document.getElementById('chart-orders1');
    const chartSales2 = document.getElementById('chart-orders2');

    this.salesChart1 = new Chart(chartSales1, {
      type: 'pie',
      data: {
        datasets: [{
          data: [
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
          ],
          backgroundColor: [ 'red', 'orange', 'yellow', 'green', 'blue'],
          label: 'Dataset 1'
        }],
        labels: [ 'red', 'orange', 'yellow', 'green', 'blue']
      },
      options: {
        responsive: true
      }
    });
    this.salesChart2 = new Chart(chartSales2, {
      type: 'pie',
      data: {
        datasets: [{
          data: [
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
          ],
          backgroundColor: [ 'red', 'orange', 'yellow', 'green', 'blue'],
          label: 'Dataset 1'
        }],
        labels: [ 'red', 'orange', 'yellow', 'green', 'blue']
      },
      options: {
        responsive: true
      }
    });
  }
  randomScalingFactor() {
    return Math.round(Math.random() * 100);
  }

}
