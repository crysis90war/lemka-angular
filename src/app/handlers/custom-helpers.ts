import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {FormGroup, ValidationErrors} from "@angular/forms";
import {IDemandeDevisModel} from "../models";
import {StatutEnum} from "../models/enums";

export class CustomHelpers {
  public static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(error.error);
    }
    // return an observable with a user-facing error message
    return throwError(() => error);
  }

  public static handleStatus(error: ValidationErrors, submitted: boolean): "is-invalid" | "is-valid" | "" {
    if (submitted && error) {
      return 'is-invalid';
    } else if (submitted && !error) {
      return 'is-valid';
    } else {
      return '';
    }
  }

  public static handleFormError(field: string, form: FormGroup, validation: string | null = null): ValidationErrors {
    if (validation) {
      return form.controls[field].errors[validation];
    } else {
      return form.controls[field].errors
    }
  }

  public static statutDemandeDevis(element: IDemandeDevisModel, statut: StatutEnum) {
    let result: boolean;
    switch (statut) {
      case StatutEnum.EnCours:
        result = (element.submittedAt === null);
        break;
      case StatutEnum.Envoye:
        result = (element.submittedAt !== null && element.devisStatut === null);
        break;
      case StatutEnum.EnTraitement:
        result = (element.devisStatut === false)
        break;
      case StatutEnum.Traite:
        result = (element.devisStatut === true && element.devisDecision === null)
        break;
      case StatutEnum.Archive:
        result = (element.devisStatut === false)
        break;
    }
    return result;
  }
}
