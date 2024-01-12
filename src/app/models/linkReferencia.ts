import { Referencia } from './models';

export class LinkReferencia {

    public components: Map<string, Referencia> = new Map([
        ...AGILES_REF,           ...CONTAINERS,               ...ANALISIS_REF,       
        ...ARQUITECTURAS_REF,    ...BUENAS_PRACTICAS_REF,     ...CALIDAD_REF,
        ...COMPILACION_REF,      ...CONOCIMIENTO_EMPIRICO,    ...ESTRATEGIAS_DESARROLLO_REF,
        ...FRAMEWORKS_REF,       ...GIT_REF,                  ...USER_HISTORIES,
        ...MALAS_PRACTICAS_REF,  ...META_CARATERISTICAS_REF,  ...META_ESTRUCTURAS_REF,
        ...METODOLOGIAS_REF,     ...NUBE_REF,                 ...OTROS_REF,
        ...PARADIGMAS_REF,       ...PATRONES_REF,             ...PEOPLE_REF,  
        ...POO_REF,              ...TESTING_REF,              ...TESTING_ADVANCED,
        ...REFACTORING_REF,      ...REQUISITOS_REF,           ...PRINCIPIOS_REF,
        ...SEGURIDAD_REF,        ...SMELL_CODES_REF,          ...PERSISTENCY_REF,
        ...UML_REF,              ...VERSIONAMIENTO_REF,       ...HARDWARE_REF,
        ...WEB_REF,              ...LEYES_REF,                ...NEURO_MARKETING_REF,
        ...CD_CI_REF,            ...APIS_REF,                 ...PERSISTENCY_ADVANCED_REF  
    ]);

    public routesAndSections: Map<string, string> = new Map([
        [AGILES_KEY, 'agiles'],                               [ANALISIS_KEY, 'analisis'],
        [ARQUITECTURAS_KEY, 'arquitecturas'],                 [BUENAS_PRACTICAS_KEY, 'buenas-practicas'],
        [CALIDAD_KEY, 'calidad'],                             [COMPILACION_KEY, 'compilacion'],
        [CONOCIMIENTO_EMPIRICO_KEY, 'conocimiento-empirico'], [LEYES_KEY, 'leyes'],
        [CONTENEDORES_KEY, 'contenedores'],                   [ESTRATEGIAS_DESARROLLO_KEY, 'estrategias-de-desarrollo'],
        [FRAMEWORKS_KEY, 'frameworks'],                       [GIT_KEY, 'git'],
        [USER_HISTORIES_KEY, 'historias-de-usuario'],         [MALAS_PRACTICAS_KEY, 'malas-practicas'],
        [CARACTERISTICAS_KEY, 'metacaracteristicas'],         [ESTRUCTURAS_KEY, 'meta-estructuras'],
        [METODOLOGIAS_KEY, 'metodologias'],                   [NUBE_KEY, 'nube'],
        [OTROS_KEY, 'otros'],                                 [PATRONES_KEY, 'patrones'],
        [PARADIGMAS_KEY, 'paradigmas'],                       [PERSONAS_KEY, 'personas'],
        [POO_KEY, 'poo'],                                     [TESTING_KEY, 'testing'],
        [TESTING_ADVANCED_KEY, 'testing-avanzado'],           [REFACTORIZACION_KEY, 'refactorizacion'],
        [REQUISITOS_KEY, 'requisitos'],                       [PRINCIPIOS_KEY, 'principios'],
        [SEGURIDAD_KEY, 'seguridad'],                         [SMELL_CODES_KEY, 'smells-codes'],
        [DATA_BASES_KEY, 'bases-de-datos'],                   [UML_KEY, 'uml'],
        [VERSIONAMIENTO_KEY, 'versionamiento'],               [HARDWARE_KEY, 'hardware'],
        [WEB_KEY, 'web'],                                     [NEURO_MARKETING_KEY, 'neuro-marketing'],
        [DATA_BASES_ADVANCED_KEY, 'bd-avanzado'],             [CD_CI_KEY, 'cd-ci-infraestructura'],
        [APIS_KEY, 'apis']
    ]);

}

export const AGILES_KEY = 'Agiles';
export const AGILES_REF = new Map<string, Referencia>([
    ['moscow', new Referencia('https://proagilist.es/blog/agilidad-y-gestion-agil/priorizar-requisitos-tecnica-priorizacion-moscow/', 'MOSCOW', AGILES_KEY, 'MOSCOW')],
    ['scoring', new Referencia('https://comunidad.iebschool.com/metodologiasparaelcambio/2014/03/23/priorizando-historias-de-usuario/', 'Theme Scoring', AGILES_KEY, 'Theme Scoring')],
    ['muda', new Referencia('https://prevencontrol.com/prevenblog/las-7-mudas/#:~:text=Los%20MUDA%2C%20t%C3%A9rmino%20japon%C3%A9s%20que,Sistema%20de%20producci%C3%B3n%20de%20Toyota', 'Desperdicio', AGILES_KEY, 'Desperdicio')],
    ['5s', new Referencia('https://www.gestiopolis.com/5s-seiri-seiton-seiso-seiketsu-y-shitsuke-base-de-la-mejora-continua/', 'Seiri, Seiton, Seiso, Seiketsu, Shitsuke', AGILES_KEY, '5-S')],
    ['muda#1', new Referencia('https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-i/', 'Muda en el software, parte #1', AGILES_KEY, 'Muda #1')],
    ['muda#2', new Referencia('https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-y-ii/', 'Muda en el software, parte #2', AGILES_KEY, 'Muda #2')],
    ['planningPoker', new Referencia('https://samuelcasanova.com/2016/01/estimacion-agil-con-la-tecnica-planning-poker/', 'Planning Poker y la estimación agil', AGILES_KEY, 'Planning Poker')],
    ['manifestAgil', new Referencia('https://agilemanifesto.org/iso/es/manifesto.html', 'Manifiesto Agil', AGILES_KEY, 'Manifiesto Agil')],
    ['principlesAgile', new Referencia('https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/', 'Principios del agilismo', AGILES_KEY, 'Principios')],
    ['spike', new Referencia('https://samuelcasanova.com/2021/09/spike-que-es/', 'Spike', AGILES_KEY, 'Spike')],
    ['deming', new Referencia('https://www.beetrack.com/es/blog/ciclo-de-deming-etapas-ejemplos', 'Ciclo de Deming', AGILES_KEY, 'Ciclo de Deming')],
    ['estimationLaws', new Referencia('https://www.javiergarzas.com/2023/07/descifrando-las-leyes-de-la-estimacion-agil.html', 'Leyes de estimación agil', AGILES_KEY, 'Estimaciones')],
]);

export const ANALISIS_KEY = 'Analisis';
export const ANALISIS_REF = new Map<string, Referencia>([
    ['comportamiento', new Referencia('https://es.wikipedia.org/wiki/Modelo_de_comportamiento_(inform%C3%A1tica)', 'Comportamiento del sistema', ANALISIS_KEY, 'Comportamiento')],
    ['dominio', new Referencia('https://www.redalyc.org/jatsRepo/4768/476862530003/html/index.html#:~:text=El%20An%C3%A1lisis%20de%20Dominio%20es,la%20identificaci%C3%B3n%2C%20el%20an%C3%A1lisis%20y', 'Analisis de Dominio', ANALISIS_KEY, 'Analisis de Dominio')],
    ['case', new Referencia('https://www.tutorialspoint.com/es/software_engineering/case_tools_overview.htm', 'Herramientas Case', ANALISIS_KEY, 'Herramientas CASE')],
    ['divide', new Referencia('https://es.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms', 'Divide y Venceras', ANALISIS_KEY, 'Divide y venceras')],
    ['diseño', new Referencia('https://www.bravent.net/la-importancia-de-un-buen-diseno-del-software/', 'Ventajas de un buen diseño', ANALISIS_KEY, 'Un buen diseño')],
    ['crc', new Referencia('https://medium.com/@marcosrrg9813/tarjetas-crc-clase-responsabilidad-colaborador-81924cec3af0', 'Tarjetas Clase-Responsabilidad-Colaborador', ANALISIS_KEY, 'Tarjetas CRC')],
    ['avestruz', new Referencia('https://geeks.ms/gvelez/2009/09/28/el-algoritmo-del-avestruz-en-sharepoint/', 'Algoritmo del Avestruz', ANALISIS_KEY, 'Avestruz')],
    ['modeloDominio', new Referencia('https://es.stackoverflow.com/questions/102490/que-es-el-modelo-de-dominio-en-dise%C3%B1o-de-software', 'Modelo de Dominio', ANALISIS_KEY, 'Modelo de dominio')],
    ['sistemasInformacion', new Referencia('https://concepto.de/sistema-de-informacion/', 'Sistemas de Información', ANALISIS_KEY, 'Información')],
    ['dataAnalisis', new Referencia('https://tienda.digital/4-tipos-de-analisis-de-datos-para-mejorar-la-toma-de-decisiones/', 'Analisis de datos', ANALISIS_KEY, 'Analisis de datos')],
    ['timeComplexityBigO', new Referencia('https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/', 'Big O Notación', ANALISIS_KEY, 'Big O Notación')],
    ['kpis', new Referencia('https://www.ibm.com/garage/method/practices/learn/kpis-measure-guide-progress/', 'KPIs', ANALISIS_KEY, 'KPI')],
    ['manifiestoReactivo', new Referencia('https://www.reactivemanifesto.org/es', 'Manifiesto Reactivo', ANALISIS_KEY, 'Manifiesto Reactivo')],
    ['declineDesign', new Referencia('https://uxdesign.cc/the-decline-in-design-thinking-8fd0145fb4d2', 'Declive del diseño', ANALISIS_KEY, 'Declive del Diseño')],
    ['opinionated-no', new Referencia('https://www.baeldung.com/cs/opinionated-software-design', 'Diseño con & sin opiniones', ANALISIS_KEY, 'Diseño con/sin opiniones')],
    ['codingEasyPart', new Referencia('https://swizec.com/blog/coding-is-the-easy-part/', 'Codificar es la parte facil', ANALISIS_KEY, 'Codificar es facil')],
]);

export const ARQUITECTURAS_KEY = 'Arquitecturas';
export const ARQUITECTURAS_REF = new Map<string, Referencia>([
    ['definicion', new Referencia('https://cgrw01.cgr.go.cr/rup/RUP.es/SmallProjects/core.base_rup/guidances/concepts/software_architecture_4269A354.html', '¿ Que es una arquitectura ?', ARQUITECTURAS_KEY, 'Definición')],
    ['inicioArquitectura', new Referencia('https://sg.com.mx/revista/27/arquitectura-software', 'Etapas & Roles', ARQUITECTURAS_KEY, 'Etapas & Roles')],
    ['conceptosArquitectura', new Referencia('https://www.freecodecamp.org/news/an-introduction-to-software-architecture-patterns/', 'Conceptos Arquitecturas', ARQUITECTURAS_KEY, 'Conceptos')],
    ['principiosArquitecturas', new Referencia('https://www.genbeta.com/desarrollo/principios-de-una-arquitectura-limpia-mantenible-y-testeable', 'Principios de las arquitecturas', ARQUITECTURAS_KEY, 'Principios')],
    ['arquitecturasLimpias', new Referencia('https://www.genbeta.com/desarrollo/principios-de-una-arquitectura-limpia-mantenible-y-testeable', 'Arquitecturas Limpias', ARQUITECTURAS_KEY, 'Limpias')],
    ['capas', new Referencia('https://geeks.ms/jkpelaez/2009/05/30/arquitectura-basada-en-capas/', 'Arquitectura a Capas', ARQUITECTURAS_KEY, 'Capas')],
    ['cliente', new Referencia('https://desarrolloweb.com/articulos/arquitectura-cliente-servidor.html', 'Arquitectura Cliente-Servidor', ARQUITECTURAS_KEY, 'Cliente Servidor')],
    ['microServiciosFundamentals', new Referencia('https://medium.com/@kumuthini.program/micro-services-fundamentals-dc0fc369d75e', 'Bases de Micro Servicios', ARQUITECTURAS_KEY, 'Bases, Microservicios')],
    ['servicios', new Referencia('https://aws.amazon.com/es/microservices/', 'MicroServicios', ARQUITECTURAS_KEY, 'Microservicios')],
    ['hexagonal', new Referencia('https://medium.com/@edusalguero/arquitectura-hexagonal-59834bb44b7f', 'Hexagonal', ARQUITECTURAS_KEY, 'Hexagonal')],
    ['noHexagonal', new Referencia('https://javiervelezreyes.com/ni-nueva-ni-arquitectura-ni-hexagonal/', 'Ni Nueva, Ni Hexagonal', ARQUITECTURAS_KEY, 'Ni Nueva, Ni hexagonal')],
    ['mvc', new Referencia('https://developer.mozilla.org/es/docs/Glossary/MVC', 'Modelo-Vista-Controlador', ARQUITECTURAS_KEY, 'MVC')],
    ['mvpMvc', new Referencia('https://www.develapps.com/es/noticias/modelo-vista-presentador-mvp-en-android', 'Modelo-Vista-Presentador', ARQUITECTURAS_KEY, 'MVP')],
    ['otrasArquitecturas', new Referencia('https://medium.com/@maniakhitoccori/los-10-patrones-comunes-de-arquitectura-de-software-d8b9047edf0b', 'Otras Arquitecturas', ARQUITECTURAS_KEY, 'Otras (patrones)')],
    ['monolitos', new Referencia('https://www.paradigmadigital.com/techbiz/microservicios-vs-microlitos-vs-monolitos-ventajas-desventajas/', 'Monolitos VS Microservicios', ARQUITECTURAS_KEY, 'Monolitos')],
    ['stylesArchitecture1', new Referencia('https://hdnmetatech.com/news/our-press/detail/introduction-to-architecture-styles-and-patterns-as-a-blueprint-for-designing-a-system', 'Estilos #1', ARQUITECTURAS_KEY, 'Estilos & Patrones #1')],
    ['stylesArchitecture2', new Referencia('https://hdnmetatech.com/news/our-press/detail/introduction-to-architecture-styles-and-patterns-as-a-blueprint-for-designing-a-system', 'Estilos #2', ARQUITECTURAS_KEY, 'Estilos & Patrones #2')],
]);

