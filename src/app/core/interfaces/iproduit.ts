export interface IProduit {
  id:          number;
  slug:        string;
  titre:       string;
  description: string|null;
  tva:         number;
  prix:        number;
  image:       string|null;
  statut:      string;
  enAffiche:   boolean;
  isPromotion: boolean;
  createdAt:   Date;
  updatedAt:   Date|null;
}
