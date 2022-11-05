import { Component } from '@angular/core';
import { NUBE } from 'src/app/models/content/content2';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-nube',
  templateUrl: './nube.component.html'
})
export class NubeComponent extends LinkReferencia {

  items = NUBE;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['nube', 'Tipos de nube'],
    ['iaas-paas-saas', 'IaaS, PaaS, SaaS'],
    ['api', 'API'],
    ['tiposApi', 'Tipos de APIs'],
    ['rest', 'SOAP & REST'],
    ['restfull', 'Rest & RestFull'],
    ['httpCodes', 'Codigos HTTP'],
    ['caracteristicas', 'Estandares RestFull'],
    ['madurezDeUnaApi', 'Nivel de Madurez'],
    ['factores12', '12 - factores'],
    ['migracionesNube', 'Migraciones'],
    ['capTeorema', 'Teorema CAP'],
    ['dns', 'Servidor DNS'],
    ['linting', 'Linting'],
    ['HATEOAS', 'HATEOAS'],
  ]);

}
