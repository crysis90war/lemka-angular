import {
  IMensurationModel,
  IServiceModel
} from "./index";

export interface IDemandeDevisModel {
  id:            number;
  utilisateurId: number;
  reference:     string;
  titre:         string;
  remarque:      null | string;
  service:       IServiceModel;
  mensuration:   IMensurationModel | null;
  estUrgent:     boolean;
  createdAt:     Date;
  submittedAt:   Date | null;
  devisStatut:   boolean | null;
  devisDecision: boolean | null;
  estArchive:    boolean;
}
