import { NgModule } from '@angular/core';
import { LeyesComponent } from './leyes.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { LEYES_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: LeyesComponent,
    resolve: { [LEYES_PATH.propertyNameData]: contentResolver(LEYES_PATH.file) }

  }
];

@NgModule({
  declarations: [LeyesComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class LeyesModule { }
