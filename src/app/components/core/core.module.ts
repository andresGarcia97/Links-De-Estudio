import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionComponent } from './section/section.component';
import { ExtraInfoComponent } from './extra-info/extra-info.component';

@NgModule({
  declarations: [
    SectionComponent,
    ExtraInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionComponent
  ]
})

export class CoreModule { }
