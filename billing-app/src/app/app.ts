import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatementOfAccount } from './pages/statement-of-account/statement-of-account';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StatementOfAccount],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hello-app');
}
