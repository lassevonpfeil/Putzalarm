import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

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
    RouterLink,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})
export class Mainpage implements AfterViewInit {
  ngAfterViewInit(): void {
    const processEmbeds = () => window.instgrm?.Embeds?.process();
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]',
    );

    if (window.instgrm?.Embeds) {
      processEmbeds();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener('load', processEmbeds, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = processEmbeds;
    script.onerror = () => console.error('Instagram embed script could not be loaded.');
    document.head.appendChild(script);
  }

  private readonly _formBuilder = inject(FormBuilder);

  readonly fensterreinigung = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  })
}