export const BUENAS_PRACTICAS_KEY = 'Buenas-Practicas';
export const BUENAS_PRACTICAS_REF = new Map<string, Referencia>([
    ['practicas1', new Referencia('https://www.tithink.com/es/2018/06/13/12-buenas-practicas-para-el-desarrollo-software/', 'Buenas practicas parte #1', BUENAS_PRACTICAS_KEY, 'Parte #1')],
    ['practicas2', new Referencia('https://sg.com.mx/revista/mejores-pr%C3%A1cticas-para-el-desarrollo-software', 'Buenas practicas parte #2', BUENAS_PRACTICAS_KEY, 'Parte #2')],
    ['practicas3', new Referencia('https://velneo.es/15-buenas-practicas-proyectos-desarrollo-software/', 'Buenas practicas parte #3', BUENAS_PRACTICAS_KEY, 'Parte #3')],
    ['practicas4', new Referencia('http://www.noussintelligence.com/desarrollo-software-buenas-practicas-recomendaciones/', 'Buenas practicas parte #4', BUENAS_PRACTICAS_KEY, 'Parte #4')],
    ['demeter', new Referencia('https://www.adictosaltrabajo.com/2015/07/24/ley-de-demeter/', 'Ley de Demeter', BUENAS_PRACTICAS_KEY, 'Ley de Demeter')],
    ['complejidad', new Referencia('http://oscarmoreno.com/la-complejidad-ciclomatica/', 'Complejidad Ciclomatica', BUENAS_PRACTICAS_KEY, 'Complejidad')],
    ['logging', new Referencia('https://itnext.io/logger-or-debugger-which-one-to-choose-3f6a72200b15', 'Logging VS Debugging', BUENAS_PRACTICAS_KEY, 'Logs VS Debug')],
    ['debugging', new Referencia('https://www.freecodecamp.org/news/what-is-debugging-how-to-debug-code/', 'Como Depurar', BUENAS_PRACTICAS_KEY, 'Debugging')],
    ['complejidadCognitiva', new Referencia('https://enmilocalfunciona.io/complejidad-cognitiva/', 'Complejidad Cognitiva', BUENAS_PRACTICAS_KEY, 'Cognitiva')],
    ['complejidadAlgoritmica', new Referencia('https://medium.com/@joseguillermo_/qu%C3%A9-es-la-complejidad-algor%C3%ADtmica-y-con-qu%C3%A9-se-come-2638e7fd9e8c', 'Complejidad Algoritmica', BUENAS_PRACTICAS_KEY, 'Algoritmica')],
    ['estandaresNombramiento', new Referencia('https://adrianalonso.es/cajon-desatre/convencion-de-nombres-desde-el-camelcase-hasta-el-kebab-case/', 'Estandares de nombramiento', BUENAS_PRACTICAS_KEY, 'Nombramiento')],
    ['estatico', new Referencia('https://www.welivesecurity.com/la-es/2021/01/18/analisis-estatico-codigo-fuente-orientado-a-seguridad/', 'Analisis de codigo estatico', BUENAS_PRACTICAS_KEY, 'Analisis de codigo')],
    ['guardClauses', new Referencia('https://artansoft.com/2017/01/guard-clauses-definicion-beneficios/', 'Guard clauses', BUENAS_PRACTICAS_KEY, 'Guard Clauses')],
    ['semanticConstructors', new Referencia('https://medium.com/all-you-need-is-clean-code/constructores-sem%C3%A1nticos-ae7ac70b23aa', 'Constructores Semanticos', BUENAS_PRACTICAS_KEY, 'Constructores Semanticos')],
    ['exceptionGoodPractices', new Referencia('https://javachallengers.com/mistakes-java-developers-make-when-using-exceptions/', 'Manejo de Excepciones', BUENAS_PRACTICAS_KEY, 'Manejo de Excepciones')],
    ['goodHabits', new Referencia('https://vadimkravcenko.com/shorts/habits-of-great-software-engineers/', 'Buenos habitos de un desarrollador', BUENAS_PRACTICAS_KEY, 'Buenos habitos')]
]);

export const CALIDAD_KEY = 'Calidad';
export const CALIDAD_REF = new Map<string, Referencia>([
    ['metricas', new Referencia('https://searchdatacenter.techtarget.com/es/consejo/23-metricas-de-desarrollo-de-software-que-monitorear-hoy', 'Metricas del Software', CALIDAD_KEY, 'Metricas #1')],
    ['metricasEnCodigo', new Referencia('https://blog.desafiolatam.com/metricas-de-calidad-de-software/#:~:text=M%C3%A9tricas%20de%20calidad%20de%20software%20es%20un%20conjunto%20de%20medidas,comparar%20o%20planificar%20estas%20aplicaciones.&text=Tambi%C3%A9n%2C%20es%20necesario%20definir%20las,los%20resultados%20de%20estas%20m%C3%A9tricas', 'Metricas del codigo', CALIDAD_KEY, 'Metricas #2')],
    ['cleanCode', new Referencia('https://medium.com/@tijuhasz/in-one-of-the-most-groundbreaking-practical-books-on-software-development-clean-code-right-in-3ef3006c68f2', 'Clean Code & Code rot', CALIDAD_KEY, 'Clean Code')],
    ['artesanos', new Referencia('https://manifesto.softwarecraftsmanship.org/#/es', 'Artesanos de software', CALIDAD_KEY, 'Artesanos')],
    ['costOfQuality', new Referencia('https://blog.softexpert.com/es/cuales-son-los-costos-de-la-calidad/#:~:text=Costos%20de%20la%20conformidad%3A%20son,de%20la%20conformidad%20con%20requerimientos', 'Costo de la calidad', CALIDAD_KEY, 'Costo de la calidad')],
    ['qualityGates', new Referencia('https://docs.sonarqube.org/latest/user-guide/quality-gates/', 'Politicas de calidad', CALIDAD_KEY, 'Politicas de calidad')],
    ['qualityMetrics', new Referencia('https://docs.sonarqube.org/latest/user-guide/metric-definitions/', 'Definición de Metricas', CALIDAD_KEY, 'Metricas de calidad')],
    ['codeReviews', new Referencia('https://www.atlassian.com/blog/add-ons/code-review-best-practices', 'Revisiones de codigo', CALIDAD_KEY, 'Revisiones')],
    ['linting', new Referencia('https://www.freecodecamp.org/espanol/news/que-es-linting-y-eslint/', 'Linting', CALIDAD_KEY, 'Linting')],
    ['analystQA', new Referencia('https://www.linkedin.com/pulse/qu%2525C3%2525A9-es-y-hace-un-analista-qa-edteam%3FtrackingId=LYLDNutUgXaUqwAAuYOm6A%253D%253D/?trackingId=LYLDNutUgXaUqwAAuYOm6A%3D%3D', 'Analista de QA', CALIDAD_KEY, 'Analista de QA')],
    ['codeReviewPyramid', new Referencia('https://www.morling.dev/blog/the-code-review-pyramid/', 'Piramide del CodeReview', CALIDAD_KEY, 'Piramide del Code Review')],
    ['doraAndSpaceMetrics', new Referencia('https://echometerapp.com/es/dora-and-space-metrics/', 'Metricas DORA & SPACE', CALIDAD_KEY, 'DORA & SPACE')],
]);

export const COMPILACION_KEY = 'Compilacion';
export const COMPILACION_REF = new Map<string, Referencia>([
    ['compilacion', new Referencia('https://developer.mozilla.org/es/docs/Glossary/Compile', '¿ Que es compilar ?', COMPILACION_KEY, '¿ que es ?')],
    ['nivel', new Referencia('https://desarrolloweb.com/articulos/2358.php#:~:text=Existen%20dos%20tipos%20de%20lenguajes,y%20los%20de%20alto%20nivel.&text=Los%20lenguajes%20m%C3%A1s%20pr%C3%B3ximos%20a,denominan%20lenguajes%20de%20alto%20nivel.', 'Niveles de compilación', COMPILACION_KEY, 'Niveles')],
    ['interprete', new Referencia('https://yosoy.dev/diferencia-entre-lenguajes-compilados-e-interpretados/', 'Tipos de lenguajes por ejecución', COMPILACION_KEY, 'Ejecución')],
    ['transpilacion', new Referencia('https://ingenieriadesoftware.es/diferencia-transpilacion-compilacion/#:~:text=Si%20traduce%20c%C3%B3digo%20entre%20lenguajes,a%20Bytecode%20ser%C3%ADa%20una%20compilaci%C3%B3n.', '¿ Que es la transpilación ?', COMPILACION_KEY, 'Transpilación')],
    ['azucarSintactico', new Referencia('https://es.wikipedia.org/wiki/Az%C3%BAcar_sint%C3%A1ctico', 'Azucar Sintactico', COMPILACION_KEY, 'Azucar Sintactico')],
    ['coercion', new Referencia('https://developer.mozilla.org/es/docs/Glossary/Type_coercion', 'Coerción', COMPILACION_KEY, 'Coerción')],
    ['ofuscacion', new Referencia('https://www.azulweb.net/ofuscacion-de-codigo-antipatron-o-buena-practica/', 'Ofuscación', COMPILACION_KEY, 'Ofuscación')],
    ['treeShaking', new Referencia('https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking', 'TreeShaking', COMPILACION_KEY, 'Tree Shaking')],
    ['grafos', new Referencia('https://www.grapheverywhere.com/grafos-que-son-tipos-orden-y-herramientas-de-visualizacion/', 'Grafos', COMPILACION_KEY, 'Grafos')],
    ['compilacionAnticipada', new Referencia('https://hmong.es/wiki/Ahead-of-time_compilation', 'Compilación AOT', COMPILACION_KEY, 'Compilación anticipada')],
    ['duckTyping', new Referencia('https://towardsdatascience.com/duck-typing-python-7aeac97e11f8', 'Duck Typing', COMPILACION_KEY, 'Duck Typing')],
    ['sdkVsApi', new Referencia('https://geekflare.com/es/sdk-and-api-comparison/', 'SDK vs API', COMPILACION_KEY, 'SDK vs API')],
    ['casting', new Referencia('https://www.w3schools.com/java/java_type_casting.asp', 'Casting', COMPILACION_KEY, 'Casteo de Datos')],
    ['verbosity', new Referencia('https://softwareengineering.stackexchange.com/questions/141175/why-is-verbosity-bad-for-a-programming-language', 'Verbosidad', COMPILACION_KEY, 'Verbosidad')],
    ['tipoLenguajeProposito', new Referencia('https://ed.team/blog/como-se-clasifican-los-lenguajes-de-programacion', 'Tipos de lenguajes por proposito', COMPILACION_KEY, 'Proposito')],
]);

export const CONOCIMIENTO_EMPIRICO_KEY = 'Empirico';
export const CONOCIMIENTO_EMPIRICO = new Map<string, Referencia>([
    ['cristales', new Referencia('https://lamenteesmaravillosa.com/la-teoria-las-ventanas-rotas/', 'Efecto de los cristales rotos', CONOCIMIENTO_EMPIRICO_KEY, 'Cristales rotos')],
    ['quo', new Referencia('https://psicologiaymente.com/social/sesgo-statu-quo#:~:text=El%20sesgo%20del%20statu%20quo%20es%20un%20sesgo%20de%20tipo,sobre%20un%20aspecto%20en%20concreto.', 'Status Quo', CONOCIMIENTO_EMPIRICO_KEY, 'Status Quo')],
    ['costo', new Referencia('https://psicologiaymente.com/psicologia/falacia-costo-hundido#:~:text=En%20resumen%2C%20la%20falacia%20del,cuyas%20expectativas%20son%20muy%20desalentadoras.', 'Falacia del costo hundido', CONOCIMIENTO_EMPIRICO_KEY, 'Costo Hundido')],
    ['tiposProgramadores', new Referencia('https://stevenbenner.com/2010/07/the-5-types-of-programmers/', 'Tipos de programadores', CONOCIMIENTO_EMPIRICO_KEY, 'Programadores')],
    ['sesgos', new Referencia('https://www.brainvestigations.com/neurociencia/sesgo-cognitivo-negocios/', 'Algunos Sesgos cognitivos', CONOCIMIENTO_EMPIRICO_KEY, 'Sesgo Cognitivo')],
    ['prejuicios', new Referencia('https://www.boream.com/insights/sesgos-cognitivos-y-prejuicios-en-los-procesos-de-diseno-de-interfaz-como-combatirlos', 'Prejuicios', CONOCIMIENTO_EMPIRICO_KEY, 'Prejuicios')],
    ['multitarea', new Referencia('https://www.sodexo.es/blog/multitarea-multitasking/', 'Pros y Contras del multitasking', CONOCIMIENTO_EMPIRICO_KEY, 'Multitareas')],
    ['maxwellCurve', new Referencia('https://blog.axosoft.com/the-maxwell-curve-blunder-in-the-name-of-scrum/', 'La curva de Maxwell', CONOCIMIENTO_EMPIRICO_KEY, 'Curva de Maxwell')],
    ['dunningKruger', new Referencia('https://www.awenpsicologia.com/efecto-dunning-kruger/', 'Efecto Dunning-Kruger', CONOCIMIENTO_EMPIRICO_KEY, 'Dunning-Kruger')],
    ['reforzamientoSkinner', new Referencia('https://psicologiaymente.com/psicologia/teoria-reforzamiento-skinner', 'Reforzamiento de conductas', CONOCIMIENTO_EMPIRICO_KEY, 'Reforzamiento')],
    ['pastaTheory', new Referencia('https://www.techtarget.com/searchsoftwarequality/tip/Fix-spaghetti-code-and-other-pasta-theory-antipatterns#:~:text=The%20pasta%20theory%20of%20programming,ravioli%20code%20and%20pizza%20code', 'Teoria de la pasta', CONOCIMIENTO_EMPIRICO_KEY, 'Codigo como pasta')],
    ['thingsThatAreNotTaught', new Referencia('https://vadimkravcenko.com/shorts/things-they-didnt-teach-you/', 'Cosas que no se enseñan', CONOCIMIENTO_EMPIRICO_KEY, 'Cosas que no se enseñan')],
]);

