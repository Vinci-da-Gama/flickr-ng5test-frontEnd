import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ImgClass } from '../../../contracts/models/img.class';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	imgs: ImgClass[];

	constructor(
		private aRoute: ActivatedRoute,
	) {}

	ngOnInit() {
		this.aRoute.data.subscribe((resolveData: any) => {
			this.imgs = resolveData['initImgs'].body.data;
			console.log('21 -- ', this.imgs);
		});
	}

}
