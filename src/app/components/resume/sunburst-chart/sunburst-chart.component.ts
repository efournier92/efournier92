import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartOptions, ChartData } from './chart-data';

declare let d3: any;

@Component({
  selector: 'app-sunburst-chart',
  template: `
    <div>
      <nvd3 [options]="options" [data]="data"></nvd3>
    </div>
  `,
  // include original styles
  styleUrls: [
    '../../../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class SunburstChartComponent implements OnInit {
  options;
  data;
  ngOnInit() {
    this.options = ChartOptions;
    this.data = ChartData;
  }

}