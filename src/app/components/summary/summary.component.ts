import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-summary',
  imports: [TranslateModule, NavbarComponent, RouterLink],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent { }
