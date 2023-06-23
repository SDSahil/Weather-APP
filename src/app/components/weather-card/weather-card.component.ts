import { Component, Input, OnChanges } from '@angular/core';
import { WeatherOptions } from '@weather-app/configs/weather-options.constants';
import { Option } from '@weather-app/interfaces/option.interface';
import { Icons } from '@weather-app/enums/icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnChanges{

  @Input() weatherDetails: any;

  public weatherIcon: string = '';
  public weatherOptions: Array<Option> = WeatherOptions;

  ngOnChanges() {
    this.weatherOptions[0].value = this.weatherDetails.windSpeed;
    this.weatherOptions[1].value = this.weatherDetails.humidity;
    this.weatherOptions[2].value = this.weatherDetails.pressure;
    this.weatherOptions[3].value = this.weatherDetails.visibility;

    this.weatherIcon = Icons[this.weatherDetails.icon as keyof typeof Icons];
  }

}
