
import { Directive, Input } from '@angular/core'
import { NG_VALIDATORS, Validator, AbstractControl, Validators } from '@angular/forms'

@Directive({
  selector: '[maxlimit]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxNumberDirectiveDirective, multi: true }]
})
export class MaxNumberDirectiveDirective  implements Validator {

  constructor() { }
  
  @Input() maxlimit: number;

  validate(control: AbstractControl): { [key: string]: any } | null {    
    return Validators.max(this.maxlimit)(control)    
  }

}

