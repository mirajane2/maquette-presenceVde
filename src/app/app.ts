import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Acceuil } from "./acceuil/acceuil";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Acceuil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Frontend-angular';
}
