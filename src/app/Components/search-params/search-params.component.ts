import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-params',
  templateUrl: './search-params.component.html',
  styleUrls: ['./search-params.component.scss'],
})
export class SearchParamsComponent {
  form = new FormGroup({
    city: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    temperature: new FormControl(false),
    precipitation: new FormControl(false),
    sunset: new FormControl(false),
    sunrise: new FormControl(false),
  });

  today = new Date().toISOString().split('T')[0];
  minDate = new Date();
  maxDate = new Date();
  maxDateString: string;

  constructor() {
    this.minDate.setDate(this.minDate.getDate() - 14);
    this.maxDateString = this.maxDate.toISOString().split('T')[0];
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.form.value.city);
    //nie przejmowac sie tym, ze po wyborze miasta jest pusta dana
    // value miasta podstawic koordyanty z API zeby dostawac od razu to co wrzuce do zapytania do API
    // przechywc sobie dane z forma do komponentu weather i tam zapytaj API o dane
  }
}
