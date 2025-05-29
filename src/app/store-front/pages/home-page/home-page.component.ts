import { Component } from '@angular/core';
import { CardComponent } from "../../components/Card/Card.component";

@Component({
  selector: 'app-home-page',
  imports: [CardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent { }
