import { Component, OnInit } from '@angular/core';
import { lastValueFrom as toPromise } from "rxjs";
import { HTTPService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isActive: Boolean = false;
  public cityName: string = '';
  public currCity: string = '';
  public currTemp: string = '';
  public currDesc: string = '';
  public temp: string = '';
  public desc: string = '';
  public weatherInfo: any = {};
  public currWeatherInfo: any = {};

  constructor(private httpService: HTTPService) { }

  async ngOnInit() {
    this.currCity = 'mumbai';
    const weatherData = await this.getWeatherData(this.currCity);
    this.currTemp = weatherData?.main?.temp;
    this.currDesc = weatherData?.weather[0]?.description;

    this.currWeatherInfo.temp = weatherData?.main?.temp;
    this.currWeatherInfo.desc = weatherData?.weather[0]?.description;
    this.currWeatherInfo.cityName = this.currCity;
  }

  /**
   * getLocation
   */
  public getLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  /**
   * getWeatherData
   */
  public getWeatherData(city: string) {
    const apiKey = "69c0d37d33e433e8ddbc3bb12ed00f41";
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=" + unit;

    return toPromise(this.httpService.get(url));
  }
  /**
   * handle
   */
  public async handle(event?) {
    if (this.cityName) {
      const weatherData = await this.getWeatherData(this.cityName);
      console.log(weatherData);
      this.temp = weatherData?.main?.temp;
      this.desc = weatherData?.weather[0]?.description;

      this.weatherInfo.temp = weatherData?.main?.temp;
      this.weatherInfo.desc = weatherData?.weather[0]?.description;
      this.weatherInfo.cityName = this.cityName;
      this.isActive = true;
    } else {
      this.isActive = false
      alert('Enter city');
    }
  }
}
