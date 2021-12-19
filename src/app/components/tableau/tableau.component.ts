import {Component, Input, OnInit} from '@angular/core';

interface ITableModel {
  key: string;
  label: string;
}

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {
  @Input() fields: ITableModel[] = [];
  @Input() items: any[] = [];
  @Input() header: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}

/*
* TODO - Fields Tableau Component
*
* */
