import {IAdresse} from "./iadresse";
import {ISocial} from "../../core";

export interface IEntreprise {
  nom: string;
  tva: string;
  email: string;
  tel: string;
  a_propos_court: string;
  a_propos_long: string;
  adresse: IAdresse;
  socials: ISocial[];
}
