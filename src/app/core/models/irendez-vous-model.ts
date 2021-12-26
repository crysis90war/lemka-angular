import { Time } from "@angular/common";
import { IDevisModel, IServiceModel } from "./index";

export interface IRendezVousModel {
  id:number;
  utilisateurId:number;
  jour:Date;
  heureDebut:Time;
  heureFin:Time;
  service:IServiceModel;
  devis:IDevisModel|null;
  createdAt:Date;
  canceledAt:Date|null;
}

/*
  public int Id { get; set; }
  public int UtilisateurId { get; set; }
  public DateTime Jour { get; set; }
  public TimeSpan HeureDebut { get; set; }
  public TimeSpan HeureFin { get; set; }
  public ServiceModel? Service { get; set; }
  public DevisModel? Devis { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime? CanceledAt { get; set; }
*/
