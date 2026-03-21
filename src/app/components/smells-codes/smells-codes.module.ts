import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SmellsCodesComponent } from './smells-codes.component';
import { SMELL_CODES_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: SmellsCodesComponent,
    resolve: { [SMELL_CODES_PATH.propertyNameData]: contentResolver(SMELL_CODES_PATH.file) }
  }
];

@NgModule({
  declarations: [SmellsCodesComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SmellsCodesModule { }
