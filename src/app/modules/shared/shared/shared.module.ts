import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoSpacesDirective } from 'src/app/directive/no-spaces.directive';



@NgModule({
  declarations: [
    NoSpacesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [NoSpacesDirective]
})
export class SharedModule { }
