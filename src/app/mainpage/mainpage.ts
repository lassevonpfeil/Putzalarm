import { Component } from '@angular/core';
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

@Component({
  selector: 'app-mainpage',
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
    RouterLink
  ],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})
export class Mainpage {

}
