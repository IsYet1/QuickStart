import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'oxy-grid',
    templateUrl: 'grids-sample.component.html',
    styleUrls: ['grids.css']    
})
export class GridsSampleComponent {
    title="Grid:";
    colorNonResizable = 'lightgray';
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

    gridItems: any[]=
    [
        {
            title: 'Grid item 1'
            , body: 'Grid body goes here'
            , titleColor: 'green'
            , options: {
                col: 3
                ,row: 2
            }
        }
        ,{
            title: 'Grid item 2'
            , body: 'Grid body goes here'
            , options: {col: 3
                , row: 2
                , resizable: false
            }
        }
        ,{
            title: 'Grid item 3'
            , body: 'Grid body goes here'
            , options: {col: 3, row: 1}
        }
        ,{
            title: 'Grid item 4'
            , body: 'Grid body goes here'
            , options: {
                    resizable: false
            }
        }
        ,{
            title: 'Grid item 5'
            , body: 'Grid body goes here'
            , options: {}
        }
        ,{
            title: 'Grid item 6'
            , body: 'Grid body goes here'
            , options: {}
        }
    ]
}