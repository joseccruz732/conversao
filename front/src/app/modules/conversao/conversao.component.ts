import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-conversao',
  templateUrl: './conversao.component.html',
  styleUrl: './conversao.component.css',
})
export class ConversaoComponent {
  formularioTemperatura = this.formBuilder.group({
    Temperatura1: ['', Validators.required],
    Temperatura2: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmitTemperatura(): void {
    console.log(
      'Dados do login form temperatura 1',
      this.formularioTemperatura.value
    );
  }
}
