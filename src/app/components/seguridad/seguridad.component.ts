import { Component } from '@angular/core';
import { SEGURIDAD } from 'src/app/models/content/content3';
import { SEGURIDAD_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html'
})
export class SeguridadComponent {

  items = SEGURIDAD;

  components = new Map([ ...SEGURIDAD_REF ]);

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
    ['ciam', 'CIAM'],
    ['lateralChanel', 'Ataques de canal lateral'],
    ['csp', 'Content Security Police'],
    ['csrf', 'CSRF'],
  ]);

}
