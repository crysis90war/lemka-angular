import {Component, Input, OnInit} from '@angular/core';
import {ProduitModel} from "../../core/models/produit.model";
import {ProduitService} from "../../core/services/api/produit.service";

@Component({
  selector: 'app-double-list-box',
  templateUrl: './double-list-box.component.html',
  styleUrls: ['./double-list-box.component.scss']
})
export class DoubleListBoxComponent implements OnInit {
  private datas: ProduitModel[] = [];

  @Input() selectedItems: ProduitModel[] = [];

  public get allItems(): ProduitModel[] {
    return this.datas.filter(item => item.statut === 'Active');
  }

  constructor(private _produitService: ProduitService) {
  }

  ngOnInit(): void {
    this._loadDatas();
  }

  public addItem(element: ProduitModel): void {
    let index = this.datas.findIndex(item => item.id === element.id);
    if (index > -1) {
      this.selectedItems.push(element);
      this.datas.splice(index, 1);
    }
  }

  public removeItem(element: ProduitModel): void {
    let index = this.selectedItems.findIndex(item => item.id === element.id);
    if (index > -1) {
      this.datas.push(element);
      this.selectedItems.splice(index, 1);
    }
  }

  private _loadDatas() {
    this._produitService.getAllArticles().subscribe({
      next: datas => {
        this.datas = datas;
        console.log(this.allItems)
      },
      error: err => console.error(err),
      complete: () => console.log('Products loaded ...')
    })
  }
}

