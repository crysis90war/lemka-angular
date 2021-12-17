import {IDevisModel, IMensurationModel, IServiceModel} from ".";

export interface IDemandeDevisModel {
  id: number;
  utilisateurId: number;
  numero: string;
  titre: string;
  remarque: string;
  service: IServiceModel;
  mensuration: IMensurationModel | null;
  estUrgent: boolean;
  createdAt: Date;
  submittedAt: Date | null;
  devisStatut: boolean | null;
  devisDecision: boolean | null;
  devis: IDevisModel|null;
}

/*
  public int Id { get; set; }
  public int UtilisateurId { get; set; }
  public string? Numero { get; set; }
  public string? Titre { get; set; }
  public string? Remarque { get; set; }
  public ServiceModel? Service { get; set; }
  public MensurationModel? Mensuration { get; set; }
  public bool EstUrgent { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime? SubmittedAt { get; set; }
  public bool? DevisStatut { get; set; }
  public bool? DevisDecision { get; set; }
*/
