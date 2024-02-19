import { Body, Controller, Post } from '@nestjs/common';
import ConvertTemperature from './dtos/convert-temperature.dto';
import { ConversionService } from './conversion.service';

@Controller('conversion')
export class ConversionController {
  constructor(private readonly conversionService: ConversionService) {}

  @Post('celsius-to-kelvin')
  async celsiusToKelvin(@Body() body: ConvertTemperature) {
    return await this.conversionService.celsiusToKelvin(body);
  }

  @Post('kelvin-to-celsius')
  async kelvinToCelsius(@Body() body: ConvertTemperature) {
    return await this.conversionService.kelvinToCelsius(body);
  }

  @Post('kelvin-to-fahrenheit')
  async kelvinToFahrenheit(@Body() body: ConvertTemperature) {
    return await this.conversionService.kelvinToFahrenheit(body);
  }
  @Post('fahrenheit-to-kelvin')
  async fahrenheitToKelvin(@Body() body: ConvertTemperature) {
    return await this.conversionService.kelvinToFahrenheit(body);
  }

  @Post('celsius-to-fahrenheit')
  async celsiusToFahrenheit(@Body() body: ConvertTemperature) {
    return await this.conversionService.kelvinToFahrenheit(body);
  }
  @Post('fahrenheit-to-celsius')
  async fahrenheitToCelsius(@Body() body: ConvertTemperature) {
    return await this.conversionService.kelvinToFahrenheit(body);
  }
}
