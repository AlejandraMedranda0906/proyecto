import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Tema1Component } from './components/tema1/tema1.component';
import { Tema2Component } from './components/tema2/tema2.component';
import { Tema3Component } from './components/tema3/tema3.component';
import { Tema4Component } from './components/tema4/tema4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Tema1Component, Tema2Component, Tema3Component, Tema4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';
}
