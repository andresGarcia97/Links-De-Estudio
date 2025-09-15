import { Component, OnInit } from '@angular/core';
import { ANALISIS_DATA } from 'src/app/models/content/content1';
import { 
  META_CARACTERISTICAS_KEY, LinkReferencia, ANALISIS_DATA_REF, ANALISIS_KEY, CI_CD_KEY, CONOCIMIENTO_EMPIRICO_KEY,
  PERSISTENCY_KEY, PATRONES_KEY, NEURO_MARKETING_KEY
} from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
  selector: 'app-analisis-datos',
  templateUrl: './analisis-datos.component.html'
})
export class AnalisisDatosComponent implements OnInit {

  items = ANALISIS_DATA;

  components = ANALISIS_DATA_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...ANALISIS_DATA_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY, routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
    this.relatedSections.set(META_CARACTERISTICAS_KEY,  routes.get(META_CARACTERISTICAS_KEY)!);
    this.relatedSections.set(PERSISTENCY_KEY,           routes.get(PERSISTENCY_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,              routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,              routes.get(PATRONES_KEY)!);
    this.relatedSections.set(CI_CD_KEY,                 routes.get(CI_CD_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      CI_CD_KEY,           routes.get(CI_CD_KEY)!,
      NEURO_MARKETING_KEY, routes.get(NEURO_MARKETING_KEY)!
    );
  }

}
