import { Injectable } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Injectable()
export class FormService {
  controlHasError (form: FormGroup, controlName: string): boolean {
    return !!form.get(controlName)?.invalid && !!form.get(controlName)?.touched
  }

  getControlError (form: FormGroup, controlName: string, errorType: string): string {
    return form.get(controlName)?.errors?.[errorType]
  }
}
