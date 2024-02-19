import { Inject, Injectable } from '@nestjs/common';
import ConvertTemperature from './dtos/convert-temperature.dto';
import { Repository } from 'typeorm';
import { Conversion } from 'src/domain/entities/conversion.entity';

@Injectable()
export class ConversionService {
  constructor(
    @Inject('CONVERSION_REPOSITORY')
    private readonly conversionRepository: Repository<Conversion>,
  ) {}

  async celsiusToKelvin(data: ConvertTemperature) {
    const total = data.value + 273.15;

    const conversion = new Conversion();

    conversion.from = 'celsius';
    conversion.to = 'kelvin';
    conversion.inputValue = data.value;
    conversion.result = total;

    await this.conversionRepository.save(conversion);

    return {
      total,
    };
  }

  async kelvinToCelsius(data: ConvertTemperature) {
    const total = data.value - 273.15;

    const conversion = new Conversion();

    conversion.from = 'kelvin';
    conversion.to = 'celsius';
    conversion.inputValue = data.value;
    conversion.result = total;

    await this.conversionRepository.save(conversion);

    return {
      total,
    };
  }
  //==========Kelvin Frahrenheit==================================================================
  async kelvinToFahrenheit(data: ConvertTemperature) {
    const total = (data.value - 273.15) * (9 / 5 + 32);

    const conversion = new Conversion();

    conversion.from = 'kelvin';
    conversion.to = 'fahrenheit';
    conversion.inputValue = data.value;
    conversion.result = total;

    await this.conversionRepository.save(conversion);

    return {
      total,
    };
  }
  async FahrenheitTokelvin(data: ConvertTemperature) {
    const total = (data.value - 32) * (5 / 9 + 273.15);

    const conversion = new Conversion();

    conversion.from = 'fahrenheit';
    conversion.to = 'kelvin';
    conversion.inputValue = data.value;
    conversion.result = total;

    await this.conversionRepository.save(conversion);

    return {
      total,
    };
  }

  //============================================================
  async celsiusToFahrenheit(data: ConvertTemperature) {
    const total = data.value * (9 / 5) + 32;
    console.log(total);
    const conversion = new Conversion();

    conversion.from = 'celsius';
    conversion.to = 'fahrenheit';
    conversion.inputValue = data.value;
    conversion.result = total;

    await this.conversionRepository.save(conversion);

    return {
      total,
    };
  }
  async fahrenheitToCelsius(data: ConvertTemperature) {
    const total = ((data.value - 32) * 5) / 9;

    const conversion = new Conversion();

    conversion.from = 'fahrenheit';
    conversion.to = 'celsius';
    conversion.inputValue = data.value;
    conversion.result = total;

    await this.conversionRepository.save(conversion);

    return {
      total,
    };
  }
}
