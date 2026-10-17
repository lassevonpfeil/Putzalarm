import { Routes } from '@angular/router';
import { Mainpage } from './mainpage/mainpage';
import { Impressum } from './impressum/impressum';
import { Datenschutz } from './datenschutz/datenschutz';
import { Agbs } from './agbs/agbs';

export const routes: Routes = [
  { path: '', component: Mainpage },
  { path: 'impressum', component: Impressum },
  { path: 'datenschutz', component: Datenschutz },
  { path: 'agbs', component: Agbs },
  { path: '**', redirectTo: '' }
];
