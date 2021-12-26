import { IAdresseModel } from './index';

export interface IEntrepriseModel {
  nom: string;
  tva: string;
  email: string;
  tel: string;
  a_propos_court: string;
  a_propos_long: string;
  adresse: IAdresseModel;
}
