import { Directive, ElementRef, OnDestroy } from '@angular/core';
// @ts-ignore
import * as textMask from 'vanilla-text-mask/dist/vanillaTextMask';

@Directive({
  selector: '[appMaskDate]',
})
export class DateMaskDirective implements OnDestroy {
  public mask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]; // dd.mm.yyyy
  public maskedInputController;

  constructor(private element: ElementRef) {
    this.maskedInputController = textMask.maskInput({
      inputElement: this.element.nativeElement,
      mask: this.mask,
    });
  }

  public ngOnDestroy(): void {
    this.maskedInputController.destroy();
  }
}
