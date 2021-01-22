import { Directive, Input } from '@angular/core'
import { NG_VALIDATORS, Validator, AbstractControl, Validators } from '@angular/forms'

@Directive({
  selector: '[minlimit]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinNumberDirectiveDirective, multi: true }]
})
export class MinNumberDirectiveDirective  implements Validator {

  constructor() { }
  
  @Input() minlimit: number;

  validate(control: AbstractControl): { [key: string]: any } | null {    
    return Validators.min(this.minlimit)(control)    
  }

}

