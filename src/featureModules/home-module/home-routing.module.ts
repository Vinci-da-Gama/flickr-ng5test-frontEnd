import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../shareComponents/home/home.component';
import { InitPhotosResolveService } from '../../services/initPhotos/init-photos-resolve.service';

const userRoute: Routes = [
	{
		path: '',
		component: HomeComponent,
		resolve: {
			initImgs: InitPhotosResolveService
		}
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(userRoute)
	],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
