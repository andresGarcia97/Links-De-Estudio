import { Component } from '@angular/core';

@Component({
  selector: 'app-fuentes',
  templateUrl: './fuentes.component.html'
})
export class FuentesComponent {

  front = [
    'cssRecursos',
    'coloresAndPaletas',
    'disenoWebAdaptable',
    'juegoFlexBox',
    'htmlEntities',
    'cargasDeScripts',
    'keyEvents',
    'htmlElements',
    'glassmorphism',
    'canIuse',
    'javascriptDataStructures',
    'canInclude',
    'cssLayout'
  ];

  back = [
    'sqlTutorial',
    'patronesDisenoJava',
    'comandosDocker',
    'paradigmaFuncionaljava',
    'apisJava',
    'apisNavegador',
    'precendenciaJava',
    'codificacionJava',
    'eventLoop',
    'convivenciaArquitecturas',
    'designPatternsJavascript',
    'easySql',
    'orderAndSearch'
  ];

  utils = [
    'atributosCalidad',
    'expresionesRegulares',
    'javascriptStandars',
    'algoritms',
    'devDocs',
  ];

  testing = [
    'junit',
    'junitV5',
    'mockito',
    'jmeter',
    'selenium'
  ];

  curiosities = [
    'svgPorn',
    'benchmarksFront',
    'roadMapsDevelop',
    'unicodes',
    'svgRepo',
    'carbon',
    'iconsRepo',
    'javascriptFrameworks',
    'roadMapDevelop'
  ];

  security = [
    'noreferrer',
    'owasp',
    'web3.0',
    'permisosUbuntu',
    'auth0',
    'https'
  ];

  git = [
    'comandosGit',
    'comandosGitFlow',
    'changeLog',
    'commitConventions'
  ];

  apis = [
    'primeraApi',
    'jsonFormat',
    'rapidapi',
    'designApis',
    'overApi',
    'jsonVisio'
  ];

}
