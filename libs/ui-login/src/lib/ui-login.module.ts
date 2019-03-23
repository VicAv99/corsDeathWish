import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoginComponent } from './ui-login/ui-login.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiLoginComponent],
  exports: [UiLoginComponent]
})
export class UiLoginModule {}
