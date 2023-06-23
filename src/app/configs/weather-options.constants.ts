import { Option } from "@weather-app/interfaces/option.interface";

export const WeatherOptions: Array<Option> = [
    {
        icon: 'wind',
        value: 0,
        unit: 'km/h',
        label: 'Wind Speed'
    },
    {
        icon: 'humidity',
        value: 0,
        unit: '%',
        label: 'Humidity'
    },
    {
        icon: 'pressure',
        value: 0,
        unit: 'hPa',
        label: 'Pressure'
    },
    {
        icon: 'visibility',
        value: 0,
        unit: 'km',
        label: 'Visibility'
    }
];