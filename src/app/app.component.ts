import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date = 1687286016000;
  showWeather: boolean = false;
  cityName = '';
  errMsg = '';
  weatherDetail: any;

  constructor(private _weatherService: WeatherService) {}

  handleCityInput(event: any) {
    this.cityName = event?.target?.value;
  }

  async getWeather() {
    try {
      const resp: any = await this._weatherService.getWeatherDetails(this.cityName);
      this.errMsg = '';
      this.showWeather = true;
      this.weatherDetail = {
        city: resp.name,
        temp: resp.main.temp,
        icon: resp.weather[0].main,
        pressure: resp.main.pressure,
        humidity: resp.main.humidity,
        visibility: resp.visibility,
        windSpeed: resp.wind.speed
      }
      console.log(resp);
    } catch (error: any) {
      this.errMsg = error?.error?.cod === '404' ? error.error.message : '';
      console.error(error);
    }
  }
}
