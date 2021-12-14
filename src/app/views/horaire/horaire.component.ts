import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHoraireModel } from 'src/app/models/ihoraire-model';
import { HoraireService } from 'src/app/services/api/horaire.service';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.scss'],
})
export class HoraireComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  constructor(private _horaireService: HoraireService) {}
  ngOnInit(): void {
    this.chargerHoraires();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.horaires = [];
  }

  public horaires: IHoraireModel[] = [];

  private chargerHoraires() {
    this.subscription = this._horaireService
      .getAll()
      .subscribe((data:IHoraireModel[]) => (this.horaires = data));
  }
}
