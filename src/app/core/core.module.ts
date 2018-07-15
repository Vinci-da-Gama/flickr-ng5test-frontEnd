import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveformCommonModule } from '@reactiveForm/reactiveform-common.module';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from '../shareComponents/spinner/spinner.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoaderService } from '../../services/loader/loader.service';
import { SearchImgsService } from '../../services/search/search-img.service';


@NgModule({
	declarations: [
		HeaderComponent,
		SpinnerComponent
	],
	imports: [
		NgbModule,
		ReactiveformCommonModule,
		AppRoutingModule
	],
	providers: [
		LoaderService,
		SearchImgsService
	],
	exports: [
		AppRoutingModule,
		HeaderComponent,
		SpinnerComponent
	]
})
export class CoreModule { }
