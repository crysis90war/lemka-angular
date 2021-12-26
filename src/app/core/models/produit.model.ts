import {IProduit} from "../interfaces/iproduit";

export class ProduitModel implements IProduit {
  id: number;
  slug: string;
  titre: string;
  description: string | null;
  image: string | null;
  tva: number;
  prix: number;
  statut: string;
  isPromotion: boolean;
  enAffiche: boolean;
  createdAt: Date;
  updatedAt: Date | null;


}
