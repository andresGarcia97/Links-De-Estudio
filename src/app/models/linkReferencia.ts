export class LinkReferencia {

    selection = '';
    referencia = '';
    titulo = '';

    protected links: Map<string, string> = new Map([
        // agiles
        ['moscow', 'https://proagilist.es/blog/agilidad-y-gestion-agil/priorizar-requisitos-tecnica-priorizacion-moscow/'],
        ['scoring', 'https://comunidad.iebschool.com/metodologiasparaelcambio/2014/03/23/priorizando-historias-de-usuario/'],
        ['muda', 'https://prevencontrol.com/prevenblog/las-7-mudas/#:~:text=Los%20MUDA%2C%20t%C3%A9rmino%20japon%C3%A9s%20que,Sistema%20de%20producci%C3%B3n%20de%20Toyota'],
        ['5s', 'https://www.gestiopolis.com/5s-seiri-seiton-seiso-seiketsu-y-shitsuke-base-de-la-mejora-continua/'],
        ['muda#1', 'https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-i/'],
        ['muda#2', 'https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-y-ii/'],
        // analisis
        ['comportamiento', 'https://es.wikipedia.org/wiki/Modelo_de_comportamiento_(inform%C3%A1tica)'],
        ['dominio', 'https://www.redalyc.org/jatsRepo/4768/476862530003/html/index.html#:~:text=El%20An%C3%A1lisis%20de%20Dominio%20es,la%20identificaci%C3%B3n%2C%20el%20an%C3%A1lisis%20y'],
        ['case', 'https://www.tutorialspoint.com/es/software_engineering/case_tools_overview.htm'],
        ['divide', 'https://es.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms'],
        ['diseño', 'https://www.bravent.net/la-importancia-de-un-buen-diseno-del-software/'],
        ['crc', 'https://medium.com/@marcosrrg9813/tarjetas-crc-clase-responsabilidad-colaborador-81924cec3af0'],
        // arquitecturas
        ['definicion', 'https://cgrw01.cgr.go.cr/rup/RUP.es/SmallProjects/core.base_rup/guidances/concepts/software_architecture_4269A354.html'],
        ['capas', 'https://geeks.ms/jkpelaez/2009/05/30/arquitectura-basada-en-capas/'],
        ['cliente', 'https://desarrolloweb.com/articulos/arquitectura-cliente-servidor.html'],
        ['intermediario', 'https://conasa.grupocibernos.com/blog/patrones-comunes-de-arquitecturas-de-software'],
        ['servicios', 'https://aws.amazon.com/es/microservices/'],
        ['hexagonal', 'https://medium.com/@edusalguero/arquitectura-hexagonal-59834bb44b7f'],
        ['otrasArquitecturas', 'https://medium.com/@maniakhitoccori/los-10-patrones-comunes-de-arquitectura-de-software-d8b9047edf0b'],
        // buenas practicas
        ['practicas1', 'https://www.tithink.com/es/2018/06/13/12-buenas-practicas-para-el-desarrollo-software/'],
        ['practicas2', 'https://sg.com.mx/revista/mejores-pr%C3%A1cticas-para-el-desarrollo-software'],
        ['practicas3', 'https://velneo.es/15-buenas-practicas-proyectos-desarrollo-software/'],
        ['practicas4', 'http://www.noussintelligence.com/desarrollo-software-buenas-practicas-recomendaciones/'],
        ['demeter', 'https://www.adictosaltrabajo.com/2015/07/24/ley-de-demeter/'],
        ['complejidad', 'http://oscarmoreno.com/la-complejidad-ciclomatica/'],
        // compilación
        ['compilacion', 'https://developer.mozilla.org/es/docs/Glossary/Compile'],
        ['nivel', 'https://desarrolloweb.com/articulos/2358.php#:~:text=Existen%20dos%20tipos%20de%20lenguajes,y%20los%20de%20alto%20nivel.&text=Los%20lenguajes%20m%C3%A1s%20pr%C3%B3ximos%20a,denominan%20lenguajes%20de%20alto%20nivel.'],
        ['interprete', 'https://yosoy.dev/diferencia-entre-lenguajes-compilados-e-interpretados/'],
        ['transpilacion', 'https://ingenieriadesoftware.es/diferencia-transpilacion-compilacion/#:~:text=Si%20traduce%20c%C3%B3digo%20entre%20lenguajes,a%20Bytecode%20ser%C3%ADa%20una%20compilaci%C3%B3n.'],
        // conocimentos empiricos
        ['balas', 'https://gist.github.com/esparta/582e43af7b803e0aaf69'],
        ['lehman', 'https://medium.com/@cartontabla/las-leyes-de-lehman-b57c623c3404#:~:text=Las%20Leyes%20de%20Lehman%20son,digamos%20que%20podr%C3%ADan%20ser%20ampliadas)'],
        ['conway', 'https://www.javiergarzas.com/2015/06/conway.html'],
        ['murphy', 'https://www.caracteristicas.co/ley-de-murphy/'],
        ['cristales', 'https://lamenteesmaravillosa.com/la-teoria-las-ventanas-rotas/'],
        ['quo', 'https://psicologiaymente.com/social/sesgo-statu-quo#:~:text=El%20sesgo%20del%20statu%20quo%20es%20un%20sesgo%20de%20tipo,sobre%20un%20aspecto%20en%20concreto.'],
        ['costo', 'https://psicologiaymente.com/psicologia/falacia-costo-hundido#:~:text=En%20resumen%2C%20la%20falacia%20del,cuyas%20expectativas%20son%20muy%20desalentadoras.'],
        ['tipos', 'https://stevenbenner.com/2010/07/the-5-types-of-programmers/'],
        ['sesgos', 'https://www.brainvestigations.com/neurociencia/sesgo-cognitivo-negocios/'],
        ['multitarea', 'https://www.sodexo.es/blog/multitarea-multitasking/'],
        // docker
        ['docker', 'https://www.xataka.com/otros/docker-a-kubernetes-entendiendo-que-contenedores-que-mayores-revoluciones-industria-desarrollo'],
        ['images', 'https://clouding.io/hc/es/articles/360010283060-Trabajando-con-im%C3%A1genes-en-Docker'],
        ['containers', 'https://aulasoftwarelibre.github.io/taller-de-docker/containers/'],
        ['volumes', 'https://www.josedomingo.org/pledin/2016/05/gestion-del-almacenamiento-en-docker/#:~:text=Un%20volumen%20es%20un%20directorio,podemos%20montar%20un%20mismo%20volumen.'],
        ['network', 'https://dockertips.com/algo_sobre_redes'],
        ['file', 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/'],
        ['compose', 'https://dockertips.com/utilizando-docker-compose#:~:text=Docker%20Compose%20es%20una%20herramienta%20que%20permite%20simplificar%20el%20uso%20de%20Docker.&text=En%20vez%20de%20utilizar%20Docker,Engine%20a%20realizar%20tareas%2C%20programaticamente'],
        // estrategias de desarrollo
        ['ddd', 'https://github.com/jatubio/5minutos_laravel/wiki/Resumen-sobre-DDD.-Domain-Driven-Design'],
        ['bdd', 'https://www.itdo.com/blog/que-es-bdd-behavior-driven-development/#:~:text=Given%2DWhen%2DThen%20como%20lenguaje%20com%C3%BAn%20con%20BDD,que%20se%20van%20a%20ejecutar'],
        ['tdd', 'https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/'],
        ['atdd', 'https://www.javiergarzas.com/2015/07/que-es-eso-de-atdd.html'],
        ['analisis', 'https://www.ubjonline.mx/en-que-consisten-los-analisis-top-down-y-bottom-up/'],
        // frameworks
        ['frameworks', 'https://neoattack.com/neowiki/framework/'],
        ['ioc', 'https://medium.com/all-you-need-is-clean-code/inversi%C3%B3n-de-control-principio-de-hollywood-dont-call-us-we-ll-call-you-179e9c70e3d0'],
        ['iod', 'https://www.arquitecturajava.com/el-patron-de-inyeccion-de-dependencia/'],
        ['spring', 'https://spring.io/'],
        ['angular', 'https://platzi.com/desarrollo-angular/?utm_source=google&utm_medium=cpc&utm_campaign=9328433462&utm_adgroup=94733526952&utm_content=452203650165&&gclid=Cj0KCQiA3smABhCjARIsAKtrg6LJDf4V2JKL7esXLHrcbpL4NIx8o-pixGZe0YdtUIU5HflNhR74Md0aArb4EALw_wcB&gclsrc=aw.ds'],
        ['', ''],

    ]);

    protected titulos: Map<string, string> = new Map([
        // agiles
        ['moscow', 'MOSCOW'],
        ['scoring', 'Theme Scoring'],
        ['muda', 'Desperdicio'],
        ['5s', 'Seiri, Seiton, Seiso, Seiketsu, Shitsuke'],
        ['muda#1', 'Muda en el software, paralelismos 1-3'],
        ['muda#2', 'Muda en el software, paralelismos 4-7'],
        // analisis
        ['comportamiento', 'Comportamiento del sistema'],
        ['dominio', 'Analisis de Dominio'],
        ['case', 'Herramientas Case'],
        ['divide', 'Divide y Venceras'],
        ['diseño', 'Ventajas de un buen diseño'],
        ['crc', 'Tarjetas Clase-Responsabilidad-Colaborador'],
        // arquitecturas
        ['definicion', '¿ Que es una arquitectura ?'],
        ['capas', 'Capas'],
        ['cliente', 'Cliente-Servidor'],
        ['intermediario', 'Intermediario'],
        ['servicios', 'MicroServicios'],
        ['hexagonal', 'Hexagonal'],
        ['otrasArquitecturas', 'Otras Arquitecturas'],
        // buenas practicas
        ['practicas1', 'Buenas practicas parte #1'],
        ['practicas2', 'Buenas practicas parte #2'],
        ['practicas3', 'Buenas practicas parte #3'],
        ['practicas4', 'Buenas practicas parte #4'],
        ['demeter', 'Ley de Demeter'],
        ['complejidad', 'Complejidad Ciclomatica'],
        // compilación
        ['compilacion', '¿ Que es compilar ?'],
        ['nivel', 'Niveles de compilación'],
        ['interprete', 'Tipos de lenguajes'],
        ['transpilacion', '¿ Que es la transpilación ?'],
        // conocimientos empiricos
        ['balas', 'Balas de Plata'],
        ['lehman', 'Leyes de Lehman'],
        ['conway', 'Ley de Conway'],
        ['murphy', 'Ley de Murphy'],
        ['cristales', 'Efecto de los cristales rotos'],
        ['quo', 'Status Quo'],
        ['costo', 'Falacia del costo hundido'],
        ['tipos', 'Tipos de programadores'],
        ['sesgos', 'Algunos Sesgos cognitivos'],
        ['multitarea', 'Pros y Contras del multitasking'],
        // docker
        ['docker', '¿ Que es Docker ?'],
        ['images', '¿ Que es una imagen ?'],
        ['containers', '¿ Que es un contenedor ?'],
        ['volumes', '¿ Que es un volumen ?'],
        ['network', 'Manejo de redes en Docker'],
        ['file', 'Comandos que acepta Docker'],
        ['compose', 'Manejo del docker-compose'],
        // estrategias de desarrollo
        ['ddd', 'Diseño Orientado a Dominios'],
        ['bdd', 'Desarrollo Dirigido por Comportamiento'],
        ['tdd', 'Desarrollo Dirigido por Tests'],
        ['atdd', 'Desarrollo guiado por pruebas de aceptación'],
        ['analisis', 'Bottom Up & Top Down'],
        ['', ''],
        // frameworks
        ['frameworks', '¿ Que Son ?'],
        ['ioc', 'Inversion de Control'],
        ['iod', 'Inyección de dependencias'],
        ['spring', 'Spring Framework'],
        ['angular', 'Angular Framework'],
        ['', ''],
    ]);

    public getLinkAndTittleByKey(key: string = ''): void {
        this.selection = key;
        this.referencia = this.links.get(key)?.toString() || '';
        this.titulo = this.titulos.get(key)?.toString() || '';
    }

    public linkReferencia(seleccion: string = '', link: string = ''): void {
        this.selection = seleccion;
        this.referencia = link;
    }
}
