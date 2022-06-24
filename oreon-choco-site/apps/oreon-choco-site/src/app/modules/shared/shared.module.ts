import { NgModule } from '@angular/core';
import { LeftSideMenuComponent } from './components/left-side-menu/left-side-menu.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

export const declaresList: any[] = [
  LeftSideMenuComponent
];

export const exportsList: any[] = [
  LeftSideMenuComponent
];

@NgModule({
  declarations: declaresList,
  exports: exportsList,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  providers: []
})
export class SharedModule { }
