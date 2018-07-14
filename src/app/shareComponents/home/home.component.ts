import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ImgClass } from '../../../contracts/models/img.class';
import * as imgsActions from '../../../store/imgs-store/imgs-actions';
import * as fromImgsReducer from '../../../store/imgs-store/img-reducer';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	imagesState: Observable<fromImgsReducer.ImgsState>;

	constructor(
		private imgStore: Store<fromImgsReducer.ImgsFeatureState>
	) {}

	ngOnInit() {
		this.imagesState = this.imgStore.select('imgs');
	}

}
