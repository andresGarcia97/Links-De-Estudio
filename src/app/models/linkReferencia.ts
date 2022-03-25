
import { Content } from './content';

export class LinkReferencia {

    selection = '';
    referencia = '';
    titulo = '';

    content = new Content();
    items = this.content.temas;

    itemSelected = 0;
    lengthItems = 0;

    public components: Map<string, Referencia> = new Map([
        // agiles
        ['moscow', new Referencia('https://proagilist.es/blog/agilidad-y-gestion-agil/priorizar-requisitos-tecnica-priorizacion-moscow/', 'MOSCOW', 'agiles')],
        ['scoring', new Referencia('https://comunidad.iebschool.com/metodologiasparaelcambio/2014/03/23/priorizando-historias-de-usuario/', 'Theme Scoring', 'agiles')],
        ['muda', new Referencia('https://prevencontrol.com/prevenblog/las-7-mudas/#:~:text=Los%20MUDA%2C%20t%C3%A9rmino%20japon%C3%A9s%20que,Sistema%20de%20producci%C3%B3n%20de%20Toyota', 'Desperdicio', 'agiles')],
        ['5s', new Referencia('https://www.gestiopolis.com/5s-seiri-seiton-seiso-seiketsu-y-shitsuke-base-de-la-mejora-continua/', 'Seiri, Seiton, Seiso, Seiketsu, Shitsuke', 'agiles')],
        ['muda#1', new Referencia('https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-i/', 'Muda en el software, paralelismos 1-3', 'agiles')],
        ['muda#2', new Referencia('https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-y-ii/', 'Muda en el software, paralelismos 4-7', 'agiles')],
        ['planningPoker', new Referencia('https://samuelcasanova.com/2016/01/estimacion-agil-con-la-tecnica-planning-poker/', 'Planning Poker y la estimación agil', 'agiles')],
        // analisis
        ['comportamiento', new Referencia('https://es.wikipedia.org/wiki/Modelo_de_comportamiento_(inform%C3%A1tica)', 'Comportamiento del sistema', 'analisis')],
        ['dominio', new Referencia('https://www.redalyc.org/jatsRepo/4768/476862530003/html/index.html#:~:text=El%20An%C3%A1lisis%20de%20Dominio%20es,la%20identificaci%C3%B3n%2C%20el%20an%C3%A1lisis%20y', 'Analisis de Dominio', 'analisis')],
        ['case', new Referencia('https://www.tutorialspoint.com/es/software_engineering/case_tools_overview.htm', 'Herramientas Case', 'analisis')],
        ['divide', new Referencia('https://es.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms', 'Divide y Venceras', 'analisis')],
        ['diseño', new Referencia('https://www.bravent.net/la-importancia-de-un-buen-diseno-del-software/', 'Ventajas de un buen diseño', 'analisis')],
        ['crc', new Referencia('https://medium.com/@marcosrrg9813/tarjetas-crc-clase-responsabilidad-colaborador-81924cec3af0', 'Tarjetas Clase-Responsabilidad-Colaborador', 'analisis')],
        ['avestruz', new Referencia('https://geeks.ms/gvelez/2009/09/28/el-algoritmo-del-avestruz-en-sharepoint/', 'Algoritmo del Avestruz', 'analisis')],
        ['modeloDominio', new Referencia('https://es.stackoverflow.com/questions/102490/que-es-el-modelo-de-dominio-en-dise%C3%B1o-de-software', 'Modelo de Dominio', 'analisis')],
        ['sistemasInformacion', new Referencia('https://concepto.de/sistema-de-informacion/', 'Sistemas de Información', 'analisis')],
        // arquitecturas
        ['definicion', new Referencia('https://cgrw01.cgr.go.cr/rup/RUP.es/SmallProjects/core.base_rup/guidances/concepts/software_architecture_4269A354.html', '¿ Que es una arquitectura ?', 'arquitecturas')],
        ['principiosArquitecturas', new Referencia('https://www.genbeta.com/desarrollo/principios-de-una-arquitectura-limpia-mantenible-y-testeable', 'Principios de las arquitecturas', 'arquitecturas')],
        ['arquitecturasLimpias', new Referencia('https://www.genbeta.com/desarrollo/principios-de-una-arquitectura-limpia-mantenible-y-testeable', 'Arquitecturas Limpias', 'arquitecturas')],
        ['capas', new Referencia('https://geeks.ms/jkpelaez/2009/05/30/arquitectura-basada-en-capas/', 'Capas', 'arquitecturas')],
        ['cliente', new Referencia('https://desarrolloweb.com/articulos/arquitectura-cliente-servidor.html', 'Cliente-Servidor', 'arquitecturas')],
        ['intermediario', new Referencia('https://conasa.grupocibernos.com/blog/patrones-comunes-de-arquitecturas-de-software', 'Intermediario', 'arquitecturas')],
        ['servicios', new Referencia('https://aws.amazon.com/es/microservices/', 'MicroServicios', 'arquitecturas')],
        ['hexagonal', new Referencia('https://medium.com/@edusalguero/arquitectura-hexagonal-59834bb44b7f', 'Hexagonal', 'arquitecturas')],
        ['mvc', new Referencia('https://developer.mozilla.org/es/docs/Glossary/MVC', 'Modelo-Vista-Controlador', 'arquitecturas')],
        ['mvp-mvc', new Referencia('https://www.develapps.com/es/noticias/modelo-vista-presentador-mvp-en-android', 'Modelo-Vista-Presentador', 'arquitecturas')],
        ['otrasArquitecturas', new Referencia('https://medium.com/@maniakhitoccori/los-10-patrones-comunes-de-arquitectura-de-software-d8b9047edf0b', 'Otras Arquitecturas', 'arquitecturas')],
        ['monolitos', new Referencia('https://www.paradigmadigital.com/techbiz/microservicios-vs-microlitos-vs-monolitos-ventajas-desventajas/', 'Monolitos VS Microservicios', 'arquitecturas')],
        // buenas practicas
        ['practicas1', new Referencia('https://www.tithink.com/es/2018/06/13/12-buenas-practicas-para-el-desarrollo-software/', 'Buenas practicas parte #1', 'buenas-practicas')],
        ['practicas2', new Referencia('https://sg.com.mx/revista/mejores-pr%C3%A1cticas-para-el-desarrollo-software', 'Buenas practicas parte #2', 'buenas-practicas')],
        ['practicas3', new Referencia('https://velneo.es/15-buenas-practicas-proyectos-desarrollo-software/', 'Buenas practicas parte #3', 'buenas-practicas')],
        ['practicas4', new Referencia('http://www.noussintelligence.com/desarrollo-software-buenas-practicas-recomendaciones/', 'Buenas practicas parte #4', 'buenas-practicas')],
        ['demeter', new Referencia('https://www.adictosaltrabajo.com/2015/07/24/ley-de-demeter/', 'Ley de Demeter', 'buenas-practicas')],
        ['complejidad', new Referencia('http://oscarmoreno.com/la-complejidad-ciclomatica/', 'Complejidad Ciclomatica', 'buenas-practicas')],
        ['logging', new Referencia('https://itnext.io/logger-or-debugger-which-one-to-choose-3f6a72200b15', 'Logging VS Debugging', 'buenas-practicas')],
        ['debugging', new Referencia('https://www.freecodecamp.org/news/what-is-debugging-how-to-debug-code/', 'Como Depurar', 'buenas-practicas')],
        ['complejidadCognitiva', new Referencia('https://enmilocalfunciona.io/complejidad-cognitiva/', 'Complejidad Cognitiva', 'buenas-practicas')],
        ['complejidadAlgoritmica', new Referencia('https://medium.com/@joseguillermo_/qu%C3%A9-es-la-complejidad-algor%C3%ADtmica-y-con-qu%C3%A9-se-come-2638e7fd9e8c', 'Complejidad Algoritmica', 'buenas-practicas')],
        ['estandaresNombramiento', new Referencia('https://adrianalonso.es/cajon-desatre/convencion-de-nombres-desde-el-camelcase-hasta-el-kebab-case/', 'Estandares de nombramiento', 'buenas-practicas')],
        // calidad
        ['metricas', new Referencia('https://searchdatacenter.techtarget.com/es/consejo/23-metricas-de-desarrollo-de-software-que-monitorear-hoy', 'Metricas del Software', 'calidad')],
        ['metricasEnCodigo', new Referencia('https://blog.desafiolatam.com/metricas-de-calidad-de-software/#:~:text=M%C3%A9tricas%20de%20calidad%20de%20software%20es%20un%20conjunto%20de%20medidas,comparar%20o%20planificar%20estas%20aplicaciones.&text=Tambi%C3%A9n%2C%20es%20necesario%20definir%20las,los%20resultados%20de%20estas%20m%C3%A9tricas', 'Metricas del codigo', 'calidad')],
        ['cleanCode', new Referencia('https://medium.com/@tijuhasz/in-one-of-the-most-groundbreaking-practical-books-on-software-development-clean-code-right-in-3ef3006c68f2', 'Clean Code & Code rot', 'calidad')],
        ['artesanos', new Referencia('https://manifesto.softwarecraftsmanship.org/#/es', 'Artesanos de software', 'calidad')],
        // compilacion
        ['compilacion', new Referencia('https://developer.mozilla.org/es/docs/Glossary/Compile', '¿ Que es compilar ?', 'compilacion')],
        ['nivel', new Referencia('https://desarrolloweb.com/articulos/2358.php#:~:text=Existen%20dos%20tipos%20de%20lenguajes,y%20los%20de%20alto%20nivel.&text=Los%20lenguajes%20m%C3%A1s%20pr%C3%B3ximos%20a,denominan%20lenguajes%20de%20alto%20nivel.', 'Niveles de compilación', 'compilacion')],
        ['interprete', new Referencia('https://yosoy.dev/diferencia-entre-lenguajes-compilados-e-interpretados/', 'Tipos de lenguajes', 'compilacion')],
        ['transpilacion', new Referencia('https://ingenieriadesoftware.es/diferencia-transpilacion-compilacion/#:~:text=Si%20traduce%20c%C3%B3digo%20entre%20lenguajes,a%20Bytecode%20ser%C3%ADa%20una%20compilaci%C3%B3n.', '¿ Que es la transpilación ?', 'compilacion')],
        ['azucarSintactico', new Referencia('https://es.wikipedia.org/wiki/Az%C3%BAcar_sint%C3%A1ctico', 'Azucar Sintactico', 'compilacion')],
        ['coercion', new Referencia('https://developer.mozilla.org/es/docs/Glossary/Type_coercion', 'Coerción', 'compilacion')],
        ['ofuscacion', new Referencia('https://www.azulweb.net/ofuscacion-de-codigo-antipatron-o-buena-practica/', 'Ofuscación', 'compilacion')],
        ['treeShaking', new Referencia('https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking', 'TreeShaking', 'compilacion')],
        ['grafos', new Referencia('https://www.grapheverywhere.com/grafos-que-son-tipos-orden-y-herramientas-de-visualizacion/', 'Grafos', 'compilacion')],
        // empirico
        ['balas', new Referencia('https://gist.github.com/esparta/582e43af7b803e0aaf69', 'Balas de Plata', 'empirico')],
        ['lehman', new Referencia('https://medium.com/@cartontabla/las-leyes-de-lehman-b57c623c3404#:~:text=Las%20Leyes%20de%20Lehman%20son,digamos%20que%20podr%C3%ADan%20ser%20ampliadas)', 'Leyes de Lehman', 'empirico')],
        ['conway', new Referencia('https://www.javiergarzas.com/2015/06/conway.html', 'Ley de Conway', 'empirico')],
        ['murphy', new Referencia('https://www.caracteristicas.co/ley-de-murphy/', 'Ley de Murphy', 'empirico')],
        ['cristales', new Referencia('https://lamenteesmaravillosa.com/la-teoria-las-ventanas-rotas/', 'Efecto de los cristales rotos', 'empirico')],
        ['quo', new Referencia('https://psicologiaymente.com/social/sesgo-statu-quo#:~:text=El%20sesgo%20del%20statu%20quo%20es%20un%20sesgo%20de%20tipo,sobre%20un%20aspecto%20en%20concreto.', 'Status Quo', 'empirico')],
        ['costo', new Referencia('https://psicologiaymente.com/psicologia/falacia-costo-hundido#:~:text=En%20resumen%2C%20la%20falacia%20del,cuyas%20expectativas%20son%20muy%20desalentadoras.', 'Falacia del costo hundido', 'empirico')],
        ['tiposProgramadores', new Referencia('https://stevenbenner.com/2010/07/the-5-types-of-programmers/', 'Tipos de programadores', 'empirico')],
        ['sesgos', new Referencia('https://www.brainvestigations.com/neurociencia/sesgo-cognitivo-negocios/', 'Algunos Sesgos cognitivos', 'empirico')],
        ['prejuicios', new Referencia('https://www.boream.com/insights/sesgos-cognitivos-y-prejuicios-en-los-procesos-de-diseno-de-interfaz-como-combatirlos', 'Prejuicios', 'empirico')],
        ['multitarea', new Referencia('https://www.sodexo.es/blog/multitarea-multitasking/', 'Pros y Contras del multitasking', 'empirico')],
        ['maxwellCurve', new Referencia('https://blog.axosoft.com/the-maxwell-curve-blunder-in-the-name-of-scrum/', 'La curva de Maxwell', 'empirico')],
        ['pendulo', new Referencia('http://www.grupocrece.es/blog/Psicolog%C3%ADala-ley-del-pndulo-en-psicologa', 'Ley del pendulo', 'empirico')],
        ['dunningKruger', new Referencia('https://www.awenpsicologia.com/efecto-dunning-kruger/', 'Efecto Dunning-Kruger', 'empirico')],
        // docker
        ['docker', new Referencia('https://www.xataka.com/otros/docker-a-kubernetes-entendiendo-que-contenedores-que-mayores-revoluciones-industria-desarrollo', '¿ Que es Docker ?', 'docker')],
        ['images', new Referencia('https://clouding.io/hc/es/articles/360010283060-Trabajando-con-im%C3%A1genes-en-Docker', '¿ Que es una imagen ?', 'docker')],
        ['containers', new Referencia('https://aulasoftwarelibre.github.io/taller-de-docker/containers/', '¿ Que es un contenedor ?', 'docker')],
        ['volumes', new Referencia('https://www.josedomingo.org/pledin/2016/05/gestion-del-almacenamiento-en-docker/#:~:text=Un%20volumen%20es%20un%20directorio,podemos%20montar%20un%20mismo%20volumen.', '¿ Que es un volumen ?', 'docker')],
        ['network', new Referencia('https://dockertips.com/algo_sobre_redes', 'Manejo de redes en Docker', 'docker')],
        ['file', new Referencia('https://docs.docker.com/develop/develop-images/dockerfile_best-practices/', 'Comandos que acepta Docker', 'docker')],
        ['compose', new Referencia('https://dockertips.com/utilizando-docker-compose#:~:text=Docker%20Compose%20es%20una%20herramienta%20que%20permite%20simplificar%20el%20uso%20de%20Docker.&text=En%20vez%20de%20utilizar%20Docker,Engine%20a%20realizar%20tareas%2C%20programaticamente', 'Manejo del docker-compose', 'docker')],
        // estrategias de desarrollo
        ['ddd', new Referencia('https://github.com/jatubio/5minutos_laravel/wiki/Resumen-sobre-DDD.-Domain-Driven-Design', 'Diseño Orientado a Dominios', 'estrategias-desarrollo')],
        ['bdd', new Referencia('https://www.itdo.com/blog/que-es-bdd-behavior-driven-development/#:~:text=Given%2DWhen%2DThen%20como%20lenguaje%20com%C3%BAn%20con%20BDD,que%20se%20van%20a%20ejecutar', 'Desarrollo Dirigido por Comportamiento', 'estrategias-desarrollo')],
        ['tdd', new Referencia('https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/', 'Desarrollo Dirigido por Tests', 'estrategias-desarrollo')],
        ['atdd', new Referencia('https://www.javiergarzas.com/2015/07/que-es-eso-de-atdd.html', 'Desarrollo guiado por pruebas de aceptación', 'estrategias-desarrollo')],
        ['analisis', new Referencia('https://www.ubjonline.mx/en-que-consisten-los-analisis-top-down-y-bottom-up/', 'Bottom Up & Top Down', 'estrategias-desarrollo')],
        ['tld', new Referencia('https://medium.com/swlh/tdd-vs-tld-and-what-is-the-minimum-code-coverage-needed-f380181d3400', 'Tests al final del desarrollo', 'estrategias-desarrollo')],
        // frameworks
        ['frameworks', new Referencia('https://neoattack.com/neowiki/framework/', '¿ Que es un framework?', 'frameworks')],
        ['ioc', new Referencia('https://medium.com/all-you-need-is-clean-code/inversi%C3%B3n-de-control-principio-de-hollywood-dont-call-us-we-ll-call-you-179e9c70e3d0', 'Inversion de Control', 'frameworks')],
        ['iod', new Referencia('https://www.arquitecturajava.com/el-patron-de-inyeccion-de-dependencia/', 'Inyección de dependencias', 'frameworks')],
        ['spring', new Referencia('https://spring.io/', 'Spring Framework', 'frameworks')],
        ['angular', new Referencia('https://platzi.com/desarrollo-angular/?utm_source=google&utm_medium=cpc&utm_campaign=9328433462&utm_adgroup=94733526952&utm_content=452203650165&&gclid=Cj0KCQiA3smABhCjARIsAKtrg6LJDf4V2JKL7esXLHrcbpL4NIx8o-pixGZe0YdtUIU5HflNhR74Md0aArb4EALw_wcB&gclsrc=aw.ds', 'Angular Framework', 'frameworks')],
        // git
        ['introduccion', new Referencia('https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Acerca-del-Control-de-Versiones', 'Introducción a Git', 'git')],
        ['repositorios', new Referencia('https://git-scm.com/book/es/v2/Fundamentos-de-Git-Trabajar-con-Remotos', 'Repositorios Remotos y Locales', 'git')],
        ['ramas', new Referencia('https://git-scm.com/book/es/v2/Ramificaciones-en-Git-Procedimientos-B%C3%A1sicos-para-Ramificar-y-Fusionar', 'Manejo de ramas', 'git')],
        ['protocolos', new Referencia('https://git-scm.com/book/es/v2/Git-en-el-Servidor-Los-Protocolos', 'Comunicación entre repositorios', 'git')],
        ['versiones', new Referencia('https://git-scm.com/book/es/v2/Git-en-entornos-distribuidos-Manteniendo-un-proyecto', 'Versiones mediante etiquetas', 'git')],
        ['forks', new Referencia('https://git-scm.com/book/es/v2/GitHub-Participando-en-Proyectos', 'Solicitudes a otros proyectos', 'git')],
        ['stash', new Referencia('https://git-scm.com/book/es/v2/Herramientas-de-Git-Guardado-r%C3%A1pido-y-Limpieza', 'Estados de trabajo', 'git')],
        ['merge', new Referencia('https://git-scm.com/book/es/v2/Herramientas-de-Git-Fusi%C3%B3n-Avanzada', 'Union de ramas', 'git')],
        ['atributos', new Referencia('https://git-scm.com/book/es/v2/Personalizaci%C3%B3n-de-Git-Git-Attributes', 'Personalización y cambio de acciones por defecto', 'git')],
        ['migracion', new Referencia('https://git-scm.com/book/es/v2/Git-y-Otros-Sistemas-Migraci%C3%B3n-a-Git', 'Migración de otros sistemas y otras acciones', 'git')],
        ['flow', new Referencia('https://aprendegit.com/que-es-git-flow/', 'Flujo de trabajo con Git', 'git')],
        ['remotos', new Referencia('https://www.clubdetecnologia.net/blog/2017/github-vs-gitlab-vs-bitbucket-que-repositorio-elegir/', 'Repositorios Remotos', 'git')],
        ['practicas', new Referencia('https://codigofacilito.com/articles/41', 'Buenas practicas para realizar commits', 'git')],
        // historias de usuario
        ['historias', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', '¿ Que son las HU ?', 'historias-usuario')],
        ['objetivos', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', '¿ Que busca una HU ?', 'historias-usuario')],
        ['partes', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', 'Partes de una HU', 'historias-usuario')],
        ['invest', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', 'Criterio INVEST', 'historias-usuario')],
        ['smart', new Referencia('https://beagilemyfriend.com/historias-de-usuario-invest-smart/', 'Criterio SMART', 'historias-usuario')],
        ['3c', new Referencia('https://julibetancur.blog/tag/tres-c/', 'Card-Conversación-Confirmación', 'historias-usuario')],
        ['gherkin', new Referencia('https://blog.thiga.co/es/gherkin/', 'Definición de los criterios de aceptación', 'historias-usuario')],
        ['agil', new Referencia('https://agilemanifesto.org/iso/es/manifesto.html', 'Manifiesto Agil', 'historias-usuario')],
        ['descomposicionHU', new Referencia('https://www.javiergarzas.com/2012/05/descomponer-historias-de-usuario-en-tareas-1.html', ' Descomposición en tareas', 'historias-usuario')],
        // malas practicas
        ['callbackhell', new Referencia('https://codearmy.co/que-es-el-callback-hell-y-como-evitarlo-4af418a6ed14', 'Cadena de llamados asincronos', 'malas-practicas')],
        ['cosas1', new Referencia('https://softgrade.mx/5-causas-afectan-la-calidad-software/', 'Malas practicas parte #1', 'malas-practicas')],
        ['cosas2', new Referencia('https://blog.gft.com/es/2016/01/20/las-10-malas-practicas-mas-comunes-en-la-gestion-de-proyectos/', 'Malas practicas parte #2', 'malas-practicas')],
        ['cosas3', new Referencia('https://blog.gft.com/es/2016/01/20/las-10-malas-practicas-mas-comunes-en-la-gestion-de-proyectos/', 'Malas practicas parte #3', 'malas-practicas')],
        // meta-caracteristicas
        ['metaDatos', new Referencia('https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/que-son-los-metadatos-y-cual-es-su-utilidad', ' ¿ Que son los metadatos ?', 'caracteristicas')],
        ['metaClase', new Referencia('https://quesignificado.org/que-es-una-metaclase/', '¿ Que es una meta clase ?', 'caracteristicas')],
        ['reflexion', new Referencia('https://es.linkfang.org/wiki/Reflexi%C3%B3n_(inform%C3%A1tica)', 'Auto mutabilidad del codigo', 'caracteristicas')],
        ['asserts', new Referencia('https://www.adictosaltrabajo.com/2016/01/07/haz-tu-codigo-mas-fiable-con-asserts/', 'Comprobaciones del codigo', 'caracteristicas')],
        ['excepciones', new Referencia('https://universidad-de-los-andes.gitbooks.io/fundamentos-de-programacion/content/Nivel4/5_ManejoDeLasExcepciones.html', 'Lanzamiento y manejo de excepciones', 'caracteristicas')],
        ['scafolding', new Referencia('https://medium.com/@srinathsrs104/scaffolding-54ac4e47e133', 'Creación automatica de codigo', 'caracteristicas')],
        ['cache', new Referencia('https://medium.com/bancolombia-tech/dise%C3%B1ando-una-estrategia-de-cach%C3%A9-39366876009b', 'Cache y sus estrategias', 'caracteristicas')],
        ['hilos', new Referencia('https://facturapp.weebly.com/hilos.html', 'Hilos', 'caracteristicas')],
        ['argumentos', new Referencia('https://picodotdev.github.io/blog-bitix/2021/01/en-java-los-argumentos-se-pasan-por-valor-o-por-referencia/', 'Argumentos por valor y por referencia', 'caracteristicas')],
        ['concurrenciaParalelismo', new Referencia('https://codigofacilito.com/articulos/programacion-concurrente', 'Concurrencia & Paralelismo', 'caracteristicas')],
        ['ortogonalidad', new Referencia('https://qastack.mx/programming/1527393/what-is-orthogonality', 'Ortogonalidad', 'caracteristicas')],
        ['boilerPlate', new Referencia('https://www.freecodecamp.org/news/whats-boilerplate-and-why-do-we-use-it-let-s-check-out-the-coding-style-guide-ac2b6c814ee7/', 'Boiler Plate (codigo repetitivo)', 'caracteristicas')],
        ['recursividad', new Referencia('https://geekytheory.com/que-es-la-recursividad/', 'Recursividad', 'caracteristicas')],
        ['backtracing', new Referencia('https://www.ecured.cu/Vuelta_atr%C3%A1s_(backtracking)', 'Back Tracing', 'caracteristicas')],
        // meta-estructura
        ['scope', new Referencia('https://platzi.com/blog/como-funciona-el-scope-en-javascript/', 'Alcance', 'estructura')],
        ['precedencia', new Referencia('https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence', 'Precedencia y jerarquia de operaciones', 'estructura')],
        ['verticalAndHorizontal', new Referencia('https://xurxodev.com/vertical-scile/', 'Organización de un proyecto', 'estructura')],
        ['expresionesRegulares', new Referencia('https://jarroba.com/busqueda-de-patrones-expresiones-regulares/', 'Expresiones Regulares', 'estructura')],
        ['estructurasDatos', new Referencia('https://medium.com/techwomenc/estructuras-de-datos-a29062de5483', 'Estructuras de datos', 'estructura')],
        ['homoiconicidad', new Referencia('https://es.wikipedia.org/wiki/Homoiconicidad', 'Homoiconicidad', 'estructura')],
        ['maquinaEstados', new Referencia('http://fisicotronica.com/maquina-de-estados-nos-referimos/', 'Maquinas de estados', 'estructura')],
        ['sistemasComplejos', new Referencia('https://www.researchgate.net/figure/Figura-2-Caracteristicas-basicas-de-los-sistemas-complejos-Comportamiento-impredecible_fig1_262437348', 'Complejidad inherente al sistema', 'estructura')],
        // metodologias
        ['agiles', new Referencia('https://www.iebschool.com/blog/que-son-metodologias-agiles-agile-scrum/', '¿ Que son las metodologias agiles ?', 'metodologias')],
        ['scrum', new Referencia('https://www.iebschool.com/blog/metodologia-scrum-agile-scrum/', 'Scrum', 'metodologias')],
        ['kanban', new Referencia('https://www.iebschool.com/blog/metodologia-kanban-agile-scrum/', 'Kanban', 'metodologias')],
        ['elevator', new Referencia('https://www.iebschool.com/blog/las-claves-para-realizar-un-elevator-pitch-lean-startup/', 'Elevator Pitch', 'metodologias')],
        ['canvas', new Referencia('https://www.iebschool.com/blog/que-es-el-modelo-canvas-y-como-aplicarlo-a-tu-negocio-agile-scrum/', 'Canvas', 'metodologias')],
        ['tradicionales', new Referencia('https://www.tutorialspoint.com/es/software_engineering/software_development_life_cycle.htm', 'Metodologias Tradicionales', 'metodologias')],
        ['cascada', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/el-modelo-en-cascada/', 'Cascada', 'metodologias')],
        ['espiral', new Referencia('https://www.ionos.es/startupguide/productividad/modelo-en-espiral/', 'Espiral', 'metodologias')],
        ['iterativo', new Referencia('https://proyectosagiles.org/desarrollo-iterativo-incremental/', 'Iterativo-incremental', 'metodologias')],
        ['extrema', new Referencia('https://www.diegocalvo.es/metodologia-xp-programacion-extrema-metodologia-agil/', 'Programación Extrema', 'metodologias')],
        ['v', new Referencia('https://ingsoftware.weebly.com/ciclo-de-vida-en-v.html', 'Modelo en V', 'metodologias')],
        ['rup', new Referencia('https://metodoss.com/metodologia-rup/', 'Proceso Racional Unificado', 'metodologias')],
        ['kaizen', new Referencia('https://www.movertis.com/blog/que-es-la-metodologia-kaizen/#:~:text=En%20japon%C3%A9s%2C%20las%20palabras%20Kai,se%20deja%20nunca%20de%20ejecutar', 'Kaizen', 'metodologias')],
        // nube
        ['nube', new Referencia('https://azure.microsoft.com/es-es/overview/what-are-private-public-hybrid-clouds/', 'Tipos de nube', 'nube')],
        ['iaas-paas-saas', new Referencia('https://www.ambit-bst.com/blog/definici%C3%B3n-de-iaas-paas-y-saas-en-qu%C3%A9-se-diferencian', 'IaaS, PaaS, SaaS', 'nube')],
        ['api', new Referencia('https://www.ticbeat.com/tecnologias/que-es-una-api-para-que-sirve/', 'API', 'nube')],
        ['rest', new Referencia('https://www.oscarblancarteblog.com/2017/03/06/soap-vs-rest-2/', 'SOAP vs REST', 'nube')],
        ['restfull', new Referencia('http://adwe.es/general/colaboraciones/servicios-web-restful-con-http-parte-i-introduccion-y-bases-teoricas/', 'Rest & Restfull', 'nube')],
        ['caracteristicas', new Referencia('https://adwe.es/codigo/apis-codigo/servicios-web-restful-con-http-parte-ii-ejemplos/', 'Caracteristicas de una api restfull', 'nube')],
        ['madurezDeUnaApi', new Referencia('https://restfulapi.net/richardson-maturity-model/', 'Nivel de madurez de una API', 'nube')],
        ['factores12', new Referencia('https://12factor.net/es/', '12 factores para una aplicación SaaS', 'nube')],
        ['migracionesNube', new Referencia('https://www.paradigmadigital.com/techbiz/mitos-lift-shift-mentiras-migraciones-cloud/', 'Migraciones hacia la nube y las 6R', 'nube')],
        ['capTeorema', new Referencia('https://www.ionos.es/digitalguide/servidores/know-how/que-es-el-cap-theorem/', 'Coherencia, Disponibilidad y tolerancia a la partición', 'nube')],
        ['dns', new Referencia('https://www.ionos.es/digitalguide/servidores/know-how/que-es-el-servidor-dns-y-como-funciona/', 'Servidor DNS', 'nube')],
        ['linting', new Referencia('https://www.freecodecamp.org/espanol/news/que-es-linting-y-eslint/', 'Linting', 'nube')],
        ['httpCodes', new Referencia('https://developer.mozilla.org/es/docs/Web/HTTP/Status', 'Codigos Http', 'nube')],
        // otros
        ['escalamiento', new Referencia('https://www.oscarblancarteblog.com/2017/03/07/escalabilidad-horizontal-y-vertical/', 'Escalamiento de un sistema', 'otros')],
        ['scraping', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-es-el-web-scraping/', 'Web Scrapping', 'otros')],
        ['cdci', new Referencia('https://www.aplyca.com/es/blog/integracion-entrega-continua-ci-cd', 'Integración continua y Entrega Continua', 'otros')],
        ['devops', new Referencia('https://www.paradigmadigital.com/techbiz/que-es-devops-y-sobre-todo-que-no-es-devops/#:~:text=Como%20conclusi%C3%B3n%2C%20qued%C3%A9monos%20con%20una,s%C3%B3lo%20en%20desarrollar%20y%20puedan', 'DevOps', 'otros')],
        ['mvp', new Referencia('https://www.inboundcycle.com/blog-de-inbound-marketing/bid/189238/qu-es-el-mvp-o-producto-m-nimo-viable', 'Minimo Producto Viable', 'otros')],
        ['turingComplete', new Referencia('https://www.eleconomista.es/economia/noticias/8817210/12/17/Ethereum-es-Turing-completo-y-eso-que-es.html', 'Turing Complete', 'otros')],
        ['cli', new Referencia('https://searchdatacenter.techtarget.com/es/definicion/Interfaz-de-linea-de-comandos-o-CLI', 'Interfaz de Linea de Comandos', 'otros')],
        ['ingenieriaInversa', new Referencia('https://ingenierosasesores.com/actualidad/ingenieria-inversa-concepto-aplicaciones/', 'Ingenieria Inversa', 'otros')],
        ['dsl', new Referencia('https://www.jetbrains.com/es-es/mps/concepts/domain-specific-languages/', 'Lenguaje de Dominio Especifico', 'otros')],
        // paradigmas
        ['imperativo', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/paradigmas-de-programacion', 'Paradigmas Imperativo & Declarativo', 'paradigmas')],
        ['funcional', new Referencia('https://codigofacilito.com/articulos/programacion-funcional', 'Paradigma funcional', 'paradigmas')],
        ['scripting', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-son-los-lenguajes-de-scripting/', 'Lenguajes de scripting', 'paradigmas')],
        ['reactiva', new Referencia('https://profile.es/blog/que-es-la-programacion-reactiva-una-introduccion/', 'Programación reactiva', 'paradigmas')],
        ['marcado', new Referencia('https://blog.educacionit.com/2018/12/26/diferencia-entre-lenguajes-de-scripting-lenguajes-de-marcado-y-lenguajes-de-programacion/', 'Lenguajes de marcado', 'paradigmas')],
        ['aspectos', new Referencia('https://www.baeldung.com/spring-aop', 'Orientación a aspectos', 'paradigmas')],
        ['logica', new Referencia('https://ferestrepoca.github.io/paradigmas-de-programacion/proglogica/logica_teoria/aplicaciones.html', 'Programación Logica', 'paradigmas')],
        // patrones
        ['definicionPatrones', new Referencia('http://www.ecured.cu/Patrones_de_dise%C3%B1o_y_arquitectura', '¿ Que son los patrones ?', 'patrones')],
        ['gof', new Referencia('http://www.cleformacion.com/tic-tek/-/blogs/patrones-gof', 'Gang of Four (GoF)', 'patrones')],
        ['desglosegof', new Referencia('https://refactoring.guru/es/design-patterns/catalog', 'Definciones de cada tipo', 'patrones')],
        ['grasp', new Referencia('https://www.adictosaltrabajo.com/2003/12/22/grasp/', 'Patrones de asignación de responsabilidades', 'patrones')],
        ['desglosegrasp', new Referencia('https://juan-garcia-carmona.blogspot.com/search/label/patr%C3%B3n', 'Patrones GRASP', 'patrones')],
        ['dao', new Referencia('https://www.genbeta.com/desarrollo/patrones-de-diseno-active-record-vs-dao', 'Data Acess Object', 'patrones')],
        ['antipatrones', new Referencia('https://sg.com.mx/revista/11/anti-patrones-la-mejor-forma-hacer-un-pesimo-sistema-software', 'Antipatrones más importantes', 'patrones')],
        ['dobleDespacho', new Referencia('https://blog.nicopaez.com/2016/11/09/una-alternativa-al-double-dispatch/', 'Patron doble despacho', 'patrones')],
        ['patronSaga', new Referencia('https://unpocodejava.com/2020/01/02/que-es-el-patron-saga/', 'Patron Saga', 'patrones')],
        ['patroncqrs', new Referencia('https://www.escuelajavascript.com/explicando-todo-acerca-de-cqrs/', 'Patron CQRS', 'patrones')],
        ['patronUndoRedo', new Referencia('https://medium.com/dottech/implementando-undo-redo-con-ngrx-o-redux-f8ef5de535ef', 'Patron Undo-Redo', 'patrones')],
        ['tiposDePatrones', new Referencia('https://www.javiergarzas.com/2014/08/tipos-patrones-software.html', 'Tipos de patrones', 'patrones')],
        // personas
        ['personasYprocesos', new Referencia('https://www.heflo.com/es/blog/bpm/personas-procesos-tecnologia/', 'Personas-Procesos-Tecnologias', 'personas')],
        ['gestionDeServicios', new Referencia('https://www.ambit-bst.com/blog/itsm.-todo-lo-que-debes-saber-sobre-la-gesti%C3%B3n-de-servicios-it', 'Gestión de servicios tecnologicos', 'personas')],
        ['gestionDeActivos', new Referencia('https://freshservice.com/latam/it-asset-management-software/', 'Gestión de activos', 'personas')],
        ['fidelizacion', new Referencia('https://elviajedelcliente.com/fidelizacion-de-clientes/', 'Fidelización de los clientes', 'personas')],
        ['modeloDIKW', new Referencia('https://programmerclick.com/article/46021807934/', 'Datos-Información-Conocimiento-Sabiduría', 'personas')],
        ['gestionDeExpectativas', new Referencia('https://brainsandbeards.com/blog/expectation-management', 'Gestion de expectativas', 'personas')],
        // poo
        ['poo', new Referencia('https://desarrolloweb.com/articulos/499.php', 'Programación Orientada a Objetos', 'POO')],
        ['pooPilares', new Referencia('https://www.campusmvp.es/recursos/post/los-conceptos-fundamentales-sobre-programacion-orientada-objetos-explicados-de-manera-simple.aspx', 'Pilares de POO', 'POO')],
        ['composicion', new Referencia('https://www.seas.es/blog/informatica/agregacion-vs-composicion-en-diagramas-de-clases-uml/', 'Agregación & Composición', 'POO')],
        ['pooStatic', new Referencia('https://desarrolloweb.com/articulos/metodos-atributos-static-poo.html', 'palabra reservada static', 'POO')],
        ['sobrecarga', new Referencia('https://www.netmentor.es/Entrada/sobrecarga-metodos', 'Sobre carga de metodos', 'POO')],
        ['acoplamiento', new Referencia('https://jummp.wordpress.com/2010/06/26/acoplamiento-aferente-acoplamiento-eferente-inestabilidad-y-abstraccion-i/', 'Tipos de acoplamiento', 'POO')],
        ['contratos', new Referencia('https://dosideas.com/wiki/Dise%C3%B1o_Por_Contrato', 'Diseño por contratos', 'POO')],
        ['descomposicion', new Referencia('http://miguedt.blogspot.com/2013/01/descomposicion-funcional.html#:~:text=La%20descomposici%C3%B3n%20funcional%20se%20refiere,en%20funci%C3%B3n%20de%20la%20composici%C3%B3n', 'Descomposición', 'POO')],
        ['herencia', new Referencia('https://www.ecured.cu/Herencia_(Inform%C3%A1tica)', 'Herencia', 'POO')],
        ['polimorfismo', new Referencia('https://devexperto.com/herencia-vs-composicion/', 'Polimorfismo', 'POO')],
        ['herVScomp', new Referencia('https://devexperto.com/herencia-vs-composicion/', 'Herencia vs Composición', 'POO')],
        ['enlaces', new Referencia('https://es.fondoperlaterra.org/comdifference-between-static-and-dynamic-binding-2', 'Enlace estatico & dinamico', 'POO')],
        ['acoplamientoComponentes', new Referencia('https://mg-laboratory.tistory.com/189', 'Acoplamiento de componentes', 'POO')],
        // pruebas
        ['principios', new Referencia('https://todosqa.com/siete-principios-del-proceso-de-prueba/', 'Principios de testing', 'testing')],
        ['manifiesto', new Referencia('https://www.adictosaltrabajo.com/2019/12/18/testing-en-un-mundo-agile/', 'Manifiesto para testing', 'testing')],
        ['tiposPruebas', new Referencia('https://visual-engin.com/2017/10/26/importancia-pruebas-de-software-testing/', 'Tipos de pruebas', 'testing')],
        ['beneficios', new Referencia('https://platzi.com/blog/testing-ventajas-formas-de-realizar-pruebas/', 'Beneficios de hacer testing continuamente', 'testing')],
        ['nombramiento', new Referencia('https://www.petrikainulainen.net/programming/testing/writing-clean-tests-naming-matters/', 'Nombramiento de los componentes', 'testing')],
        ['first', new Referencia('https://www.paradigmadigital.com/dev/principio-first-aumentar-la-calidad-tests-unitarios/', 'Principio FIRST', 'testing')],
        ['sutydoc', new Referencia('https://www.javiergarzas.com/2015/09/que-estoy-probando-y-cuales-son-mis-dependencias-en-testing.html', 'SUT & DOC', 'testing')],
        ['dobles', new Referencia('https://www.codurance.com/publications/2019/04/08/introduction-to-test-doubles', 'Dobles', 'testing')],
        ['aaa', new Referencia('http://oscarmoreno.com/pruebas-unitarias/', 'Arrange-Act-Assert', 'testing')],
        ['gwt', new Referencia('https://softwareengineering.stackexchange.com/questions/308160/differences-between-given-when-then-gwt-and-arrange-act-assert-aaa', 'Given-When-Then', 'testing')],
        ['piramide', new Referencia('https://medium.com/@wc.testing.qa/la-famosa-pir%C3%A1mide-de-cohn-y-la-dura-realidad-e1250dfbe5f3', 'Piramide de tests', 'testing')],
        ['triangulo', new Referencia('https://proyectosagiles.org/triangulo-hierro/', 'Triangulo de Hierro', 'testing')],
        ['cobertura', new Referencia('https://argonur.com/2020/05/11/code-coverage-cobertura-de-codigo/', 'Cobertura de pruebas', 'testing')],
        ['falsos', new Referencia('https://www.qalovers.com/2015/03/diferencia-entre-falso-positivo-y-falso_5.html#:~:text=La%20definici%C3%B3n%20de%20falso%20negativo,sistema%20que%20est%C3%A1%20realmente%20infectada.%22&text=Un%20falso%20negativo%20llevado%20a,cuando%20en%20realidad%20est%C3%A1%20fallando.', 'Falsos positivos & Falsos negativos', 'testing')],
        ['QAperson', new Referencia('https://www.bbvaapimarket.com/es/mundo-api/que-es-qa-y-por-que-no-debe-faltar-en-tu-proyecto/', ' ¿ Que es QA ?', 'testing')],
        // pruebas-avanzadas
        ['cajaNegraBlanca', new Referencia('https://www.testermoderno.com/caja-blanca-vs-caja-negra/', 'Tests de Caja negra & Caja blanca', 'testing-avanzado')],
        ['valorLimite', new Referencia('https://educandocontic.com/valores-limite-pruebas/', 'Valores limite', 'testing-avanzado')],
        ['clasesEquivalencia', new Referencia('https://educandocontic.com/particiones-de-equivalencia/', 'Clases de equivalencia', 'testing-avanzado')],
        ['grafosCausaEfecto', new Referencia('https://platzi.com/tutoriales/1421-pruebas-software/9606-pruebas-con-grafos-causa-efecto/', 'Grafos causa -> efecto', 'testing-avanzado')],
        ['tiposDePruebas', new Referencia('https://www.softwaretestinghelp.com/types-of-software-testing/', 'Diferentes tipos de pruebas', 'testing-avanzado')],
        ['outsideInside', new Referencia('https://www.adictosaltrabajo.com/2016/01/29/tdd-outside-in-vs-inside-out/', 'TDD: Outside-In VS Inside-out', 'testing-avanzado')],
        // refactorización
        ['codigolimpio', new Referencia('https://refactoring.guru/es/refactoring/what-is-refactoring', '¿ Que es codigo Limpio ?', 'refactorizacion')],
        ['deudatecnica', new Referencia('https://refactoring.guru/es/refactoring/technical-debt', 'Deuda tecnica', 'refactorizacion')],
        ['tiposDeudaTecnica', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/deuda-tecnica-explicada/', 'Tipos de deuda tecnica', 'refactorizacion')],
        ['comentarios', new Referencia('https://www.scrummanager.net/bok/index.php?title=Deuda_t%C3%A9cnica', 'Comentarios especiales', 'refactorizacion')],
        ['cuandorefactorizar', new Referencia('https://refactoring.guru/es/refactoring/when', '¿ Cuando refactorizar ?', 'refactorizacion')],
        ['comorefactorizar', new Referencia('https://refactoring.guru/es/refactoring/how-to', '¿ Como refactorizar ? ', 'refactorizacion')],
        ['tecnicasRefactoring', new Referencia('https://refactoring.guru/es/refactoring/techniques', 'Tecnicas para refactorizar', 'refactorizacion')],
        // requisitos
        ['funcionales', new Referencia('https://medium.com/@requeridosblog/requerimientos-funcionales-y-no-funcionales-ejemplos-y-tips-aa31cb59b22a', 'Requisitos funcionales', 'requisitos')],
        ['NOfuncionales', new Referencia('https://medium.com/@requeridosblog/requerimientos-funcionales-y-no-funcionales-ejemplos-y-tips-aa31cb59b22a', 'Requisitos No funcionales', 'requisitos')],
        ['negocio', new Referencia('https://requeridos.com/que-es-el-valor-de-negocio-y-como-medirlo/', 'El valor del negocio', 'requisitos')],
        ['ambiguedad', new Referencia('https://requeridos.com/requerimientos-menos-es-mas/', 'Evitar la ambiguedad', 'requisitos')],
        ['calidad', new Referencia('https://platzi.com/tutoriales/1248-pro-arquitectura/5498-atributos-de-calidad-de-un-producto-de-software/', 'Atributos de calidad', 'requisitos')],
        ['tradeoff', new Referencia('https://medium.com/analysts-corner/those-other-requirements-quality-attributes-and-their-inescapable-tradeoffs-31dc0691974d', 'Sacrificios y ganancias', 'requisitos')],
        // principios
        ['solid', new Referencia('https://profile.es/blog/principios-solid-desarrollo-software-calidad/', 'Principio SOLID', 'principios')],
        ['kiss', new Referencia('https://manuelzapata.co/principio-kiss-keep-it-simple-stupid/', 'Mantenlo simple, estupido', 'principios')],
        ['yagni', new Referencia('https://www.genbeta.com/desarrollo/la-navaja-de-occam-kiss-y-yagni-la-simplicidad-en-el-codigo-no-deberia-ser-solo-postureo-developer', 'No vas a necesitarlo', 'principios')],
        ['occam', new Referencia('https://www.genbeta.com/desarrollo/la-navaja-de-occam-kiss-y-yagni-la-simplicidad-en-el-codigo-no-deberia-ser-solo-postureo-developer', 'La navaja de Occam', 'principios')],
        ['dry', new Referencia('https://tantacom.com/principios-diseno-software-kiss-dry-solid/', 'No te repitas a ti mismo', 'principios')],
        ['hollywood', new Referencia('https://www.genbeta.com/desarrollo/doce-principios-de-diseno-que-todo-desarrollador-deberia-conocer', 'No nos llames, nosotros te llamamos', 'principios')],
        ['tellDontAsk', new Referencia('https://www.disrupciontecnologica.com/tell-dont-ask/?reload=977836', 'Dile, no le preguntes', 'principios')],
        ['stupid', new Referencia('https://williamdurand.fr/2013/07/30/from-stupid-to-solid-code/#singleton', 'NO seas S.T.U.P.I.D', 'principios')],
        // seguridad
        ['firewall', new Referencia('https://idgrup.com/firewall-que-es-y-como-funciona/#:~:text=Un%20firewall%2C%20tambi%C3%A9n%20llamado%20cortafuegos,ordenadores%20de%20una%20misma%20red', 'Firewall', 'seguridad')],
        ['protocolos', new Referencia('https://www.websecurity.digicert.com/es/es/security-topics/what-is-ssl-tls-https', 'SSL, TSL, HTTPS', 'seguridad')],
        ['proxy', new Referencia('https://www.welivesecurity.com/la-es/2020/01/02/que-es-proxy-para-que-sirve/', 'Proxy', 'seguridad')],
        ['estatico', new Referencia('https://www.welivesecurity.com/la-es/2021/01/18/analisis-estatico-codigo-fuente-orientado-a-seguridad/', 'Analisis de codigo estatico', 'seguridad')],
        ['ciberSeguridad', new Referencia('https://latam.kaspersky.com/resource-center/definitions/what-is-cyber-security', 'Ciberseguridad y otras amenazas', 'seguridad')],
        ['cia', new Referencia('https://searchdatacenter.techtarget.com/es/opinion/Que-es-la-triada-de-la-CIA', 'Confidencialidad-Integridad-Accesibilidad ', 'seguridad')],
        ['noRepudio', new Referencia('https://www.unir.net/ingenieria/revista/no-repudio-seguridad-informatica/', 'No repudio', 'seguridad')],
        ['matrizDeRiesgo', new Referencia('https://www.protek.com.py/novedades/objetivos-de-una-matriz-de-riesgos/', 'Matriz de Riesgo', 'seguridad')],
        ['condicionDeCarrera', new Referencia('https://ciberseguridad.com/amenzas/vulnerabilidades/condicion-de-carrera/', 'Condición de Carrera', 'seguridad')],
        ['honeypot', new Referencia('https://latam.kaspersky.com/resource-center/threats/what-is-a-honeypot', 'Honetypot', 'seguridad')],
        ['zeroDayExploit', new Referencia('https://latam.kaspersky.com/resource-center/definitions/zero-day-exploit', 'Zero Day Exploit', 'seguridad')],
        // smells codes
        ['codesmells', new Referencia('https://openwebinars.net/blog/code-smells-y-deuda-tecnica/', 'Smell Codes', 'smells codes')],
        ['tiposSmellCodes', new Referencia('https://refactoring.guru/es/refactoring/smells', 'Tipos de Smell codes', 'smells codes')],
        ['desglose', new Referencia('https://refactoring.guru/es/refactoring/smells', 'Smell codes por tipo', 'smells codes')],
        ['casos', new Referencia('https://refactoring.guru/es/refactoring/smells', 'Casos donde pueden ser ignorados', 'smells codes')],
        ['payoff', new Referencia('https://refactoring.guru/es/refactoring/smells', 'Beneficios de corregir code smells', 'smells codes')],
        // sql & No sql
        ['sql', new Referencia('https://www.w3schools.com/sql/default.asp', '¿ Que es SQL ? ', 'Bases de datos')],
        ['dbms', new Referencia('https://www.astera.com/es/type/blog/database-management-software/', 'Software de Gestion de Bases de Datos', 'Bases de datos')],
        ['crud', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/crud-las-principales-operaciones-de-bases-de-datos/', 'Create, Read, Update, Delete', 'Bases de datos')],
        ['dl', new Referencia('https://platzi.com/blog/que-es-ddl-dml-dcl-y-tcl-integridad-referencial/', 'DDL, DML, DCL, TCL', 'Bases de datos')],
        ['integridad', new Referencia('https://platzi.com/blog/que-es-ddl-dml-dcl-y-tcl-integridad-referencial/', 'Integridad Referencial', 'Bases de datos')],
        ['erd', new Referencia('https://www.lucidchart.com/pages/es/que-es-un-diagrama-entidad-relacion', 'Diagrama Entidad-Relación', 'Bases de datos')],
        ['normalizacion', new Referencia('https://docs.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description', 'Normalización de una BD', 'Bases de datos')],
        ['nosql', new Referencia('https://pandorafms.com/blog/es/bases-de-datos-nosql/', 'Bases de Datos NO SQL', 'Bases de datos')],
        ['tiposBD', new Referencia('https://www.acens.com/wp-content/images/2014/02/bbdd-nosql-wp-acens.pdf', 'Tipos de BD No SQL', 'Bases de datos')],
        ['acid', new Referencia('https://dosideas.com/noticias/base-de-datos/973-acid-en-las-bases-de-datos', 'Esquema ACID', 'Bases de datos')],
        ['orm', new Referencia('https://programarfacil.com/blog/que-es-un-orm/', 'Mapeo Objetos-Relacional', 'Bases de datos')],
        ['consistenciaEventual', new Referencia('https://medium.com/@gabanox/consistencia-eventual-en-s3-6ba5b2ecd721', 'Consistencia Eventual', 'Bases de datos')],
        ['algebraRelacional', new Referencia('https://sites.google.com/site/basededatosdistribuidastics/algebra-relacional', 'Algebra Relacional', 'Bases de datos')],
        ['n+1selects', new Referencia('https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping', 'N + 1 Selects', 'Bases de datos')],
        ['indices', new Referencia('https://www.ibm.com/docs/es/mam/7.6.0.8?topic=databases-database-indexing', 'Indices', 'Bases de datos')],
        ['boyceCodd', new Referencia('https://normalizacionunit4.blogspot.com/2019/05/46-forma-normal-boyce-codd.html', 'Boyce-Codd', 'Bases de datos')],
        // uml
        ['uml', new Referencia('https://diagramasuml.com/', 'Lenguaje Unificado de Modelado', 'uml')],
        ['clase', new Referencia('https://diagramasuml.com/diagrama-de-clases/', 'Diagrama de clases', 'uml')],
        ['componentes', new Referencia('https://diagramasuml.com/componentes/', 'Diagrama de componentes', 'uml')],
        ['despliegue', new Referencia('https://diagramasuml.com/despliegue/', 'Diagrama de despliegue', 'uml')],
        ['usos', new Referencia('https://diagramasuml.com/casos-de-uso/', 'Diagrama de casos de uso', 'uml')],
        ['secuencia', new Referencia('https://diagramasuml.com/secuencia/', 'Diagrama de secuencia', 'uml')],
        ['actividades', new Referencia('https://diagramasuml.com/actividades/', 'Diagrama de actividades', 'uml')],
        ['paquetes', new Referencia('https://diagramasuml.com/paquetes/', 'Diagrama de paquetes', 'uml')],
        ['estados', new Referencia('https://diagramasuml.com/estados/', 'Diagrama de estados', 'uml')],
        ['vista', new Referencia('https://es.wikipedia.org/wiki/Modelo_de_Vistas_de_Arquitectura_4%2B1', 'Modelo 4+1 vistas', 'uml')],
        // versionamiento
        ['git', new Referencia('https://david-estevez.gitbooks.io/the-git-the-bad-and-the-ugly/content/es/control-de-versiones.html', 'Gestores de versiones', 'versionamiento')],
        ['dependencias', new Referencia('https://www.hongkiat.com/blog/manage-dependencies-tools-webdev/', 'Gestores de dependencias', 'versionamiento')],
        ['gradlevsmaven', new Referencia('https://www.chakray.com/es/gradle-vs-maven-definiciones-diferencias/', 'Gradle vs Maven', 'versionamiento')],
        ['versionamiento', new Referencia('https://ed.team/blog/como-se-deciden-las-versiones-del-software', 'Manejo de versiones', 'versionamiento')],
        ['licencias', new Referencia('https://www.bbvaapimarket.com/es/mundo-api/las-5-licencias-de-software-libre-mas-importantes-que-todo-desarrollador-debe-conocer/', 'Tipos de licencias', 'versionamiento')],
        // hardware
        ['virtualizacion', new Referencia('https://www.redhat.com/es/topics/virtualization/what-is-a-virtual-machine', 'Virtualización', 'Hardware')],
        ['nubeVSvirtualizacion', new Referencia('https://www.redhat.com/es/topics/cloud-computing/cloud-vs-virtualization', 'Nube Vs Virtualizacion', 'Hardware')],
        ['rendering', new Referencia('https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/', 'Server-side vs client-side rendering', 'Hardware')],
        // web
        ['spa', new Referencia('https://desarrolloweb.com/articulos/que-es-una-spa.html#:~:text=En%20pocas%20palabras%2C%20SPA%20son,html', 'Single Page Aplication', 'web')],
        ['pwa', new Referencia('https://www.iebschool.com/blog/progressive-web-apps-analitica-usabilidad/', 'Progressive Web App', 'web')],
        ['seo', new Referencia('https://www.40defiebre.com/guia-seo/que-es-seo-por-que-necesito', 'Search Engine Optimization', 'web')],
        ['espacio', new Referencia('https://www.dsigno.es/blog/diseno-grafico/espacios-negativos-en-diseno-grafico', 'El uso del espacio para diseñar', 'web')],
        ['diseno', new Referencia('https://seocom.agency/es/blog/diseno-grafico-web/', 'Diseño grafico', 'web')],
        ['interfacesUsuario', new Referencia('https://pensamientodigital.wordpress.com/diseno-de-interfases-de-usuario/', 'Diseño de interfaces de usuario', 'web')],
        ['logos', new Referencia('https://franciscotorreblanca.es/logotipo-imagotipo-isotipo-e-isologo/', 'Logotipo, Imagotipo, Isotipo, Isologo', 'web')],
        ['experienciasUsuario', new Referencia('https://blog.acantu.com/que-es-ux-y-ui/', 'Experiencia de usuario', 'web')],
        ['gestalt', new Referencia('https://imborrable.com/blog/teoria-de-la-gestalt/', 'Teoria de Gestalt', 'web')],
    ]);

    public getLinkAndTittleByKey(key: string = ''): void {
        this.selection = key;
        this.referencia = this.components.get(key)?.referencia || '';
        this.titulo = this.components.get(key)?.titulo || '';
        this.itemSelected = this.getIndexItemSelected(this.selection);
    }

    public getItemByIndex(index: number): void {
        const key = this.items[index].key;
        this.getLinkAndTittleByKey(key);
    }

    public getIndexItemSelected(key: string): number {
        const item = this.items.filter(x => x.key === key)[0];
        return this.items.indexOf(item);
    }

    public getNextElement(): void {
        const key = this.selection;

        if (key !== '' && this.itemSelected <= this.lengthItems) {
            this.itemSelected = this.getIndexItemSelected(key) + 1;
            this.getItemByIndex(this.itemSelected);
            return;
        }

        if (key === '' || this.itemSelected === 0) {
            this.selection = this.items[0].key;
            this.getItemByIndex(this.itemSelected);
        }
    }

    public getBeforeElement(): void {
        const key = this.selection;

        if (key !== '' && this.itemSelected > 0) {
            this.itemSelected = this.getIndexItemSelected(key) - 1;
            this.getItemByIndex(this.itemSelected);
        }

    }

}
export class Referencia {
    referencia = '';
    titulo = '';
    component = '';

    constructor(referencia: string, titulo: string, component: string) {
        this.referencia = referencia;
        this.titulo = titulo;
        this.component = component;
    }
}
