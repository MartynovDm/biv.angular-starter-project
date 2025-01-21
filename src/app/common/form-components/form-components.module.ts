import { NgModule } from '@angular/core';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomDatepickerComponent } from './custom-datepicker/custom-datepicker.component';
import { CustomChipsComponent } from './custom-chips/custom-chips.component';
import { CustomAutocompleteComponent } from './custom-autocomplit/custom-autocomplete.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { CustomRadioButtonComponent } from './custom-radio-button/custom-radio-button.component';
import { CustomTextareaComponent } from './custom-textarea/custom-textarea.component';
import { CommonModule } from '@angular/common';
import { UppercaseDirective } from './directives/upercase.directive';
import { DateMaskDirective } from './directives/date-mask.directive';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { TitlecaseDirective } from './directives/title-case.directive';
import { MaskitoDirective } from '@maskito/angular';
import { CustomToggleComponent } from './custom-toggle/custom-toggle.component';

@NgModule({
  declarations: [
    CustomSelectComponent,
    CustomInputComponent,
    CustomDatepickerComponent,
    CustomChipsComponent,
    CustomAutocompleteComponent,
    CustomCheckboxComponent,
    CustomRadioButtonComponent,
    CustomTextareaComponent,
    CustomToggleComponent,
    UppercaseDirective,
    DateMaskDirective,
    TitlecaseDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MaskitoDirective,
  ],
  exports: [
    CustomSelectComponent,
    CustomInputComponent,
    CustomDatepickerComponent,
    CustomChipsComponent,
    CustomAutocompleteComponent,
    CustomCheckboxComponent,
    CustomRadioButtonComponent,
    CustomTextareaComponent,
    CustomToggleComponent,
    UppercaseDirective,
  ],
  providers: [provideNgxMask()],
})
export class FormComponentsModule {}
