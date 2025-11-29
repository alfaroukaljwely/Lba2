import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from '../app/nav-bar/nav-bar.component'
import {FooterComponent} from '../app/footer/footer.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lba2';
}
