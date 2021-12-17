import {FormGroup} from "@angular/forms";
import {
  IAdresseForm,
  IDemandeDevisForm,
  IMensurationForm,
  IUtilisateurForm
} from "../models/forms";

export class FormConverters {
  public static convertToDemandeDevis(fg: FormGroup): IDemandeDevisForm {
    return {
      titre: fg.controls['titre'].value.trim(),
      remarque: fg.controls['remarque'].value ? fg.controls['remarque'].value.trim() : null,
      mensurationId: fg.controls['mensurationId'].value ? parseInt(fg.controls['mensurationId'].value) : null,
      serviceId: parseInt(fg.controls['serviceId'].value),
      estUrgent: !!fg.controls['estUrgent'].value,
    }
  }

  public static convertToMensuration(fg: FormGroup): IMensurationForm {
    return {
      titre: fg.controls['titre'].value.trim(),
      description: fg.controls['description'].value ? fg.controls['description'].value.trim() : null,
      isMain: !!fg.controls['isMain'].value
    }
  }

  public static convertToAdresse(fg: FormGroup): IAdresseForm {
    return {
      pays: fg.controls['pays'].value.trim(),
      ville: fg.controls['ville'].value.trim(),
      codePostal: fg.controls['codePostal'].value.trim(),
      rue: fg.controls['rue'].value.trim(),
      numero: fg.controls['numero'].value.trim(),
      boite: fg.controls['boite'].value ? fg.controls['boite'].value.trim() : null,
    };
  }

  public static convertToUtilisateur(fg: FormGroup): IUtilisateurForm {
    return {
      username: fg.controls['username'].value.trim(),
      genreId: fg.controls['genreId'].value ? parseInt(fg.controls['genreId'].value) : fg.controls['genreId'].value,
      nom: fg.controls['nom'].value ? fg.controls['nom'].value.trim() : fg.controls['nom'].value,
      prenom: fg.controls['prenom'].value ? fg.controls['prenom'].value.trim() : fg.controls['prenom'].value,
      tel: fg.controls['tel'].value ? fg.controls['tel'].value.trim() : fg.controls['tel'].value,
    }
  }
}
