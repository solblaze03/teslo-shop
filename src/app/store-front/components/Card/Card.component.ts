import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './Card.component.html',
  styleUrl: './Card.component.css',
})
export class CardComponent {

  title = input.required<string>()

 }
