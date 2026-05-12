import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-info',
  imports: [TranslateModule, NavbarComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  email = 'jorgegerardo0105@gmail.com';
}
