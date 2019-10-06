import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() {
  }

  isValid(form: FormGroup, controlName: string, submitted: boolean): boolean {
    if (submitted || (form.controls[controlName].invalid && (form.controls[controlName].dirty || form.controls[controlName].touched))) {
      if (form.hasError('required', [controlName])) {
        return true;
      } else if (form.hasError('email', [controlName])) {
        return true;
      } else if (form.hasError(('pattern'), [controlName])) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}
