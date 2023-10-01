import { Fuente } from "./models";

export class LinkFuente {

    public fuentes: Map<string, Fuente> = new Map([
        ...FRONT,       ...BACK,
        ...UTILS,       ...TESTING,
        ...CURIOSITIES, ...SECURITY,
        ...GIT,         ...APIS
    ]);

}

export const FRONT = new Map([
    ['cssRecursos', { titulo: 'Recursos de CSS', referencia: 'https://recursosrecursosrecursos.netlify.app/' }],
    ['coloresAndPaletas', { titulo: 'Colores & paletas', referencia: 'https://coolors.co/' }],
    ['disenoWebAdaptable', { titulo: 'Diseño web adaptable', referencia: 'https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns?hl=es' }],
    ['juegoFlexBox', { titulo: 'Juego de flex-box', referencia: 'https://flexboxfroggy.com/#es' }],
    ['htmlEntities', { titulo: 'Html Entities', referencia: 'https://www.freeformatter.com/html-entities.html' }],
    ['cargasDeScripts', { titulo: 'Carga de scripts', referencia: 'https://manzdev.github.io/script-type/' }],
    ['keyEvents', { titulo: 'Eventos del teclado', referencia: 'https://keycode.info/' }],
    ['htmlElements', { titulo: 'Etiquetas HTML', referencia: 'https://lenguajehtml.com/html/introduccion/tabla-periodica-html5/' }],
    ['glassmorphism', { titulo: 'Glassmorphism', referencia: 'https://hype4.academy/tools/glassmorphism-generator' }],
    ['canIuse', { titulo: 'Can I Use ?', referencia: 'https://caniuse.com/' }],
    ['javascriptDataStructures', { titulo: 'Estructuras en Javascript', referencia: 'https://www.freecodecamp.org/news/data-structures-in-javascript-with-examples/' }],
    ['canInclude', { titulo: 'Can Include ?', referencia: 'https://caninclude.glitch.me/' }],
    ['cssLayout', { titulo: 'CSS layouts', referencia: 'https://csslayout.io/' }],
    ['htmlHellHeaven', { titulo: 'HTML Hell & Heaven', referencia: 'https://www.htmhell.dev/' }]
]);

export const BACK = new Map([
    ['sqlTutorial', { titulo: 'SQL Tutorial', referencia: 'https://www.w3schools.com/sql/default.asp' }],
    ['patronesDisenoJava', { titulo: 'Patrones de diseño en Java', referencia: 'https://www.journaldev.com/1827/java-design-patterns-example-tutorial' }],
    ['comandosDocker', { titulo: 'Comandos Docker', referencia: 'https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes-es' }],
    ['paradigmaFuncionaljava', { titulo: 'Paradigma funcional Java', referencia: 'https://www.adictosaltrabajo.com/2016/06/23/uso-basico-de-java-8-stream-y-lambdas/' }],
    ['apisJava', { titulo: 'APIs comunes de Java', referencia: 'https://www.simplilearn.com/tutorials/java-tutorial/java-api?source=sl_frs_nav_playlist_video_clicked#the_most_commonly_used_java_apis' }],
    ['precendenciaJava', { titulo: 'Operadores Java', referencia: 'https://es.stackoverflow.com/questions/57225/cu%C3%A1l-es-la-precedencia-de-operadores-en-java/57226' }],
    ['codificacionJava', { titulo: 'Codificación en Java', referencia: 'https://amap.cantabria.es/amap/bin/view/AMAP/CodificacionJava' }],
    ['eventLoop', { titulo: 'Event Loop', referencia: 'https://geekflare.com/es/javascript-event-loops/' }],
    ['convivenciaArquitecturas', { titulo: 'Multiples arquitecturas', referencia: 'https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/' }],
    ['designPatternsJavascript', { titulo: 'Patrones en Javascript', referencia: 'https://www.freecodecamp.org/news/javascript-design-patterns-explained/' }],
    ['easySql', { titulo: 'Easy SQL', referencia: 'https://www.sql-easy.com/' }],
    ['orderAndSearch', { titulo: 'Busqueda & Ordenacion', referencia: 'https://www.javaguides.net/p/data-structures-and-algorithms-in-java.html' }],
    ['LinuxCommands', { titulo: 'Comandos de Linux', referencia: 'https://xmind.app/m/WwtB/' }],
    ['sqlAdvanced', { titulo: 'Preguntas SQL Avanzado', referencia: 'https://www.kdnuggets.com/2023/01/top-10-advanced-data-science-sql-interview-questions-must-know-answer.html?utm_source=rss&utm_medium=rss&utm_campaign=top-10-advanced-data-science-sql-interview-questions-you-must-know-how-to-answer' }],
    ['sqlPractices', { titulo: 'Buenas practicas SQL', referencia: 'https://www.metabase.com/learn/sql-questions/sql-best-practices' }],
    ['sqlRoadMap', { titulo: 'Mapa de Ruta SQL', referencia: 'https://roadmap.sh/sql' }],
    ['javaTags', { titulo: 'Inside Java Tags', referencia: 'https://inside.java/tags' }],
    ['arquitecturesStyles', { titulo: 'Estilos arquitectonicos', referencia: 'https://blog.bytebytego.com/p/ep68-top-architectural-styles#%C2%A7top-architectural-styles' }],
]);

