import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-store-front',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './store-front.component.html',
  styleUrl: './store-front.component.css',
})
export class StoreFrontLayoutComponent { }
