import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  homeMessage = signal('Home Message');

  keyUpHandler(event: KeyboardEvent) {
    const key = event.key;

    (/^[a-zA-Z]$/.test(key)) ? console.log(`user typed ${event.key} in the input`)
    : console.log(`Non Letter Key was pressed`)
  }
}
