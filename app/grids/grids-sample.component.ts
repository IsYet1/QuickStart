import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'oxy-grid',
    templateUrl: 'grids-sample.component.html',
    styleUrls: ['grids.css']    
})
export class GridsSampleComponent {
    title="Grid Dashboard Sample 0930";
    gridSettings = {
        margins: [5, 10]
        ,draggable: true
        ,resizeable: false 
        ,max_cols: 0
        ,max_rows: 0
        ,visible_cols: 0
        ,vilible_rows: 0
        ,min_cols: 0
        ,min_rows: 0
        ,col_width: 250
        ,row_height: 250
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