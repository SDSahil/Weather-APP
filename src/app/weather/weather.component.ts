import { Component, Input } from '@angular/core';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})

export class WeatherDetails {
    @Input() cityName: string;
    @Input() temp: string;
    @Input() desc: string;
}