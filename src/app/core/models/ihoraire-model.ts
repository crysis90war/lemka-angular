import { Time } from "@angular/common";

export interface IHoraireModel {
  jour:string;
  jourSemaine:number;
  heureOuverture:Time|null;
  heureFermeture:Time|null;
  surRdv:boolean;
  estFerme:boolean;
}

/*
    public string? Jour { get; set; }
    public int JourSemaine { get; set; }
    public TimeSpan? HeureOuverture { get; set; }
    public TimeSpan? HeureFermeture { get; set; }
    public bool SurRdv { get; set; }
    public bool EstFerme { get; set; }
*/
