import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ConversaoService {
  private API_URL = environments.API_URL.origin;

  constructor(private http: HttpClient) {}

  celsiusToKelvin(value: number) {
    return this.http.post(`${this.API_URL}/conversion/celsius-to-kelvin`, {
      value,
    });
  }
  kelvinToCelsius(value: number) {
    return this.http.post(`${this.API_URL}/conversion/kelvin-to-celsius`, {
      value,
    });
  }
  kelvinToFahrenheit(value: number) {
    return this.http.post(`${this.API_URL}/conversion/kelvin-to-fahrenheit`, {
      value,
    });
  }
  fahrenheitTokelvin(value: number) {
    return this.http.post(`${this.API_URL}/conversion/fahrenheit-to-kelvin`, {
      value,
    });
  }

  celsiusToFahrenheit(value: number) {
    return this.http.post(`${this.API_URL}/conversion/fahrenheit-to-kelvin`, {
      value,
    });
  }
  fahrenheitToCelsius(value: number) {
    return this.http.post(`${this.API_URL}/conversion/fahrenheit-to-kelvin`, {
      value,
    });
  }
}
