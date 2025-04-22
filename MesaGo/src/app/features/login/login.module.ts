// src/app/features/login/login.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../core/auth/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LoginComponent]
})
export class LoginModule {}
