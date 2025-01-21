import { NgModule } from '@angular/core';
import { PolicyComponent } from './policy.component';
import { CommonModule } from '@angular/common';
import { PolicyRoutingModule } from './policy-routing.module';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from '../../store/app.reducers';
import { AppEffects } from '../../store/app.effects';

@NgModule({
  declarations: [PolicyComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    StoreModule.forFeature('startProject', {
      policy: appReducers,
    }),
    EffectsModule.forFeature([AppEffects]),
    MatProgressSpinner,
  ],
  providers: [],
})
export class PolicyModule {}
