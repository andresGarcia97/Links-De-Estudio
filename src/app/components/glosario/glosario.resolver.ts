import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResolveFn } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/models';
import * as Paths from '../../models/relationsSummary'
import { Content2 } from 'src/app/models/content/content2';
import { Content3 } from 'src/app/models/content/content3';
import { Content4 } from 'src/app/models/content/content4';
import { Content5 } from 'src/app/models/content/content5';
import { Content6 } from 'src/app/models/content/content6';
import { Content7 } from 'src/app/models/content/content7';
import { Content8 } from 'src/app/models/content/content8';

const MIGRATED_FILES: string[] = [
    Paths.HARDWARE_PATH.file,
    Paths.ANALISIS_DATA_PATH.file,
    Paths.PERSISTENCY_PATH.file,
    Paths.PERSISTENCY_ADVANCED_PATH.file,
    Paths.PARADIGMAS_PATH.file
];

const PENDING_ITEMS: Item[] = [
    ...new Content2().temas,
    ...new Content3().temas,
    ...new Content4().temas,
    ...new Content5().temas,
    ...new Content6().temas,
    ...new Content7().temas,
    ...new Content8().temas,
];

function loadJson(http: HttpClient, file: string) {
    return http.get<Record<string, string[]>>(`assets/content/${file}.json`).pipe(
        map(data => Object.entries(data).map(([key, content]) => new Item(key, content)))
    );
}

export const glosarioResolver: ResolveFn<Item[]> = () => {
    const http = inject(HttpClient);

    const json$ = MIGRATED_FILES.length > 0
        ? forkJoin(MIGRATED_FILES.map(file => loadJson(http, file))).pipe(map(r => r.flat()))
        : of([] as Item[]);

    return json$.pipe(
        map(migratedItems => [...migratedItems, ...PENDING_ITEMS])
    );
};