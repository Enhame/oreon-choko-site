import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category.routes';

export const declaresList: any[] = [
  CategoryComponent
];

@NgModule({
  declarations: declaresList,
  imports: [
    MatDividerModule,
    MatToolbarModule,
    CategoryRoutingModule,
  ],
  providers: []
})
export class CategoryModule { }
