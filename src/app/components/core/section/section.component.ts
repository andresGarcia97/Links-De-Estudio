import { Component, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item, Referencia } from 'src/app/models/models';

const keypressed$ = fromEvent(document, "keydown")

const porcentaje = keypressed$.pipe(
  map(event => event)
);

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html'
})
export class SectionComponent implements OnInit {

  listenArrows: any = porcentaje.subscribe((valor) => {
    const event = valor as KeyboardEvent;
    const key = event.key;

    if("ArrowRight" === key){
      this.getNextElement();
    }

    else if("ArrowLeft" === key){
      this.getBeforeElement();
    }   
  });

  @Input() components: Map<string, Referencia> = new Map<string, Referencia>([]);
  @Input() tittles = new Map<string, string>([]);
  @Input() items = new Array<Item>();

  referencia = '';
  selection = '';
  titulo = '';
  lengthItems = 0;
  itemSelected = 0;

  ngOnInit(): void {
    this.lengthItems = this.items.length - 1;
  }

  public getItemByIndex(index: number): void {
    const key = this.items[index].key;
    this.getLinkAndTittleByKey(key);
  }

  public getNextElement(): void {
    const key = this.selection;

    if (key !== '' && this.itemSelected < this.lengthItems) {
      this.itemSelected = this.getIndexItemSelected(key) + 1;
      this.getItemByIndex(this.itemSelected);
      return;
    }

    if (key === '' || this.itemSelected === 0) {
      this.selection = this.items[0].key;
      this.getItemByIndex(this.itemSelected);
    }
  }

  public getBeforeElement(): void {
    const key = this.selection;

    if (key !== '' && this.itemSelected > 0) {
      this.itemSelected = this.getIndexItemSelected(key) - 1;
      this.getItemByIndex(this.itemSelected);
    }

  }

  public asIsOrder(_a: any, _b: any) {
    return 1;
  }

  public getLinkAndTittleByKey(key: string = ''): void {
    this.selection = key;
    this.referencia = this.components.get(key)?.referencia || '';
    this.titulo = this.components.get(key)?.titulo || '';
    this.itemSelected = this.getIndexItemSelected(this.selection);
  }

  public getIndexItemSelected(key: string): number {
    const item = this.items.filter(x => x.key === key)[0];
    return this.items.indexOf(item);
  }

}
