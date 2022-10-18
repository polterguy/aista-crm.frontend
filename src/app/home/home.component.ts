/*
 * Automatically generated by Magic
 */
import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/services/http-service';
import { environment } from '@env/environment';
import { ThemeOption } from 'ngx-echarts';
import { CoolTheme } from './cool-theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  version: string = environment.version;

  // Chart stuff.
  theme: string | ThemeOption;
  coolTheme = CoolTheme;
  kpiValues: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getKpi();
  }

  getKpi() {
    this.httpService.kpi.subscribe({
      next: (data: any[]) => {
        data = data || [];
        for (const idx of data) {
          idx.values = idx.values || [];
          switch (idx.type) {

            case 'pie':
              this.createPieChart(idx);
              break;

            case 'line':
              this.createLineChart(idx);
              break;

            case 'table':
              this.createTable(idx);
              break;
          }
        }
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  // Creates a pie chart
  private createPieChart(chartData: any) {
    this.kpiValues.push({
      isChart: true,
      title: {
        text: chartData.name,
        subtext: chartData.description,
        x: 'left'
      },
      tooltip: {
        trigger: 'item',
        appendToBody: true
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          data: chartData.values.map((x:any) => {
            return {
              value: x.value,
              name: x.name,
            }
          }),
          color: ['#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc', '#ddd'],
          label: {
            color: 'black'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
  }

  // Creates a line chart
  private createLineChart(chartData: any) {
    this.kpiValues.push({
      isChart: true,
      title: {
        text: chartData.name,
        subtext: chartData.description,
        x: 'left',
      },
      tooltip: {
        trigger: 'axis',
        position: (pt: any) => {
          return [pt[0], '10%'];
        },
        appendToBody: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: chartData.values.map((x: any) => x.name),
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dotted',
            width: 1,
            color: 'rgba(0, 0, 0, 0.12)'
          }
        }
      },
      series: [
        {
          name: chartData.values.map((x: any) => x.name),
          data: chartData.values.map((x: any) => x.value),
          type: chartData.type,
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          color: '#999',
        }
      ]
    });
  }

  // Creates a table KPI
  private createTable(data: any) {
    const cols: string[] = [];
    for (var idx in data.values[0]) {
      cols.push(idx);
    }
    this.kpiValues.push({
      isChart: false,
      columns: cols,
      title: data.name,
      subtext: data.description,
      rows: data.values,
    });
  }
}
