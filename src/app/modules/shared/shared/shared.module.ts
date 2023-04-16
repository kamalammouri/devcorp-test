import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoSpacesDirective } from 'src/app/directive/no-spaces.directive';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    NoSpacesDirective
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [NoSpacesDirective,NgChartsModule]
})
export class SharedModule { }
