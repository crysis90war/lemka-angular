import {Component, Input, OnInit} from '@angular/core';
import {ProduitModel} from "../../core/models/produit.model";
import {ProduitService} from "../../core/services/api/produit.service";

@Component({
  selector: 'app-double-list-box',
  templateUrl: './double-list-box.component.html',
  styleUrls: ['./double-list-box.component.scss']
})
export class DoubleListBoxComponent implements OnInit {
  public search: string;
  private produits: ProduitModel[] = [];

  @Input() selectedItems: ProduitModel[] = [];

  public get allItems(): ProduitModel[] {
    return this.produits.filter(item => item.statut === 'Active');
  }

  constructor(private _produitService: ProduitService) {
  }

  ngOnInit(): void {
    this.loadProduits();
  }

  public addItem(element: ProduitModel): void {
    let index = this.produits.findIndex(item => item.id === element.id);
    if (index > -1) {
      this.selectedItems.push(element);
      this.produits.splice(index, 1);
    }
  }

  public removeItem(element: ProduitModel): void {
    let index = this.selectedItems.findIndex(item => item.id === element.id);
    if (index > -1) {
      this.produits.push(element);
      this.selectedItems.splice(index, 1);
    }
  }

  public loadProduits(search: string | null = null) {
    this._produitService.getAllArticles().subscribe({
      next: datas => {
        if (this.selectedItems.length > 0) {
          this.selectedItems.forEach(item => {
            let index = this.produits;
          });
        }
        this.produits = datas;
      },
      error: err => console.error(err),
      complete: () => console.log('Products loaded ...')
    })
  }
}

