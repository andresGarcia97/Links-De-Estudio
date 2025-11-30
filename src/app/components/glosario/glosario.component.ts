import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Content1 } from 'src/app/models/content/content1';
import { Content2 } from 'src/app/models/content/content2';
import { Content3 } from 'src/app/models/content/content3';
import { Content4 } from 'src/app/models/content/content4';
import { Content5 } from 'src/app/models/content/content5';
import { Content6 } from 'src/app/models/content/content6';
import { Content7 } from 'src/app/models/content/content7';
import { LinkFuente } from 'src/app/models/linkFuente';
import { LinkReferencia } from 'src/app/models/linkReferencia';
import { Fuente, Referencia } from 'src/app/models/models';

@Component({
    selector: 'app-glosario',
    templateUrl: './glosario.component.html',
    standalone: false
})
export class GlosarioComponent implements OnInit {

  @ViewChild("inputSearch") inputSearch!: ElementRef<HTMLInputElement>;

  fuentes = new LinkFuente().fuentes;
  linkReferencia = new LinkReferencia();

  temas = Array.from(new Content1().temas)
    .concat(new Content2().temas)
    .concat(new Content3().temas)
    .concat(new Content4().temas)
    .concat(new Content5().temas)
    .concat(new Content6().temas)
    .concat(new Content7().temas);

  search = '';

  onlyFuentes = this.convertFuentesToArray(this.fuentes);

  componentes = this.linkReferencia.components;
  onlyComponents = this.convertComponentsToArray(this.componentes);
  searchOnContent: Map<string, Referencia> = new Map();

  ngOnInit(): void {
    console.info("%c Temas: " + this.temas.length, "color:#000; font-size: 16px;background:#FFBA08; font-weight: bold;");
    console.info("%c Temas practicos: " + this.fuentes.size, "color:white; font-size: 16px;background:#1976d2; font-weight: bold;");

    const componentsWithDate = Array.from(this.componentes.values());
    const temasWithOutRevision = componentsWithDate.filter((ref: Referencia) => ref.dateRead === '' && ref.dateUpdate === '').length;
    console.info("%c Temas sin fecha: " + temasWithOutRevision, "color:white; font-size: 16px;background:#dd0031; font-weight: bold;");

    function getYearlyStats(references: Referencia[], year: string) {
      const reads = references.filter(ref => ref.dateRead?.includes(year)).length;
      const updates = references.filter(ref => ref.dateUpdate?.includes(year) && !ref.dateRead?.includes(year)).length;
      return { year, reads, updates, total: (reads + updates) };
    }

    const years = ['2025', '2024', '2023', '2022', '2021'];
    const stats = years.map(year => getYearlyStats(componentsWithDate, year));
    console.table(stats);

    setTimeout(() => {
      this.inputSearch?.nativeElement?.focus();
    }, 0);
  }

  constructor(private router: Router) { }

  private convertFuentesToArray(namesAndValues: Map<string, Fuente>): Array<object> {
    return [...namesAndValues.values()].map(value => ({
      titulo: value.titulo,
      referencia: value.referencia,
      componente: 'contenido practico'
    }));
  }

  private convertComponentsToArray(namesAndValues: Map<string, Referencia>): Array<object> {
    return [...namesAndValues].map(keyAndValue => ({
      titulo: keyAndValue[1].tittle,
      tittleShort: keyAndValue[1].tittleShort,
      componente: keyAndValue[1].component,
      key: keyAndValue[0]
    }));
  }

  public goToSection(component: string, item: string) {
    const urlSection = this.linkReferencia.routesAndSections.get(component);
    this.router.navigateByUrl(`/${urlSection}`, { state: { newItem: item } })
  }

  public searchInsideContent(): void {

    const matchingKeys = new Set<string>();

    // normalize('NFD') descompone letras acentuadas en letras base + acento (á → a + acento) y se elimina los acentos para comparar
    const normalizeToRegex = (search: string): string =>
      search
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[aeiou]/gi, (char) => {
          const base = char.toLowerCase();
          const accentedMap: { [key: string]: string } = {
            a: '[aáàäâãå]',
            e: '[eéèëê]',
            i: '[iíìïî]',
            o: '[oóòöôõ]',
            u: '[uúùüû]'
          };
          const pattern = accentedMap[base];
          return char === char.toUpperCase() ? pattern.toUpperCase() : pattern;
        });

    // \\b en ambos lados asegura que no sea una coincidencia parcial dentro de otra palabra, que solo coincida con palabras completas
    // 'i' es el modificador que hace que la búsqueda no distinga entre mayúsculas y minúsculas
    const normalizedSearch = normalizeToRegex(this.search);
    const searchRegex = new RegExp(`\\b${normalizedSearch}\\b`, 'i');

    this.temas.filter(item => {
      const containsSearchTerm = item.content.some(contentItem => searchRegex.test(contentItem));
      if (containsSearchTerm) {
        matchingKeys.add(item.key);
      }
    });

    if (matchingKeys.size === 0) {
      return;
    }

    const filteredReferences = new Map<string, Referencia>();
    this.componentes.forEach((referencia, key) => {
      if (matchingKeys.has(key)) {
        filteredReferences.set(key, referencia);
      }
    });

    this.searchOnContent = filteredReferences;
  }

}
