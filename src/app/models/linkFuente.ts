export class LinkFuente {

    fuente = new Fuente();

    public fuentes: Map<string, Fuente> = new Map([
        // frontend
        ['cssRecursos', { titulo: 'Recursos de CSS', referencia: 'https://recursosrecursosrecursos.netlify.app/' }],
        ['coloresAndPaletas', { titulo: 'Colores & paletas', referencia: 'https://coolors.co/' }],
        ['disenoWebAdaptable', { titulo: 'Diseño web adaptable', referencia: 'https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns?hl=es' }],
        ['juegoFlexBox', { titulo: 'Juego de flex-box', referencia: 'https://flexboxfroggy.com/#es' }],
        ['htmlEntities', { titulo: 'Html Entities', referencia: 'https://www.freeformatter.com/html-entities.html' }],
        ['cargasDeScripts', { titulo: 'Carga de scripts', referencia: 'https://manzdev.github.io/script-type/' }],
        ['cssGradients', { titulo: 'CSS gradients', referencia: 'https://www.smashingmagazine.com/2021/02/responsive-image-effects-css-gradients-aspect-ratio/' }],
        ['keyEvents', { titulo: 'Eventos del teclado', referencia: 'https://keycode.info/' }],
        ['htmlElements', { titulo: 'Etiquetas HTML', referencia: 'https://lenguajehtml.com/html/introduccion/tabla-periodica-html5/' }],
        // backend
        ['sqlTutorial', { titulo: 'SQL Tutorial', referencia: 'https://www.w3schools.com/sql/default.asp' }],
        ['patronesDisenoJava', { titulo: 'Patrones de diseño en Java', referencia: 'https://www.journaldev.com/1827/java-design-patterns-example-tutorial' }],
        ['comandosDocker', { titulo: 'Comandos Docker', referencia: 'https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes-es' }],
        ['paradigmaFuncionaljava', { titulo: 'Paradigma funcional Java', referencia: 'https://www.adictosaltrabajo.com/2016/06/23/uso-basico-de-java-8-stream-y-lambdas/' }],
        // utiles
        ['comandosGit', { titulo: 'Comandos GIT', referencia: 'https://www.hostinger.co/tutoriales/comandos-de-git' }],
        // tslint:disable-next-line: max-line-length
        ['comandosGitFlow', { titulo: 'Comandos Git Flow', referencia: 'http://danielkummer.github.io/git-flow-cheatsheet/index.es_ES.html' }],
        // tslint:disable-next-line: max-line-length
        ['codificacionJava', { titulo: 'Codificación en Java', referencia: 'https://amap.cantabria.es/amap/bin/view/AMAP/CodificacionJava' }],
        ['atributosCalidad', { titulo: 'Atributos de calidad', referencia: 'https://platzi.com/tutoriales/1248-pro-arquitectura/2545-resumen-grafico-de-los-atributos-de-calidad/' }],
        ['expresionesRegulares', { titulo: 'Expresiones regulares', referencia: 'https://regexr.com/' }],
        ['jsonFormat', { titulo: 'JSON Format', referencia: 'https://jsonformatter.curiousconcept.com/#' }],
        // testing
        ['junit', { titulo: 'Junit', referencia: 'https://www.adictosaltrabajo.com/2016/11/24/primeros-pasos-con-junit-5/' }],
        ['mockito', { titulo: 'Mockito', referencia: 'https://www.baeldung.com/mockito-series' }],
        ['jmeter', { titulo: 'Jmeter', referencia: 'https://www.guru99.com/jmeter-tutorials.html' }],
        ['selenium', { titulo: 'Introducción a selenium', referencia: 'https://www.digital55.com/desarrollo-tecnologia/herramientas-testing-introduccion-selenium/' }],
        // curiosidades
        ['primeraApi', { titulo: 'la Primera API', referencia: 'https://api-first-world.com/?utm_source=&utm_campaign=&utm_con=&utm_medium=email&dcid=&mkt_tok=MDY3LVVNRC05OTEAAAF--bLIdG_tuBxUOm0ANexNXnkDOGfFcrIPlKgw4SMiaw2C6ZeMnB26wqsVjRU6EGY9ISqEiqBIzonrSIVnXckxUiE0UOwMsZ5fh8kKkl9k6cM' }],
        ['svgPorn', { titulo: 'SVG Porn', referencia: 'https://svgporn.com/' }],
        // seguridad
        ['noreferrer', { titulo: 'noreferrer in links', referencia: 'https://web.dev/external-anchors-use-rel-noopener/?utm_source=lighthouse&utm_medium=devtools' }],
        ['owasp', { titulo: 'OWASP', referencia: 'https://owasp.org/' }]

    ]);

    public getLinkAndFuenteByKey(key: string = ''): Fuente {
        const fuenteFromMap = this.fuentes.get(key);
        this.fuente.titulo = fuenteFromMap?.titulo || '';
        this.fuente.referencia = fuenteFromMap?.referencia || '';
        return this.fuente;
    }

}

export class Fuente {
    titulo = '';
    referencia = '';
}

