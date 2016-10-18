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
    gridItems: Observable<any>;
    /**
     *
     */
    constructor(private _gridService: GridService) {    }

    ngOnInit(): void {
    console.log("In OnInit");
    this.gridItems = this._gridService.getGrids();
}

    gridSettings = {
        margins: [5, 10]
        ,draggable: true
        ,resizable: true 
        ,max_cols: 4
        ,max_rows: 2
        ,visible_cols: 0
        ,vilible_rows: 2
        ,min_cols: 0
        ,min_rows: 0
        ,col_width: 200
        ,row_height: 200
        ,cascade: 'left'
        ,min_width: 100
        ,min_height: 100
        ,fix_to_grid: false
        ,auto_style: true
        ,auto_resize: false
        ,maintain_ratio: false
        ,prefer_new: false
        ,limit_to_screen: false
    };
}