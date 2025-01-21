import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sbi-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.scss'],
})
export class CustomTextareaComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() control!: FormControl<string | null>;

  public clearControl() {
    this.control.setValue('');
  }
}
