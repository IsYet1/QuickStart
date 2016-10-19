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
    gridItems: Promise<any[]>;
    gridSettings: Promise<any[]>;
    /**
     *
     */
    constructor(private _gridService: GridService) {    }

    ngOnInit(): void {
        console.log("In OnInit");

        this.gridItems = this._gridService.getGridItems()
        .catch((err) => {
            console.log(err);
        })
        ;

        this.gridSettings = this._gridService.getGridItemSettings()
        .catch((err) => {
            console.log(err);
        })
    }

}