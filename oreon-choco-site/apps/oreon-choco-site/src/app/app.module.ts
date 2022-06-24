import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './modules/shared/shared.module';
import { MatCardModule } from '@angular/material/card';

export const declaresList: any[] = [
  AppComponent,
  HomeComponent
];

@NgModule({
  declarations: declaresList,
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		BrowserAnimationsModule,
		MatDividerModule,
		MatToolbarModule,
		MatIconModule,
		MatTabsModule,
		MatSidenavModule,
		MatRippleModule,
		MatListModule,
		MatCardModule,
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
