import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { reducers } from '../store/app-store/app.reducers';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from '../featureModules/home-module/home.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		NgbModule.forRoot(),
		StoreModule.forRoot(reducers),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		CoreModule,
		HomeModule,
		NotFoundModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
