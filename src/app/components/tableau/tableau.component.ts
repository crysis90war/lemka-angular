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

  public getLookupKeyValue(item: object, fieldKey: string): string {
    let arr: string[] = fieldKey.split('__');
    let objArr: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) objArr.push(item[arr[i]]);
      else {
        objArr.push(objArr[i - 1][arr[i]]);
      }
    }
    return objArr[objArr.length - 1];
  }

  public navigateTo(id: number, to: string): string {
    return `../${id}/${to}`;
  }
}
