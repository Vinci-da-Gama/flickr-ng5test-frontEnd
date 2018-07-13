import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveformCommonModule } from '@reactiveForm/reactiveform-common.module';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [
		HeaderComponent
	],
	imports: [
		NgbModule,
		ReactiveformCommonModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent
	]
})
export class CoreModule { }
