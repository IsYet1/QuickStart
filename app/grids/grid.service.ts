import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import 'rxjs/add/operators/map';    //This *should* work and only bring in the map method. Isn't for me on 18-Oct
//rxjs imported in main.ts

const URL_GRIDS = 'app/grids/grids.json';

@Injectable()
export class GridService {
    
    constructor(private _http: Http) { }

    getGrids(){
        return this._http.get(URL_GRIDS)
        .map((response: Response) => response.json());
        ;
    }
}