import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from '../../app/shareComponents/home/home.component';
import { ImgsService } from '../../services/imgs/img.service';
import { InitPhotosResolveService } from '../../services/initPhotos/init-photos-resolve.service';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule
	],
	providers: [
		ImgsService,
		InitPhotosResolveService
	]
})
export class HomeModule { }
