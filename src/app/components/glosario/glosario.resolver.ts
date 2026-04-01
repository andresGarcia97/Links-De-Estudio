import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResolveFn } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/models';
import * as Paths from '../../models/relationsSummary';

const CONTENT_FILES: string[] = [
    Paths.HARDWARE_PATH.file,
    Paths.ANALISIS_DATA_PATH.file,
    Paths.PERSISTENCY_PATH.file,
    Paths.PERSISTENCY_ADVANCED_PATH.file,
    Paths.PARADIGMAS_PATH.file,
    Paths.ANALISIS_PATH.file,
    Paths.METODOLOGIAS_PATH.file,
    Paths.SYSTEM_DESIGN_PATH.file,
    Paths.TESTING_PATH.file,
    Paths.TESTING_ADVANCED_PATH.file,
    Paths.CICD_INFRAESTRUCTURE_PATH.file,
    Paths.PRINCIPIOS_PATH.file,
    Paths.REFACTORING_PATH.file,
    Paths.REQUISITOS_PATH.file,
    Paths.SMELL_CODES_PATH.file,
    Paths.VERSIONAMIENTO_PATH.file,
    Paths.ARQUITECTURAS_PATH.file,
    Paths.ESTRATEGIAS_PATH.file,
    Paths.CARACTERISTICAS_PATH.file,
    Paths.POO_PATH.file,
    Paths.APIS_PATH.file,
    Paths.ESTRUCTURAS_PATH.file,
    Paths.MICROSERVICES_PATH.file,
    Paths.MICROSERVICES_ADVANCED_PATH.file,
    Paths.NUBE_PATH.file,
    Paths.PEOPLE_PATH.file,
    Paths.BUENAS_PRACTICAS_PATH.file,
    Paths.MALAS_PRACTICAS_PATH.file,
    Paths.CALIDAD_PATH.file,
    Paths.GIT_PATH.file,
    Paths.LEYES_PATH.file,
    Paths.AGILES_PATH.file,
    Paths.EMPIRICO_PATH.file,
    Paths.FRAMEWORKS_PATH.file,
    Paths.PATRONES_PATH.file,
    Paths.UML_PATH.file,
    Paths.WEB_PATH.file,
    Paths.COMPILACION_PATH.file,
    Paths.EJECUCION_PATH.file,
    Paths.CONTENEDORES_PATH.file,
    Paths.USER_HISTORIES_PATH.file,
    Paths.NEURO_MARKETING_PATH.file,
    Paths.OBSERVABILIDAD_PATH.file,
    Paths.SEGURIDAD_PATH.file,
];

function loadJson(http: HttpClient, file: string) {
    return http.get<Record<string, string[]>>(`assets/content/${file}.json`).pipe(
        map(data => Object.entries(data).map(([key, content]) => new Item(key, content)))
    );
}

export const glosarioResolver: ResolveFn<Item[]> = () => {
    const http = inject(HttpClient);
    return forkJoin(CONTENT_FILES.map(file => loadJson(http, file))).pipe(
        map(results => results.flat())
    );
};