import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '@cors/material';
import { UiLoginComponent } from './ui-login/ui-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [UiLoginComponent],
  exports: [UiLoginComponent]
})
export class UiLoginModule {}
