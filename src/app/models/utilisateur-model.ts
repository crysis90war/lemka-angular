import {IUtilisateurModel} from "./iutilisateur-model";
import {IAdresseModel} from "./iadresse-model";
import {IGenreModel} from "./igenre-model";

export class UtilisateurModel implements IUtilisateurModel {
  id: number;
  username: string;
  email: string;
  tel: string | null;
  image: string | null;
  prenom: string | null;
  nom: string | null;
  role: string;
  statut: string;
  genre: IGenreModel | null;
  adresse: IAdresseModel | null;
  createdAt: Date;
  updatedAt: Date | null;
  lastLogin: Date;
}
