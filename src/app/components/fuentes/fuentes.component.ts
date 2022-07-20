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
    'cssGradients',
    'keyEvents',
    'htmlElements',
    'glassmorphism',
    'canIuse',
    'javascriptDataStructures'
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
    'easySql'
  ];

  utils = [
    'comandosGit',
    'comandosGitFlow',
    'changeLog',
    'atributosCalidad',
    'expresionesRegulares',
    'jsonFormat',
    'rapidapi',
    'designApis',
    'overApi',
    'javascriptStandars',
    'algoritms',
    'devDocs'
  ];

  testing = [
    'junit',
    'junitV5',
    'mockito',
    'jmeter',
    'selenium'
  ];

  curiosities = [
    'primeraApi',
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
    'auth0'
  ];

}
