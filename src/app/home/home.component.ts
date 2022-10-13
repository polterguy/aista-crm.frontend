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
  kpi: any;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getKpi();
  }

  getKpi() {
    this.httpService.kpi.subscribe({
      next: (data: any[]) => {
        data = data || [];
        this.kpi = {
          title: {
            text: 'Funnel',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            x: 'center',
            y: 'bottom',
            data: data.map(x => x.status)
          },
          calculable: true,
          series: [
            {
              name: 'area',
              type: 'pie',
              radius: [30, 110],
              roseType: 'area',
              data: data.map(x => {
                return {
                  value: x.count,
                  name: x.status,
                }
              })
            }
          ]
        };
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
