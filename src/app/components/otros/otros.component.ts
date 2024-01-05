import { Component, OnInit } from '@angular/core';
import { OTROS } from 'src/app/models/content/content1';
import { OTROS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html'
})
export class OtrosComponent implements OnInit {

  items = OTROS;

  components = OTROS_REF;

  itemStart = '';

  tittles = new Map([ ...OTROS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}
