import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
  declarations:[
    LoginComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})

export class LoginModule {}
