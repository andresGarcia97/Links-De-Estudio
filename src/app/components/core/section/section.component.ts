import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item, Referencia } from 'src/app/models/models';

const FIREFOX_BROWSER = "firefox";

const keypressed$ = fromEvent(document, "keydown");

const key = keypressed$.pipe(
  map(event => event)
);

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html'
})
export class SectionComponent implements OnInit, OnDestroy  {

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  listenArrows: Subscription = key.subscribe((value) => {
    const event = value as KeyboardEvent;
    const key = event.key;

    if ("ArrowRight" === key) {
      this.getNextElement();
      return;
    }

    if ("ArrowLeft" === key) {
      this.getBeforeElement();
      return;
    }

    if ("ArrowDown" === key || "ArrowUp" === key || "+" === key || "-" === key) {
      this.showHideRelatedSections();
      return;
    }

    if ("Escape" === key) {
      this.router.navigateByUrl("");
    }

    if ("Enter" === key) {
      this.openLink();
    }

  });

  @Input() components: Map<string, Referencia> = new Map<string, Referencia>([]);
  @Input() tittles = new Map<string, string>([]);
  @Input() items = new Array<Item>();
  @Input() selection = '';
  @Input() relatedSections = new Map<string, string>([]);

  referencia = '';
  titulo = '';
  dateRead = '';
  dateUpdate = '';
  lengthItems = 0;
  itemSelected = 0;
  iterationBackwards = false;
  showRelatedSections = false;
  relatedItems: string[] = [];

  ngOnInit(): void {
    this.lengthItems = this.items.length - 1;

    this.setSelectedItemByParamKey();

    if (this.selection !== '') {
      this.setDataByKey(this.selection);
    }

    const browser = this.detectBrowserName();
    if (FIREFOX_BROWSER === browser) {
      this.iterationBackwards = true;
    }
  }

  ngOnDestroy(): void {
    this.listenArrows.unsubscribe();
  }

  public getItemByIndex(index: number): void {
    const key = this.items[index]?.key;
    this.setDataByKey(key);
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

  public orderReverse(_a: any, _b: any) {
    return -1;
  }

  public setDataByKey(key: string = ''): void {
    this.selection = key;
    this.referencia = this.components.get(key)?.referencia ?? '';
    this.titulo = this.components.get(key)?.tittle ?? '';
    this.dateRead = this.components.get(key)?.dateRead ?? '';
    this.dateUpdate = this.components.get(key)?.dateUpdate ?? '';
    this.itemSelected = this.getIndexItemSelected(this.selection);
    this.relatedItems = this.components.get(key)?.relatedItems ?? [];
  }

  public getIndexItemSelected(key: string): number {
    const item = this.items.filter(x => x.key === key)[0];
    return this.items.indexOf(item);
  }

  // https://morioh.com/p/109202ede724
  public detectBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('firefox') > -1:
        return FIREFOX_BROWSER;
      default:
        return 'other';
    }
  }

  public routeToRelatedSection(pathComponent: string): void {
    this.router.navigateByUrl(`/${pathComponent}`)
  }

  public showHideRelatedSections(): void {
    this.showRelatedSections = !this.showRelatedSections;
  }

  public setSelectedItemByParamKey() {
    this.activeRoute.queryParams.subscribe(params => {

      const key = params['key'];

      if (key && key !== null && key !== '') {

        const onlyKeySelected = this.items.map(item => item.key).filter(k => k === key);

        if (onlyKeySelected.length === 1) {
          this.selection = onlyKeySelected[0];
        }

      }
    });

  }

  public copyUrlToShareAndShowSnackBar(selection: string) {
    const snackbar = document.getElementById("snackbar");
    snackbar!.className = "show";

    const baseUrl = window.location.origin + this.router.url.split('?')[0];
    const urlShare = `${baseUrl}?key=${selection}`
    navigator.clipboard.writeText(urlShare);

    setTimeout(() => { snackbar!.className = snackbar!.className.replace("show", ""); }, 3000);
  }

  public openLink(): void {
    const newWindow = window.open(this.referencia, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  }

}
