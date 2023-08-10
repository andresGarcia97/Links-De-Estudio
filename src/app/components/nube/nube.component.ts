import { Component, OnInit } from '@angular/core';
import { NUBE } from 'src/app/models/content/content2';
import { NUBE_AND_APIS } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-nube',
  templateUrl: './nube.component.html'
})
export class NubeComponent implements OnInit {

  items = NUBE;

  components = new Map([ ...NUBE_AND_APIS ]);

  itemStart = '';

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
    ['HATEOAS', 'HATEOAS'],
    ['apiStandars', 'Standares API'],
    ['apiGateway', 'Api Gateway'],
    ['falaciesDistributedSystems', 'Sistemas Distribuidos']
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}
