import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment as configs } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  async getWeatherDetails(city: string) {
    try {
      const url = configs.url;
      const options = {
        params: {
          appid: configs.apiKey,
          q: city,
          units: configs.unit
        }
      }
       return await lastValueFrom(this._http.get(url, options));
    } catch (error) {
      throw error;
    }
  }
}
