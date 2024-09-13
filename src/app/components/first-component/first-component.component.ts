import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Matheus';
  age: number = 30;
  job = 'Programer';
  hobbies = ["Correr", "Jogar"];
  car = {
    name: 'Polo',
    year: 2019,
  }

  constructor(){}

  ngOnInit(): void {}
}
