import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatTabGroup } from '@angular/material/tabs';
import { MatTab } from '@angular/material/tabs';
import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import { Mainpage } from './mainpage/mainpage';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatTabGroup,
    MatTab,
    MatAccordion,
    MatExpansionModule,
    RouterLink,
    Mainpage
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Putzalarm');

  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset != 0;
    })
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
