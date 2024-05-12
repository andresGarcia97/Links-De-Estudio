import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html'
})
export class ExtraInfoComponent {

  @Input() dateUpdate = '';
  @Input() dateRead = '';
  
}
