import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConversaoService } from '../../services/conversao/conversao.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-conversao',
  templateUrl: './conversao.component.html',
  styleUrl: './conversao.component.css',
})
export class ConversaoComponent implements OnInit {
  formGroup!: FormGroup;
  tableConversion: any[] = [
    { name: 'Celsius  ', code: 'ce' },
    { name: 'Kelvin   ', code: 'ke' },
    { name: 'Farenheit', code: 'fa' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private readonly conversaoService: ConversaoService
  ) {
    this.formGroup = this.formBuilder.group({
      valorA: new FormControl('', [Validators.max(2000)]),
      valorB: new FormControl(''),
      temperaturaA: new FormControl('', [Validators.required]),
      temperaturaB: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  conversao() {
    const conversores = {
      ceke: () => {
        const value = +this.formGroup.get('valorA')?.value || 0;
        console.log(value);
        this.conversaoService
          .celsiusToKelvin(value)
          .pipe(
            map((respostaApi: any) => {
              this.formGroup.get('valorB')?.setValue(respostaApi.total);
            })
          )
          .subscribe();
      },

      kece: () => {
        const value = +this.formGroup.get('valorA')?.value || 0;
        this.conversaoService
          .kelvinToCelsius(value)
          .pipe(
            map((respostaApi: any) => {
              this.formGroup.get('valorB')?.setValue(respostaApi.total);
            })
          )
          .subscribe();
      },

      kefa: () => {
        const value = +this.formGroup.get('valorA')?.value || 0;
        this.conversaoService
          .kelvinToFahrenheit(value)
          .pipe(
            map((respostaApi: any) => {
              this.formGroup.get('valorB')?.setValue(respostaApi.total);
            })
          )
          .subscribe();
      },

      fake: () => {
        const value = +this.formGroup.get('valorA')?.value || 0;
        this.conversaoService
          .fahrenheitTokelvin(value)
          .pipe(
            map((respostaApi: any) => {
              this.formGroup.get('valorB')?.setValue(respostaApi.total);
            })
          )
          .subscribe();
      },
      face: () => {
        const value = +this.formGroup.get('valorA')?.value || 0;
        this.conversaoService
          .fahrenheitToCelsius(value)
          .pipe(
            map((respostaApi: any) => {
              this.formGroup.get('valorB')?.setValue(respostaApi.total);
            })
          )
          .subscribe();
      },
      cefa: () => {
        const value = +this.formGroup.get('valorA')?.value || 0;
        this.conversaoService
          .celsiusToFahrenheit(value)
          .pipe(
            map((respostaApi: any) => {
              this.formGroup.get('valorB')?.setValue(respostaApi.total);
            })
          )
          .subscribe();
      },
    };
    const fator =
      this.formGroup.get('temperaturaA')!.value.code +
      this.formGroup.get('temperaturaB')!.value.code;

    conversores[fator as keyof typeof conversores]();
  }
}