export const LEYES_KEY = 'Leyes';
export const LEYES_REF = new Map<string, Referencia>([
    ['balas', new Referencia('https://gist.github.com/esparta/582e43af7b803e0aaf69', 'Balas de Plata', LEYES_KEY, 'Balas de Plata')],
    ['lehman', new Referencia('https://medium.com/@cartontabla/las-leyes-de-lehman-b57c623c3404#:~:text=Las%20Leyes%20de%20Lehman%20son,digamos%20que%20podr%C3%ADan%20ser%20ampliadas)', 'Leyes de Lehman', LEYES_KEY, 'Leyes de Lehman')],
    ['conway', new Referencia('https://www.javiergarzas.com/2015/06/conway.html', 'Ley de Conway', LEYES_KEY, 'Ley de Conway')],
    ['murphy', new Referencia('https://www.caracteristicas.co/ley-de-murphy/', 'Ley de Murphy', LEYES_KEY, 'Ley de Murphy')],
    ['pendulo', new Referencia('http://www.grupocrece.es/blog/Psicolog%C3%ADala-ley-del-pndulo-en-psicologa', 'Ley del pendulo', LEYES_KEY, 'Ley del pendulo')],
    ['hyrum', new Referencia('https://thebootstrappedfounder.com/hyrums-law/', 'Ley de Hyrum', LEYES_KEY, 'Ley de Hyrum')],
    ['leblanc', new Referencia('https://www.quora.com/What-resources-could-I-read-about-Leblancs-law', 'Ley de Leblanc', LEYES_KEY, 'Ley de Leblanc´s')],
    ['leyesInternet', new Referencia('https://www.bbc.com/mundo/noticias-46102313.amp', 'Conductas en internet', LEYES_KEY, 'Leyes En Internet')],
    ['pareto', new Referencia('https://www.becas-santander.com/es/blog/ley-de-pareto.html', 'Ley de Pareto', LEYES_KEY, 'Ley de Pareto')],
    ['brooksLaw', new Referencia('https://www.genbeta.com/desarrollo/ley-brooks-desarrollo-software-clasico-profesion-que-habria-hecho-imposible-linux/amp', 'Ley de Brooks', LEYES_KEY, 'Ley de Brooks')],
    ['mooreAndWirth', new Referencia('https://blogs.uoc.edu/informatica/la-ley-de-wirth-la-ley-de-moore-inversa-del-software/', 'Ley de Moore & Ley de Wirth', LEYES_KEY, 'Moore & Wirth')],
    ['amdahl', new Referencia('https://www.techtarget.com/whatis/definition/Amdahls-law', 'Ley de Moore & Ley de Wirth', LEYES_KEY, 'Ley de Amdahls')],
]);

export const CONTENEDORES_KEY = 'Contenedores';
export const CONTAINERS = new Map<string, Referencia>([
    ['lxc', new Referencia('https://www.section.io/engineering-education/lxc-vs-docker-what-is-the-difference-and-why-docker-is-better/', 'Linux Containers', CONTENEDORES_KEY, 'Linux Containers')],
    ['docker', new Referencia('https://www.xataka.com/otros/docker-a-kubernetes-entendiendo-que-contenedores-que-mayores-revoluciones-industria-desarrollo', '¿ Que es Docker ?', CONTENEDORES_KEY, 'Docker')],
    ['images', new Referencia('https://clouding.io/hc/es/articles/360010283060-Trabajando-con-im%C3%A1genes-en-Docker', '¿ Que es una imagen ?', CONTENEDORES_KEY, 'Imagenes')],
    ['containers', new Referencia('https://aulasoftwarelibre.github.io/taller-de-docker/containers/', '¿ Que es un contenedor ?', CONTENEDORES_KEY, 'Contenedores')],
    ['volumes', new Referencia('https://www.josedomingo.org/pledin/2016/05/gestion-del-almacenamiento-en-docker/#:~:text=Un%20volumen%20es%20un%20directorio,podemos%20montar%20un%20mismo%20volumen.', '¿ Que es un volumen ?', CONTENEDORES_KEY, 'Volumenes')],
    ['network', new Referencia('https://dockertips.com/algo_sobre_redes', 'Manejo de redes en Docker', CONTENEDORES_KEY, 'Redes')],
    ['file', new Referencia('https://docs.docker.com/develop/develop-images/dockerfile_best-practices/', 'Comandos que acepta Docker', CONTENEDORES_KEY, 'DockerFile')],
    ['compose', new Referencia('https://dockertips.com/utilizando-docker-compose#:~:text=Docker%20Compose%20es%20una%20herramienta%20que%20permite%20simplificar%20el%20uso%20de%20Docker.&text=En%20vez%20de%20utilizar%20Docker,Engine%20a%20realizar%20tareas%2C%20programaticamente', 'Manejo del docker-compose', CONTENEDORES_KEY, 'Docker Compose')],
    ['kubernetes', new Referencia('https://kubernetes.io/es/docs/concepts/overview/what-is-kubernetes/', 'Kubernetes', CONTENEDORES_KEY, 'Kubernetes')],
    ['containerOrchestation', new Referencia('https://geekflare.com/container-orchestration-software/', 'Orquestación', CONTENEDORES_KEY, 'Orquestación')],
    ['openContainer', new Referencia('https://opencontainers.org/about/overview/', 'Open Container Initiative', CONTENEDORES_KEY, 'Open Container Initiative')],
]);

export const ESTRATEGIAS_DESARROLLO_KEY = 'Estrategias-Desarrollo';
export const ESTRATEGIAS_DESARROLLO_REF = new Map<string, Referencia>([
    ['ddd', new Referencia('https://github.com/jatubio/5minutos_laravel/wiki/Resumen-sobre-DDD.-Domain-Driven-Design', 'Diseño Orientado a Dominios', ESTRATEGIAS_DESARROLLO_KEY, 'DDD')],
    ['bdd', new Referencia('https://www.itdo.com/blog/que-es-bdd-behavior-driven-development/#:~:text=Given%2DWhen%2DThen%20como%20lenguaje%20com%C3%BAn%20con%20BDD,que%20se%20van%20a%20ejecutar', 'Desarrollo Dirigido por Comportamiento', ESTRATEGIAS_DESARROLLO_KEY, 'BDD')],
    ['tdd', new Referencia('https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/', 'Desarrollo Dirigido por Tests', ESTRATEGIAS_DESARROLLO_KEY, 'TDD')],
    ['atdd', new Referencia('https://www.javiergarzas.com/2015/07/que-es-eso-de-atdd.html', 'Desarrollo por pruebas de aceptación', ESTRATEGIAS_DESARROLLO_KEY, 'ATDD')],
    ['analisis', new Referencia('https://www.ubjonline.mx/en-que-consisten-los-analisis-top-down-y-bottom-up/', 'Bottom Up & Top Down', ESTRATEGIAS_DESARROLLO_KEY, 'Enfoques')],
    ['tld', new Referencia('https://medium.com/swlh/tdd-vs-tld-and-what-is-the-minimum-code-coverage-needed-f380181d3400', 'Tests al final del desarrollo', ESTRATEGIAS_DESARROLLO_KEY, 'TLD vs TDD')],
    ['bduf', new Referencia('https://www.freecodecamp.org/news/the-pros-and-cons-of-big-design-up-front-and-what-i-do-instead-375f00542dec/', 'Big Design Up Front', ESTRATEGIAS_DESARROLLO_KEY, 'BDUF')],
]);

export const FRAMEWORKS_KEY = 'Frameworks';
export const FRAMEWORKS_REF = new Map<string, Referencia>([
    ['frameworks', new Referencia('https://neoattack.com/neowiki/framework/', '¿ Que es un framework?', FRAMEWORKS_KEY, '¿ Que son ?')],
    ['ioc', new Referencia('https://medium.com/all-you-need-is-clean-code/inversi%C3%B3n-de-control-principio-de-hollywood-dont-call-us-we-ll-call-you-179e9c70e3d0', 'Inversión de Control', FRAMEWORKS_KEY, 'Inversión de control')],
    ['iod', new Referencia('https://www.arquitecturajava.com/el-patron-de-inyeccion-de-dependencia/', 'Inyección de dependencias', FRAMEWORKS_KEY, 'Inyección de dependencias')],
    ['scafolding', new Referencia('https://medium.com/@srinathsrs104/scaffolding-54ac4e47e133', 'Creación automatica de codigo', FRAMEWORKS_KEY, 'Scaffolding')],
    ['iodSpring', new Referencia('https://medium.com/@priyaroul99/what-is-constructor-injection-and-why-should-you-use-it-in-spring-bdb3e1857c58', 'Inyección de Dependencias en Spring', FRAMEWORKS_KEY, 'IoD Spring')],
]);

export const GIT_KEY = 'Git';
export const GIT_REF = new Map<string, Referencia>([
    ['introduccion', new Referencia('https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Acerca-del-Control-de-Versiones', 'Introducción a Git', GIT_KEY, 'Introducción')],
    ['repositorios', new Referencia('https://git-scm.com/book/es/v2/Fundamentos-de-Git-Trabajar-con-Remotos', 'Repositorios Remotos y Locales', GIT_KEY, 'Repositorios')],
    ['ramas', new Referencia('https://git-scm.com/book/es/v2/Ramificaciones-en-Git-Procedimientos-B%C3%A1sicos-para-Ramificar-y-Fusionar', 'Manejo de ramas', GIT_KEY, 'Ramas')],
    ['protocolos', new Referencia('https://git-scm.com/book/es/v2/Git-en-el-Servidor-Los-Protocolos', 'Comunicación entre repositorios', GIT_KEY, 'Protocolos')],
    ['versiones', new Referencia('https://git-scm.com/book/es/v2/Git-en-entornos-distribuidos-Manteniendo-un-proyecto', 'Versiones mediante etiquetas', GIT_KEY, 'Versiones y tags')],
    ['forks', new Referencia('https://git-scm.com/book/es/v2/GitHub-Participando-en-Proyectos', 'Solicitudes a otros proyectos', GIT_KEY, 'Forks y Pull requests')],
    ['stash', new Referencia('https://git-scm.com/book/es/v2/Herramientas-de-Git-Guardado-r%C3%A1pido-y-Limpieza', 'Estados de trabajo', GIT_KEY, 'Stash y limpieza')],
    ['merge', new Referencia('https://git-scm.com/book/es/v2/Herramientas-de-Git-Fusi%C3%B3n-Avanzada', 'Union de ramas', GIT_KEY, 'Merge')],
    ['atributos', new Referencia('https://git-scm.com/book/es/v2/Personalizaci%C3%B3n-de-Git-Git-Attributes', 'Personalización y acciones por defecto', GIT_KEY, 'Atributos')],
    ['migracion', new Referencia('https://git-scm.com/book/es/v2/Git-y-Otros-Sistemas-Migraci%C3%B3n-a-Git', 'Migración entre sistemas y otras acciones', GIT_KEY, 'Entresijos')],
    ['flow', new Referencia('https://aprendegit.com/que-es-git-flow/', 'Flujo de trabajo con Git', GIT_KEY, 'Git flow')],
    ['practicas', new Referencia('https://codigofacilito.com/articles/41', 'Buenas practicas para realizar commits', GIT_KEY, 'Buenas Practicas')],
    ['branching-strategies', new Referencia('https://codigofacilito.com/articles/41', 'Estrategias de Ramificación', GIT_KEY, 'Ramificación')],
    ['monoRepo', new Referencia('https://monorepo.tools/#understanding-monorepos', 'Mono Repo', GIT_KEY, 'Mono Repo')],
    ['pullRequestsToxic', new Referencia('https://devinterrupted.substack.com/p/the-11-types-of-toxic-pull-requests', 'Pull Requests Toxicos', GIT_KEY, 'Pull Requests Toxicos')],
]);

