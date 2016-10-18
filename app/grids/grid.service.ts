import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const URL_GRIDS = 'app/grids/grids.json';

@Injectable()
export class GridService {
    
    constructor(private _http: Http) { }

    getGrids(){
        this._http.get(URL_GRIDS);
    }
}