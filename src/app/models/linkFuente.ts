
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
        ['glassmorphism', { titulo: 'Glassmorphism', referencia: 'https://hype4.academy/tools/glassmorphism-generator' }],
        ['canIuse', { titulo: 'Can I Use ?', referencia: 'https://caniuse.com/' }],
        // backend
        ['sqlTutorial', { titulo: 'SQL Tutorial', referencia: 'https://www.w3schools.com/sql/default.asp' }],
        ['patronesDisenoJava', { titulo: 'Patrones de diseño en Java', referencia: 'https://www.journaldev.com/1827/java-design-patterns-example-tutorial' }],
        ['comandosDocker', { titulo: 'Comandos Docker', referencia: 'https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes-es' }],
        ['paradigmaFuncionaljava', { titulo: 'Paradigma funcional Java', referencia: 'https://www.adictosaltrabajo.com/2016/06/23/uso-basico-de-java-8-stream-y-lambdas/' }],
        ['apisJava', { titulo: 'APIs comunes de Java', referencia: 'https://www.simplilearn.com/tutorials/java-tutorial/java-api?source=sl_frs_nav_playlist_video_clicked#the_most_commonly_used_java_apis' }],
        ['apisNavegador', { titulo: 'APIs del navegador', referencia: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#apis_de_navegador_m%C3%A1s_comunes' }],
        ['precendenciaJava', { titulo: 'Operadores Java', referencia: 'https://es.stackoverflow.com/questions/57225/cu%C3%A1l-es-la-precedencia-de-operadores-en-java/57226' }],
        ['codificacionJava', { titulo: 'Codificación en Java', referencia: 'https://amap.cantabria.es/amap/bin/view/AMAP/CodificacionJava' }],
        ['eventLoop', { titulo: 'Event Loop', referencia: 'https://geekflare.com/es/javascript-event-loops/' }],
        ['convivenciaArquitecturas', { titulo: 'Multiples arquitecturas', referencia: 'https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/' }],
        // utiles
        ['comandosGit', { titulo: 'Comandos GIT', referencia: 'https://www.hostinger.co/tutoriales/comandos-de-git' }],
        ['comandosGitFlow', { titulo: 'Comandos Git Flow', referencia: 'http://danielkummer.github.io/git-flow-cheatsheet/index.es_ES.html' }],
        ['atributosCalidad', { titulo: 'Atributos de calidad', referencia: 'https://platzi.com/tutoriales/1248-pro-arquitectura/2545-resumen-grafico-de-los-atributos-de-calidad/' }],
        ['expresionesRegulares', { titulo: 'Expresiones regulares', referencia: 'https://regexr.com/' }],
        ['jsonFormat', { titulo: 'JSON Format', referencia: 'https://jsonformatter.curiousconcept.com/#' }],
        ['changeLog', { titulo: 'Change Log', referencia: 'https://keepachangelog.com/es-ES/1.0.0/' }],
        ['rapidapi', { titulo: 'Aprendizaje sobre APIs', referencia: 'https://rapidapi.com/learn' }],
        ['javascriptStandars', { titulo: 'Estandars para Javascript', referencia: 'https://github.com/airbnb/javascript#table-of-contents' }],
        ['algoritms', { titulo: 'Algoritmos', referencia: 'https://github.com/TheAlgorithms' }],
        ['devDocs', { titulo: 'Dev Docs', referencia: 'https://devdocs.io/' }],
        // testing
        ['junit', { titulo: 'Junit', referencia: 'https://www.adictosaltrabajo.com/2016/11/24/primeros-pasos-con-junit-5/' }],
        ['junitV5', { titulo: 'Junit5', referencia: 'https://junit.org/junit5/' }],
        ['mockito', { titulo: 'Mockito', referencia: 'https://www.baeldung.com/mockito-series' }],
        ['jmeter', { titulo: 'Jmeter', referencia: 'https://www.guru99.com/jmeter-tutorials.html' }],
        ['selenium', { titulo: 'Introducción a selenium', referencia: 'https://www.digital55.com/desarrollo-tecnologia/herramientas-testing-introduccion-selenium/' }],
        // curiosidades
        ['primeraApi', { titulo: 'la Primera API', referencia: 'https://api-first-world.com/?utm_source=&utm_campaign=&utm_con=&utm_medium=email&dcid=&mkt_tok=MDY3LVVNRC05OTEAAAF--bLIdG_tuBxUOm0ANexNXnkDOGfFcrIPlKgw4SMiaw2C6ZeMnB26wqsVjRU6EGY9ISqEiqBIzonrSIVnXckxUiE0UOwMsZ5fh8kKkl9k6cM' }],
        ['svgPorn', { titulo: 'SVG Porn', referencia: 'https://svgporn.com/' }],
        ['benchmarksFront', { titulo: 'Benchmarks in front', referencia: 'https://github.com/krausest/js-framework-benchmark' }],
        ['roadMapsDevelop', { titulo: 'Mapas de ruta', referencia: 'https://roadmap.sh/roadmaps' }],
        ['unicodes', { titulo: 'Tablas de Unicodes', referencia: 'https://unicode-table.com/es/' }],
        ['svgRepo', { titulo: 'SVG Repo', referencia: 'https://www.svgrepo.com/' }],
        ['carbon', { titulo: 'Carbon screenshots', referencia: 'https://github.com/carbon-app/carbon' }],
        ['overApi', { titulo: 'Over Api', referencia: 'https://overapi.com/' }],
        // seguridad
        ['noreferrer', { titulo: 'noreferrer in links', referencia: 'https://web.dev/external-anchors-use-rel-noopener/?utm_source=lighthouse&utm_medium=devtools' }],
        ['owasp', { titulo: 'OWASP', referencia: 'https://owasp.org/' }],
        ['web3.0', { titulo: 'Web 3.0 & e Internet', referencia: 'https://www.freecodecamp.org/espanol/news/que-es-web-3/' }],
        ['permisosUbuntu', { titulo: 'Permisos en Ubuntu', referencia: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/' }],
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

