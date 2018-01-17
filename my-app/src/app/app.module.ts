import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardService} from './dashboard/dashboard.service';


const ROUTES = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	}
];

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(ROUTES),
		HttpClientModule
	],
	providers: [DashboardService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
