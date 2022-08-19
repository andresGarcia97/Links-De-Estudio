import { Component } from '@angular/core';
import { SEGURIDAD } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html'
})
export class SeguridadComponent extends LinkReferencia {

  items = SEGURIDAD;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['firewall', 'Firewall'],
    ['protocolos', 'SSL, TSL, HTTPS'],
    ['proxy', 'Proxy'],
    ['ciberSeguridad', 'Ciberseguridad'],
    ['cia', 'CIA'],
    ['noRepudio', 'NO Repudio'],
    ['matrizDeRiesgo', 'Matriz de Riesgo'],
    ['condicionDeCarrera', 'Carrera'],
    ['honeypot', 'Honeypot'],
    ['zeroDayExploit', 'Zero Day Exploit'],
    ['pentest', 'Test de Intrusión'],
    ['owaspTop', 'OWASP Top 10'],
    ['stride', 'STRIDE'],
    ['ciam','CIAM'],
    ['lateralChanel', 'Ataques de canal lateral']
  ]);

}
