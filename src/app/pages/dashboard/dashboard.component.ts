import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public graphData;
  public tableData: any;
  nodeDeatils;
  public chart1;
  public chart2;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getGraphData();
    this.getTableData();
  }

  async getGraphData() {
    this.dataService.getGraphData().subscribe((data) => {
      this.graphData = data;
      this.createGraph(data);
    });
  }
  createGraph(data) {
    const chartSales1 = document.getElementById('totalHub');
    const chartSales2 = document.getElementById('totalBrowserInstances');

    this.chart1 = new Chart(chartSales1, {
      type: 'pie',
      data: {
        datasets: [{
          data: [
            data.totalActiveHubs,
            data.totalHub - data.totalActiveHubs
          ],
          backgroundColor: ['#f5365c', '#8965e0'],
          label: 'Dataset 1'
        }],
        labels: ['Available Hubs', 'Active Hubs']
      },
      options: {
        responsive: true
      }
    });
    this.chart2 = new Chart(chartSales2, {
      type: 'pie',
      data: {
        datasets: [{
          data: [
            data.totalBrowserInstances - data.totalAvailableInstances,
            data.totalAvailableInstances
          ],
          backgroundColor: ['#11cdef', '#fb6340'],
          label: 'Dataset 1'
        }],
        labels: ['Available Instance', 'Active Instance']
      },
      options: {
        responsive: true
      }
    });
  }

  getTableData() {
    this.dataService.getTableData().subscribe((data) => {
      this.tableData = data;
      this.tableData.forEach(element => {
        this.nodeDeatils = Object.keys(element.hub.node[0]);
      });
    });
  }
}
