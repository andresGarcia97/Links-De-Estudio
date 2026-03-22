import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { WebComponent } from './web.component';
import { WEB_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    resolve: { [WEB_PATH.propertyNameData]: contentResolver(WEB_PATH.file) }
  }
];

@NgModule({
  declarations: [WebComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class WebModule { }
