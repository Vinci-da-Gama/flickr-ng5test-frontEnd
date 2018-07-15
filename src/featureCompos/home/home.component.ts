import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as imgsActions from '../../store/imgs-store/imgs-actions';
import * as fromImgsReducer from '../../store/imgs-store/img-reducer';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	imagesState: Observable<fromImgsReducer.ImgsState>;

	constructor(
		private imgStore: Store<fromImgsReducer.ImgsFeatureState>,
		private loaderService: LoaderService
	) {}

	ngOnInit() {
		this.fetchImages();
		this.imagesState = this.imgStore.select('imgs');
	}

	private fetchImages() {
		this.loaderService.weatherShowLoader.next(true);
		this.imgStore.dispatch(new imgsActions.FetchImages());
	}

}