export const UTILS = new Map([
    ['atributosCalidad', { titulo: 'Atributos de calidad', referencia: 'https://platzi.com/tutoriales/1248-pro-arquitectura/2545-resumen-grafico-de-los-atributos-de-calidad/' }],
    ['expresionesRegulares', { titulo: 'Expresiones regulares', referencia: 'https://regexr.com/' }],
    ['javascriptStandars', { titulo: 'Estandars para Javascript', referencia: 'https://github.com/airbnb/javascript#table-of-contents' }],
    ['algoritms', { titulo: 'Algoritmos', referencia: 'https://github.com/TheAlgorithms' }],
    ['devDocs', { titulo: 'Dev Docs', referencia: 'https://devdocs.io/' }],
    ['cliArt', { titulo: 'Comand Line Art', referencia: 'https://github.com/jlevy/the-art-of-command-line/blob/master/README-es.md' }],
    ['bundlephobia', { titulo: 'Bundle Phobia', referencia: 'https://bundlephobia.com/' }],
    ['wizardZines', { titulo: 'Trucos & Comics', referencia: 'https://wizardzines.com/' }],
    ['apisNavegador', { titulo: 'APIs del navegador', referencia: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#apis_de_navegador_m%C3%A1s_comunes' }],
    ['eventDrivenArquitectures', { titulo: 'Event Driven Visuals', referencia: 'https://serverlessland.com/event-driven-architecture/visuals/' }]
]);

export const TESTING = new Map([
    ['junit', { titulo: 'Junit', referencia: 'https://www.adictosaltrabajo.com/2016/11/24/primeros-pasos-con-junit-5/' }],
    ['junitV5', { titulo: 'Junit5', referencia: 'https://junit.org/junit5/' }],
    ['mockito', { titulo: 'Mockito', referencia: 'https://www.baeldung.com/mockito-series' }],
    ['jmeter', { titulo: 'Jmeter', referencia: 'https://www.guru99.com/jmeter-tutorials.html' }],
    ['selenium', { titulo: 'Introducción a selenium', referencia: 'https://www.digital55.com/desarrollo-tecnologia/herramientas-testing-introduccion-selenium/' }],
    ['sonarRules', { titulo: 'Sonar Rules', referencia: 'https://rules.sonarsource.com/' }],
    ['yellowLab', { titulo: 'Yellow Lab', referencia: 'https://yellowlab.tools/' }]
]);

export const CURIOSITIES = new Map([
    ['svgPorn', { titulo: 'SVG Porn', referencia: 'https://svgporn.com/' }],
    ['benchmarksFront', { titulo: 'Benchmarks in front', referencia: 'https://github.com/krausest/js-framework-benchmark' }],
    ['roadMapsDevelop', { titulo: 'Mapas de ruta', referencia: 'https://roadmap.sh/roadmaps' }],
    ['unicodes', { titulo: 'Tablas de Unicodes', referencia: 'https://unicode-table.com/es/' }],
    ['svgRepo', { titulo: 'SVG Repo', referencia: 'https://www.svgrepo.com/' }],
    ['carbon', { titulo: 'Carbon screenshots', referencia: 'https://github.com/carbon-app/carbon' }],
    ['iconsRepo', { titulo: 'Repositorio Iconos', referencia: 'https://icones.js.org/' }],
    ['javascriptFrameworks', { titulo: 'Javascript frameworks', referencia: 'https://www.pzuraq.com/blog/four-eras-of-javascript-frameworks' }],
    ['roadMapDevelop', { titulo: 'Aprender programación', referencia: 'https://www.freecodecamp.org/news/how-to-learn-programming/' }],
    ['howDnsWork', { titulo: 'como funciona un DNS', referencia: 'https://howdns.works/es/' }]
]);

export const SECURITY = new Map([
    ['noreferrer', { titulo: 'noreferrer in links', referencia: 'https://web.dev/external-anchors-use-rel-noopener/?utm_source=lighthouse&utm_medium=devtools' }],
    ['owasp', { titulo: 'OWASP', referencia: 'https://owasp.org/' }],
    ['web3.0', { titulo: 'Web 3.0 & e Internet', referencia: 'https://www.freecodecamp.org/espanol/news/que-es-web-3/' }],
    ['permisosUbuntu', { titulo: 'Permisos en Ubuntu', referencia: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/' }],
    ['auth0', { titulo: 'Auth 0, blog & noticias', referencia: 'https://auth0.com/blog/' }],
    ['https', { titulo: 'HTTPS, en un comic', referencia: 'https://howhttps.works/why-do-we-need-https/' }]
]);

export const GIT = new Map([
    ['comandosGit', { titulo: 'Comandos GIT', referencia: 'https://www.hostinger.co/tutoriales/comandos-de-git' }],
    ['comandosGitFlow', { titulo: 'Comandos Git Flow', referencia: 'http://danielkummer.github.io/git-flow-cheatsheet/index.es_ES.html' }],
    ['changeLog', { titulo: 'Change Log', referencia: 'https://keepachangelog.com/es-ES/1.0.0/' }],
    ['commitConventions', { titulo: 'Estructura de un commit', referencia: 'https://www.conventionalcommits.org/es/v1.0.0/' }],
    ['shitGit', { titulo: 'Reparalo con Git', referencia: 'https://ohshitgit.com/' }],
    ['aGoodReadme', { titulo: 'Haciendo un buen Readme', referencia: 'https://dev.to/merlos/how-to-write-a-good-readme-bog' }],
    ['madeGitIgnore', { titulo: 'GitIgnore rapido y facil', referencia: 'https://www.toptal.com/developers/gitignore/' }]
]);

export const APIS = new Map([
    ['primeraApi', { titulo: 'la Primera API', referencia: 'https://api-first-world.com/?utm_source=&utm_campaign=&utm_con=&utm_medium=email&dcid=&mkt_tok=MDY3LVVNRC05OTEAAAF--bLIdG_tuBxUOm0ANexNXnkDOGfFcrIPlKgw4SMiaw2C6ZeMnB26wqsVjRU6EGY9ISqEiqBIzonrSIVnXckxUiE0UOwMsZ5fh8kKkl9k6cM' }],
    ['jsonFormat', { titulo: 'JSON Format', referencia: 'https://jsonformatter.curiousconcept.com/#' }],
    ['rapidapi', { titulo: 'Aprendizaje sobre APIs', referencia: 'https://rapidapi.com/learn' }],
    ['designApis', { titulo: 'Diseñar un API', referencia: 'https://www.freecodecamp.org/news/design-an-api-application-program-interface/' }],
    ['overApi', { titulo: 'Over Api', referencia: 'https://overapi.com/' }],
    ['jsonVisio', { titulo: 'JSON estructure', referencia: 'https://jsonvisio.com/' }],
    ['ApiEvangelist', { titulo: 'API Evangelist', referencia: 'https://apievangelist.com/info/101/' }],
    ['RapidAPIComics', { titulo: 'Rapid API Comics', referencia: 'https://rapidapi.com/comics' }]
]);
