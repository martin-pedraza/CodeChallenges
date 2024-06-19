import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/38.9697,-77.385?unitGroup=metric&key=XMR449B3ABUNSF47F9G9W4PRF
  // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london,%20uk/1717556400?unitGroup=metric&key=XMR449B3ABUNSF47F9G9W4PRF
  
  private apiKey: string = 'XMR449B3ABUNSF47F9G9W4PRF';
  private apiUrl: string = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'
  private cache: { [city: string]: { data: any, timestamp: number } } = {};

  constructor(private httpService: HttpService) { }

  private fetchDataWithCache(endpoint: string, city: string): Observable<any> {
    if (this.cache[city] && (Date.now() - this.cache[city].timestamp) < 120000) {
      return of(this.cache[city].data);
    } else {
      return this.httpService.fetchData(endpoint).pipe(
        tap(data => {
          this.cache[city] = { data: data, timestamp: Date.now() };
        })
      );
    }
  }

  getForecast(city: string, lat: string, lon: string): Observable<any> {
    const endpoint = `${this.apiUrl}/${lat},${lon}?unitGroup=metric&key=${this.apiKey}`;
    return this.fetchDataWithCache(endpoint, city);
  }

  getTime(city: string, date: string): Observable<any> {
    const endpoint = `${this.apiUrl}/${city}/${date}?unitGroup=metric&key=${this.apiKey}`;
    return this.fetchDataWithCache(endpoint, city);
  }
}