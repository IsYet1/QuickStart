import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import 'rxjs/add/operators/map';    //This *should* work and only bring in the map method. Isn't for me on 18-Oct
//rxjs imported in main.ts

const URL_GRIDITEMS = 'app/grids/griditems.json';
const URL_GRIDITEMSETTINGS = 'app/grids/gridsettings.json';

@Injectable()
export class GridService {
    
    constructor(private _http: Http) { }

    getGridItems(){
        return this._http.get(URL_GRIDITEMS)
        .map((response: Response) => response.json());
    }

    getGridItemSettings(){
        console.log("In GetGridSettings")
        return this._http.get(URL_GRIDITEMSETTINGS)
        .map((response: Response) => response.json());
    }
}