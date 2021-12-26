import {Component, OnInit} from '@angular/core';
import {IDemandeDevisModel, IDevisModel} from "../../../../../core/models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../../core/services/api";
import {IDetailModel} from "../../../../../core/models/idetail-model";

@Component({
  selector: 'app-demandes-devis-details',
  templateUrl: './demandes-devis-details.component.html',
  styleUrls: ['./demandes-devis-details.component.scss']
})
export class DemandesDevisDetailsComponent implements OnInit {
  public demandeDevis: IDemandeDevisModel;
  public devis: IDevisModel;
  public details: IDetailModel[] = [];

  constructor(private _route: ActivatedRoute, private _userService: UserService) {
  }

  ngOnInit(): void {
    this.demandeDevis = this._route.snapshot.data['model'];
    this._loadDevis();
  }

  private _loadDevis(): void {
    if (this.demandeDevis && this.demandeDevis.devisStatut === true) {
      this._userService.getDDDevis(this.demandeDevis.id).subscribe({
        next: value => {
          this.devis = value;
          this._loadDetails(this.demandeDevis.id, value.id);
        },
        error: err => console.error(err),
        complete: () => console.log('Devis loaded ...')
      })
    }
  }

  private _loadDetails(ddId:number, dId:number):void {
    if (this.devis) {
      this._userService.getDetails(ddId, dId).subscribe({
        next: values => {
          this.details = values;
        },
        error: err => console.error(err),
        complete: () => console.log("Details loaded...")
      })
    }
  }
}
