import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';
import * as moment from 'moment';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit{
  isToday: boolean = true;
  selectedValue: number = 5;
  options = Array.from({ length: 11 }, (_, i) => i + 5);
  data: any;
  city: string = '';
  error: boolean = false;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'];
      const date = params['date'];
      const lat = params['lat'];
      const lon = params['lon'];
      const today = moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD').unix();
      this.isToday = date == today;

      if (this.isToday) {
        this.weatherService.getForecast(this.city, lat, lon).subscribe(
          data => {
            this.data = data;
            this.loading = false;
            },
          error => {
            this.loading = false;
            this.error = true;
          }
        )
      } else {
        this.selectedValue = 1;
        this.weatherService.getTime(this.city, date).subscribe(
          data => {
            this.data = data;
            this.loading = false;
            },
          error => {
            this.loading = false;
            this.error = true;
          }
        )
      }
    });
  }

  generateArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }
}
