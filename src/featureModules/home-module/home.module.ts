import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../../app/shareComponents/home/home.component';
import { imgsReducer } from '../../store/imgs-store/img-reducer';
import { ImgsEffects } from '../../store/imgs-store/imgs-effects.service';
import { ImgsService } from '../../services/imgs/img.service';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		StoreModule.forFeature('imgs', imgsReducer),
		EffectsModule.forFeature([ImgsEffects]),
		HomeRoutingModule
	],
	providers: [
		ImgsService
	]
})
export class HomeModule { }
