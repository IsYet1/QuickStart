import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

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
        .map((response: Response) => response.json())
        .toPromise()
        .catch((err: any) => {
            console.log(err); //More processing here
            Promise.reject(err);
        })
        ;
    }

    _handleError(err: any){
        //Note that err will catch a 404 because the json will be empty.
        console.log(err);
        return Observable.throw(err);
    }
}