export const USER_HISTORIES_KEY = 'Historias-Usuario';
export const USER_HISTORIES = new Map<string, Referencia>([
    ['historias', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', '¿ Que son las HU ?', USER_HISTORIES_KEY, '¿ que son ?')],
    ['objetivos', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', '¿ Que busca una HU ?', USER_HISTORIES_KEY, '¿ que buscan ?')],
    ['partes', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', 'Partes de una HU', USER_HISTORIES_KEY, 'Partes')],
    ['invest', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', 'Criterio INVEST', USER_HISTORIES_KEY, 'INVEST')],
    ['smart', new Referencia('https://beagilemyfriend.com/historias-de-usuario-invest-smart/', 'Criterio SMART', USER_HISTORIES_KEY, 'SMART')],
    ['3c', new Referencia('https://julibetancur.blog/tag/tres-c/', 'Card-Conversación-Confirmación', USER_HISTORIES_KEY, 'Las 3 C')],
    ['gherkin', new Referencia('https://blog.thiga.co/es/gherkin/', 'Definición de los criterios de aceptación', USER_HISTORIES_KEY, 'Gherkin')],
    ['descomposicionHU', new Referencia('https://www.javiergarzas.com/2012/05/descomponer-historias-de-usuario-en-tareas-1.html', 'Descomposición en tareas', USER_HISTORIES_KEY, 'Descomposición')],
    ['storyPoints', new Referencia('https://ronjeffries.com/articles/019-01ff/story-points/Index.html', 'Puntos de Historia', USER_HISTORIES_KEY, 'Puntos')],
    ['casosVsRequisitosVsHu', new Referencia('http://www.angellozano.com/requisitos-del-sistema-vs-casos-uso-vs-historias-usuario/', 'HU Vs Casos de uso', USER_HISTORIES_KEY, 'Hu Vs Casos de Uso')],
]);

export const MALAS_PRACTICAS_KEY = 'Malas-Practicas';
export const MALAS_PRACTICAS_REF = new Map<string, Referencia>([
    ['callbackhell', new Referencia('https://codearmy.co/que-es-el-callback-hell-y-como-evitarlo-4af418a6ed14', 'Cadena de llamados asincronos', MALAS_PRACTICAS_KEY, 'Callback Hell')],
    ['contraCalidad', new Referencia('https://softgrade.mx/5-causas-afectan-la-calidad-software/', 'En contra de la calidad', MALAS_PRACTICAS_KEY, 'Contra la calidad')],
    ['contraGestion', new Referencia('https://blog.gft.com/es/2016/01/20/las-10-malas-practicas-mas-comunes-en-la-gestion-de-proyectos/', 'En contra de la gestión', MALAS_PRACTICAS_KEY, 'Contra la gestion')],
    ['contraAgilidad', new Referencia('https://giovannycifuentes.com/los-6-antipatrones-en-la-adopcion-de-agilidad-que-los-lideres-deberian-conocer/', 'En contra de las agiles', MALAS_PRACTICAS_KEY, 'Contra la Agilidad')],
    ['malasPracticasSCRUM', new Referencia('https://blog.palo-it.com/es/antipatrones-comunes-en-scrum#:~:text=Los%20antipatrones%20ocurren%20cuando%20creemos,y%20parecen%20parte%20del%20sistema', 'Malas practicas en SCRUM', MALAS_PRACTICAS_KEY, 'Contra SCRUM')],
    ['deathByMicroservices', new Referencia('https://renegadeotter.com/2023/09/10/death-by-a-thousand-microservices.html', 'Muerte por microservicios', MALAS_PRACTICAS_KEY, 'Muerte por microservicios')],
]);

export const CARACTERISTICAS_KEY = 'Meta-Caracteristicas';
export const META_CARATERISTICAS_REF = new Map<string, Referencia>([
    ['metaDatos', new Referencia('https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/que-son-los-metadatos-y-cual-es-su-utilidad', ' ¿ Que son los metadatos ?', CARACTERISTICAS_KEY, 'Meta data')],
    ['metaClase', new Referencia('https://quesignificado.org/que-es-una-metaclase/', '¿ Que es una meta clase ?', CARACTERISTICAS_KEY, 'Meta Clase')],
    ['reflexion', new Referencia('https://es.linkfang.org/wiki/Reflexi%C3%B3n_(inform%C3%A1tica)', 'Auto mutabilidad del codigo', CARACTERISTICAS_KEY, 'Reflexión')],
    ['asserts', new Referencia('https://www.adictosaltrabajo.com/2016/01/07/haz-tu-codigo-mas-fiable-con-asserts/', 'Comprobaciones del codigo', CARACTERISTICAS_KEY, 'Aserciones')],
    ['excepciones', new Referencia('https://universidad-de-los-andes.gitbooks.io/fundamentos-de-programacion/content/Nivel4/5_ManejoDeLasExcepciones.html', 'Lanzamiento y manejo de excepciones', CARACTERISTICAS_KEY, 'Exepciones')],
    ['cache', new Referencia('https://medium.com/bancolombia-tech/dise%C3%B1ando-una-estrategia-de-cach%C3%A9-39366876009b', 'Cache y sus estrategias', CARACTERISTICAS_KEY, 'Cache')],
    ['hilos', new Referencia('https://facturapp.weebly.com/hilos.html', 'Hilos', CARACTERISTICAS_KEY, 'Hilos')],
    ['argumentos', new Referencia('https://picodotdev.github.io/blog-bitix/2021/01/en-java-los-argumentos-se-pasan-por-valor-o-por-referencia/', 'Argumentos por valor y por referencia', CARACTERISTICAS_KEY, 'Argumentos')],
    ['concurrenciaParalelismo', new Referencia('https://codigofacilito.com/articulos/programacion-concurrente', 'Concurrencia & Paralelismo', CARACTERISTICAS_KEY, 'Concurrencia')],
    ['ortogonalidad', new Referencia('https://qastack.mx/programming/1527393/what-is-orthogonality', 'Ortogonalidad', CARACTERISTICAS_KEY, 'Ortogonalidad')],
    ['boilerPlate', new Referencia('https://www.freecodecamp.org/news/whats-boilerplate-and-why-do-we-use-it-let-s-check-out-the-coding-style-guide-ac2b6c814ee7/', 'Boiler Plate (codigo repetitivo)', CARACTERISTICAS_KEY, 'BoilerPlate')],
    ['recursividad', new Referencia('https://geekytheory.com/que-es-la-recursividad/', 'Recursividad', CARACTERISTICAS_KEY, 'Recursividad')],
    ['backtracing', new Referencia('https://www.ecured.cu/Vuelta_atr%C3%A1s_(backtracking)', 'Back Tracing', CARACTERISTICAS_KEY, 'Back tracing')],
    ['rawTypes', new Referencia('https://stackoverflow.com/questions/2770321/what-is-a-raw-type-and-why-shouldnt-we-use-it#:~:text=Raw%20types%20refer%20to%20using,with%20older%20versions%20of%20Java.', 'Tipos Crudos', CARACTERISTICAS_KEY, 'Tipos crudos')],
    ['memoryAndGarbage', new Referencia('https://www.computerworld.com/article/2596992/memory-leaks-and-garbage-collection.amp.html', 'Fugas de memoria y recoleccion de basura', CARACTERISTICAS_KEY, 'Fugas de memoria')],
    ['footprint', new Referencia('https://www.pcmag.com/encyclopedia/term/memory-footprint', 'Huella en memoria', CARACTERISTICAS_KEY, 'Huellas de memoria')],
    ['featureFlag', new Referencia('https://www.optimizely.com/optimization-glossary/feature-flags/', 'Feature Flags', CARACTERISTICAS_KEY, 'Feature Flags')],
    ['generics', new Referencia('https://medium.com/@AlexanderObregon/java-generics-type-safety-and-performance-a0864ca72a5a', 'Genericos', CARACTERISTICAS_KEY, 'Genericos')],
]);

export const ESTRUCTURAS_KEY = 'Meta-Estructuras';
export const META_ESTRUCTURAS_REF = new Map<string, Referencia>([
    ['scope', new Referencia('https://platzi.com/blog/como-funciona-el-scope-en-javascript/', 'Alcance', ESTRUCTURAS_KEY, 'Scope')],
    ['precedencia', new Referencia('https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence', 'Precedencia y jerarquia de operaciones', ESTRUCTURAS_KEY, 'Precedencia')],
    ['verticalAndHorizontal', new Referencia('https://xurxodev.com/vertical-scile/', 'Organización de un proyecto', ESTRUCTURAS_KEY, 'Organización')],
    ['expresionesRegulares', new Referencia('https://jarroba.com/busqueda-de-patrones-expresiones-regulares/', 'Expresiones Regulares', ESTRUCTURAS_KEY, 'Expresiones regulares')],
    ['estructurasDatos', new Referencia('https://medium.com/techwomenc/estructuras-de-datos-a29062de5483', 'Estructuras de datos I', ESTRUCTURAS_KEY, 'Estructuras de datos I')],
    ['estructurasDatos2', new Referencia('https://ai.plainenglish.io/data-structures-how-computers-store-and-organize-data-the-backbone-5f0576b3150c', 'Estructuras de datos II', ESTRUCTURAS_KEY, 'Estructuras de datos II')],
    ['homoiconicidad', new Referencia('https://es.wikipedia.org/wiki/Homoiconicidad', 'Homoiconicidad', ESTRUCTURAS_KEY, 'Homoiconicidad')],
    ['maquinaEstados', new Referencia('http://fisicotronica.com/maquina-de-estados-nos-referimos/', 'Maquinas de estados', ESTRUCTURAS_KEY, 'Maquina de estados')],
    ['sistemasComplejos', new Referencia('https://www.researchgate.net/figure/Figura-2-Caracteristicas-basicas-de-los-sistemas-complejos-Comportamiento-impredecible_fig1_262437348', 'Complejidad inherente al sistema', ESTRUCTURAS_KEY, 'Sistemas Complejos')],
    ['funcionesLambda', new Referencia('https://www.tokioschool.com/noticias/expresiones-lambda-uso-programacion-aplicaciones/', 'Funciones Lambda', ESTRUCTURAS_KEY, 'Funciones lambda')],
    ['valueObjects', new Referencia('https://medium.com/all-you-need-is-clean-code/value-objects-d4c24115fa69', 'Value Objects', ESTRUCTURAS_KEY, 'Value Objects')],
    ['dynamicProgramming', new Referencia('https://www.spiceworks.com/tech/devops/articles/what-is-dynamic-programming/#:~:text=Dynamic%20programming%20is%20a%20computer,range%20of%20the%20algorithmic%20query', 'Programacion Dinamica', ESTRUCTURAS_KEY, 'Programacion Dinamica')],
    ['serializationDeserialization', new Referencia('https://www.baeldung.com/cs/serialization-deserialization', 'Serialización y Deserialización', ESTRUCTURAS_KEY, 'Serializar & Deserializar')],
]);

export const METODOLOGIAS_KEY = 'Metodologias';
export const METODOLOGIAS_REF = new Map<string, Referencia>([
    ['agiles', new Referencia('https://www.iebschool.com/blog/que-son-metodologias-agiles-agile-scrum/', '¿ Que son las metodologias agiles ?', METODOLOGIAS_KEY, 'Agiles')],
    ['scrum', new Referencia('https://www.iebschool.com/blog/metodologia-scrum-agile-scrum/', 'Scrum', METODOLOGIAS_KEY, 'SCRUM')],
    ['scrumPrinciples', new Referencia('https://rootstack.com/es/blog/los-pilares-del-scrum-claves-para-la-gestion-de-procesos#:~:text=juntos%E2%80%9D%2C%20agregaron.-,Estos%20son%20los%20tres%20pilares%20del%20Scrum,%3A%20transparencia%2C%20inspecci%C3%B3n%20y%20adaptaci%C3%B3n', 'Principios Scrum', METODOLOGIAS_KEY, 'Principios Scrum')],
    ['kanban', new Referencia('https://www.iebschool.com/blog/metodologia-kanban-agile-scrum/', 'Kanban', METODOLOGIAS_KEY, 'Kanban')],
    ['elevator', new Referencia('https://www.iebschool.com/blog/las-claves-para-realizar-un-elevator-pitch-lean-startup/', 'Elevator Pitch', METODOLOGIAS_KEY, 'Elevator Pitch')],
    ['canvas', new Referencia('https://www.iebschool.com/blog/que-es-el-modelo-canvas-y-como-aplicarlo-a-tu-negocio-agile-scrum/', 'Canvas', METODOLOGIAS_KEY, 'Canvas')],
    ['tradicionales', new Referencia('https://www.tutorialspoint.com/es/software_engineering/software_development_life_cycle.htm', 'Metodologias Tradicionales', METODOLOGIAS_KEY, 'Tradicionales')],
    ['cascada', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/el-modelo-en-cascada/', 'Cascada', METODOLOGIAS_KEY, 'Cascada')],
    ['espiral', new Referencia('https://www.ionos.es/startupguide/productividad/modelo-en-espiral/', 'Espiral', METODOLOGIAS_KEY, 'Espiral')],
    ['iterativo', new Referencia('https://proyectosagiles.org/desarrollo-iterativo-incremental/', 'Iterativo-incremental', METODOLOGIAS_KEY, 'Iterativo-Incremental')],
    ['extrema', new Referencia('https://www.diegocalvo.es/metodologia-xp-programacion-extrema-metodologia-agil/', 'Programación Extrema', METODOLOGIAS_KEY, 'XP')],
    ['v', new Referencia('https://ingsoftware.weebly.com/ciclo-de-vida-en-v.html', 'Modelo en V', METODOLOGIAS_KEY, 'Modelo V')],
    ['rup', new Referencia('https://rupmetodologia.blogspot.com/?view=sidebar', 'Proceso Racional Unificado', METODOLOGIAS_KEY, 'RUP')],
    ['kaizen', new Referencia('https://www.movertis.com/blog/que-es-la-metodologia-kaizen/#:~:text=En%20japon%C3%A9s%2C%20las%20palabras%20Kai,se%20deja%20nunca%20de%20ejecutar', 'Kaizen', METODOLOGIAS_KEY, 'Kaizen')],
    ['scrumban', new Referencia('https://kanbantool.com/es/scrumban-scrum-y-kanb', 'Scrumban', METODOLOGIAS_KEY, 'Scrumban')],
    ['lean', new Referencia('https://www.obsbusiness.school/blog/lean-management-metodologia-origenes-y-principios', 'Lean', METODOLOGIAS_KEY, 'Lean management')]
]);

export const NUBE_KEY = 'Nube';
export const NUBE_REF = new Map<string, Referencia>([
    ['nube', new Referencia('https://azure.microsoft.com/es-es/overview/what-are-private-public-hybrid-clouds/', 'Tipos de nube', NUBE_KEY, 'Tipos de nube')],
    ['iaas-paas-saas', new Referencia('https://www.ambit-bst.com/blog/definici%C3%B3n-de-iaas-paas-y-saas-en-qu%C3%A9-se-diferencian', 'IaaS, PaaS, SaaS', NUBE_KEY, 'IaaS, PaaS, SaaS')],
    ['factores12', new Referencia('https://12factor.net/es/', '12 factores para una aplicación SaaS', NUBE_KEY, '12 - factores')],
    ['migracionesNube', new Referencia('https://www.paradigmadigital.com/techbiz/mitos-lift-shift-mentiras-migraciones-cloud/', 'Migraciones hacia la nube y las 6R', NUBE_KEY, 'Migraciones')],
    ['capTeorema', new Referencia('https://www.ionos.es/digitalguide/servidores/know-how/que-es-el-cap-theorem/', 'Coherencia, Disponibilidad y Tolerancia', NUBE_KEY, 'Teorema CAP')],
    ['dns', new Referencia('https://www.ionos.es/digitalguide/servidores/know-how/que-es-el-servidor-dns-y-como-funciona/', 'Servidor DNS', NUBE_KEY, 'Servidor DNS')],
    ['falaciesDistributedSystems', new Referencia('https://architecturenotes.co/fallacies-of-distributed-systems/', 'Sistemas Distribuidos', NUBE_KEY, 'Sistemas Distribuidos')],
    ['loadBalancing', new Referencia('https://aws.amazon.com/es/what-is/load-balancing/', 'Balancear la Carga', NUBE_KEY, 'Balanceador de carga')],
]);

export const APIS_KEY = 'APIs';
export const APIS_REF = new Map<string, Referencia>([
    ['api', new Referencia('https://www.ticbeat.com/tecnologias/que-es-una-api-para-que-sirve/', 'API', APIS_KEY, 'API')],
    ['tiposApi', new Referencia('https://www.computerweekly.com/es/definicion/Interfaz-de-programacion-de-aplicaciones-API', 'Tipos de APIs', APIS_KEY, 'Tipos de APIs')],
    ['rest', new Referencia('https://www.oscarblancarteblog.com/2017/03/06/soap-vs-rest-2/', 'SOAP vs REST', APIS_KEY, 'SOAP & REST')],
    ['restfull', new Referencia('http://adwe.es/general/colaboraciones/servicios-web-restful-con-http-parte-i-introduccion-y-bases-teoricas/', 'Rest & Restfull', APIS_KEY, 'Rest & RestFull')],
    ['caracteristicas', new Referencia('https://adwe.es/codigo/apis-codigo/servicios-web-restful-con-http-parte-ii-ejemplos/', 'Caracteristicas de una api restfull', APIS_KEY, 'Estandares RestFull')],
    ['madurezDeUnaApi', new Referencia('https://restfulapi.net/richardson-maturity-model/', 'Nivel de madurez de una API', APIS_KEY, 'Nivel de Madurez')],
    ['httpCodes', new Referencia('https://developer.mozilla.org/es/docs/Web/HTTP/Status', 'Codigos Http', APIS_KEY, 'Codigos HTTP')],
    ['HATEOAS', new Referencia('https://www.adictosaltrabajo.com/2013/12/02/spring-hateoas/', 'HATEOAS', APIS_KEY, 'HATEOAS')],
    ['apiStandars', new Referencia('https://medium.com/@trgoodwill/writing-api-design-standards-84cb7cbb3fd7', 'Standares API', APIS_KEY, 'Standares API')],
    ['apiGateway', new Referencia('https://nordicapis.com/whats-the-difference-between-an-api-gateway-and-a-load-balancer/', 'API Gateway', APIS_KEY, 'Api Gateway')],
    ['arquitecturalApiStyles', new Referencia('https://www.linkedin.com/feed/update/urn:li:activity:7095365669969350656/', 'Estilos de Arquitectura API', APIS_KEY, 'Estilos de Arquitectura API')],
    ['uri', new Referencia('https://www.techtarget.com/whatis/definition/URI-Uniform-Resource-Identifier', 'Uniform Resource Identifier', APIS_KEY, 'URI')],
    ['apiTesting', new Referencia('https://blog.bytebytego.com/p/ep83-explaining-9-types-of-api-testing#%C2%A7explaining-types-of-api-testing', 'API Testing', APIS_KEY, 'Testing in APIs')],
]);

export const OTROS_KEY = 'Otros';
export const OTROS_REF = new Map<string, Referencia>([
    ['scraping', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-es-el-web-scraping/', 'Web Scrapping', OTROS_KEY, 'Web Scrapping')],
    ['mvp', new Referencia('https://www.inboundcycle.com/blog-de-inbound-marketing/bid/189238/qu-es-el-mvp-o-producto-m-nimo-viable', 'Minimo Producto Viable', OTROS_KEY, 'MVP')],
    ['turingComplete', new Referencia('https://www.eleconomista.es/economia/noticias/8817210/12/17/Ethereum-es-Turing-completo-y-eso-que-es.html', 'Turing Complete', OTROS_KEY, 'Turing Complete')],
    ['ingenieriaInversa', new Referencia('https://ingenierosasesores.com/actualidad/ingenieria-inversa-concepto-aplicaciones/', 'Ingenieria Inversa', OTROS_KEY, 'Ingenieria Inversa')],
    ['dsl', new Referencia('https://www.jetbrains.com/es-es/mps/concepts/domain-specific-languages/', 'Lenguaje de Dominio Especifico', OTROS_KEY, 'DSL')],
    ['reglasInferencia', new Referencia('https://repository.unad.edu.co/reproductor-ova/10596_31590/index.html', 'Reglas de inferencia', OTROS_KEY, 'Reglas de Inferencia')],
]);

export const PARADIGMAS_KEY = 'Paradigmas';
export const PARADIGMAS_REF = new Map<string, Referencia>([
    ['imperativo', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/paradigmas-de-programacion', 'Paradigmas Imperativo & Declarativo', PARADIGMAS_KEY, 'Estilos Programación')],
    ['funcional', new Referencia('https://codigofacilito.com/articulos/programacion-funcional', 'Paradigma funcional', PARADIGMAS_KEY, 'Funcional')],
    ['scripting', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-son-los-lenguajes-de-scripting/', 'Lenguajes de scripting', PARADIGMAS_KEY, 'Scripting')],
    ['reactiva', new Referencia('https://profile.es/blog/que-es-la-programacion-reactiva-una-introduccion/', 'Programación reactiva', PARADIGMAS_KEY, 'Reactiva')],
    //['marcado', new Referencia('https://blog.educacionit.com/2018/12/26/diferencia-entre-lenguajes-de-scripting-lenguajes-de-marcado-y-lenguajes-de-programacion/', 'Lenguajes de marcado', PARADIGMAS_KEY)],
    ['marcado', new Referencia('https://www.ticarte.com/contenido/que-son-los-lenguajes-de-marcas', 'Lenguajes de marcado', PARADIGMAS_KEY, 'De Marcado')],
    ['aspectos', new Referencia('https://www.baeldung.com/spring-aop', 'Orientación a aspectos', PARADIGMAS_KEY, 'Aspectos')],
    ['logica', new Referencia('https://ferestrepoca.github.io/paradigmas-de-programacion/proglogica/logica_teoria/aplicaciones.html', 'Programación Logica', PARADIGMAS_KEY, 'Logica')],
    ['estructurada', new Referencia('https://informatica.uv.es/iiguia/AED/oldwww/2004_05/AED.Tema.04.pdf', 'Programación Estructurada', PARADIGMAS_KEY, 'Estructurada')],
]);

export const PATRONES_KEY = 'Patrones';
export const PATRONES_REF = new Map<string, Referencia>([
    ['definicionPatrones', new Referencia('http://www.ecured.cu/Patrones_de_dise%C3%B1o_y_arquitectura', '¿ Que son los patrones ?', PATRONES_KEY, 'Definición')],
    ['gof', new Referencia('http://www.cleformacion.com/tic-tek/-/blogs/patrones-gof', 'Gang of Four (GoF)', PATRONES_KEY, 'GOF')],
    ['desglosegof', new Referencia('https://refactoring.guru/es/design-patterns/catalog', 'Definciones de los GoF', PATRONES_KEY, 'Desglose GOF')],
    ['grasp', new Referencia('https://www.adictosaltrabajo.com/2003/12/22/grasp/', 'Asignación de responsabilidades', PATRONES_KEY, 'GRASP')],
    ['desglosegrasp', new Referencia('https://juan-garcia-carmona.blogspot.com/search/label/patr%C3%B3n', 'Patrones GRASP', PATRONES_KEY, 'Desglose Grasp')],
    ['dao', new Referencia('https://www.genbeta.com/desarrollo/patrones-de-diseno-active-record-vs-dao', 'Data Acess Object', PATRONES_KEY, 'DAO & Active Record')],
    ['antipatronesDev', new Referencia('https://sg.com.mx/revista/11/anti-patrones-la-mejor-forma-hacer-un-pesimo-sistema-software', 'Antipatrones, Desarrollo', PATRONES_KEY, 'Anti Patrones, Desarrollo')],
    ['dobleDespacho', new Referencia('https://blog.nicopaez.com/2016/11/09/una-alternativa-al-double-dispatch/', 'Patron doble despacho', PATRONES_KEY, 'Doble despacho')],
    ['patronSaga', new Referencia('https://unpocodejava.com/2020/01/02/que-es-el-patron-saga/', 'Patron Saga', PATRONES_KEY, 'Patron saga')],
    ['patroncqrs', new Referencia('https://learn.microsoft.com/es-mx/azure/architecture/patterns/cqrs', 'Patron CQRS', PATRONES_KEY, 'Patron CQRS')],
    ['patronUndoRedo', new Referencia('https://medium.com/dottech/implementando-undo-redo-con-ngrx-o-redux-f8ef5de535ef', 'Patron Undo-Redo', PATRONES_KEY, 'Patron undo-redo')],
    ['tiposDePatrones', new Referencia('https://www.javiergarzas.com/2014/08/tipos-patrones-software.html', 'Tipos de patrones', PATRONES_KEY, 'Tipos de Patrones')],
    ['stranglerFig', new Referencia('https://martinfowler.com/bliki/StranglerFigApplication.html', 'StranglerFig App', PATRONES_KEY, 'StranglerFig App')],
    ['antipatronesPM', new Referencia('https://sourcemaking.com/antipatterns', 'Antipatrones, Product Management', PATRONES_KEY, 'Anti Patrones, PM')],
    ['patternsMicroservices', new Referencia('https://blog.openreplay.com/7-microservice-design-patterns-to-use/', 'Patrones & Microservicios', PATRONES_KEY, 'Patrones & Microservicios')],
]);

export const PERSONAS_KEY = 'Personas';
export const PEOPLE_REF = new Map<string, Referencia>([
    ['personasYprocesos', new Referencia('https://www.heflo.com/es/blog/bpm/personas-procesos-tecnologia/', 'Personas-Procesos-Tecnologias', PERSONAS_KEY, 'Personas y procesos')],
    ['gestionDeServicios', new Referencia('https://www.ambit-bst.com/blog/itsm.-todo-lo-que-debes-saber-sobre-la-gesti%C3%B3n-de-servicios-it', 'Gestión de servicios tecnologicos', PERSONAS_KEY, 'Gestión de servicios')],
    ['gestionDeActivos', new Referencia('https://freshservice.com/latam/it-asset-management-software/', 'Gestión de activos', PERSONAS_KEY, 'Gestión de activos')],
    ['fidelizacion', new Referencia('https://elviajedelcliente.com/fidelizacion-de-clientes/', 'Fidelización de los clientes', PERSONAS_KEY, 'Fidelizacion')],
    ['modeloDIKW', new Referencia('https://programmerclick.com/article/46021807934/', 'Datos-Info-Conocimiento-Sabiduría', PERSONAS_KEY, 'Modelo DIKW')],
    ['gestionDeExpectativas', new Referencia('https://brainsandbeards.com/blog/expectation-management', 'Gestion de expectativas', PERSONAS_KEY, 'Gestion de expectativas')],
    ['capa8', new Referencia('https://www.merca20.com/que-es-un-error-de-capa-8-y-como-evitas-que-arruine-tu-marketing/', 'Capa 8', PERSONAS_KEY, 'Error en capa 8')],
    ['noNewsGoodNews', new Referencia('https://blog.carreralinux.com.ar/2020/05/si-no-hay-noticias-son-buenas-noticias-no-news-good-news/', 'Sin noticias, Son buenas noticias', PERSONAS_KEY, 'No News Good News')],
    ['tiposHackers', new Referencia('https://www.freecodecamp.org/news/white-hat-black-hat-red-hat-hackers/', 'Tipos de Hackers (sombreros)', PERSONAS_KEY, 'Tipos de Hackers')],
    ['sindromesLaborales', new Referencia('https://www.sage.com/es-es/blog/burnout-procusto-y-otros-14-sindromes-tipicos-del-mundo-empresarial/#gate-263a5c00-99e4-4e71-8421-469deda8e674', 'Sindromes laborales', PERSONAS_KEY, 'Sindromes Laborales')],
    ['icebergIgnorance', new Referencia('https://prevencontrol.com/prevenblog/y-tu-cuanto-sabes-acerca-de-lo-que-ocurre-en-tu-organizacion/', 'Iceberg de la Ignorancia', PERSONAS_KEY, 'Iceberg de la Ignorancia')],
    ['ubicuo', new Referencia('https://hackernoon.com/ubiquitous-language-a-key-to-success-in-professional-environments?source=rss', 'Lenguaje Ubicuo', PERSONAS_KEY, 'Lenguaje Ubicuo')],
    ['hippoEfect', new Referencia('https://www.forbes.com/sites/bernardmarr/2017/10/26/data-driven-decision-making-beware-of-the-hippo-effect/?sh=4106860c80f9', 'Efecto HIPPO', PERSONAS_KEY, 'Efecto H.I.P.P.O')],
]);

export const POO_KEY = 'POO';
export const POO_REF = new Map<string, Referencia>([
    ['poo', new Referencia('https://desarrolloweb.com/articulos/499.php', 'Programación Orientada a Objetos', POO_KEY, 'POO')],
    ['pooPilares', new Referencia('https://www.campusmvp.es/recursos/post/los-conceptos-fundamentales-sobre-programacion-orientada-objetos-explicados-de-manera-simple.aspx', 'Pilares de POO', POO_KEY, 'Pilares POO')],
    ['composicion', new Referencia('https://www.seas.es/blog/informatica/agregacion-vs-composicion-en-diagramas-de-clases-uml/', 'Agregación & Composición', POO_KEY, 'Relaciones')],
    ['pooStatic', new Referencia('https://desarrolloweb.com/articulos/metodos-atributos-static-poo.html', 'palabra reservada static', POO_KEY, 'Static en POO')],
    ['sobrecarga', new Referencia('https://www.netmentor.es/Entrada/sobrecarga-metodos', 'Sobre carga de metodos', POO_KEY, 'Sobrecargar Metodos')],
    ['acoplamiento', new Referencia('https://jummp.wordpress.com/2010/06/26/acoplamiento-aferente-acoplamiento-eferente-inestabilidad-y-abstraccion-i/', 'Tipos de acoplamiento', POO_KEY, 'Acoplamiento')],
    ['contratos', new Referencia('https://dosideas.com/wiki/Dise%C3%B1o_Por_Contrato', 'Diseño por contratos', POO_KEY, 'Contratos')],
    ['descomposicion', new Referencia('http://miguedt.blogspot.com/2013/01/descomposicion-funcional.html#:~:text=La%20descomposici%C3%B3n%20funcional%20se%20refiere,en%20funci%C3%B3n%20de%20la%20composici%C3%B3n', 'Descomposición', POO_KEY, 'Descomposición')],
    ['herencia', new Referencia('https://www.ecured.cu/Herencia_(Inform%C3%A1tica)', 'Herencia', POO_KEY, 'Herencia')],
    ['polimorfismo', new Referencia('https://devexperto.com/herencia-vs-composicion/', 'Polimorfismo', POO_KEY, 'Polimorfismo')],
    ['herVScomp', new Referencia('https://devexperto.com/herencia-vs-composicion/', 'Herencia VS Composición', POO_KEY, 'Herencia/Composición')],
    ['enlaces', new Referencia('https://es.fondoperlaterra.org/comdifference-between-static-and-dynamic-binding-2', 'Enlace estatico & dinamico', POO_KEY, 'Enlaces')],
    ['acoplamientoComponentes', new Referencia('https://mg-laboratory.tistory.com/189', 'Acoplamiento de componentes', POO_KEY, 'SDP, ADP, SAP')],
    ['beginingPoo', new Referencia('https://medium.com/javascript-scene/the-forgotten-history-of-oop-88d71b9b2d9f', 'Nacimiento de Poo', POO_KEY, 'Inicios de POO')],
    ['inmutability', new Referencia('https://www.campusmvp.es/recursos/post/programacion-funcional-inmutabilidad-y-funciones-puras.aspx', 'Inmutabilidad', POO_KEY, 'Inmutabilidad')],
    ['typesPolimorfismo', new Referencia('https://medium.com/lenguajes-y-dialectos-en-programaci%C3%B3n/polimorfismo-y-paradigmas-tipos-y-ejemplos-ca6a56093a66#:~:text=El%20polimorfismo%20puede%20categorizarse%20en,mantener%20e%20implementar%20el%20polimorfismo', 'Tipos de Polimorfismo', POO_KEY, 'Tipos de Polimorfismo')],
    ['factoryMethods', new Referencia('https://www.baeldung.com/java-constructors-vs-static-factory-methods', 'Factory Methods', POO_KEY, 'Factory Methods')],
    ['interfacesOverInheritance', new Referencia('https://www.infoworld.com/article/2073649/why-extends-is-evil.html', 'Interfaces VS Herencia', POO_KEY, 'Interfaces VS Herencia')],
]);

export const TESTING_KEY = 'Testing';
export const TESTING_REF = new Map<string, Referencia>([
    ['principios', new Referencia('https://todosqa.com/siete-principios-del-proceso-de-prueba/', 'Principios de testing', TESTING_KEY, 'Principios de testing')],
    ['manifiesto', new Referencia('https://www.adictosaltrabajo.com/2019/12/18/testing-en-un-mundo-agile/', 'Manifiesto para testing', TESTING_KEY, 'Testing manifiesto')],
    ['tiposPruebas', new Referencia('https://visual-engin.com/2017/10/26/importancia-pruebas-de-software-testing/', 'Tipos de pruebas', TESTING_KEY, 'Tipos')],
    ['beneficios', new Referencia('https://platzi.com/blog/testing-ventajas-formas-de-realizar-pruebas/', 'Beneficios del testing', TESTING_KEY, 'Beneficios')],
    ['nombramiento', new Referencia('https://www.petrikainulainen.net/programming/testing/writing-clean-tests-naming-matters/', 'Nombramiento de los componentes', TESTING_KEY, 'Nombramiento')],
    ['first', new Referencia('https://www.paradigmadigital.com/dev/principio-first-aumentar-la-calidad-tests-unitarios/', 'Principio FIRST', TESTING_KEY, 'Principio FIRST')],
    ['sutydoc', new Referencia('https://www.javiergarzas.com/2015/09/que-estoy-probando-y-cuales-son-mis-dependencias-en-testing.html', 'SUT & DOC', TESTING_KEY, 'SUT & DOC')],
    ['dobles', new Referencia('https://www.codurance.com/publications/2019/04/08/introduction-to-test-doubles', 'Dobles', TESTING_KEY, 'Dobles')],
    ['aaa', new Referencia('http://oscarmoreno.com/pruebas-unitarias/', 'Arrange-Act-Assert', TESTING_KEY, 'AAA')],
    ['gwt', new Referencia('https://softwareengineering.stackexchange.com/questions/308160/differences-between-given-when-then-gwt-and-arrange-act-assert-aaa', 'Given-When-Then', TESTING_KEY, 'GWT')],
    ['piramide', new Referencia('https://medium.com/@wc.testing.qa/la-famosa-pir%C3%A1mide-de-cohn-y-la-dura-realidad-e1250dfbe5f3', 'Piramide de tests', TESTING_KEY, 'Piramides de tests')],
    ['triangulo', new Referencia('https://proyectosagiles.org/triangulo-hierro/', 'Triangulo de Hierro', TESTING_KEY, 'Triangulo de Hierro')],
    ['cobertura', new Referencia('https://argonur.com/2020/05/11/code-coverage-cobertura-de-codigo/', 'Cobertura de pruebas', TESTING_KEY, 'Cobertura')],
    ['falsos', new Referencia('https://www.qalovers.com/2015/03/diferencia-entre-falso-positivo-y-falso_5.html#:~:text=La%20definici%C3%B3n%20de%20falso%20negativo,sistema%20que%20est%C3%A1%20realmente%20infectada.%22&text=Un%20falso%20negativo%20llevado%20a,cuando%20en%20realidad%20est%C3%A1%20fallando.', 'Falsos positivos & Falsos negativos', TESTING_KEY, 'Falsos Resultados')],
    ['QAperson', new Referencia('https://www.bbvaapimarket.com/es/mundo-api/que-es-qa-y-por-que-no-debe-faltar-en-tu-proyecto/', ' ¿ Que es QA ?', TESTING_KEY, 'Quality Analisis')],
]);

export const TESTING_ADVANCED_KEY = 'Testing-Avanzado';
export const TESTING_ADVANCED = new Map<string, Referencia>([
    ['cajaNegraBlanca', new Referencia('https://www.testermoderno.com/caja-blanca-vs-caja-negra/', 'Tests de Caja negra & Caja blanca', TESTING_ADVANCED_KEY, 'Caja Negra & Blanca')],
    ['valorLimite', new Referencia('https://educandocontic.com/valores-limite-pruebas/', 'Valores limite', TESTING_ADVANCED_KEY, 'Valores Limites')],
    ['clasesEquivalencia', new Referencia('https://educandocontic.com/particiones-de-equivalencia/', 'Clases de equivalencia', TESTING_ADVANCED_KEY, 'Equivalencias')],
    ['grafosCausaEfecto', new Referencia('https://platzi.com/tutoriales/1421-pruebas-software/9606-pruebas-con-grafos-causa-efecto/', 'Grafos causa -> efecto', TESTING_ADVANCED_KEY, 'Causa -> Efecto')],
    ['tiposDePruebas', new Referencia('https://www.softwaretestinghelp.com/types-of-software-testing/', 'Clasificación de las pruebas', TESTING_ADVANCED_KEY, 'Tipos de pruebas')],
    ['outsideInside', new Referencia('https://www.adictosaltrabajo.com/2016/01/29/tdd-outside-in-vs-inside-out/', 'TDD: Outside-In VS Inside-out', TESTING_ADVANCED_KEY, 'Outside & Inside')],
    ['casosDePruebas', new Referencia('https://medium.com/grupo-carricay/qu%C3%A9-son-los-casos-de-pruebas-4893799b5b84', 'Casos de prueba', TESTING_ADVANCED_KEY, 'Casos de prueba')],
    ['casosDeUso', new Referencia('https://blogs.encamina.com/piensa-en-software-desarrolla-en-colores/qa-caso-de-uso-vs-caso-de-prueba/', 'Casos de uso', TESTING_ADVANCED_KEY, 'Casos de uso')],
    ['codeSmellsTests1', new Referencia('https://codingcraftsman.wordpress.com/2018/09/27/test-smells/', 'Smells codes en testing #1', TESTING_ADVANCED_KEY, 'Code smells en testing #1')],
    ['codeSmellsTests2', new Referencia('https://codingcraftsman.wordpress.com/2018/09/27/test-smells/', 'Smells codes en testing #2', TESTING_ADVANCED_KEY, 'Code smells en testing #2')],
    ['mutation', new Referencia('https://spa.myservername.com/what-is-mutation-testing#:~:text=La%20prueba%20de%20mutaci%C3%B3n%20es,prueba%20para%20aislar%20las%20desviaciones', 'Tests de mutación', TESTING_ADVANCED_KEY, 'Pruebas de mutación')]
]);

export const REFACTORIZACION_KEY = 'Refactorizacion';
export const REFACTORING_REF = new Map<string, Referencia>([
    ['codigolimpio', new Referencia('https://refactoring.guru/es/refactoring/what-is-refactoring', '¿ Que es codigo Limpio ?', REFACTORIZACION_KEY, 'Codigó limpio')],
    ['deudatecnica', new Referencia('https://refactoring.guru/es/refactoring/technical-debt', 'Deuda tecnica', REFACTORIZACION_KEY, 'Deuda tecnica')],
    ['tiposDeudaTecnica', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/deuda-tecnica-explicada/', 'Tipos de deuda tecnica', REFACTORIZACION_KEY, 'Tipos de deuda')],
    ['comentarios', new Referencia('https://www.scrummanager.net/bok/index.php?title=Deuda_t%C3%A9cnica', 'Comentarios especiales', REFACTORIZACION_KEY, 'Comentar la deuda')],
    ['cuandorefactorizar', new Referencia('https://refactoring.guru/es/refactoring/when', '¿ Cuando refactorizar ?', REFACTORIZACION_KEY, '¿ Cuando ?')],
    ['comorefactorizar', new Referencia('https://refactoring.guru/es/refactoring/how-to', '¿ Como refactorizar ? ', REFACTORIZACION_KEY, '¿ Como ?')],
    ['tecnicasRefactoring', new Referencia('https://refactoring.guru/es/refactoring/techniques', 'Tecnicas para refactorizar', REFACTORIZACION_KEY, 'Tecnicas')],
    ['cuandoNoRefactorizar', new Referencia('https://www.digite.com/es/agile/refactorizacion-en-agil/#:~:text=%C2%BFQu%C3%A9%20es%20la%20refactorizaci%C3%B3n%3F,el%20comportamiento%20observable%2C%20del%20c%C3%B3digo.', 'Cuando No Refactorizar', REFACTORIZACION_KEY, 'Cuando No')],
    ['refactorLegacyCode', new Referencia('https://jesuslc.com/2020/11/21/tecnicas-para-mantener-al-legacy-code-bajo-control/', 'Refactorizar el Legacy Code', REFACTORIZACION_KEY, 'Refactor en Legacy code')],
]);

export const REQUISITOS_KEY = 'Requisitos';
export const REQUISITOS_REF = new Map<string, Referencia>([
    ['funcionales', new Referencia('https://medium.com/@requeridosblog/requerimientos-funcionales-y-no-funcionales-ejemplos-y-tips-aa31cb59b22a', 'Requisitos funcionales', REQUISITOS_KEY, 'Funcionales')],
    ['NOfuncionales', new Referencia('https://medium.com/@requeridosblog/requerimientos-funcionales-y-no-funcionales-ejemplos-y-tips-aa31cb59b22a', 'Requisitos No funcionales', REQUISITOS_KEY, 'NO Funcionales')],
    ['negocio', new Referencia('https://requeridos.com/que-es-el-valor-de-negocio-y-como-medirlo/', 'El valor del negocio', REQUISITOS_KEY, 'EL Negocio')],
    ['ambiguedad', new Referencia('https://requeridos.com/requerimientos-menos-es-mas/', 'Evitar la ambiguedad', REQUISITOS_KEY, 'Evitar la ambiguedad')],
    ['calidad', new Referencia('https://platzi.com/tutoriales/1248-pro-arquitectura/5498-atributos-de-calidad-de-un-producto-de-software/', 'Atributos de calidad', REQUISITOS_KEY, 'Atributos de calidad')],
    ['tradeoff', new Referencia('https://medium.com/analysts-corner/those-other-requirements-quality-attributes-and-their-inescapable-tradeoffs-31dc0691974d', 'Sacrificios y ganancias', REQUISITOS_KEY, 'Trade-offs')],
    ['objetivos', new Referencia('https://www.pqforce.com/es/blog/objetivos-frente-a-requisitos-cual-es-la-diferencia/', 'Objetivos & Requisitos', REQUISITOS_KEY, 'Objetivos & Requisitos')],
]);

export const PRINCIPIOS_KEY = 'Principios';
export const PRINCIPIOS_REF = new Map<string, Referencia>([
    ['solid', new Referencia('https://profile.es/blog/principios-solid-desarrollo-software-calidad/', 'Principio SOLID', PRINCIPIOS_KEY, 'SOLID')],
    ['kiss', new Referencia('https://manuelzapata.co/principio-kiss-keep-it-simple-stupid/', 'Mantenlo simple, estupido', PRINCIPIOS_KEY, 'KISS')],
    ['yagni', new Referencia('https://www.genbeta.com/desarrollo/la-navaja-de-occam-kiss-y-yagni-la-simplicidad-en-el-codigo-no-deberia-ser-solo-postureo-developer', 'No vas a necesitarlo', PRINCIPIOS_KEY, 'YAGNI')],
    ['occam', new Referencia('https://www.genbeta.com/desarrollo/la-navaja-de-occam-kiss-y-yagni-la-simplicidad-en-el-codigo-no-deberia-ser-solo-postureo-developer', 'La navaja de Occam', PRINCIPIOS_KEY, 'Occam')],
    ['dry', new Referencia('https://tantacom.com/principios-diseno-software-kiss-dry-solid/', 'No te repitas a ti mismo', PRINCIPIOS_KEY, 'DRY')],
    ['hollywood', new Referencia('https://www.genbeta.com/desarrollo/doce-principios-de-diseno-que-todo-desarrollador-deberia-conocer', 'No nos llames, nosotros te llamamos', PRINCIPIOS_KEY, 'Hollywood')],
    ['tellDontAsk', new Referencia('https://www.disrupciontecnologica.com/tell-dont-ask/?reload=977836', 'Dile, no le preguntes', PRINCIPIOS_KEY, 'TDA')],
    ['stupid', new Referencia('https://williamdurand.fr/2013/07/30/from-stupid-to-solid-code/#singleton', 'NO seas S.T.U.P.I.D', PRINCIPIOS_KEY, 'STUPID')],
    ['twice-one', new Referencia('https://betterprogramming.pub/measure-twice-cut-once-isnt-very-agile-3af456d932b9', 'Mide 2 veces, Corta 1 vez', PRINCIPIOS_KEY, '2-1')],
    ['divide-conquer', new Referencia('https://betterprogramming.pub/10-design-principles-in-software-engineering-f88647cf5a07', 'Divide y Conquistaras', PRINCIPIOS_KEY, 'Dividir y Conquistar')],
]);

export const SEGURIDAD_KEY = 'Seguridad';
export const SEGURIDAD_REF = new Map<string, Referencia>([
    ['firewall', new Referencia('https://idgrup.com/firewall-que-es-y-como-funciona/#:~:text=Un%20firewall%2C%20tambi%C3%A9n%20llamado%20cortafuegos,ordenadores%20de%20una%20misma%20red', 'Firewall', SEGURIDAD_KEY, 'Firewall')],
    ['protocolos', new Referencia('https://www.websecurity.digicert.com/es/es/security-topics/what-is-ssl-tls-https', 'SSL, TSL, HTTPS', SEGURIDAD_KEY, 'SSL, TSL, HTTPS')],
    ['proxy', new Referencia('https://www.welivesecurity.com/la-es/2020/01/02/que-es-proxy-para-que-sirve/', 'Proxy', SEGURIDAD_KEY, 'Proxy')],
    ['ciberSeguridad', new Referencia('https://latam.kaspersky.com/resource-center/definitions/what-is-cyber-security', 'Ciberseguridad y otras amenazas', SEGURIDAD_KEY, 'Ciberseguridad')],
    ['cia', new Referencia('https://searchdatacenter.techtarget.com/es/opinion/Que-es-la-triada-de-la-CIA', 'Confidencialidad-Integridad-Accesibilidad ', SEGURIDAD_KEY, 'CIA')],
    ['noRepudio', new Referencia('https://www.unir.net/ingenieria/revista/no-repudio-seguridad-informatica/', 'No repudio', SEGURIDAD_KEY, 'NO Repudio')],
    ['matrizDeRiesgo', new Referencia('https://www.protek.com.py/novedades/objetivos-de-una-matriz-de-riesgos/', 'Matriz de Riesgo', SEGURIDAD_KEY, 'Matriz de Riesgo')],
    ['condicionDeCarrera', new Referencia('https://ciberseguridad.com/amenzas/vulnerabilidades/condicion-de-carrera/', 'Condición de Carrera', SEGURIDAD_KEY, 'Carrera')],
    ['honeypot', new Referencia('https://latam.kaspersky.com/resource-center/threats/what-is-a-honeypot', 'Honetypot', SEGURIDAD_KEY, 'Honeypot')],
    ['zeroDayExploit', new Referencia('https://latam.kaspersky.com/resource-center/definitions/zero-day-exploit', 'Zero Day Exploit', SEGURIDAD_KEY, 'Zero Day Exploit')],
    ['pentest', new Referencia('https://www.hiberus.com/crecemos-contigo/pentesting-owasp-fases-metodologia/', 'Testing de intrusión', SEGURIDAD_KEY, 'Test de Intrusión')],
    ['owaspTop', new Referencia('https://owasp.org/Top10/', 'OWASP Top 10', SEGURIDAD_KEY, 'OWASP Top 10')],
    ['stride', new Referencia('https://www.softwaresecured.com/stride-threat-modeling/', 'STRIDE', SEGURIDAD_KEY, 'STRIDE')],
    ['ciam', new Referencia('https://auth0.com/blog/why-do-you-need-ciam/', 'CIAM', SEGURIDAD_KEY, 'CIAM')],
    ['lateralChanel', new Referencia('https://ciberseguridad.com/amenzas/ataque-canal-lateral/', 'Ataques de canal lateral', SEGURIDAD_KEY, 'Ataques de canal lateral')],
    ['csp', new Referencia('https://auth0.com/blog/from-zero-to-hero-with-csp/', 'Content Security Police', SEGURIDAD_KEY, 'Content Security Police')],
    ['csrf', new Referencia('https://www.welivesecurity.com/la-es/2015/04/21/vulnerabilidad-cross-site-request-forgery-csrf/', 'Cross Site Request Forgery', SEGURIDAD_KEY, 'CSRF')],
]);

export const SMELL_CODES_KEY = 'Smell-Codes';
export const SMELL_CODES_REF = new Map<string, Referencia>([
    ['codesmells', new Referencia('https://openwebinars.net/blog/code-smells-y-deuda-tecnica/', 'Smell Codes', SMELL_CODES_KEY, 'Smell Codes')],
    ['tiposSmellCodes', new Referencia('https://refactoring.guru/es/refactoring/smells', 'Tipos de Smell codes', SMELL_CODES_KEY, 'Tipos')],
    ['desglose', new Referencia('https://refactoring.guru/es/refactoring/smells', 'Smell codes por tipo', SMELL_CODES_KEY, 'Desglose')],
    ['casos', new Referencia('https://refactoring.guru/es/refactoring/smells', 'Casos donde pueden ser ignorados', SMELL_CODES_KEY, 'Casos especiales')],
    ['payoff', new Referencia('https://refactoring.guru/es/refactoring/smells', 'Beneficios de corregir code smells', SMELL_CODES_KEY, 'Ganancias')],
    ['designsmells', new Referencia('https://www.alpharithms.com/code-smell-492316/', 'Code smells en diseño', SMELL_CODES_KEY, 'A nivel de diseño')],
]);

export const DATA_BASES_KEY = 'Bases de Datos'
export const PERSISTENCY_REF = new Map<string, Referencia>([
    ['sql', new Referencia('https://www.w3schools.com/sql/default.asp', '¿ Que es SQL ? ', DATA_BASES_KEY, 'SQL')],
    ['dbms', new Referencia('https://www.astera.com/es/type/blog/database-management-software/', 'Software de Gestion de Bases de Datos', DATA_BASES_KEY, 'DBMS')],
    ['crud', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/crud-las-principales-operaciones-de-bases-de-datos/', 'Create, Read, Update, Delete', DATA_BASES_KEY, 'CRUD')],
    ['dl', new Referencia('https://platzi.com/blog/que-es-ddl-dml-dcl-y-tcl-integridad-referencial/', 'DDL, DML, DCL, TCL', DATA_BASES_KEY, 'DDL, DML, DCL, TCL')],
    ['integridad', new Referencia('https://platzi.com/blog/que-es-ddl-dml-dcl-y-tcl-integridad-referencial/', 'Integridad Referencial', DATA_BASES_KEY, 'Integridad')],
    ['erd', new Referencia('https://www.lucidchart.com/pages/es/que-es-un-diagrama-entidad-relacion', 'Diagrama Entidad-Relación', DATA_BASES_KEY, 'ERD')],
    ['normalizacion', new Referencia('https://docs.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description', 'Normalización de una BD', DATA_BASES_KEY, 'Normalización')],
    ['acid', new Referencia('https://dosideas.com/noticias/base-de-datos/973-acid-en-las-bases-de-datos', 'Esquema ACID', DATA_BASES_KEY, 'ACID')],
    ['indices', new Referencia('https://www.ibm.com/docs/es/mam/7.6.0.8?topic=databases-database-indexing', 'Indices', DATA_BASES_KEY, 'Indices')],
    ['joins', new Referencia('https://ingenieriadesoftware.es/tipos-sql-join-guia-referencia/', 'Tipos de Joins', DATA_BASES_KEY, 'Tipos de Joins')],
    ['constraints', new Referencia('https://www.w3schools.com/sql/sql_constraints.asp', 'Constraints', DATA_BASES_KEY, 'Constraints')],
    ['dbDesign', new Referencia('https://dzone.com/articles/what-is-good-database-design', 'Diseño de una BD', DATA_BASES_KEY, 'Diseño')],
]);

export const DATA_BASES_ADVANCED_KEY = 'BD Avanzado'
export const PERSISTENCY_ADVANCED_REF = new Map<string, Referencia>([
    ['nosql', new Referencia('https://pandorafms.com/blog/es/bases-de-datos-nosql/', 'Bases de Datos NO SQL', DATA_BASES_ADVANCED_KEY, 'NoSQL')],
    ['tiposBD', new Referencia('https://www.acens.com/wp-content/images/2014/02/bbdd-nosql-wp-acens.pdf', 'Tipos de BD No SQL', DATA_BASES_ADVANCED_KEY, 'Tipos NoSQL')],
    ['orm', new Referencia('https://programarfacil.com/blog/que-es-un-orm/', 'Mapeo Objetos-Relacional', DATA_BASES_ADVANCED_KEY, 'ORM')],
    ['consistenciaEventual', new Referencia('https://medium.com/@gabanox/consistencia-eventual-en-s3-6ba5b2ecd721', 'Consistencia Eventual', DATA_BASES_ADVANCED_KEY, 'Consistencia')],
    ['algebraRelacional', new Referencia('https://sites.google.com/site/basededatosdistribuidastics/algebra-relacional', 'Algebra Relacional', DATA_BASES_ADVANCED_KEY, 'Algebra Relacional')],
    ['n+1selects', new Referencia('https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping', 'N + 1 Problem', DATA_BASES_ADVANCED_KEY, 'N + 1 Selects')],
    ['boyceCodd', new Referencia('https://normalizacionunit4.blogspot.com/2019/05/46-forma-normal-boyce-codd.html', 'Boyce-Codd', DATA_BASES_ADVANCED_KEY, 'Boyce-Codd')],
    ['sqlVsNosql', new Referencia('https://medium.com/@eugeniomendoza/c%C3%B3mo-saber-si-necesitas-una-base-de-datos-nosql-b6cfd5bb7d9b', 'SQL ó NoSql', DATA_BASES_ADVANCED_KEY, 'SQL ó NoSql')],
    ['locking', new Referencia('https://vladmihalcea.com/optimistic-vs-pessimistic-locking/', 'Bloqueo Optimista & Pesimista', DATA_BASES_ADVANCED_KEY, 'Bloqueos')],
    ['sqlOrderExecution', new Referencia('https://matam-kirankumar.medium.com/sql-query-order-of-execution-37001da1462', 'Orden de Ejecución', DATA_BASES_ADVANCED_KEY, 'Orden de Ejecución')],
    ['sargeable', new Referencia('https://dev.to/kanani_nirav/secret-to-optimizing-sql-queries-understand-the-sql-execution-order-28m1', 'Consultas SARGEABLE', DATA_BASES_ADVANCED_KEY, 'SARGEABLE')],
    ['MVCC', new Referencia('https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/What-is-MVCC-How-does-Multiversion-Concurrencty-Control-work', 'Control de Concurrencia Multiversion', DATA_BASES_ADVANCED_KEY, 'Control de Concurrencia')],
    ['acidVSbase', new Referencia('https://phoenixnap.com/kb/acid-vs-base', 'BASE', DATA_BASES_ADVANCED_KEY, 'BASE')],
]);

export const UML_KEY = 'UML';
export const UML_REF = new Map<string, Referencia>([
    ['uml', new Referencia('https://diagramasuml.com/', 'Lenguaje Unificado de Modelado', UML_KEY, '¿ Que es ?')],
    ['clase', new Referencia('https://diagramasuml.com/diagrama-de-clases/', 'Diagrama de clases', UML_KEY, 'De Clases')],
    ['componentes', new Referencia('https://diagramasuml.com/componentes/', 'Diagrama de componentes', UML_KEY, 'De Componentes')],
    ['despliegue', new Referencia('https://diagramasuml.com/despliegue/', 'Diagrama de despliegue', UML_KEY, 'De Despliegue')],
    ['usos', new Referencia('https://diagramasuml.com/casos-de-uso/', 'Diagrama de casos de uso', UML_KEY, 'Casos de Uso')],
    ['secuencia', new Referencia('https://diagramasuml.com/secuencia/', 'Diagrama de secuencia', UML_KEY, 'De Secuencia')],
    ['actividades', new Referencia('https://diagramasuml.com/actividades/', 'Diagrama de actividades', UML_KEY, 'De Actividades')],
    ['paquetes', new Referencia('https://diagramasuml.com/paquetes/', 'Diagrama de paquetes', UML_KEY, 'De Paquetes')],
    ['estados', new Referencia('https://diagramasuml.com/estados/', 'Diagrama de estados', UML_KEY, 'De Estados')],
    ['vista', new Referencia('https://es.wikipedia.org/wiki/Modelo_de_Vistas_de_Arquitectura_4%2B1', 'Modelo 4+1 vistas', UML_KEY, '4+1 Vistas')],
    ['tiposUml', new Referencia('https://www.microsoft.com/es-co/microsoft-365/business-insights-ideas/resources/guide-to-uml-diagramming-and-database-modeling#:~:text=El%20Lenguaje%20Unificado%20de%20Modelado,de%20un%20sistema%20o%20proceso.', 'Tipos de Diagramas', UML_KEY, 'Tipos de Diagramas')],
]);

export const VERSIONAMIENTO_KEY = 'Versionamiento';
export const VERSIONAMIENTO_REF = new Map<string, Referencia>([
    ['git', new Referencia('https://david-estevez.gitbooks.io/the-git-the-bad-and-the-ugly/content/es/control-de-versiones.html', 'Gestores de versiones', VERSIONAMIENTO_KEY, 'Gestor de Versiones')],
    ['dependencias', new Referencia('https://www.hongkiat.com/blog/manage-dependencies-tools-webdev/', 'Gestores de dependencias', VERSIONAMIENTO_KEY, 'Dependencias Web')],
    ['gradlevsmaven', new Referencia('https://www.chakray.com/es/gradle-vs-maven-definiciones-diferencias/', 'Gradle VS Maven', VERSIONAMIENTO_KEY, 'Gradle VS Maven')],
    ['versionamiento', new Referencia('https://ed.team/blog/como-se-deciden-las-versiones-del-software', 'Manejo de versiones', VERSIONAMIENTO_KEY, 'Versionamiento')],
    ['licencias', new Referencia('https://www.bbvaapimarket.com/es/mundo-api/las-5-licencias-de-software-libre-mas-importantes-que-todo-desarrollador-debe-conocer/', 'Tipos de licencias', VERSIONAMIENTO_KEY, 'Licencias')],
    ['documentation', new Referencia('https://shopify.engineering/good-documentation-productivity', 'Documentación & Productividad', VERSIONAMIENTO_KEY, 'Documentacion')],
    ['licencesAndData', new Referencia('https://medium.com/@torgo/whats-the-deal-with-open-source-open-data-and-open-standards-licenses-d769d8e30dc0', 'Licencias y Datos abiertos', VERSIONAMIENTO_KEY, 'Licencias & Datos')],
]);

export const HARDWARE_KEY = 'Hardware';
export const HARDWARE_REF = new Map<string, Referencia>([
    ['virtualizacion', new Referencia('https://www.redhat.com/es/topics/virtualization/what-is-a-virtual-machine', 'Virtualización', HARDWARE_KEY, 'Virtualizacion')],
    ['cli', new Referencia('https://searchdatacenter.techtarget.com/es/definicion/Interfaz-de-linea-de-comandos-o-CLI', 'Interfaz de Linea de Comandos', HARDWARE_KEY, 'CLI')],
    ['escalamiento', new Referencia('https://www.oscarblancarteblog.com/2017/03/07/escalabilidad-horizontal-y-vertical/', 'Escalamiento de un sistema', HARDWARE_KEY, 'Escalamiento')],
    ['nubeVSvirtualizacion', new Referencia('https://www.redhat.com/es/topics/cloud-computing/cloud-vs-virtualization', 'Nube VS Virtualizacion', HARDWARE_KEY, 'Nube VS VM')],
    ['rendering', new Referencia('https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/', 'Server-side VS client-side rendering', HARDWARE_KEY, 'Rendering')],
    ['modelOSI', new Referencia('https://www.cloudflare.com/es-es/learning/ddos/glossary/open-systems-interconnection-model-osi/', 'Modelo OSI', HARDWARE_KEY, 'Modelo OSI')],
    ['monitoreo', new Referencia('https://www.hiberus.com/crecemos-contigo/uso-de-los-apm-monitoreo-del-rendimiento-de-aplicaciones/#:~:text=Un%20APM%20(Application%20Performance%20Management,problemas%20a%20nivel%20de%20aplicaci%C3%B3n', 'Aplication Performance Management (apm)', HARDWARE_KEY, 'Monitoreo')],
    ['vmVsContainers', new Referencia('https://cloudnativeislamabad.hashnode.dev/virtualization-vs-containerization', 'Maquinas Virtuales VS Contenedores', HARDWARE_KEY, 'VM VS Contenedores')],
    ['falseSharing', new Referencia('https://www.easytechjunkie.com/what-is-false-sharing.htm', 'False Sharing', HARDWARE_KEY, 'False Sharing')],
]);

export const WEB_KEY = 'Web';
export const WEB_REF = new Map<string, Referencia>([
    ['spa', new Referencia('https://desarrolloweb.com/articulos/que-es-una-spa.html#:~:text=En%20pocas%20palabras%2C%20SPA%20son,html', 'Single Page Aplication', WEB_KEY, 'SPA')],
    ['pwa', new Referencia('https://www.iebschool.com/blog/progressive-web-apps-analitica-usabilidad/', 'Progressive Web App', WEB_KEY, 'PWA')],
    ['seo', new Referencia('https://www.40defiebre.com/guia-seo/que-es-seo-por-que-necesito', 'Search Engine Optimization', WEB_KEY, 'SEO')],
    ['espacio', new Referencia('https://www.dsigno.es/blog/diseno-grafico/espacios-negativos-en-diseno-grafico', 'El uso del espacio para diseñar', WEB_KEY, 'Espacio Negativo')],
    ['diseno', new Referencia('https://seocom.agency/es/blog/diseno-grafico-web/', 'Diseño grafico', WEB_KEY, 'Diseño Grafico')],
    ['interfacesUsuario', new Referencia('https://pensamientodigital.wordpress.com/diseno-de-interfases-de-usuario/', 'Diseño de interfaces de usuario', WEB_KEY, 'UI')],
    ['logos', new Referencia('https://franciscotorreblanca.es/logotipo-imagotipo-isotipo-e-isologo/', 'Logotipo, Imagotipo, Isotipo, Isologo', WEB_KEY, 'Logos')],
    ['experienciasUsuario', new Referencia('https://blog.acantu.com/que-es-ux-y-ui/', 'Experiencia de usuario', WEB_KEY, 'UX')],
    ['gestalt', new Referencia('https://imborrable.com/blog/teoria-de-la-gestalt/', 'Teoria de Gestalt', WEB_KEY, 'Teoria de Gestalt')],
    ['ssr-csr-ssg-isr', new Referencia('https://medium.com/@prashantramnyc/server-side-rendering-ssr-vs-client-side-rendering-csr-vs-pre-rendering-using-static-site-89f2d05182ef', 'SSR vs CSR vs SSG', WEB_KEY, 'SSR vs CSR vs SSG')],
    ['esqueumorfismo', new Referencia('https://aderal.es/estrategias-de-marketing-y-transformacion-digital/nuevas-tendencias-en-diseno-grafico-digital-el-regreso-del-esqueumorfismo/', 'Esqueumorfismo', WEB_KEY, 'Esqueumorfismo')],
    ['menorSorpresa', new Referencia('https://www.linkedin.com/pulse/principle-least-surprise-incus-data-pty-ltd/', 'Menor Sorpresa', WEB_KEY, 'Menor Sorpresa')],
]);

export const NEURO_MARKETING_KEY = 'Neuro-Marketing';
export const NEURO_MARKETING_REF = new Map<string, Referencia>([
    ['pestel', new Referencia('https://www.simla.com/blog/analisis-pestel', 'Analisis PESTEL', NEURO_MARKETING_KEY, 'Analisis PESTEL')],
    ['matrizBcg', new Referencia('https://emprendepyme.net/tipos-de-productos-segun-la-matriz-bcg-y-ejemplos-reales.html', 'Matriz BCG', NEURO_MARKETING_KEY, 'Matriz BCG')],
    ['b2b-b2c', new Referencia('https://www.uup.es/blog/b2b-y-b2c-que-son-y-que-diferencias-hay-entre-ambos/', 'B2B & B2C', NEURO_MARKETING_KEY, 'B2B & B2C')],
    ['eric', new Referencia('http://www.azentoconsulting.com/2020/07/21/como-crear-un-nuevo-modelo-de-negocio-o-reformular-nuestro-modelo-de-negocio-ya-existente-la-matriz-eric/', 'Matriz ERIC', NEURO_MARKETING_KEY, 'Matriz ERIC')],
    ['gamificacionMarketing', new Referencia('https://www.yeeply.com/blog/gamificacion-marketing-estrategias-ejemplos/', 'Gamificacion & Marketing', NEURO_MARKETING_KEY, 'Gamificacion & Marketing')],
    ['maslow-barret', new Referencia('https://www.danielcolombo.com/los-7-niveles-de-consciencia-personal-y-empresarial-por-daniel-colombo/', 'Maslow & Barret', NEURO_MARKETING_KEY, 'Maslow & Barret')],
    ['cerebroTriurno', new Referencia('https://www.educaciontrespuntocero.com/recursos/neuroeducacion-cerebro-triuno/', 'Cerebro Triurno', NEURO_MARKETING_KEY, 'Cerebro Triurno')],
    ['elementValues', new Referencia('https://media.bain.com/elements-of-value/#', 'Elementos de Valor', NEURO_MARKETING_KEY, 'Elementos de Valor')],
    ['multi&omniCanal', new Referencia('https://www.chakray.com/es/omnicanal-vs-multicanal-cual-es-la-diferencia/#:~:text=En%20una%20soluci%C3%B3n%20multicanal%2C%20el,marca%20de%20una%20manera%20interrumpida', 'Multi & Omni Canalidad', NEURO_MARKETING_KEY, 'Multi & Omni Canalidad')],
    ['buyerPersona', new Referencia('https://es.semrush.com/blog/como-crear-un-buyer-persona/?kw=&cmp=LM_SRCH_DSA_Blog_ES&label=dsa_pagefeed&Network=g&Device=c&utm_content=641222119375&kwid=dsa-1928812725813&cmpid=19249322807&agpid=145221538700&BU=Core&extid=64565394235&adpos=&gclid=Cj0KCQiAlKmeBhCkARIsAHy7WVvUenuKUoH2ntk2Zr4z9trooaHAHZNblouOpPsYpQ864mIN1GSotFUaAjuiEALw_wcB', 'Buyer Persona', NEURO_MARKETING_KEY, 'Buyer Persona')],
    ['neuroMarketing', new Referencia('https://rockcontent.com/es/blog/neuromarketing/', 'Neuro Marketing', NEURO_MARKETING_KEY, 'Neuro Marketing')],
    ['semanticaPragmatica', new Referencia('https://creatividadpersuasiva.cl/semiosis-sintaxis-semantica-y-pragmatica/#coming', 'Semantica & Pragmatica', NEURO_MARKETING_KEY, 'Semantica & Pragmatica')],
    ['pnl', new Referencia('https://psicologiaymente.com/coach/principios-pnl-programacion-neurolinguistica', 'Programación Neurolinguistica', NEURO_MARKETING_KEY, 'Neurolinguistica')],
]);

export const CD_CI_KEY = 'CD/CI-Infraestructura';
export const CD_CI_REF = new Map<string, Referencia>([
    ['cdci', new Referencia('https://www.aplyca.com/es/blog/integracion-entrega-continua-ci-cd', 'Integración continua y Entrega Continua', CD_CI_KEY, 'CD/CI')],
    ['devops', new Referencia('https://www.paradigmadigital.com/techbiz/que-es-devops-y-sobre-todo-que-no-es-devops/#:~:text=Como%20conclusi%C3%B3n%2C%20qued%C3%A9monos%20con%20una,s%C3%B3lo%20en%20desarrollar%20y%20puedan', 'DevOps', CD_CI_KEY, 'DevOps')],
    ['dataStoring', new Referencia('https://www.striim.com/blog/data-warehouse-vs-data-lake-vs-data-lakehouse-an-overview/', 'Analisis y almacenamiento de datos', CD_CI_KEY, 'Almacenamiento de datos')],
    ['iascode', new Referencia('https://www.redhat.com/es/topics/automation/what-is-infrastructure-as-code-iac', 'Infraestructura como Codigo', CD_CI_KEY, 'Infraestructura & Codigo')],
    ['stateless-stateful', new Referencia('https://refactorizando.com/stateful-vs-stateless-arquitectura/', 'Stateful VS Stateless', CD_CI_KEY, 'Stateless VS Stateful')],
    ['deploymentPatterns', new Referencia('https://newsletter.techworld-with-milan.com/p/what-are-deployment-patterns', 'Patrones de Despliegue', CD_CI_KEY, 'Patrones de Despliegue')],
    ['industrialDevops', new Referencia('https://itrevolution.com/articles/what-is-industrial-devops/', 'Industrial DevOps', CD_CI_KEY, 'Industrial DevOps')],
    ['pipelines', new Referencia('https://semaphoreci.com/blog/cicd-pipeline', 'Pipelines', CD_CI_KEY, '¿ Que es un Pipeline ?')],
]);
