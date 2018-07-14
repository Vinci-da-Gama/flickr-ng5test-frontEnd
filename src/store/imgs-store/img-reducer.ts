import * as imgsActions from './imgs-actions';
import { ImgClass } from '../../contracts/models/img.class';

export interface ImgState {
	imgs: ImgClass[]
}

const initImgsState: ImgState = {
	imgs: [

	]
}
