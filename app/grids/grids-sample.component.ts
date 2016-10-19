import { Component, OnInit } from '@angular/core';
import { GridService } from './grid.service';

import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'oxy-grid',
    templateUrl: 'grids-sample.component.html',
    styleUrls: ['grids.css'],
    providers: [GridService]  
})
export class GridsSampleComponent {
    title="Grid:";
    colorNonResizable = 'lightgray';
    gridItems: any[];
    gridSettings: Observable<any>;
    /**
     *
     */
    constructor(private _gridService: GridService) {    }

    ngOnInit(): void {
        console.log("In OnInit - Observable to Array");
        this._gridService.getGridItems()
        .subscribe(
            (items) => this.gridItems = items,
            (err) => {
                console.log(err);
            }
        )
        ;
        this.gridSettings = this._gridService.getGridItemSettings()
        .catch((err) => {
            console.log(err);
            return Observable.of(true); //Make this into an Observable that wraps around true. Just return the error.
        })
        ;
    }

}