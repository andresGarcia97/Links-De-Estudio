import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SystemDesignComponent } from './system-design.component';
import { SYSTEM_DESIGN_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: SystemDesignComponent,
    resolve: { [SYSTEM_DESIGN_PATH.propertyNameData]: contentResolver(SYSTEM_DESIGN_PATH.file) }
  }
];

@NgModule({
  declarations: [SystemDesignComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SystemsDesignModule { }
