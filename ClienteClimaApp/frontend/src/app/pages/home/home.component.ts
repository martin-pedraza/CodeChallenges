import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cities :any;
  filteredCities :any = [];
  today: string = moment().format('YYYY-MM-DD');
  selectedDate: string = moment().format('YYYY-MM-DD');

  constructor(private httpService: HttpService, private router: Router){}

  ngOnInit(): void {
    this.httpService.fetchData('assets/city.list.json')
      .subscribe(data => { 
        this.cities = data;
    });
  }

  filterCities(event: any){
    const cityInput = event.target.value?.toLowerCase() || '';
    if (cityInput != '' && cityInput.length >= 3) {
      this.filteredCities = this.cities.filter((city :any) => city.name?.toLowerCase()?.includes(cityInput));
    }else {
      this.filteredCities = [];
    }
  }

  onCitySelect(city: any) {
    if (moment(this.selectedDate).isAfter(this.today, 'day')) {
      this.selectedDate = this.today;
    }
    this.router.navigate(
      ['/other'], 
      { queryParams: 
        { 
          city: `${city.name}, ${city.country}`, 
          lat: city.coord.lat, 
          lon: city.coord.lon, 
          date: moment(this.selectedDate, 'YYYY-MM-DD').unix() 
        }
      });
  }
}
