import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit, AfterViewInit {

  chart = [];
  @ViewChild('canvas') canvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const markData = {
      labels: ['English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'History'],
      datasets: [{
        label: 'Student A',
        fill: false,
        data: [65, 75, 70, 80, 60, 80]
      },
      {
        label: 'Student B',
        fill: false,
        data: [54, 65, 60, 70, 70, 75]
      },
      {
        label: 'Student C',
        fill: false,
        data: [10, 55, 50, 60, 60, 65]
      }
      ]
    };

    const chartOptions = {
      scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 20
        },
        pointLabels: {
          fontSize: 18
        }
      },
      legend: {
        position: 'left'
      },
      plugins: {
        colorschemes: {
          scheme: 'brewer.Paired3'
        }
      }
    };

    const context = this.canvas.nativeElement.getContext('2d');
    this.chart = new Chart(context, {
      type: 'radar',
      data: markData,
      options: chartOptions
    });
  }

}
