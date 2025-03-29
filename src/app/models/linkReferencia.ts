import * as Keys from './keys'
import { Referencia } from './models';

export class LinkReferencia {

    public components: Map<string, Referencia> = new Map([
        ...AGILES_REF,           ...CONTAINERS,               ...ANALISIS_REF,       
        ...ARQUITECTURAS_REF,    ...BUENAS_PRACTICAS_REF,     ...CALIDAD_REF,
        ...COMPILACION_REF,      ...CONOCIMIENTO_EMPIRICO,    ...ESTRATEGIAS_DESARROLLO_REF,
        ...FRAMEWORKS_REF,       ...GIT_REF,                  ...USER_HISTORIES,
        ...MALAS_PRACTICAS_REF,  ...META_CARATERISTICAS_REF,  ...META_ESTRUCTURAS_REF,
        ...METODOLOGIAS_REF,     ...NUBE_REF,                 ...ANALISIS_DATA_REF,
        ...PARADIGMAS_REF,       ...PATRONES_REF,             ...PEOPLE_REF,  
        ...POO_REF,              ...TESTING_REF,              ...TESTING_ADVANCED_REF,
        ...REFACTORING_REF,      ...REQUISITOS_REF,           ...PRINCIPIOS_REF,
        ...SECURITY_REF,         ...SMELL_CODES_REF,          ...PERSISTENCY_REF,
        ...UML_REF,              ...VERSIONAMIENTO_REF,       ...HARDWARE_REF,
        ...WEB_REF,              ...LEYES_REF,                ...NEURO_MARKETING_REF,
        ...CD_CI_REF,            ...APIS_REF,                 ...PERSISTENCY_ADVANCED_REF,
        ...MICRO_SERVICES_REF  
    ]);

    public routesAndSections: Map<string, string> = new Map([
        [AGILES_KEY, 'agiles'],                               [ANALISIS_KEY, 'analisis'],
        [ARQUITECTURAS_KEY, 'arquitecturas'],                 [BUENAS_PRACTICAS_KEY, 'buenas-practicas'],
        [CALIDAD_KEY, 'calidad'],                             [COMPILACION_KEY, 'compilacion'],
        [CONOCIMIENTO_EMPIRICO_KEY, 'conocimiento-empirico'], [LEYES_KEY, 'leyes'],
        [CONTENEDORES_KEY, 'contenedores'],                   [ESTRATEGIAS_DESARROLLO_KEY, 'estrategias-de-desarrollo'],
        [FRAMEWORKS_KEY, 'frameworks'],                       [GIT_KEY, 'git'],
        [USER_HISTORIES_KEY, 'historias-de-usuario'],         [MALAS_PRACTICAS_KEY, 'malas-practicas'],
        [META_CARACTERISTICAS_KEY, 'metacaracteristicas'],    [META_ESTRUCTURAS_KEY, 'meta-estructuras'],
        [METODOLOGIAS_KEY, 'metodologias'],                   [NUBE_KEY, 'nube'],
        [ANALISIS_DATA_KEY, 'analisis-datos'],                [PATRONES_KEY, 'patrones'],
        [PARADIGMAS_KEY, 'paradigmas'],                       [PEOPLE_KEY, 'personas'],
        [POO_KEY, 'poo'],                                     [TESTING_KEY, 'testing'],
        [TESTING_ADVANCED_KEY, 'testing-avanzado'],           [REFACTORING_KEY, 'refactorizacion'],
        [REQUISITOS_KEY, 'requisitos'],                       [PRINCIPIOS_KEY, 'principios'],
        [SECURITY_KEY, 'seguridad'],                          [SMELL_CODES_KEY, 'smells-codes'],
        [PERSISTENCY_KEY, 'bases-de-datos'],                  [UML_KEY, 'uml'],
        [VERSIONAMIENTO_KEY, 'versionamiento'],               [HARDWARE_KEY, 'hardware'],
        [WEB_KEY, 'web'],                                     [NEURO_MARKETING_KEY, 'neuro-marketing'],
        [PERSISTENCY_ADVANCED_KEY, 'bd-avanzado'],            [CD_CI_KEY, 'cd-ci-infraestructura'],
        [APIS_KEY, 'apis'],                                   [MICRO_SERVICES_KEY, 'microservices']
    ]);

}

export const LAST_ITEM = Keys.ANALISIS_SYSTEM_THINKING;

export const AGILES_KEY = 'Agiles';
export const AGILES_REF = new Map<string, Referencia>([
    //['moscow', new Referencia('https://proagilist.es/blog/agilidad-y-gestion-agil/priorizar-requisitos-tecnica-priorizacion-moscow/', 'MOSCOW', AGILES_KEY, 'MOSCOW')],
    ['moscow', new Referencia('https://www.itdo.com/blog/moscow-que-es-y-como-priorizar-en-el-desarrollo-de-tu-aplicacion/', 'MOSCOW', AGILES_KEY, 'MOSCOW', '', '2024/05/01')],
    ['scoring', new Referencia('https://comunidad.iebschool.com/metodologiasparaelcambio/2014/03/23/priorizando-historias-de-usuario/', 'Theme Scoring', AGILES_KEY, 'Theme Scoring')],
    ['muda', new Referencia('https://prevencontrol.com/prevenblog/las-7-mudas', 'Desperdicio', AGILES_KEY, 'Desperdicio')],
    [Keys.AGILES_5S, new Referencia('https://www.gestiopolis.com/5s-seiri-seiton-seiso-seiketsu-y-shitsuke-base-de-la-mejora-continua/', 'Seiri, Seiton, Seiso, Seiketsu, Shitsuke', AGILES_KEY, '5S - Kaizen')],
    //['muda#1', new Referencia('https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-i/', 'Muda en el software, parte #1', AGILES_KEY, 'Muda #1')],
    //['muda#2', new Referencia('https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-y-ii/', 'Muda en el software, parte #2', AGILES_KEY, 'Muda #2')],
    ['mudaSoftware', new Referencia('https://medium.com/@techworldwithmilan/7-wastes-of-software-development-8febe264c5a8', 'Desperdicio en el software', AGILES_KEY, 'Muda Software', '', '2024/05/01')],
    //['planningPoker', new Referencia('https://samuelcasanova.com/2016/01/estimacion-agil-con-la-tecnica-planning-poker/', 'Planning Poker y la estimación agil', AGILES_KEY, 'Planning Poker')],
    [Keys.AGILES_PLANNING_POKER, new Referencia('https://www.estratecno.com/blog/planning-poker-como-utilizar-la-tecnica-de-estimacion-agil.html', 'Planning Poker y la estimación agil', AGILES_KEY, 'Planning Poker', '', '2024/08/19')],
    [Keys.AGILES_MANIFEST_AGIL, new Referencia('https://agilemanifesto.org/iso/es/manifesto.html', 'Manifiesto Agil', AGILES_KEY, 'Manifiesto Agil')],
    ['principlesAgile', new Referencia('https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/', 'Principios del agilismo', AGILES_KEY, 'Principios')],
    //['spike', new Referencia('https://samuelcasanova.com/2021/09/spike-que-es/', 'Spike', AGILES_KEY, 'Spike')],
    [Keys.AGILES_SPIKE, new Referencia('https://www.scrumio.com/blog/que-es-un-spike/', 'Spike', AGILES_KEY, 'Spike', '', '2024/05/01')],
    //['deming', new Referencia('https://www.beetrack.com/es/blog/ciclo-de-deming-etapas-ejemplos', 'Ciclo de Deming', AGILES_KEY, 'Ciclo de Deming')],
    [Keys.AGILES_DEMING, new Referencia('https://www.eurofins-environment.es/es/el-ciclo-deming-que-consiste-y-como-ayuda-gestion-procesos/', 'Ciclo de Deming', AGILES_KEY, 'Ciclo de Deming', '2023/01/06', '2024/05/01')],
    [Keys.AGILES_ESTIMATION_LAWS, new Referencia('https://www.javiergarzas.com/2023/07/descifrando-las-leyes-de-la-estimacion-agil.html', 'Leyes de estimación agil', AGILES_KEY, 'Estimaciones', '2023/12/08')],
    ['requisitosAgiles', new Referencia('https://www.javiergarzas.com/2019/12/los-requisitos-nunca-se-entienden-y-el-usuario-sabe-lo-que-quiere-cuando-lo-ve-funcionando.html', 'Entender los Requisitos', AGILES_KEY, 'Requisitos', '2024/03/10')],
    [Keys.AGILES_OUTPUT_AND_OUTCOME, new Referencia('https://www.linkedin.com/pulse/impact-vs-output-outcome-t%C3%A9cnicas-para-outcomes-guzm%C3%A1n-/', 'Output & Outcome', AGILES_KEY, 'Impacto y entrega de valor', '2024/05/25')],
    [Keys.AGILES_PRIORITIZATION, new Referencia('https://www.javiergarzas.com/2023/10/las-3-matrices-de-priorizacion-agil.html', 'Priorización', AGILES_KEY, 'Priorización', '2024/08/19')],
    [Keys.AGILES_STAR, new Referencia('https://www.deel.com/es/blog/que-es-metodo-star-como-usarlo/', 'Metodo STAR', AGILES_KEY, 'STAR', '2025/01/08').addRelatedItem(Keys.PEOPLE_PEOPLE_AND_PROCESS)],
]);

export const ANALISIS_KEY = 'Analisis';
export const ANALISIS_REF = new Map<string, Referencia>([
    [Keys.ANALISIS_COMPORTAMIENTO, new Referencia('https://es.wikipedia.org/wiki/Modelo_de_comportamiento_(inform%C3%A1tica)', 'Comportamiento del sistema', ANALISIS_KEY, 'Comportamiento', '', '2025/03/29').addRelatedItems(Keys.META_ESTRUCTURAS_MAQUINA_ESTADOS, Keys.ESTRATEGIAS_DESARROLLO_BDD)],
    [Keys.ANALISIS_ANALISIS_DOMAIN, new Referencia('https://www.redalyc.org/jatsRepo/4768/476862530003/html/index.html', 'Analisis de Dominio', ANALISIS_KEY, 'Analisis de Dominio')],
    ['case', new Referencia('https://www.tutorialspoint.com/es/software_engineering/case_tools_overview.htm', 'Herramientas Case', ANALISIS_KEY, 'Herramientas CASE')],
    ['divide', new Referencia('https://es.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms', 'Divide y Venceras', ANALISIS_KEY, 'Divide y venceras')],
    ['diseño', new Referencia('https://www.bravent.net/la-importancia-de-un-buen-diseno-del-software/', 'Ventajas de un buen diseño', ANALISIS_KEY, 'Un buen diseño')],
    ['crc', new Referencia('https://medium.com/@marcosrrg9813/tarjetas-crc-clase-responsabilidad-colaborador-81924cec3af0', 'Tarjetas Clase-Responsabilidad-Colaborador', ANALISIS_KEY, 'Tarjetas CRC')],
    //['avestruz', new Referencia('https://geeks.ms/gvelez/2009/09/28/el-algoritmo-del-avestruz-en-sharepoint/', 'Algoritmo del Avestruz', ANALISIS_KEY, 'Avestruz')],
    [Keys.ANALISIS_AVESTRUZ, new Referencia('https://www.baeldung.com/cs/ostrich-algorithm', 'Algoritmo del Avestruz', ANALISIS_KEY, 'Avestruz', '', '2025/01/18')],
    [Keys.ANALISIS_MODEL_DOMAIN, new Referencia('https://es.stackoverflow.com/questions/102490/que-es-el-modelo-de-dominio-en-dise%C3%B1o-de-software', 'Modelo de Dominio', ANALISIS_KEY, 'Modelo de dominio', '', '2024/12/22').addRelatedItem(Keys.ESTRATEGIAS_DESARROLLO_DDD)],
    ['timeComplexityBigO', new Referencia('https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/', 'Big O Notación', ANALISIS_KEY, 'Big O Notación', '2022/12/30')],
    //['kpis', new Referencia('https://www.ibm.com/garage/method/practices/learn/kpis-measure-guide-progress/', 'KPIs', ANALISIS_KEY, 'KPI', '2022/12/30')],
    [Keys.ANALISIS_KPI_OKR, new Referencia('https://asana.com/es/resources/okr-vs-kpi', 'KPI & OKR', ANALISIS_KEY, 'KPI & OKR', '2022/12/30', '2025/01/18').addRelatedItems(Keys.AGILES_DEMING, Keys.CALIDAD_METRICS_SOFTWARE)],
    [Keys.ANALISIS_MANIFEST_REACTIVE, new Referencia('https://www.reactivemanifesto.org/es', 'Manifiesto Reactivo', ANALISIS_KEY, 'Manifiesto Reactivo', '2023/02/19', '2024/12/10')],
    ['declineDesign', new Referencia('https://uxdesign.cc/the-decline-in-design-thinking-8fd0145fb4d2', 'Declive del diseño', ANALISIS_KEY, 'Declive del Diseño', '2023/07/23')],
    ['opinionated-no', new Referencia('https://www.baeldung.com/cs/opinionated-software-design', 'Diseño con & sin opiniones', ANALISIS_KEY, 'Diseño con/sin opiniones', '2023/11/11')],
    ['codingEasyPart', new Referencia('https://swizec.com/blog/coding-is-the-easy-part/', 'Codificar es la parte facil', ANALISIS_KEY, 'Codificar es facil', '2023/12/11')],
    [Keys.ANALISIS_ALGORITHMS, new Referencia('https://medium.com/@zgokceaynaci/a-journey-through-the-world-of-algorithms-554bfffcee97', 'Algoritmos', ANALISIS_KEY, 'Algoritmos', '2024/07/27').addRelatedItems(Keys.COMPILACION_GRAFOS, Keys.META_CARACTERISTICAS_BACKTRACKING)],
    [Keys.ANALISIS_QUEUES_SYSTEM_DESIGN, new Referencia('https://levelup.gitconnected.com/message-queues-in-system-design-0440a1221023', 'Message Queues in System Design', ANALISIS_KEY, 'Message Queues', '2024/09/01').addRelatedItems(Keys.META_ESTRUCTURAS_ESTRUCTURAS_DATOS_2, Keys.APIS_REST_VS_MESSAGING)],
    [Keys.ANALISIS_HIGH_LEVEL_VS_LOW_LEVEL, new Referencia('https://www.baeldung.com/cs/hld-lld', 'High Level Vs Low Level', ANALISIS_KEY, 'High Level Vs Low Level', '2024/09/20').addRelatedItem(Keys.ESTRATEGIAS_DESARROLLO_SLDC).addRelatedItems(Keys.ESTRATEGIAS_DESARROLLO_DDD, Keys.PERSISTENCY_ERD)],
    [Keys.ANALISIS_SYSTEM_DESIGN_CONCEPTS, new Referencia('https://www.linkedin.com/posts/brijpandeyji_top-12-system-design-concepts-every-developer-activity-7238729739065069568-h1t6/', 'System Design Concepts', ANALISIS_KEY, 'System Design Concepts', '2024/09/29')],
    [Keys.ANALISIS_SINGLE_POINT_OF_FAILURE, new Referencia('https://levelup.gitconnected.com/single-point-of-failure-spof-in-system-design-c8bbac5af993', 'Single Point Of Failure', ANALISIS_KEY, 'SPOF', '2024/12/07')],
    [Keys.ANALISIS_DOMAIN_EVENTS, new Referencia('https://medium.com/yield-studio/ddd-do-not-leak-your-domain-events-456919346273', 'Domain Events', ANALISIS_KEY, 'Domain Events', '2025/02/28').addRelatedItems(Keys.POO_COUPLING_AND_COHESION, Keys.ESTRATEGIAS_DESARROLLO_DDD)],
    [Keys.ANALISIS_LIGHT_EVENTS_VS_RICH_EVENTS, new Referencia('https://theburningmonk.com/2024/11/when-to-use-light-events-vs-rich-events-in-event-driven-architectures/', 'Light Events VS Rich Events', ANALISIS_KEY, 'Light/Rich Events', '2024/12/08').addRelatedItems(Keys.ARQUITECTURAS_EVENT_DRIVEN, Keys.PERSISTENCY_NORMALIZATION, Keys.ESTRATEGIAS_DESARROLLO_DDD)],
    [Keys.ANALISIS_SYSTEM_DESIGN_I, new Referencia('https://newsletter.systemdesigncodex.com/p/how-to-do-well-in-system-design-interviews', 'System Design I', ANALISIS_KEY, 'System Design I', '2025/02/16').addRelatedItems(Keys.REQUISITOS_FUNCIONALES, Keys.REQUISITOS_NO_FUNCIONALES, Keys.PERSISTENCY_ADVANCED_SQL_NO_SQL, Keys.WEB_USER_XPERIENCE, Keys.PERSISTENCY_ADVANCED_DENORMALIZATION, Keys.PERSISTENCY_NORMALIZATION)],
    [Keys.ANALISIS_SYSTEM_DESIGN_II, new Referencia('https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction', 'System Design II', ANALISIS_KEY, 'System Design II', '2025/02/16').addRelatedItems(Keys.APIS_API_FIRST, Keys.CONTENEDORES_ORCHESTRATION, Keys.CD_CI_IAS_CODE, Keys.HARDWARE_ESCALAMIENTO, Keys.META_CARACTERISTICAS_CACHE, Keys.NUBE_PACELC)],
    [Keys.ANALISIS_DELIVERY_GUARANTED, new Referencia('https://docs.confluent.io/kafka/design/delivery-semantics.html', 'Delivery Guaranted', ANALISIS_KEY, 'Delivery Guaranted', '2025/03/21').addRelatedItems(Keys.MICROSERVICES_PRODUCER_CONSUMER_PROBLEM, Keys.APIS_IDEMPOTENCIA)],
    [Keys.ANALISIS_SYSTEM_THINKING, new Referencia('https://medium.com/nerd-for-tech/part-2-applying-systems-thinking-to-software-development-e98cbd195a83', 'Pensamiento Sistemico en el Diseño', ANALISIS_KEY, 'Pensamiento Sistemico', '2025/03/29').addRelatedItems(Keys.APIS_REST_VS_MESSAGING, Keys. ARQUITECTURAS_EVENT_DRIVEN, Keys.LEYES_LEHMAN, Keys.LEYES_CONWAY, Keys.ESTRATEGIAS_DESARROLLO_DDD, Keys.VERSIONAMIENTO_BACKWARD_AND_BREAKING_CHANGES, Keys.HARDWARE_ESCALAMIENTO)],
]);

export const ARQUITECTURAS_KEY = 'Arquitecturas';
export const ARQUITECTURAS_REF = new Map<string, Referencia>([
    //['definicion', new Referencia('https://cgrw01.cgr.go.cr/rup/RUP.es/SmallProjects/core.base_rup/guidances/concepts/software_architecture_4269A354.html', '¿ Que es una arquitectura ?', ARQUITECTURAS_KEY, 'Definición')],
    [Keys.ARQUITECTURAS_DEFINICION, new Referencia('https://www.gluo.mx/blog/arquitectura-de-software-que-es-y-que-tipos-hay', '¿ Que es una arquitectura ?', ARQUITECTURAS_KEY, 'Definición', '', '2024/06/17')],
    ['inicioArquitectura', new Referencia('https://sg.com.mx/revista/27/arquitectura-software', 'Etapas & Roles', ARQUITECTURAS_KEY, 'Etapas & Roles')],
    [Keys.ARQUITECTURAS_IMPORTANT_CONCEPTS, new Referencia('https://www.freecodecamp.org/news/an-introduction-to-software-architecture-patterns/', 'Conceptos de Arquitecturas', ARQUITECTURAS_KEY, 'Conceptos', '', '2025/03/06')],
    ['principiosArquitecturas', new Referencia('https://www.genbeta.com/desarrollo/principios-de-una-arquitectura-limpia-mantenible-y-testeable', 'Principios de las arquitecturas', ARQUITECTURAS_KEY, 'Principios')],
    [Keys.ARQUITECTURAS_CLEAN, new Referencia('https://medium.com/@diego.coder/introducci%C3%B3n-a-las-clean-architectures-723fe9fe17fa', 'Arquitecturas Limpias', ARQUITECTURAS_KEY, 'Limpias')],
    //[Keys.ARQUITECTURAS_CAPAS, new Referencia('https://geeks.ms/jkpelaez/2009/05/30/arquitectura-basada-en-capas/', 'Arquitectura a Capas', ARQUITECTURAS_KEY, 'Capas')],
    //[Keys.ARQUITECTURAS_CAPAS, new Referencia('https://blog.hubspot.es/website/que-es-arquitectura-en-capas', 'Arquitectura a Capas', ARQUITECTURAS_KEY, 'Capas', '', '2025/01/12')],
    [Keys.ARQUITECTURAS_CAPAS, new Referencia('https://learn.microsoft.com/es-es/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures', 'Arquitectura a Capas', ARQUITECTURAS_KEY, 'Capas', '2025/01/12', '2025/03/26').addRelatedItem(Keys.PATRONES_PERSISTENCE_PATTERNS)],
    ['cliente', new Referencia('https://desarrolloweb.com/articulos/arquitectura-cliente-servidor.html', 'Arquitectura Cliente-Servidor', ARQUITECTURAS_KEY, 'Cliente Servidor')],
    [Keys.ARQUITECTURAS_HEXAGONAL, new Referencia('https://medium.com/@edusalguero/arquitectura-hexagonal-59834bb44b7f', 'Hexagonal', ARQUITECTURAS_KEY, 'Hexagonal', '', '2024/11/24').addRelatedItem(Keys.ESTRATEGIAS_DESARROLLO_DDD)],
    ['noHexagonal', new Referencia('https://javiervelezreyes.com/ni-nueva-ni-arquitectura-ni-hexagonal/', 'Ni Nueva, Ni Hexagonal', ARQUITECTURAS_KEY, 'Ni Nueva, Ni hexagonal')],
    [Keys.ARQUITECTURAS_MVC, new Referencia('https://developer.mozilla.org/es/docs/Glossary/MVC', 'Modelo-Vista-Controlador', ARQUITECTURAS_KEY, 'MVC', '2025/03/06')],
    //['mvpMvc', new Referencia('https://www.develapps.com/es/noticias/modelo-vista-presentador-mvp-en-android', 'Modelo-Vista-Presentador', ARQUITECTURAS_KEY, 'MVP')],
    [Keys.ARQUITECTURAS_MVP_MVC, new Referencia('https://keepcoding.io/blog/que-es-mvc-mvp-y-mvvm-en-android/', 'Modelo-Vista-Presentador', ARQUITECTURAS_KEY, 'MVP', '', '2024/06/17').addRelatedItem(Keys.META_CARACTERISTICAS_BOILER_PLATE)],
    ['otrasArquitecturas', new Referencia('https://medium.com/@maniakhitoccori/los-10-patrones-comunes-de-arquitectura-de-software-d8b9047edf0b', 'Otras Arquitecturas', ARQUITECTURAS_KEY, 'Otras (patrones)')],
    [Keys.ARQUITECTURAS_MONOLITOS, new Referencia('https://www.paradigmadigital.com/techbiz/microservicios-vs-microlitos-vs-monolitos-ventajas-desventajas/', 'Monolitos VS Microservicios', ARQUITECTURAS_KEY, 'Monolitos')],
    ['stylesArchitecture1', new Referencia('https://hdnmetatech.com/news/our-press/detail/introduction-to-architecture-styles-and-patterns-as-a-blueprint-for-designing-a-system', 'Estilos #1', ARQUITECTURAS_KEY, 'Estilos & Patrones #1')],
    ['stylesArchitecture2', new Referencia('https://hdnmetatech.com/news/our-press/detail/introduction-to-architecture-styles-and-patterns-as-a-blueprint-for-designing-a-system', 'Estilos #2', ARQUITECTURAS_KEY, 'Estilos & Patrones #2')],
    ['monolitosModulares', new Referencia('https://levelup.gitconnected.com/architecture-style-modulith-vs-microservices-90c7c75713db', 'Monolitos Modulares', ARQUITECTURAS_KEY, 'Monolitos Modulares')],
    [Keys.ARQUITECTURAS_DESCOMPOSICION_MODULAR, new Referencia('https://ittgweb.wordpress.com/2016/05/29/descomposicion-modular/', 'Descomposición Modular', ARQUITECTURAS_KEY, 'Descomposición', '2024/05/25')],
    [Keys.ARQUITECTURAS_EVENT_DRIVEN, new Referencia('https://medium.com/@alxkm/java-event-driven-architecture-dc456d324ba5', 'Basada en Eventos', ARQUITECTURAS_KEY, 'Basada en Eventos', '2024/06/17').addRelatedItem(Keys.NUBE_OBSERVABILIDAD)],
    [Keys.ARQUITECTURAS_LAYERS_SOFTWARE, new Referencia('https://www.linkedin.com/posts/brijpandeyji_building-software-at-scale-requires-a-clear-activity-7276459295502655488-dLTk/', 'Capas del Software', ARQUITECTURAS_KEY, 'Capas del Software', '2024/12/22').addRelatedItems(Keys.APIS_REST_VS_MESSAGING, Keys.PERSISTENCY_DBMS, Keys.WEB_USER_INTERFACE, Keys.CONTENEDORES_DOCKER, Keys.ANALISIS_MODEL_DOMAIN)],
    [Keys.ARQUITECTURAS_EXPERIMENTATION, new Referencia('https://www.infoq.com/articles/architecture-experimentation/', 'Minima Arquitectura Viable', ARQUITECTURAS_KEY, 'MVA', '2025/01/12').addRelatedItems(Keys.ANALISIS_DATA_MVP, Keys.CD_CI_DEPLOYMENT_PATTERNS, Keys.NEURO_MARKETING_WHAT_IS)],
    [Keys.ARQUITECTURAS_HOW_TO_CHOOSE_IT, new Referencia('https://appmaster.io/es/blog/como-elegir-la-arquitectura-de-software', '¿ Como escoger una Arquitectura ?', ARQUITECTURAS_KEY, '¿ Como Escogerla ?', '2025/03/25').addRelatedItems(Keys.HARDWARE_ESCALAMIENTO, Keys.MICROSERVICES_FUNDAMENTALS, Keys.NUBE_NATIVE)],
]);

export const BUENAS_PRACTICAS_KEY = 'Buenas-Practicas';
export const BUENAS_PRACTICAS_REF = new Map<string, Referencia>([
    ['practicas1', new Referencia('https://www.tithink.com/es/2018/06/13/12-buenas-practicas-para-el-desarrollo-software/', 'Buenas practicas parte #1', BUENAS_PRACTICAS_KEY, 'Buenas Practicas #1')],
    ['practicas2', new Referencia('https://sg.com.mx/revista/mejores-pr%C3%A1cticas-para-el-desarrollo-software', 'Buenas practicas parte #2', BUENAS_PRACTICAS_KEY, 'Buenas Practicas #2')],
    ['practicas3', new Referencia('https://velneo.es/15-buenas-practicas-proyectos-desarrollo-software/', 'Buenas practicas parte #3', BUENAS_PRACTICAS_KEY, 'Buenas Practicas #3')],
    //['practicas4', new Referencia('http://www.noussintelligence.com/desarrollo-software-buenas-practicas-recomendaciones/', 'Buenas practicas parte #4', BUENAS_PRACTICAS_KEY, 'Parte #4')],
    [Keys.BUENAS_PRACTICAS_DEMETER, new Referencia('https://www.adictosaltrabajo.com/2015/07/24/ley-de-demeter/', 'Ley de Demeter', BUENAS_PRACTICAS_KEY, 'Ley de Demeter')],
    //['complejidad', new Referencia('http://oscarmoreno.com/la-complejidad-ciclomatica/', 'Complejidad Ciclomatica', BUENAS_PRACTICAS_KEY, 'Complejidad')],
    ['complejidad', new Referencia('https://mpijierro.medium.com/complejidad-ciclom%C3%A1tica-y-como-reducirla-7374c215f666', 'Complejidad Ciclomatica', BUENAS_PRACTICAS_KEY, 'Complejidad')],
    [Keys.BUENAS_PRACTICAS_LOGGING, new Referencia('https://itnext.io/logger-or-debugger-which-one-to-choose-3f6a72200b15', 'Logging VS Debugging', BUENAS_PRACTICAS_KEY, 'Logs VS Debug')],
    [Keys.BUENAS_PRACTICAS_DEBUGGING, new Referencia('https://www.freecodecamp.org/news/what-is-debugging-how-to-debug-code/', 'Como Depurar', BUENAS_PRACTICAS_KEY, 'Debugging', '', '2025/02/23')],
    [Keys.BUENAS_PRACTICAS_COMPLEJIDAD_COGNITIVA, new Referencia('https://enmilocalfunciona.io/complejidad-cognitiva/', 'Complejidad Cognitiva', BUENAS_PRACTICAS_KEY, 'Complejidad Cognitiva')],
    [Keys.BUENAS_PRACTICAS_COMPLEJIDAD_ALGORITMICA, new Referencia('https://medium.com/@joseguillermo_/qu%C3%A9-es-la-complejidad-algor%C3%ADtmica-y-con-qu%C3%A9-se-come-2638e7fd9e8c', 'Complejidad Algoritmica', BUENAS_PRACTICAS_KEY, 'Complejidad Algoritmica')],
    ['estandaresNombramiento', new Referencia('https://adrianalonso.es/cajon-desatre/convencion-de-nombres-desde-el-camelcase-hasta-el-kebab-case/', 'Estandares de nombramiento', BUENAS_PRACTICAS_KEY, 'Nombramiento')],
    ['estatico', new Referencia('https://www.welivesecurity.com/la-es/2021/01/18/analisis-estatico-codigo-fuente-orientado-a-seguridad/', 'Analisis de codigo estatico', BUENAS_PRACTICAS_KEY, 'Analisis de codigo')],
    [Keys.BUENAS_PRACTICAS_GUARD_CLAUSES, new Referencia('https://artansoft.com/2017/01/guard-clauses-definicion-beneficios/', 'Guard clauses', BUENAS_PRACTICAS_KEY, 'Guard Clauses')],
    ['semanticConstructors', new Referencia('https://medium.com/all-you-need-is-clean-code/constructores-sem%C3%A1nticos-ae7ac70b23aa', 'Constructores Semanticos', BUENAS_PRACTICAS_KEY, 'Constructores Semanticos')],
    [Keys.BUENAS_PRACTICAS_EXCEPTIONS, new Referencia('https://javachallengers.com/mistakes-when-using-exceptions/', 'Manejo de Excepciones', BUENAS_PRACTICAS_KEY, 'Manejo de Excepciones')],
    ['goodHabits', new Referencia('https://vadimkravcenko.com/shorts/habits-of-great-software-engineers/', 'Buenos habitos de un desarrollador', BUENAS_PRACTICAS_KEY, 'Buenos habitos')],
    [Keys.BUENAS_PRACTICAS_FUNCTIONS, new Referencia('https://medium.com/@akineralkan/clean-code-notes-chapter-3-functions-de4a30191300', 'Buenas practicas, Funciones', BUENAS_PRACTICAS_KEY, 'Funciones', '2024/10/18').addRelatedItem(Keys.PATRONES_CQRS)]
]);

export const CALIDAD_KEY = 'Calidad';
export const CALIDAD_REF = new Map<string, Referencia>([
    [Keys.CALIDAD_METRICS_SOFTWARE, new Referencia('https://www.computerweekly.com/es/consejo/23-metricas-de-desarrollo-de-software-que-monitorear-hoy', 'Metricas del Software', CALIDAD_KEY, 'Metricas #1')],
    ['metricasEnCodigo', new Referencia('https://blog.desafiolatam.com/metricas-de-calidad-de-software', 'Metricas del codigo', CALIDAD_KEY, 'Metricas #2')],
    [Keys.CALIDAD_CLEAN_CODE, new Referencia('https://medium.com/@tijuhasz/in-one-of-the-most-groundbreaking-practical-books-on-software-development-clean-code-right-in-3ef3006c68f2', 'Clean Code & Code rot', CALIDAD_KEY, 'Clean Code')],
    ['artesanos', new Referencia('https://manifesto.softwarecraftsmanship.org/#/es', 'Artesanos de software', CALIDAD_KEY, 'Artesanos')],
    ['costOfQuality', new Referencia('https://blog.softexpert.com/es/cuales-son-los-costos-de-la-calidad', 'Costo de la calidad', CALIDAD_KEY, 'Costo de la calidad')],
    ['qualityGates', new Referencia('https://docs.sonarqube.org/latest/user-guide/quality-gates/', 'Politicas de calidad', CALIDAD_KEY, 'Politicas de calidad')],
    ['qualityMetrics', new Referencia('https://docs.sonarqube.org/latest/user-guide/metric-definitions/', 'Definición de Metricas', CALIDAD_KEY, 'Metricas de calidad')],
    ['codeReviews', new Referencia('https://www.atlassian.com/blog/add-ons/code-review-best-practices', 'Revisiones de codigo', CALIDAD_KEY, 'Revisiones')],
    [Keys.CALIDAD_LINTING, new Referencia('https://www.freecodecamp.org/espanol/news/que-es-linting-y-eslint/', 'Linting', CALIDAD_KEY, 'Linting', '', '2024/12/26')],
    ['analystQA', new Referencia('https://ed.team/blog/que-es-y-que-hace-un-analista-qa', 'Analista de QA', CALIDAD_KEY, 'Analista de QA')],
    ['codeReviewPyramid', new Referencia('https://www.morling.dev/blog/the-code-review-pyramid/', 'Piramide del CodeReview', CALIDAD_KEY, 'Piramide del Code Review')],
    ['doraAndSpaceMetrics', new Referencia('https://echometerapp.com/es/dora-and-space-metrics/', 'Metricas DORA & SPACE', CALIDAD_KEY, 'DORA & SPACE')],
    ['goodCodingPrinciples', new Referencia('https://blog.bytebytego.com/p/ep97-10-good-coding-principles-to#%C2%A7good-coding-principles-to-improve-code-quality', 'Principios para una buena codificación', CALIDAD_KEY, 'Good Coding Principles')],
    [Keys.CALIDAD_CODE_ROT, new Referencia('https://betterprogramming.pub/code-rot-is-a-process-decision-d4b37cf1e26b', 'Control de la Degradación', CALIDAD_KEY, 'Degradación')],
    [Keys.CALIDAD_IF_ELSE, new Referencia('https://medium.com/@akintopbas96/refactoring-java-spring-boot-code-eliminating-if-else-statements-for-cleaner-extensible-logic-f1314cf9724e', 'Como Reducir los if/else', CALIDAD_KEY, 'Reducción de if/else', '2024/08/11').addRelatedItems(Keys.REFACTORING_CLEAN_CODE, Keys.BUENAS_PRACTICAS_COMPLEJIDAD_COGNITIVA, Keys.BUENAS_PRACTICAS_GUARD_CLAUSES)],
]);

export const COMPILACION_KEY = 'Compilacion';
export const COMPILACION_REF = new Map<string, Referencia>([
    [Keys.COMPILACION_COMPILACION, new Referencia('https://developer.mozilla.org/es/docs/Glossary/Compile', '¿ Que es compilar ?', COMPILACION_KEY, '¿ Que es Compilar ?', '', '2025/03/19')],
    ['nivel', new Referencia('https://desarrolloweb.com/articulos/2358.php', 'Niveles de compilación', COMPILACION_KEY, 'Niveles')],
    ['interprete', new Referencia('https://yosoy.dev/diferencia-entre-lenguajes-compilados-e-interpretados/', 'Tipos de lenguajes por ejecución', COMPILACION_KEY, 'Ejecución')],
    [Keys.COMPILACION_TRANSPILACION, new Referencia('https://ingenieriadesoftware.es/diferencia-transpilacion-compilacion/', '¿ Que es la transpilación ?', COMPILACION_KEY, 'Transpilación', '', '2025/02/09').addRelatedItem(Keys.VERSIONAMIENTO_BACKWARD_AND_BREAKING_CHANGES)],
    ['azucarSintactico', new Referencia('https://es.wikipedia.org/wiki/Az%C3%BAcar_sint%C3%A1ctico', 'Azucar Sintactico', COMPILACION_KEY, 'Azucar Sintactico')],
    ['coercion', new Referencia('https://developer.mozilla.org/es/docs/Glossary/Type_coercion', 'Coerción', COMPILACION_KEY, 'Coerción')],
    ['ofuscacion', new Referencia('https://www.azulweb.net/ofuscacion-de-codigo-antipatron-o-buena-practica/', 'Ofuscación', COMPILACION_KEY, 'Ofuscación')],
    ['treeShaking', new Referencia('https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking', 'TreeShaking', COMPILACION_KEY, 'Tree Shaking')],
    [Keys.COMPILACION_GRAFOS, new Referencia('https://www.grapheverywhere.com/grafos-que-son-tipos-orden-y-herramientas-de-visualizacion/', 'Grafos', COMPILACION_KEY, 'Grafos')],
    //['compilacionAnticipada', new Referencia('https://hmong.es/wiki/Ahead-of-time_compilation', 'Compilación AOT', COMPILACION_KEY, 'Compilación anticipada')],
    [Keys.COMPILACION_AOT, new Referencia('https://www.ibm.com/docs/es/sdk-java-technology/8?topic=reference-aot-compiler', 'Compilación AOT', COMPILACION_KEY, 'Compilación anticipada', '', '2024/11/23')],
    //['duckTyping', new Referencia('https://towardsdatascience.com/duck-typing-python-7aeac97e11f8', 'Duck Typing', COMPILACION_KEY, 'Duck Typing')],
    [Keys.COMPILACION_DUCK_TYPING, new Referencia('https://devopedia.org/duck-typing', 'Duck Typing', COMPILACION_KEY, 'Duck Typing', '', '2024/11/23')],
    //['sdkVsApi', new Referencia('https://geekflare.com/es/sdk-and-api-comparison/', 'SDK vs API', COMPILACION_KEY, 'SDK vs API')],
    [Keys.COMPILACION_SDK_VS_API, new Referencia('https://www.g2.com/articles/sdk', 'SDK vs API', COMPILACION_KEY, 'SDK vs API', '', '2025/01/06')],
    [Keys.COMPILACION_CASTING, new Referencia('https://www.w3schools.com/java/java_type_casting.asp', 'Casting', COMPILACION_KEY, 'Casteo de Datos')],
    [Keys.COMPILACION_VERBOSITY, new Referencia('https://softwareengineering.stackexchange.com/questions/141175/why-is-verbosity-bad-for-a-programming-language', 'Verbosidad', COMPILACION_KEY, 'Verbosidad', '2023/03/31')],
    ['tipoLenguajeProposito', new Referencia('https://ed.team/blog/como-se-clasifican-los-lenguajes-de-programacion', 'Tipos de lenguajes por proposito', COMPILACION_KEY, 'Proposito', '2023/11/09')],
    [Keys.COMPILACION_AUTOMATAS, new Referencia('https://medium.com/@maniakhitoccori/qu%C3%A9-es-un-aut%C3%B3mata-fbf309138755', 'Automatas', COMPILACION_KEY, 'Automatas', '2024/02/19')],
    [Keys.COMPILACION_STRUCTURE_COMPILATOR, new Referencia('https://vicente-aguilera-perez.medium.com/estructura-general-de-un-compilador-df97892f91c3', 'Estructura de un compilador I', COMPILACION_KEY, 'Estructura general I', '2024/02/28')],
    [Keys.COMPILACION_ELEMENTS_COMPILATOR, new Referencia('https://vicente-aguilera-perez.medium.com/estructura-general-de-un-compilador-df97892f91c3', 'Estructura de un compilador II', COMPILACION_KEY, 'Estructura general II', '2024/02/28')],
    [Keys.COMPILACION_STREAMS, new Referencia('https://medium.com/javarevisited/best-practices-for-using-java-stream-f0f7585f13ba', 'Streams', COMPILACION_KEY, 'Streams', '2024/06/29').addRelatedItem(Keys.POO_INMUTABILITY)],
    [Keys.COMPILACION_DECOMPILE, new Referencia('https://www.techtarget.com/whatis/definition/decompile', 'Descompilar', COMPILACION_KEY, 'Descompilar', '2024/07/21').addRelatedItem(Keys.ANALISIS_DATA_REVERSE_ENGINEERING)],
    [Keys.COMPILACION_INSTRUMENTS, new Referencia('https://foojay.io/today/who-instruments-the-instrumenters/', 'Instrumentos', COMPILACION_KEY, 'Instrumentos', '2024/08/18').addRelatedItems(Keys.FRAMEWORKS_FRAMEWORKS, Keys.TESTING_MOCKS)],
    [Keys.COMPILACION_OBJECT_CREATION, new Referencia('https://medium.com/technology-hits/minimizing-object-creation-for-high-performance-java-applications-553f9c9278c1', 'Creacion de Objetos', COMPILACION_KEY, 'Objetos', '2024/11/23').addRelatedItem(Keys.PATRONES_DESGLOSE_GOF)],
    [Keys.COMPILACION_ERRORS_AND_EXCEPTIONS, new Referencia('https://medium.com/javarevisited/because-i-didnt-know-the-difference-between-exception-and-error-in-java-i-failed-the-interview-b44b07823f72', 'Errors & Exceptions', COMPILACION_KEY, 'Errors & Exceptions', '2025/01/06').addRelatedItems(Keys.META_CARACTERISTICAS_EXCEPTIONS, Keys.BUENAS_PRACTICAS_EXCEPTIONS)],
]);

export const CONOCIMIENTO_EMPIRICO_KEY = 'Empirico';
export const CONOCIMIENTO_EMPIRICO = new Map<string, Referencia>([
    ['cristales', new Referencia('https://lamenteesmaravillosa.com/la-teoria-las-ventanas-rotas/', 'Efecto de los cristales rotos', CONOCIMIENTO_EMPIRICO_KEY, 'Cristales rotos')],
    ['quo', new Referencia('https://psicologiaymente.com/social/sesgo-statu-quo/', 'Status Quo', CONOCIMIENTO_EMPIRICO_KEY, 'Status Quo')],
    [Keys.CONOCIMIENTOS_EMPIRICOS_COSTO_HUNDIDO, new Referencia('https://psicologiaymente.com/psicologia/falacia-costo-hundido/', 'Falacia del costo hundido', CONOCIMIENTO_EMPIRICO_KEY, 'Costo Hundido')],
    ['tiposProgramadores', new Referencia('https://stevenbenner.com/2010/07/the-5-types-of-programmers/', 'Tipos de programadores', CONOCIMIENTO_EMPIRICO_KEY, 'Programadores')],
    ['sesgos', new Referencia('https://www.brainvestigations.com/neurociencia/sesgo-cognitivo-negocios/', 'Algunos Sesgos cognitivos', CONOCIMIENTO_EMPIRICO_KEY, 'Sesgo Cognitivo')],
    ['prejuicios', new Referencia('https://www.boream.com/insights/sesgos-cognitivos-y-prejuicios-en-los-procesos-de-diseno-de-interfaz-como-combatirlos', 'Prejuicios', CONOCIMIENTO_EMPIRICO_KEY, 'Prejuicios')],
    ['multitarea', new Referencia('https://www.sodexo.es/blog/multitarea-multitasking/', 'Pros y Contras del multitasking', CONOCIMIENTO_EMPIRICO_KEY, 'Multitareas')],
    //['maxwellCurve', new Referencia('https://blog.axosoft.com/the-maxwell-curve-blunder-in-the-name-of-scrum/', 'La curva de Maxwell', CONOCIMIENTO_EMPIRICO_KEY, 'Curva de Maxwell')],
    ['maxwellCurve', new Referencia('https://www.scrumnetwork.com/blog/scrum-no-te-apresures-no-te-detengas', 'La curva de Maxwell', CONOCIMIENTO_EMPIRICO_KEY, 'Curva de Maxwell', '', '2024/04/16')],
    ['dunningKruger', new Referencia('https://www.awenpsicologia.com/efecto-dunning-kruger/', 'Efecto Dunning-Kruger', CONOCIMIENTO_EMPIRICO_KEY, 'Dunning-Kruger')],
    ['reforzamientoSkinner', new Referencia('https://psicologiaymente.com/psicologia/teoria-reforzamiento-skinner', 'Reforzamiento de conductas', CONOCIMIENTO_EMPIRICO_KEY, 'Reforzamiento')],
    ['pastaTheory', new Referencia('https://www.techtarget.com/searchsoftwarequality/tip/Fix-spaghetti-code-and-other-pasta-theory-antipatterns/', 'Teoria de la pasta', CONOCIMIENTO_EMPIRICO_KEY, 'Codigo como pasta')],
    ['thingsThatAreNotTaught', new Referencia('https://vadimkravcenko.com/shorts/things-they-didnt-teach-you/', 'Cosas que no se enseñan', CONOCIMIENTO_EMPIRICO_KEY, 'Cosas que no se enseñan', '2023/02/09')],
    ['boilingFrog', new Referencia('https://www.linkedin.com/pulse/boiling-frog-syndrome-suyash-jaju/', 'Sindrome de la Rana Hervida', CONOCIMIENTO_EMPIRICO_KEY, 'Rana Hervida', '2024/04/16')],
    ['boysScouts', new Referencia('https://www.linkedin.com/pulse/la-regla-de-los-boys-scouts-hugo-raher/', 'Regla de los Boys Scouts', CONOCIMIENTO_EMPIRICO_KEY, 'Boys Scouts', '2024/04/16')],
    ['zeigarnik', new Referencia('https://psicologiaymente.com/psicologia/efecto-zeigarnik', 'Efecto Zeigarnik', CONOCIMIENTO_EMPIRICO_KEY, 'Efecto Zeigarnik', '2024/05/13')],
    [Keys.CONOCIMIENTOS_EMPIRICOS_PAIR_PROGRAMMING, new Referencia('https://stackoverflow.blog/2024/04/03/developers-with-ai-assistants-need-to-follow-the-pair-programming-model', 'Pair Programing con IA', CONOCIMIENTO_EMPIRICO_KEY, 'Pair Programing', '2024/05/26')],
    [Keys.CONOCIMIENTOS_EMPIRICOS_STAGES_COMPETENCE_MODEL, new Referencia('https://www.innovationtraining.org/the-four-stages-of-competence-model/', 'Etapas del modelo de competencia', CONOCIMIENTO_EMPIRICO_KEY, 'Modelo de competencia', '2024/09/09')],
    [Keys.CONOCIMIENTOS_EMPIRICOS_EXPIERENCE_LESSONS, new Referencia('https://dev.jimgrey.net/2024/07/03/lessons-learned-in-35-years-of-making-software/', 'Experiencia', CONOCIMIENTO_EMPIRICO_KEY, 'Experiencia', '2024/10/31')],
]);

export const LEYES_KEY = 'Leyes';
export const LEYES_REF = new Map<string, Referencia>([
    ['balas', new Referencia('https://gist.github.com/esparta/582e43af7b803e0aaf69', 'Balas de Plata', LEYES_KEY, 'Balas de Plata', '', '2024/07/14')],
    [Keys.LEYES_LEHMAN, new Referencia('https://medium.com/@cartontabla/las-leyes-de-lehman-b57c623c3404', 'Leyes de Lehman - Evolución del software', LEYES_KEY, 'Leyes de Lehman', '', '2024/09/22')],
    [Keys.LEYES_CONWAY, new Referencia('https://www.javiergarzas.com/2015/06/conway.html', 'Ley de Conway', LEYES_KEY, 'Ley de Conway').addRelatedItem(Keys.PEOPLE_LANGUAGE_UBICUOS)],
    ['murphy', new Referencia('https://www.caracteristicas.co/ley-de-murphy/', 'Ley de Murphy', LEYES_KEY, 'Ley de Murphy')],
    ['pendulo', new Referencia('http://www.grupocrece.es/blog/Psicolog%C3%ADala-ley-del-pndulo-en-psicologa', 'Ley del pendulo', LEYES_KEY, 'Ley del pendulo')],
    [Keys.LEYES_HYRUM, new Referencia('https://thebootstrappedfounder.com/hyrums-law/', 'Ley de Hyrum', LEYES_KEY, 'Ley de Hyrum')],
    ['leblanc', new Referencia('https://www.quora.com/What-resources-could-I-read-about-Leblancs-law', 'Ley de Leblanc', LEYES_KEY, 'Ley de Leblanc´s')],
    ['leyesInternet', new Referencia('https://www.bbc.com/mundo/noticias-46102313.amp', 'Conductas en internet', LEYES_KEY, 'Leyes En Internet')],
    ['pareto', new Referencia('https://www.becas-santander.com/es/blog/ley-de-pareto.html', 'Ley de Pareto', LEYES_KEY, 'Ley de Pareto', '2023/02/04')],
    ['brooksLaw', new Referencia('https://www.genbeta.com/desarrollo/ley-brooks-desarrollo-software-clasico-profesion-que-habria-hecho-imposible-linux/amp', 'Ley de Brooks', LEYES_KEY, 'Ley de Brooks', '2023/03/24')],
    ['mooreAndWirth', new Referencia('https://blogs.uoc.edu/informatica/la-ley-de-wirth-la-ley-de-moore-inversa-del-software/', 'Ley de Moore & Ley de Wirth', LEYES_KEY, 'Moore & Wirth', '2023/07/04')],
    ['amdahl', new Referencia('https://www.techtarget.com/whatis/definition/Amdahls-law', 'Ley de Amdahls', LEYES_KEY, 'Ley de Amdahls', '2023/08/25')],
    ['gall', new Referencia('https://deviq.com/laws/galls-law', 'Ley de Gall', LEYES_KEY, 'Ley de Gall', '2024/05/13')],
    [Keys.LEYES_KIDLIN, new Referencia('https://www.linkedin.com/pulse/5-leyes-famosas-aplicadas-en-la-pmo-lourdes-medina-pfmp-pmp-pmo-cp-zv4ke/', 'Ley de Kidlin', LEYES_KEY, 'Ley de Kidlin', '2024/07/14').addRelatedItem(Keys.AGILES_DEMING)],
    [Keys.LEYES_GOODHARTS, new Referencia('https://levelup.gitconnected.com/9-laws-that-every-software-developer-should-know-a5518bfef022', 'Ley de Goodhart’s', LEYES_KEY, 'Ley de Goodhart’s', '2024/11/08')],
    [Keys.LEYES_LINUS, new Referencia('https://levelup.gitconnected.com/9-laws-that-every-software-developer-should-know-a5518bfef022', 'Ley de Linus', LEYES_KEY, 'Ley de Linus', '2024/11/09')],
    [Keys.LEYES_HOFSTADTER, new Referencia('https://levelup.gitconnected.com/9-laws-that-every-software-developer-should-know-a5518bfef022', 'Ley de Hofstadter', LEYES_KEY, 'Ley de Hofstadter', '2024/11/10').addRelatedItem(Keys.PEOPLE_GESTION_EXPECTATIVAS)],
]);

export const CONTENEDORES_KEY = 'Contenedores';
export const CONTAINERS = new Map<string, Referencia>([
    //['lxc', new Referencia('https://www.section.io/engineering-education/lxc-vs-docker-what-is-the-difference-and-why-docker-is-better/', 'Linux Containers', CONTENEDORES_KEY, 'Linux Containers')],
    ['lxc', new Referencia('https://earthly.dev/blog/lxc-vs-docker/', 'Linux Containers', CONTENEDORES_KEY, 'Linux Containers', '', '2024/04/06')],
    [Keys.CONTENEDORES_DOCKER, new Referencia('https://www.xataka.com/otros/docker-a-kubernetes-entendiendo-que-contenedores-que-mayores-revoluciones-industria-desarrollo', '¿ Que es Docker ?', CONTENEDORES_KEY, 'Docker')],
    ['images', new Referencia('https://clouding.io/hc/es/articles/360010283060-Trabajando-con-im%C3%A1genes-en-Docker', '¿ Que es una imagen ?', CONTENEDORES_KEY, 'Imagenes')],
    ['containers', new Referencia('https://aulasoftwarelibre.github.io/taller-de-docker/containers/', '¿ Que es un contenedor ?', CONTENEDORES_KEY, 'Contenedores')],
    ['volumes', new Referencia('https://www.josedomingo.org/pledin/2016/05/gestion-del-almacenamiento-en-docker', '¿ Que es un volumen ?', CONTENEDORES_KEY, 'Volumenes')],
    //['network', new Referencia('https://dockertips.com/algo_sobre_redes', 'Manejo de redes en Docker', CONTENEDORES_KEY, 'Redes')],
    [Keys.CONTENEDORES_REDES, new Referencia('https://docs.docker.com/network/', 'Redes en Docker', CONTENEDORES_KEY, 'Redes', '2024/04/06', '2025/03/09')],
    ['file', new Referencia('https://docs.docker.com/develop/develop-images/dockerfile_best-practices/', 'Construcción de imagenes', CONTENEDORES_KEY, 'Docker File')],
    //['compose', new Referencia('https://dockertips.com/utilizando-docker-compose#:~:text=Docker%20Compose%20es%20una%20herramienta%20que%20permite%20simplificar%20el%20uso%20de%20Docker.&text=En%20vez%20de%20utilizar%20Docker,Engine%20a%20realizar%20tareas%2C%20programaticamente', 'Manejo del docker-compose', CONTENEDORES_KEY, 'Docker Compose')],
    [Keys.CONTENEDORES_DOCKER_COMPOSE, new Referencia('https://docs.docker.com/compose/intro/features-uses/', 'Orquestación con Docker Compose', CONTENEDORES_KEY, 'Docker Compose', '2024/04/06', '2025/03/10')],
    ['kubernetes', new Referencia('https://kubernetes.io/es/docs/concepts/overview/what-is-kubernetes/', 'Kubernetes', CONTENEDORES_KEY, 'Kubernetes')],
    [Keys.CONTENEDORES_ORCHESTRATION, new Referencia('https://geekflare.com/container-orchestration-software/', 'Orquestación', CONTENEDORES_KEY, 'Orquestación', '2023/07/07')],
    ['openContainer', new Referencia('https://opencontainers.org/about/overview/', 'Open Container Initiative', CONTENEDORES_KEY, 'Open Container Initiative', '2023/07/16')],
    [Keys.CONTENEDORES_SECURE_ORCHESTRATION, new Referencia('https://levelup.gitconnected.com/docker-vs-podman-a-new-era-in-secure-orchestration-957ea2123098', 'Seguridad en Orquestación', CONTENEDORES_KEY, 'Seguridad', '2024/05/25')],
    [Keys.CONTENEDORES_ARQUITECTURE, new Referencia('https://medium.com/@dmosyan/deep-dive-into-docker-containers-architecture-and-features-530a937f4c87', 'Arquitectura en Docker', CONTENEDORES_KEY, 'Arquitectura', '2024/08/04')],
]);

export const ESTRATEGIAS_DESARROLLO_KEY = 'Estrategias-Desarrollo';
export const ESTRATEGIAS_DESARROLLO_REF = new Map<string, Referencia>([
    [Keys.ESTRATEGIAS_DESARROLLO_DDD, new Referencia('https://github.com/jatubio/5minutos_laravel/wiki/Resumen-sobre-DDD.-Domain-Driven-Design', 'Diseño Orientado a Dominios', ESTRATEGIAS_DESARROLLO_KEY, 'DDD', '', '2025/02/28').addRelatedItem(Keys.ARQUITECTURAS_HEXAGONAL)],
    [Keys.ESTRATEGIAS_DESARROLLO_BDD, new Referencia('https://www.itdo.com/blog/que-es-bdd-behavior-driven-development/', 'Desarrollo Dirigido por Comportamiento', ESTRATEGIAS_DESARROLLO_KEY, 'BDD', '', '2025/02/02').addRelatedItem(Keys.USER_HISTORIES_FORMATS)],
    [Keys.ESTRATEGIAS_DESARROLLO_TDD, new Referencia('https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/', 'Desarrollo Dirigido por Tests', ESTRATEGIAS_DESARROLLO_KEY, 'TDD')],
    ['atdd', new Referencia('https://www.javiergarzas.com/2015/07/que-es-eso-de-atdd.html', 'Desarrollo por pruebas de aceptación', ESTRATEGIAS_DESARROLLO_KEY, 'ATDD')],
    //['analisis', new Referencia('https://www.ubjonline.mx/en-que-consisten-los-analisis-top-down-y-bottom-up/', 'Bottom Up & Top Down', ESTRATEGIAS_DESARROLLO_KEY, 'Enfoques')],
    [Keys.ESTRATEGIAS_DESARROLLO_BOTTOM_UP_AND_TOP_DOWN, new Referencia('https://asana.com/es/resources/top-down-approach', 'Bottom Up & Top Down', ESTRATEGIAS_DESARROLLO_KEY, 'Enfoques', '', '2025/02/02')],
    [Keys.ESTRATEGIAS_DESARROLLO_TLD_TDD, new Referencia('https://medium.com/swlh/tdd-vs-tld-and-what-is-the-minimum-code-coverage-needed-f380181d3400', 'Tests al final del desarrollo', ESTRATEGIAS_DESARROLLO_KEY, 'TLD vs TDD', '', '2025/02/02')],
    ['bduf', new Referencia('https://www.freecodecamp.org/news/the-pros-and-cons-of-big-design-up-front-and-what-i-do-instead-375f00542dec/', 'Big Design Up Front', ESTRATEGIAS_DESARROLLO_KEY, 'BDUF')],
    [Keys.ESTRATEGIAS_DESARROLLO_SCREAMING_DESIGN, new Referencia('https://medium.com/@mubashirhussain29/the-screaming-architecture-story-08750691291f', 'Diseño a gritos', ESTRATEGIAS_DESARROLLO_KEY, 'Gritos', '2024/05/25').addRelatedItem(Keys.META_ESTRUCTURAS_VERTICAL_AND_HORIZONTAL)],
    [Keys.ESTRATEGIAS_DESARROLLO_SLDC, new Referencia('https://www.netguru.com/blog/stages-of-software-development', 'Ciclo de Vida del Desarrollo de Software', ESTRATEGIAS_DESARROLLO_KEY, 'SLDC', '2024/06/29')],
    [Keys.ESTRATEGIAS_DESARROLLO_BFF, new Referencia('https://levelup.gitconnected.com/backend-for-frontend-bff-architecture-64fa9f316a5a', 'Backend For Frontened', ESTRATEGIAS_DESARROLLO_KEY, 'BFF', '2024/10/27').addRelatedItem(Keys.APIS_GATEWAY)],
    [Keys.ESTRATEGIAS_DESARROLLO_DDD_MADURITY, new Referencia('https://medium.com/unil-ci-software-engineering/maturity-model-for-clean-ddd-b55c4b06efcb', 'Madurez de DDD', ESTRATEGIAS_DESARROLLO_KEY, 'Madurez de DDD', '2025/02/02').addRelatedItems(Keys.APIS_MADURITY, Keys.POO_POO_PILARES, Keys.BUENAS_PRACTICAS_DEMETER, Keys.PRINCIPIOS_SOLID, Keys.PEOPLE_LANGUAGE_UBICUOS, Keys.POO_DESIGN_BY_CONTRACT_PARTS, Keys.COMPILACION_ERRORS_AND_EXCEPTIONS)],
]);

export const FRAMEWORKS_KEY = 'Frameworks';
export const FRAMEWORKS_REF = new Map<string, Referencia>([
    [Keys.FRAMEWORKS_FRAMEWORKS, new Referencia('https://neoattack.com/neowiki/framework/', '¿ Que es un framework ?', FRAMEWORKS_KEY, '¿ Que es un framework ?')],
    ['ioc', new Referencia('https://medium.com/all-you-need-is-clean-code/inversi%C3%B3n-de-control-principio-de-hollywood-dont-call-us-we-ll-call-you-179e9c70e3d0', 'Inversión de Control', FRAMEWORKS_KEY, 'Inversión de control').addRelatedItem(Keys.PRINCIPIOS_HOLLYWOOD)],
    [Keys.FRAMEWORKS_IOD, new Referencia('https://www.arquitecturajava.com/el-patron-de-inyeccion-de-dependencia/', 'Inyección de dependencias', FRAMEWORKS_KEY, 'Inyección de dependencias', '', '2024/06/09')],
    ['scafolding', new Referencia('https://medium.com/@srinathsrs104/scaffolding-54ac4e47e133', 'Creación automatica de codigo', FRAMEWORKS_KEY, 'Scaffolding')],
    ['iodSpring', new Referencia('https://medium.com/@priyaroul99/what-is-constructor-injection-and-why-should-you-use-it-in-spring-bdb3e1857c58', 'Inyección de Dependencias en Spring', FRAMEWORKS_KEY, 'IoD Spring', '2023/12/02')],
    [Keys.FRAMEWORKS_CODE_STRUCTURE, new Referencia('https://medium.com/@akintopbas96/spring-boot-code-structure-package-by-layer-vs-package-by-feature-5331a0c911fe', 'Paquetes por capas Vs funcionalidad', FRAMEWORKS_KEY, 'Estructura del codigo', '2024/05/18').addRelatedItems(Keys.META_ESTRUCTURAS_VERTICAL_AND_HORIZONTAL, Keys.POO_POO, Keys.ARQUITECTURAS_CAPAS, Keys.ESTRATEGIAS_DESARROLLO_SCREAMING_DESIGN)],
]);

export const GIT_KEY = 'Git';
export const GIT_REF = new Map<string, Referencia>([
    ['introduccion', new Referencia('https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Acerca-del-Control-de-Versiones', 'Introducción a Git', GIT_KEY, 'Introducción')],
    [Keys.GIT_STRUCTURE_AND_CONCEPTS, new Referencia('https://www.klooid.com/blog/git-series-conceptos/', 'Estructura Basica GIT', GIT_KEY, 'Estructura Basica', '2024/12/13')],
    ['repositorios', new Referencia('https://git-scm.com/book/es/v2/Fundamentos-de-Git-Trabajar-con-Remotos', 'Repositorios Remotos y Locales', GIT_KEY, 'Repositorios')],
    [Keys.GIT_BRANCHS, new Referencia('https://git-scm.com/book/es/v2/Ramificaciones-en-Git-Procedimientos-B%C3%A1sicos-para-Ramificar-y-Fusionar', 'Manejo de ramas', GIT_KEY, 'Ramas')],
    ['protocolos', new Referencia('https://git-scm.com/book/es/v2/Git-en-el-Servidor-Los-Protocolos', 'Comunicación entre repositorios', GIT_KEY, 'Protocolos')],
    ['versiones', new Referencia('https://git-scm.com/book/es/v2/Git-en-entornos-distribuidos-Manteniendo-un-proyecto', 'Versiones mediante etiquetas', GIT_KEY, 'Versiones y tags')],
    ['forks', new Referencia('https://git-scm.com/book/es/v2/GitHub-Participando-en-Proyectos', 'Solicitudes a otros proyectos', GIT_KEY, 'Forks y Pull requests')],
    ['stash', new Referencia('https://git-scm.com/book/es/v2/Herramientas-de-Git-Guardado-r%C3%A1pido-y-Limpieza', 'Estados de trabajo', GIT_KEY, 'Stash y limpieza')],
    ['merge', new Referencia('https://git-scm.com/book/es/v2/Herramientas-de-Git-Fusi%C3%B3n-Avanzada', 'Union de ramas', GIT_KEY, 'Merge')],
    ['atributos', new Referencia('https://git-scm.com/book/es/v2/Personalizaci%C3%B3n-de-Git-Git-Attributes', 'Personalización y acciones por defecto', GIT_KEY, 'Atributos')],
    ['migracion', new Referencia('https://git-scm.com/book/es/v2/Git-y-Otros-Sistemas-Migraci%C3%B3n-a-Git', 'Migración entre sistemas y otras acciones', GIT_KEY, 'Entresijos')],
    ['flow', new Referencia('https://aprendegit.com/que-es-git-flow/', 'Flujo de trabajo con Git', GIT_KEY, 'Git flow')],
    ['practicas', new Referencia('https://codigofacilito.com/articles/41', 'Buenas practicas para realizar commits', GIT_KEY, 'Buenas Practicas')],
    ['branching-strategies', new Referencia('https://www.virtusway.com/es/workflows-strategies-for-working-with-git.html', 'Estrategias de Ramificación', GIT_KEY, 'Ramificación', '2023/07/18', '2024/06/26')],
    ['monoRepo', new Referencia('https://monorepo.tools/#understanding-monorepos', 'Mono Repo', GIT_KEY, 'Mono Repo', '2023/09/05')],
    [Keys.GIT_PULL_REQUESTS_TOXIC, new Referencia('https://devinterrupted.substack.com/p/the-11-types-of-toxic-pull-requests', 'Pull Requests Toxicos', GIT_KEY, 'Pull Requests Toxicos', '2023/09/17')],
    [Keys.GIT_REBASE_MERGE_SQUASH, new Referencia('https://medium.com/@shikha.ritu17/git-rebase-vs-merge-vs-squash-choosing-the-right-strategy-for-version-control-a9c9bb97040e', 'Rebase Vs Merge Vs Squash', GIT_KEY, 'Rebase/Merge/Squash', '2024/06/26')],
]);

export const USER_HISTORIES_KEY = 'Historias-Usuario';
export const USER_HISTORIES = new Map<string, Referencia>([
    ['historias', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', '¿ Que son las HU ?', USER_HISTORIES_KEY, '¿ Que son ?')],
    ['objetivos', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', '¿ Que busca una HU ?', USER_HISTORIES_KEY, '¿ Que buscan ?')],
    ['partes', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', 'Partes de una HU', USER_HISTORIES_KEY, 'Partes')],
    ['invest', new Referencia('https://apiumhub.com/es/tech-blog-barcelona/como-escribir-buenas-historias-de-usuario/', 'Criterio INVEST', USER_HISTORIES_KEY, 'INVEST')],
    //['smart', new Referencia('https://beagilemyfriend.com/historias-de-usuario-invest-smart/', 'Criterio SMART', USER_HISTORIES_KEY, 'SMART')],
    [Keys.USER_HISTORIES_SMART, new Referencia('https://asana.com/es/resources/smart-goals', 'Criterio SMART', USER_HISTORIES_KEY, 'SMART', '', '2024/09/28')],
    [Keys.USER_HISTORIES_3C, new Referencia('https://julibetancur.blog/tag/tres-c/', 'Card-Conversación-Confirmación', USER_HISTORIES_KEY, 'Las 3 C')],
    ['gherkin', new Referencia('https://blog.thiga.co/es/gherkin/', 'Definición de los criterios de aceptación', USER_HISTORIES_KEY, 'Gherkin')],
    ['descomposicionHU', new Referencia('https://www.javiergarzas.com/2012/05/descomponer-historias-de-usuario-en-tareas-1.html', 'Descomposición en tareas', USER_HISTORIES_KEY, 'Descomposición')],
    ['storyPoints', new Referencia('https://ronjeffries.com/articles/019-01ff/story-points/Index.html', 'Puntos de Historia', USER_HISTORIES_KEY, 'Puntos')],
    ['casosVsRequisitosVsHu', new Referencia('http://www.angellozano.com/requisitos-del-sistema-vs-casos-uso-vs-historias-usuario/', 'HU Vs Casos de uso', USER_HISTORIES_KEY, 'Hu Vs Casos de Uso')],
    [Keys.USER_HISTORIES_FORMATS, new Referencia('https://www.linkedin.com/posts/jgarzas_agilidad-bdd-hdd-activity-7178798486358802434-ZK5i/', 'HU Formatos alternativos', USER_HISTORIES_KEY, 'Formatos alternativos', '2024/04/28')],
    [Keys.USER_HISTORIES_ESTIMATIONS, new Referencia('https://www.linkedin.com/posts/jgarzas_las-3-familias-de-estimacion-agil-javier-activity-7231351751667310592-To3O/', 'Estimación Agil', USER_HISTORIES_KEY, 'Estimación Agil', '2024/09/28')],
    [Keys.USER_HISTORIES_DOR_DOD, new Referencia('https://www.linkedin.com/pulse/historias-de-usuario-dor-y-dod-clave-para-la-del-remedios-d%C3%ADaz/', 'Definition Of Done & Definition Of Ready', USER_HISTORIES_KEY, 'DoR & DoD', '2024/12/29')],
]);

export const MALAS_PRACTICAS_KEY = 'Malas-Practicas';
export const MALAS_PRACTICAS_REF = new Map<string, Referencia>([
    ['callbackhell', new Referencia('https://codearmy.co/que-es-el-callback-hell-y-como-evitarlo-4af418a6ed14', 'Cadena de llamados asincronos', MALAS_PRACTICAS_KEY, 'Callback Hell')],
    ['contraCalidad', new Referencia('https://softgrade.mx/5-causas-afectan-la-calidad-software/', 'En contra de la calidad', MALAS_PRACTICAS_KEY, 'Contra la calidad')],
    //['contraGestion', new Referencia('https://blog.gft.com/es/2016/01/20/las-10-malas-practicas-mas-comunes-en-la-gestion-de-proyectos/', 'En contra de la gestión', MALAS_PRACTICAS_KEY, 'Contra la gestion')],
    ['contraGestion', new Referencia('https://www.smartprecisesolutions.com/2018/01/malas-practicas-en-la-gestion-de-proyectos/', 'En contra de la gestión', MALAS_PRACTICAS_KEY, 'Contra la gestion', '', '2024/05/08')],
    ['contraAgilidad', new Referencia('https://giovannycifuentes.com/los-6-antipatrones-en-la-adopcion-de-agilidad-que-los-lideres-deberian-conocer/', 'En contra de las metodologias agiles', MALAS_PRACTICAS_KEY, 'Contra la Agilidad', '2023/02/25')],
    ['malasPracticasSCRUM', new Referencia('https://blog.palo-it.com/es/antipatrones-comunes-en-scrum', 'Malas practicas en SCRUM', MALAS_PRACTICAS_KEY, 'Contra SCRUM', '2023/05/01')],
    [Keys.MALAS_PRACTICAS_DEATH_BY_MICROSERVICES, new Referencia('https://renegadeotter.com/2023/09/10/death-by-a-thousand-microservices.html', 'Muerte por Microservicios', MALAS_PRACTICAS_KEY, 'Muerte por Microservicios', '2023/09/14').addRelatedItem(Keys.NUBE_OBSERVABILIDAD)],
    [Keys.MALAS_PRACTICAS_ANTI_PATRONES_ARQUITECTURAS, new Referencia('https://lab.scub.net/architecture-anti-patterns-the-dark-side-of-the-architect-d9265b52d997', 'Anti patrones en Arquitecturas', MALAS_PRACTICAS_KEY, 'Contra Arquitecturas', '2024/09/07')],
    [Keys.MALAS_PRACTICAS_ANEMIC_DOMAIN, new Referencia('https://martinfowler.com/bliki/AnemicDomainModel.html', 'Dominio Anemico', MALAS_PRACTICAS_KEY, 'Dominio Anemico', '2024/05/08').addRelatedItem(Keys.ESTRATEGIAS_DESARROLLO_DDD)],
    [Keys.MALAS_PRACTICAS_TRAIN_WECKS, new Referencia('https://www.thinkcode.se/blog/2011/12/30/how-many-train-wrecks-are-lurking-in-your-code', 'Accidentes de trenes', MALAS_PRACTICAS_KEY, 'Accidentes de trenes', '2024/05/22', '2024/10/12').addRelatedItems(Keys.BUENAS_PRACTICAS_DEMETER, Keys.POO_POO_PILARES)],
]);

export const META_CARACTERISTICAS_KEY = 'Meta-Caracteristicas';
export const META_CARATERISTICAS_REF = new Map<string, Referencia>([
    [Keys.META_CARACTERISTICAS_META_DATOS, new Referencia('https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/que-son-los-metadatos-y-cual-es-su-utilidad', '¿ Que son los metadatos ?', META_CARACTERISTICAS_KEY, 'Meta data', '', '2024/06/15')],
    ['metaClase', new Referencia('https://quesignificado.org/que-es-una-metaclase/', '¿ Que es una meta clase ?', META_CARACTERISTICAS_KEY, 'Meta Clase')],
    //['reflexion', new Referencia('https://es.linkfang.org/wiki/Reflexi%C3%B3n_(inform%C3%A1tica)', 'Auto mutabilidad del codigo', META_CARACTERISTICAS_KEY, 'Reflexión')],
    [Keys.META_CARACTERISTICAS_REFLEXION, new Referencia('https://levelup.gitconnected.com/reflecting-on-java-unveiling-the-magic-of-reflection-7140a465ff6b', 'Auto mutabilidad del codigo', META_CARACTERISTICAS_KEY, 'Reflexión', '', '2024/07/12')],
    ['asserts', new Referencia('https://www.adictosaltrabajo.com/2016/01/07/haz-tu-codigo-mas-fiable-con-asserts/', 'Comprobaciones del codigo', META_CARACTERISTICAS_KEY, 'Aserciones')],
    [Keys.META_CARACTERISTICAS_EXCEPTIONS, new Referencia('https://universidad-de-los-andes.gitbooks.io/fundamentos-de-programacion/content/Nivel4/5_ManejoDeLasExcepciones.html', 'Lanzamiento y manejo de excepciones', META_CARACTERISTICAS_KEY, 'Excepciones')],
    [Keys.META_CARACTERISTICAS_CACHE, new Referencia('https://medium.com/bancolombia-tech/dise%C3%B1ando-una-estrategia-de-cach%C3%A9-39366876009b', 'Tipos de Cache', META_CARACTERISTICAS_KEY, 'Tipos de Cache')],
    //['hilos', new Referencia('https://facturapp.weebly.com/hilos.html', 'Hilos', META_CARACTERISTICAS_KEY, 'Hilos')],
    [Keys.META_CARACTERISTICAS_PROCESS_AND_THREADS, new Referencia('https://www.linkedin.com/posts/bytebytego_systemdesign-coding-interviewtips-activity-7282264394716090368-bJfF/', 'Procesos & Hilos', META_CARACTERISTICAS_KEY, 'Procesos & Hilos', '', '2025/01/16').addRelatedItem(Keys.HARDWARE_OPERATIVE_SYSTEM)],
    ['argumentos', new Referencia('https://picodotdev.github.io/blog-bitix/2021/01/en-java-los-argumentos-se-pasan-por-valor-o-por-referencia/', 'Argumentos por valor y por referencia', META_CARACTERISTICAS_KEY, 'Argumentos')],
    //['concurrenciaParalelismo', new Referencia('https://codigofacilito.com/articulos/programacion-concurrente', 'Concurrencia & Paralelismo', META_CARACTERISTICAS_KEY, 'Concurrencia')],
    [Keys.META_CARACTERISTICAS_CONCURRENCY_AND_PARALLELISM, new Referencia('https://www.linkedin.com/feed/update/urn:li:activity:7209404927750615040/', 'Concurrencia & Paralelismo', META_CARACTERISTICAS_KEY, 'Concurrencia/Paralelismo', '', '2024/06/26')],
    ['ortogonalidad', new Referencia('https://qastack.mx/programming/1527393/what-is-orthogonality', 'Ortogonalidad', META_CARACTERISTICAS_KEY, 'Ortogonalidad')],
    [Keys.META_CARACTERISTICAS_BOILER_PLATE, new Referencia('https://www.freecodecamp.org/news/whats-boilerplate-and-why-do-we-use-it-let-s-check-out-the-coding-style-guide-ac2b6c814ee7/', 'Boiler Plate (codigo repetitivo)', META_CARACTERISTICAS_KEY, 'BoilerPlate')],
    [Keys.META_CARACTERISTICAS_RECURSIVIDAD, new Referencia('https://geekytheory.com/que-es-la-recursividad/', 'Recursividad', META_CARACTERISTICAS_KEY, 'Recursividad')],
    [Keys.META_CARACTERISTICAS_BACKTRACKING, new Referencia('https://www.ecured.cu/Vuelta_atr%C3%A1s_(backtracking)', 'Back Tracking', META_CARACTERISTICAS_KEY, 'Back tracking')],
    [Keys.META_CARACTERISTICAS_RAW_TYPES, new Referencia('https://stackoverflow.com/questions/2770321/what-is-a-raw-type-and-why-shouldnt-we-use-it/', 'Tipos Crudos', META_CARACTERISTICAS_KEY, 'Tipos crudos', '', '2025/02/09')],
    ['memoryAndGarbage', new Referencia('https://www.computerworld.com/article/2596992/memory-leaks-and-garbage-collection.amp.html', 'Fugas de memoria y recoleccion de basura', META_CARACTERISTICAS_KEY, 'Fugas de memoria')],
    ['footprint', new Referencia('https://www.pcmag.com/encyclopedia/term/memory-footprint', 'Huella en memoria', META_CARACTERISTICAS_KEY, 'Huellas de memoria', '2023/11/03')],
    ['featureFlag', new Referencia('https://www.optimizely.com/optimization-glossary/feature-flags/', 'Feature Flags', META_CARACTERISTICAS_KEY, 'Feature Flags', '2023/11/30')],
    //['generics', new Referencia('https://medium.com/@AlexanderObregon/java-generics-type-safety-and-performance-a0864ca72a5a', 'Genericos', META_CARACTERISTICAS_KEY, 'Genericos', '2023/12/28')],
    [Keys.META_CARACTERISTICAS_GENERICS, new Referencia('https://medium.com/@aqilzeka99/mastering-generics-in-java-interview-questions-571232c02af9', 'Genericos', META_CARACTERISTICAS_KEY, 'Genericos', '2023/12/28', '2024/12/01')],
    [Keys.META_CARACTERISTICAS_MEMORY_SAFETY, new Referencia('https://stackoverflow.blog/2024/03/04/in-rust-we-trust-white-house-office-urges-memory-safety', 'Seguridad en la memoria', META_CARACTERISTICAS_KEY, 'Seguridad en la memoria', '2024/03/26')],
    ['profiling', new Referencia('https://digma.ai/9-best-java-profilers-to-use-in-2024/', 'Profiling', META_CARACTERISTICAS_KEY, 'Profiling', '2024/05/05')],
    ['blockingAndNoBlocking', new Referencia('https://www.geeksforgeeks.org/blocking-and-nonblocking-io-in-operating-system/', 'Operaciones Bloqueantes', META_CARACTERISTICAS_KEY, 'Bloqueos/Sin Bloqueos', '2024/05/12')],
    [Keys.META_CARACTERISTICAS_ANOTATIONS, new Referencia('https://vaheaslanyan7.medium.com/the-java-interview-prep-handbook-50-questions-solved-code-examples-62fed44e3e6a', 'Anotaciones', META_CARACTERISTICAS_KEY, 'Anotaciones', '2024/06/30').addRelatedItems(Keys.FRAMEWORKS_FRAMEWORKS, Keys.META_ESTRUCTURAS_DEPRECATION)],
    [Keys.META_CARACTERISTICAS_CACHE_AND_TYPES, new Referencia('https://medium.com/@junfeng0828/d884ccac7c87', 'Estrategias del Cache', META_CARACTERISTICAS_KEY, 'Estrategias del Cache', '2024/10/19')],
    [Keys.META_CARACTERISTICAS_TYPE_ERASURE, new Referencia('https://www.baeldung.com/java-type-erasure', 'Borrado de Tipos', META_CARACTERISTICAS_KEY, 'Borrado de Tipos', '2024/11/15').addRelatedItem(Keys.VERSIONAMIENTO_BACKWARD_AND_BREAKING_CHANGES)],
    [Keys.META_CARACTERISTICAS_DEAD_LOCKS, new Referencia('https://www.linkedin.com/posts/bytebytego_systemdesign-coding-interviewtips-activity-7288797053613166592-CNce/', 'DeadLocks - Bloqueos', META_CARACTERISTICAS_KEY, 'DeadLocks - Bloqueos', '2025/01/26').addRelatedItems(Keys.PERSISTENCY_ADVANCED_LOCKING, Keys.PERSISTENCY_DBMS, Keys.PERSISTENCY_DL)],
    [Keys.META_CARACTERISTICAS_TIPOS, new Referencia('https://wiki.uqbar.org/wiki/articles/esquemas-de-tipado.html', 'Sistema de Tipos', META_CARACTERISTICAS_KEY, 'Tipos', '2025/02/03').addRelatedItems(Keys.PARADIGMAS_PARADIGMA_SCRIPTING, Keys.POO_POLIMORFISMO)],
]);

export const META_ESTRUCTURAS_KEY = 'Meta-Estructuras';
export const META_ESTRUCTURAS_REF = new Map<string, Referencia>([
    //['scope', new Referencia('https://platzi.com/blog/como-funciona-el-scope-en-javascript/', 'Alcance', META_ESTRUCTURAS_KEY, 'Scope')],
    [Keys.META_ESTRUCTURAS_SCOPE, new Referencia('https://codingornot.com/ambito-o-scope-en-programacion', 'Scope o Ambito', META_ESTRUCTURAS_KEY, 'Scope', '', '2025/02/08').addRelatedItem(Keys.COMPILACION_OBJECT_CREATION)],
    ['precedencia', new Referencia('https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence', 'Precedencia y jerarquia de operaciones', META_ESTRUCTURAS_KEY, 'Precedencia')],
    [Keys.META_ESTRUCTURAS_VERTICAL_AND_HORIZONTAL, new Referencia('https://xurxodev.com/vertical-scile/', 'Organización de un proyecto', META_ESTRUCTURAS_KEY, 'Organización')],
    [Keys.META_ESTRUCTURAS_REGEX, new Referencia('https://jarroba.com/busqueda-de-patrones-expresiones-regulares/', 'Expresiones Regulares(regex)', META_ESTRUCTURAS_KEY, 'Expresiones Regulares', '', '2025/02/08').addRelatedItems(Keys.COMPILACION_ELEMENTS_COMPILATOR, Keys.UML_STATES)],
    [Keys.META_ESTRUCTURAS_ESTRUCTURAS_DATOS, new Referencia('https://medium.com/techwomenc/estructuras-de-datos-a29062de5483', 'Estructuras de datos I', META_ESTRUCTURAS_KEY, 'Estructuras de datos I')],
    [Keys.META_ESTRUCTURAS_ESTRUCTURAS_DATOS_2, new Referencia('https://ai.plainenglish.io/data-structures-how-computers-store-and-organize-data-the-backbone-5f0576b3150c', 'Estructuras de datos II', META_ESTRUCTURAS_KEY, 'Estructuras de datos II', '2023/02/05', '2025/02/08').addRelatedItem(Keys.BUENAS_PRACTICAS_COMPLEJIDAD_ALGORITMICA)],
    [Keys.META_ESTRUCTURAS_SEARCH_AND_SORT, new Referencia('https://medium.com/edureka/data-structures-algorithms-in-java-d27e915db1c5', 'Algoritmos, Busqueda & Ordenación', META_ESTRUCTURAS_KEY, 'Busqueda & Ordenación', '2025/02/08').addRelatedItems(Keys.BUENAS_PRACTICAS_COMPLEJIDAD_COGNITIVA, Keys.BUENAS_PRACTICAS_COMPLEJIDAD_ALGORITMICA, Keys.ANALISIS_ALGORITHMS)],
    ['homoiconicidad', new Referencia('https://es.wikipedia.org/wiki/Homoiconicidad', 'Homoiconicidad', META_ESTRUCTURAS_KEY, 'Homoiconicidad')],
    [Keys.META_ESTRUCTURAS_MAQUINA_ESTADOS, new Referencia('http://fisicotronica.com/maquina-de-estados-nos-referimos/', 'Maquinas de estados', META_ESTRUCTURAS_KEY, 'Maquina de estados')],
    [Keys.META_ESTRUCTURAS_SISTEMAS_COMPLEJOS, new Referencia('https://www.researchgate.net/figure/Figura-2-Caracteristicas-basicas-de-los-sistemas-complejos-Comportamiento-impredecible_fig1_262437348', 'Complejidad inherente al sistema', META_ESTRUCTURAS_KEY, 'Sistemas Complejos', '', '2025/03/18')],
    ['funcionesLambda', new Referencia('https://www.tokioschool.com/noticias/expresiones-lambda-uso-programacion-aplicaciones/', 'Funciones Lambda', META_ESTRUCTURAS_KEY, 'Funciones lambda')],
    [Keys.META_ESTRUCTURAS_VALUE_OBJECTS, new Referencia('https://medium.com/all-you-need-is-clean-code/value-objects-d4c24115fa69', 'Value Objects', META_ESTRUCTURAS_KEY, 'Value Objects', '2022/11/07')],
    ['dynamicProgramming', new Referencia('https://www.spiceworks.com/tech/devops/articles/what-is-dynamic-programming/', 'Programacion Dinamica', META_ESTRUCTURAS_KEY, 'Programacion Dinamica', '2023/03/26')],
    [Keys.META_ESTRUCTURAS_SERIALIZATION_DESERIALIZATION, new Referencia('https://www.baeldung.com/cs/serialization-deserialization', 'Serialización y Deserialización', META_ESTRUCTURAS_KEY, 'Serializar & Deserializar', '2023/05/31')],
    [Keys.META_ESTRUCTURAS_DEPRECATION, new Referencia('https://digma.ai/deprecated-methods-in-java/', 'Deprecated (Obsolencia)', META_ESTRUCTURAS_KEY, 'Deprecated (Obsolencia)', '2024/06/15').addRelatedItems(Keys.VERSIONAMIENTO_BACKWARD_AND_BREAKING_CHANGES, Keys.REFACTORING_LEGACY_CODE)],
    [Keys.META_ESTRUCTURAS_LOGS, new Referencia('https://betterstack.com/community/guides/logging/log-levels-explained/', 'Logs', META_ESTRUCTURAS_KEY, 'Logs', '2025/01/29', '2025/02/02').addRelatedItems(Keys.NUBE_OBSERVABILIDAD, Keys.BUENAS_PRACTICAS_LOGGING, Keys.PEOPLE_NO_NEWS_GOOD_NEWS)],
]);

export const METODOLOGIAS_KEY = 'Metodologias';
export const METODOLOGIAS_REF = new Map<string, Referencia>([
    [Keys.METODOLOGIAS_AGILES, new Referencia('https://www.iebschool.com/blog/que-son-metodologias-agiles-agile-scrum/', '¿ Que son las metodologias agiles ?', METODOLOGIAS_KEY, 'Agiles')],
    ['scrum', new Referencia('https://www.iebschool.com/blog/metodologia-scrum-agile-scrum/', 'Scrum', METODOLOGIAS_KEY, 'SCRUM')],
    ['scrumPrinciples', new Referencia('https://rootstack.com/es/blog/los-pilares-del-scrum-claves-para-la-gestion-de-procesos', 'Principios Scrum', METODOLOGIAS_KEY, 'Principios Scrum')],
    ['kanban', new Referencia('https://www.iebschool.com/blog/metodologia-kanban-agile-scrum/', 'Kanban', METODOLOGIAS_KEY, 'Kanban')],
    ['elevator', new Referencia('https://www.iebschool.com/blog/las-claves-para-realizar-un-elevator-pitch-lean-startup/', 'Elevator Pitch', METODOLOGIAS_KEY, 'Elevator Pitch')],
    ['canvas', new Referencia('https://www.iebschool.com/blog/que-es-el-modelo-canvas-y-como-aplicarlo-a-tu-negocio-agile-scrum/', 'Canvas', METODOLOGIAS_KEY, 'Canvas')],
    //['tradicionales', new Referencia('https://www.tutorialspoint.com/es/software_engineering/software_development_life_cycle.htm', 'Metodologias Tradicionales', METODOLOGIAS_KEY, 'Tradicionales')],
    [Keys.METODOLOGIAS_MODEL_BING_BANG, new Referencia('https://www.tutorialspoint.com/es/software_engineering/software_development_life_cycle.htm', 'Bing Bang', METODOLOGIAS_KEY, 'Bing Bang', '2024/10/10')],
    ['cascada', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/el-modelo-en-cascada/', 'Cascada', METODOLOGIAS_KEY, 'Cascada')],
    ['espiral', new Referencia('https://www.ionos.es/startupguide/productividad/modelo-en-espiral/', 'Espiral', METODOLOGIAS_KEY, 'Espiral')],
    ['iterativo', new Referencia('https://proyectosagiles.org/desarrollo-iterativo-incremental/', 'Iterativo-incremental', METODOLOGIAS_KEY, 'Iterativo-Incremental')],
    ['extrema', new Referencia('https://www.diegocalvo.es/metodologia-xp-programacion-extrema-metodologia-agil/', 'Programación Extrema', METODOLOGIAS_KEY, 'XP')],
    //['v', new Referencia('https://ingsoftware.weebly.com/ciclo-de-vida-en-v.html', 'Modelo en V', METODOLOGIAS_KEY, 'Modelo V')],
    [Keys.METODOLOGIAS_MODEL_V, new Referencia('https://www.linkedin.com/posts/alexxubyte_systemdesign-coding-interviewtips-activity-7241834626241949696-v5Se/', 'Modelo en V', METODOLOGIAS_KEY, 'Modelo V', '', '2024/10/10')],
    ['rup', new Referencia('https://rupmetodologia.blogspot.com/?view=sidebar', 'Proceso Racional Unificado', METODOLOGIAS_KEY, 'RUP')],
    ['kaizen', new Referencia('https://www.movertis.com/blog/que-es-la-metodologia-kaizen', 'Kaizen', METODOLOGIAS_KEY, 'Kaizen')],
    //['scrumban', new Referencia('https://kanbantool.com/es/scrumban-scrum-y-kanb', 'Scrumban', METODOLOGIAS_KEY, 'Scrumban')],
    [Keys.METODOLOGIAS_SCRUMBAN, new Referencia('https://www.atlassian.com/es/agile/project-management/scrumban', 'Scrumban', METODOLOGIAS_KEY, 'Scrumban', '', '2024/10/10')],
    [Keys.METODOLOGIAS_LEAN, new Referencia('https://www.obsbusiness.school/blog/lean-management-metodologia-origenes-y-principios', 'Lean management', METODOLOGIAS_KEY, 'Lean')]
]);

export const NUBE_KEY = 'Nube';
export const NUBE_REF = new Map<string, Referencia>([
    ['nube', new Referencia('https://azure.microsoft.com/es-es/overview/what-are-private-public-hybrid-clouds/', 'Tipos de nube', NUBE_KEY, 'Tipos de nube')],
    ['iaas-paas-saas', new Referencia('https://www.ambit-bst.com/blog/definici%C3%B3n-de-iaas-paas-y-saas-en-qu%C3%A9-se-diferencian', 'IaaS, PaaS, SaaS', NUBE_KEY, 'IaaS, PaaS, SaaS')],
    ['caas-daas-faas', new Referencia('https://aws.plainenglish.io/conquering-the-cloud-unveiling-saas-paas-caas-daas-iaas-and-faas-3789b0ad7018', 'CaaS, DaaS, FaaS', NUBE_KEY, 'CaaS, DaaS, FaaS', '2024/03/18')],
    ['factores12', new Referencia('https://12factor.net/es/', '12 factores para una aplicación SaaS', NUBE_KEY, '12 - factores')],
    ['migracionesNube', new Referencia('https://www.paradigmadigital.com/techbiz/mitos-lift-shift-mentiras-migraciones-cloud/', 'Migraciones hacia la nube y las 6R', NUBE_KEY, 'Migraciones')],
    [Keys.NUBE_CAP_TEOREMA, new Referencia('https://www.ionos.es/digitalguide/servidores/know-how/que-es-el-cap-theorem/', 'Coherencia, Disponibilidad y Tolerancia', NUBE_KEY, 'Teorema CAP').addRelatedItem(Keys.PERSISTENCY_DBMS)],
    ['dns', new Referencia('https://www.ionos.es/digitalguide/servidores/know-how/que-es-el-servidor-dns-y-como-funciona/', 'Servidor DNS', NUBE_KEY, 'Servidor DNS')],
    //['falaciesDistributedSystems', new Referencia('https://architecturenotes.co/fallacies-of-distributed-systems/', 'Sistemas Distribuidos', NUBE_KEY, 'Sistemas Distribuidos')],
    [Keys.NUBE_FALACIES_DYSTRIBUTED_SYSTEMS, new Referencia('https://www.genbeta.com/desarrollo/las-8-falacias-de-la-computacion-distribuida', 'Falacias Sistemas Distribuidos', NUBE_KEY, 'Sistemas Distribuidos', '', '2024/10/06')],
    ['loadBalancing', new Referencia('https://aws.amazon.com/es/what-is/load-balancing/', 'Balancear la Carga', NUBE_KEY, 'Balanceador de carga')],
    ['latencia', new Referencia('https://blog.bytebytego.com/p/ep110-top-5-strategies-to-reduce#top-strategies-to-reduce-latency', 'Reducir la latencia', NUBE_KEY, 'Latencia', '2024/05/12')],
    [Keys.NUBE_OBSERVABILIDAD, new Referencia('https://medium.com/@rcougil/software-observabilidad-logs-m%C3%A9tricas-y-trazabilidad-d5bcca56608d', 'Observabilidad', NUBE_KEY, 'Observabilidad', '2024/05/26')],
    [Keys.NUBE_TWO_PHASE_COMMIT, new Referencia('https://hongilkwon.medium.com/when-to-use-two-phase-commit-in-distributed-transaction-f1296b8c23fd', 'Two Phase Commit', NUBE_KEY, 'Two Phase Commit', '2024/11/26')],
    [Keys.NUBE_DISPONIBILITY, new Referencia('https://www.computerweekly.com/es/consejo/Disponibilidad-de-cinco-nueves-Que-significa-realmente', 'Disponibilidad de 5 9s', NUBE_KEY, 'Disponibilidad de 5 9s', '2024/11/26').addRelatedItem(Keys.CD_CI_CD_CI)],
    [Keys.NUBE_PACELC, new Referencia('https://www.designgurus.io/blog/system-design-interview-basics-cap-vs-pacelc', 'CAP, Else Latencia y Consistencia', NUBE_KEY, 'Teorema PACELC', '2024/12/15').addRelatedItems(Keys.PERSISTENCY_ACID, Keys.PERSISTENCY_ADVANCED_BASE)],
    [Keys.NUBE_NATIVE, new Referencia('https://www.oracle.com/cloud/cloud-native/what-is-cloud-native/', 'Evolución de la Nube', NUBE_KEY, 'Cloud Native', '2025/02/09').addRelatedItems(Keys.ARQUITECTURAS_MONOLITOS, Keys.ESTRATEGIAS_DESARROLLO_SLDC, Keys.MICROSERVICES_ANALISIS)],
    [Keys.NUBE_SRE, new Referencia('https://aws.amazon.com/es/what-is/sre/', 'Ingenieria de Fiabilidad del Sitio', NUBE_KEY, 'SRE', '2025/03/15').addRelatedItems(Keys.ESTRATEGIAS_DESARROLLO_SLDC, Keys.CD_CI_DEV_OPS)],
]);

export const APIS_KEY = 'APIs';
export const APIS_REF = new Map<string, Referencia>([
    //['api', new Referencia('https://www.ticbeat.com/tecnologias/que-es-una-api-para-que-sirve/', 'API', APIS_KEY, 'API')],
    ['api', new Referencia('https://aws.amazon.com/es/what-is/api/', '¿ Que es una API ?', APIS_KEY, '¿ Que es una API ?', '', '2024/06/01')],
    ['tiposApi', new Referencia('https://www.computerweekly.com/es/definicion/Interfaz-de-programacion-de-aplicaciones-API', 'Tipos de API', APIS_KEY, 'Tipos de API')],
    ['restfull', new Referencia('http://adwe.es/general/colaboraciones/servicios-web-restful-con-http-parte-i-introduccion-y-bases-teoricas/', 'Rest & Restfull', APIS_KEY, 'Rest & RestFull')],
    ['caracteristicas', new Referencia('https://adwe.es/codigo/apis-codigo/servicios-web-restful-con-http-parte-ii-ejemplos/', 'Caracteristicas de una api restfull', APIS_KEY, 'Estandares RestFull')],
    [Keys.APIS_MADURITY, new Referencia('https://restfulapi.net/richardson-maturity-model/', 'Nivel de madurez de una API', APIS_KEY, 'Nivel de Madurez')],
    ['httpCodes', new Referencia('https://developer.mozilla.org/es/docs/Web/HTTP/Status', 'Codigos Http', APIS_KEY, 'Codigos HTTP')],
    ['HATEOAS', new Referencia('https://www.adictosaltrabajo.com/2013/12/02/spring-hateoas/', 'HATEOAS', APIS_KEY, 'HATEOAS', '2022/11/04')],
    ['apiStandars', new Referencia('https://medium.com/@trgoodwill/writing-api-design-standards-84cb7cbb3fd7', 'Standares API', APIS_KEY, 'Standares API', '2023/01/03')],
    [Keys.APIS_GATEWAY, new Referencia('https://nordicapis.com/whats-the-difference-between-an-api-gateway-and-a-load-balancer/', 'API Gateway', APIS_KEY, 'Api Gateway', '2023/02/05')],
    ['arquitecturalApiStyles', new Referencia('https://www.linkedin.com/feed/update/urn:li:activity:7095365669969350656/', 'Estilos de Arquitectura API', APIS_KEY, 'Estilos de Arquitectura API', '2023/09/08')],
    ['uri', new Referencia('https://www.techtarget.com/whatis/definition/URI-Uniform-Resource-Identifier', 'Uniform Resource Identifier', APIS_KEY, 'URI', '2023/11/03')],
    [Keys.APIS_TESTING, new Referencia('https://blog.bytebytego.com/p/ep83-explaining-9-types-of-api-testing#%C2%A7explaining-types-of-api-testing', 'API Testing', APIS_KEY, 'Testing in APIs', '2023/11/13')],
    [Keys.APIS_IDEMPOTENCIA, new Referencia('https://blog.bitsrc.io/design-an-idempotent-api-in-2024-d4a3cf8d8bf2', 'APIs Idempotentes', APIS_KEY, 'Idempotencia', '2024/02/17')],
    [Keys.APIS_REST_VS_MESSAGING, new Referencia('https://solace.com/blog/experience-awesomeness-event-driven-microservices/', 'REST VS Messaging & Microservicios', APIS_KEY, 'REST VS Messaging', '2024/03/15')],
    [Keys.APIS_API_GOVERNANCE, new Referencia('https://swagger.io/resources/articles/best-practices-in-api-governance/', 'Gobernanza', APIS_KEY, 'Gobernanza', '2024/06/01')],
    [Keys.APIS_API_FIRST, new Referencia('https://www.postman.com/api-first/', 'API-First', APIS_KEY, 'API-First', '2024/09/13').addRelatedItem(Keys.VERSIONAMIENTO_LICENSES_AND_DATA)],
]);

export const ANALISIS_DATA_KEY = 'Analisis-datos';
export const ANALISIS_DATA_REF = new Map<string, Referencia>([
    [Keys.ANALISIS_DATA_WEB_SCRAPING, new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-es-el-web-scraping/', 'Web Scrapping', ANALISIS_DATA_KEY, 'Web Scrapping', '', '2025/02/15')],
    [Keys.ANALISIS_DATA_MVP, new Referencia('https://www.inboundcycle.com/blog-de-inbound-marketing/que-es-mvp-o-producto-minimo-viable', 'Minimo Producto Viable', ANALISIS_DATA_KEY, 'MVP')],
    //['turingComplete', new Referencia('https://www.eleconomista.es/economia/noticias/8817210/12/17/Ethereum-es-Turing-completo-y-eso-que-es.html', 'Turing Complete', ANALISIS_DATA_KEY, 'Turing Complete')],
    [Keys.ANALISIS_DATA_TURING_COMPLETE, new Referencia('https://www.bitstamp.net/learn/blockchain/what-is-turing-complete/', 'Turing Complete', ANALISIS_DATA_KEY, 'Turing Complete', '', '2025/02/15').addRelatedItem(Keys.META_ESTRUCTURAS_MAQUINA_ESTADOS)],
    [Keys.ANALISIS_DATA_REVERSE_ENGINEERING, new Referencia('https://ingenierosasesores.com/actualidad/ingenieria-inversa-concepto-aplicaciones/', 'Ingenieria Inversa', ANALISIS_DATA_KEY, 'Ingenieria Inversa')],
    [Keys.ANALISIS_DATA_DSL, new Referencia('https://www.jetbrains.com/es-es/mps/concepts/domain-specific-languages/', 'Lenguaje de Dominio Especifico', ANALISIS_DATA_KEY, 'DSL')],
    //['dataAnalisis', new Referencia('https://tienda.digital/4-tipos-de-analisis-de-datos-para-mejorar-la-toma-de-decisiones/', 'Analisis de datos', ANALISIS_KEY, 'Analisis de datos')],
    [Keys.ANALISIS_DATA_DATA_ANALISIS_TYPES, new Referencia('https://cidei.net/4-tipos-de-analitica-de-datos-que-mejoran-tu-toma-de-decisiones/', 'Tipos de analitica', ANALISIS_DATA_KEY, 'Analitica de datos', '2022/09/26', '2024/06/23')],
    [Keys.ANALISIS_DATA_SYSTEMS_INFORMATION, new Referencia('https://concepto.de/sistema-de-informacion/', 'Sistemas de Información', ANALISIS_DATA_KEY, 'Información', '', '2024/06/23')],
    [Keys.ANALISIS_DATA_DATA_STORING, new Referencia('https://www.striim.com/blog/data-warehouse-vs-data-lake-vs-data-lakehouse-an-overview/', 'Analisis y almacenamiento de datos', ANALISIS_DATA_KEY, 'Almacenamiento de datos', '2023/08/22')],
    [Keys.ANALISIS_DATA_ETL_ELT, new Referencia('https://aws.amazon.com/es/compare/the-difference-between-etl-and-elt', 'ETL & ELT', ANALISIS_DATA_KEY, 'ETL & ELT', '2024/02/11')],
    [Keys.ANALISIS_DATA_THEORY_OF_INFORMATION, new Referencia('https://www.ferrovial.com/es/stem/teoria-de-la-informacion/', 'Teoria de la información', ANALISIS_DATA_KEY, 'Teoria de la información', '2024/06/23').addRelatedItem(Keys.META_ESTRUCTURAS_SERIALIZATION_DESERIALIZATION)],
    [Keys.ANALISIS_DATA_CHANGE_DATA_CAPTURE, new Referencia('https://www.confluent.io/learn/change-data-capture/', 'Change Data Capture', ANALISIS_DATA_KEY, 'CDC', '2024/07/28').addRelatedItem(Keys.PERSISTENCY_ADVANCED_WAL)],
    [Keys.ANALISIS_DATA_GOLDEN_RECORD, new Referencia('https://www.stibosystems.com/blog/benefits-of-creating-golden-customer-records', 'Golden Record', ANALISIS_DATA_KEY, 'Golden Record', '2024/08/10')],
    [Keys.ANALISIS_DATA_BATCH_VS_STREAM, new Referencia('https://estuary.dev/batch-processing-vs-stream-processing/', 'Batch Vs Stream Processing', ANALISIS_DATA_KEY, 'Batch Vs Stream', '2024/08/31')],
    [Keys.ANALISIS_DATA_OLAP_OLTP, new Referencia('https://aws.amazon.com/es/compare/the-difference-between-olap-and-oltp/', 'OLAP & OLTP', ANALISIS_DATA_KEY, 'OLAP & OLTP', '2024/09/15')],
    [Keys.ANALISIS_DATA_DEDUPLICATION, new Referencia('https://www.netapp.com/es/data-management/what-is-data-deduplication/', 'Deduplicación', ANALISIS_DATA_KEY, 'Deduplicación', '2024/11/24')],
    [Keys.ANALISIS_DATA_TGS, new Referencia('https://economipedia.com/definiciones/teoria-general-de-sistemas-tgs.html', 'Teoria General de Sistemas', ANALISIS_DATA_KEY, 'TGS', '2025/01/26')],
    [Keys.ANALISIS_DATA_ARQUITECTURE_PATTERNS, new Referencia('https://www.linkedin.com/posts/pooja-jain-898253106_data-engineering-bigdata-activity-7296475835677478912-F6tu/', 'Arquitecturas de Datos', ANALISIS_DATA_KEY, 'Arquitecturas de Datos', '2025/02/15')],
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
    [Keys.PARADIGMAS_PARADIGMA_DATOS, new Referencia('https://blog.klipse.tech/dop/2022/06/22/principles-of-dop.html', 'Programación Orientada a Datos', PARADIGMAS_KEY, 'Datos')],
]);

export const PATRONES_KEY = 'Patrones';
export const PATRONES_REF = new Map<string, Referencia>([
    [Keys.PATRONES_DEFINITION, new Referencia('http://www.ecured.cu/Patrones_de_dise%C3%B1o_y_arquitectura', '¿ Que son los patrones ?', PATRONES_KEY, 'Definición')],
    //['gof', new Referencia('http://www.cleformacion.com/tic-tek/-/blogs/patrones-gof', 'Gang of Four (GoF)', PATRONES_KEY, 'GOF')],
    [Keys.PATRONES_GOF, new Referencia('https://cleformacion.com/patrones-gof-fecha-de-publicacion/', 'Gang of Four (GoF)', PATRONES_KEY, 'GOF', '', '2024/05/25')],
    [Keys.PATRONES_DESGLOSE_GOF, new Referencia('https://refactoring.guru/es/design-patterns/catalog', 'Definiciones de los GoF', PATRONES_KEY, 'Desglose GOF')],
    [Keys.PATRONES_GRASP, new Referencia('https://www.adictosaltrabajo.com/2003/12/22/grasp/', 'Asignación de responsabilidades', PATRONES_KEY, 'GRASP')],
    //['desglosegrasp', new Referencia('https://juan-garcia-carmona.blogspot.com/search/label/patr%C3%B3n', 'Patrones GRASP', PATRONES_KEY, 'Desglose Grasp')],
    //['desglosegrasp', new Referencia('https://juan-garcia-carmona.blogspot.com/2012/09/patrones-generales-de-asignacion-de.html', 'Patrones GRASP', PATRONES_KEY, 'Desglose Grasp', '', '2024/05/25')],
    [Keys.PATRONES_DESGLOSE_GRASP, new Referencia('https://www.codescouts.academy/blog/grasp/', 'Patrones GRASP', PATRONES_KEY, 'Desglose Grasp', '', '2024/12/15')],
    //['dao', new Referencia('https://www.genbeta.com/desarrollo/patrones-de-diseno-active-record-vs-dao', 'Data Acess Object', PATRONES_KEY, 'DAO & Active Record')],
    [Keys.PATRONES_PERSISTENCE_PATTERNS, new Referencia('https://www.infoq.com/articles/architecting-java-persistence-patterns-and-strategies/', 'Persistencia & manejo de datos', PATRONES_KEY, 'Persistencia & Datos', '', '2024/05/26').addRelatedItems(Keys.POO_POO, Keys.POO_INMUTABILITY, Keys.PARADIGMAS_PARADIGMA_DATOS)],
    [Keys.PATRONES_ANTI_PATTERNS, new Referencia('https://sg.com.mx/revista/11/anti-patrones-la-mejor-forma-hacer-un-pesimo-sistema-software', 'Antipatrones, Desarrollo', PATRONES_KEY, 'Anti Patrones, Desarrollo')],
    //['dobleDespacho', new Referencia('https://blog.nicopaez.com/2016/11/09/una-alternativa-al-double-dispatch/', 'Patron doble despacho', PATRONES_KEY, 'Doble despacho')],
    //[Keys.PATRONES_SAGA, new Referencia('https://unpocodejava.com/2020/01/02/que-es-el-patron-saga/', 'Patron Saga', PATRONES_KEY, 'Patron saga')],
    [Keys.PATRONES_SAGA, new Referencia('https://docs.aws.amazon.com/es_es/prescriptive-guidance/latest/cloud-design-patterns/saga.html', 'Patron Saga', PATRONES_KEY, 'Patron Saga', '', '2025/03/14').addRelatedItems(Keys.ANALISIS_SINGLE_POINT_OF_FAILURE, Keys.APIS_IDEMPOTENCIA)],
    [Keys.PATRONES_CQRS, new Referencia('https://learn.microsoft.com/es-mx/azure/architecture/patterns/cqrs', 'Patron CQRS', PATRONES_KEY, 'Patron CQRS', '', '2024/10/18')],
    ['patronUndoRedo', new Referencia('https://medium.com/dottech/implementando-undo-redo-con-ngrx-o-redux-f8ef5de535ef', 'Patron Undo-Redo', PATRONES_KEY, 'Patron undo-redo')],
    [Keys.PATRONES_TYPES, new Referencia('https://www.javiergarzas.com/2014/08/tipos-patrones-software.html', 'Tipos de patrones', PATRONES_KEY, 'Tipos de Patrones')],
    [Keys.PATRONES_STRANGLER_FIG, new Referencia('https://martinfowler.com/bliki/StranglerFigApplication.html', 'StranglerFig App', PATRONES_KEY, 'StranglerFig App', '', '2024/09/22').addRelatedItem(Keys.LEYES_CONWAY)],
    ['antipatronesPM', new Referencia('https://sourcemaking.com/antipatterns', 'Antipatrones, Product Management', PATRONES_KEY, 'Anti Patrones, PM')],
    [Keys.PATRONES_CLOUD_DESIGN_PATTERNS, new Referencia('https://learn.microsoft.com/es-mx/azure/architecture/patterns/', 'Patrones Para la Nube', PATRONES_KEY, 'Patrones Nube', '2024/06/02')],
    [Keys.PATRONES_ENRICHED_MODEL, new Referencia('https://sacavix.com/2024/05/modelos-anemicos-vs-enriquecidos/', 'Modelo Enriquecido', PATRONES_KEY, 'Modelo Enriquecido', '2024/12/15').addRelatedItems(Keys.MALAS_PRACTICAS_ANEMIC_DOMAIN, Keys.ESTRATEGIAS_DESARROLLO_DDD, Keys.POO_INMUTABILITY, Keys.POO_POO)],
    [Keys.PATRONES_OUTBOX, new Referencia('https://www.baeldung.com/cs/outbox-pattern-microservices', 'Patron Outbox', PATRONES_KEY, 'Patron Outbox', '2025/01/12').addRelatedItems(Keys.PERSISTENCY_ADVANCED_CONSISTENCY_EVENTUAL, Keys.APIS_REST_VS_MESSAGING)],
    [Keys.PATRONES_INBOX, new Referencia('https://medium.com/hprog99/overcoming-message-delivery-challenges-in-distributed-systems-a-comprehensive-look-at-outbox-and-a669e5f21898', 'Patron Inbox', PATRONES_KEY, 'Patron Inbox', '2025/03/18').addRelatedItem(Keys.APIS_IDEMPOTENCIA)],
    [Keys.PATRONES_UNIT_OF_WORK, new Referencia('https://java-design-patterns.com/patterns/unit-of-work/', 'Unit of Work', PATRONES_KEY, 'Unit of Work', '2025/03/09').addRelatedItems(Keys.PERSISTENCY_ACID, Keys.PERSISTENCY_ADVANCED_ORM, Keys.ESTRATEGIAS_DESARROLLO_DDD)],
    [Keys.PATRONES_CRITERIA, new Referencia('https://medium.com/@zerodata.aolink/desafiando-la-complejidad-c%C3%B3mo-el-patr%C3%B3n-criteria-resuelve-la-explosi%C3%B3n-de-m%C3%A9todos-de-nuestro-60ece5829f89', 'Patron Criteria', PATRONES_KEY, 'Patron Criteria', '2025/03/22').addRelatedItems(Keys.ARQUITECTURAS_HEXAGONAL, Keys.PRINCIPIOS_SOLID)],
]);

export const PEOPLE_KEY = 'Personas';
export const PEOPLE_REF = new Map<string, Referencia>([
    [Keys.PEOPLE_PEOPLE_AND_PROCESS, new Referencia('https://www.heflo.com/es/blog/bpm/personas-procesos-tecnologia/', 'Personas-Procesos-Tecnologias', PEOPLE_KEY, 'Personas y procesos', '', '2025/01/08')],
    ['gestionDeServicios', new Referencia('https://www.ambit-bst.com/blog/itsm.-todo-lo-que-debes-saber-sobre-la-gesti%C3%B3n-de-servicios-it', 'Gestión de servicios tecnologicos', PEOPLE_KEY, 'Gestión de servicios')],
    ['gestionDeActivos', new Referencia('https://freshservice.com/latam/it-asset-management-software/', 'Gestión de activos', PEOPLE_KEY, 'Gestión de activos')],
    ['fidelizacion', new Referencia('https://elviajedelcliente.com/fidelizacion-de-clientes/', 'Fidelización de los clientes', PEOPLE_KEY, 'Fidelizacion')],
    ['modeloDIKW', new Referencia('https://programmerclick.com/article/46021807934/', 'Datos-Info-Conocimiento-Sabiduría', PEOPLE_KEY, 'Modelo DIKW')],
    [Keys.PEOPLE_GESTION_EXPECTATIVAS, new Referencia('https://brainsandbeards.com/blog/expectation-management', 'Gestion de expectativas', PEOPLE_KEY, 'Gestion de expectativas')],
    ['capa8', new Referencia('https://www.merca20.com/que-es-un-error-de-capa-8-y-como-evitas-que-arruine-tu-marketing/', 'Capa 8', PEOPLE_KEY, 'Error en capa 8')],
    [Keys.PEOPLE_NO_NEWS_GOOD_NEWS, new Referencia('https://blog.carreralinux.com.ar/2020/05/si-no-hay-noticias-son-buenas-noticias-no-news-good-news/', 'Sin noticias, Son buenas noticias', PEOPLE_KEY, 'No News Good News', '', '2025/02/02')],
    ['tiposHackers', new Referencia('https://www.freecodecamp.org/news/white-hat-black-hat-red-hat-hackers/', 'Tipos de Hackers (sombreros)', PEOPLE_KEY, 'Tipos de Hackers')],
    ['sindromesLaborales', new Referencia('https://www.sage.com/es-es/blog/burnout-procusto-y-otros-14-sindromes-tipicos-del-mundo-empresarial/#gate-263a5c00-99e4-4e71-8421-469deda8e674', 'Sindromes laborales', PEOPLE_KEY, 'Sindromes Laborales', '2023/06/26')],
    ['icebergIgnorance', new Referencia('https://prevencontrol.com/prevenblog/y-tu-cuanto-sabes-acerca-de-lo-que-ocurre-en-tu-organizacion/', 'Iceberg de la Ignorancia', PEOPLE_KEY, 'Iceberg de la Ignorancia', '2023/08/04')],
    [Keys.PEOPLE_LANGUAGE_UBICUOS, new Referencia('https://hackernoon.com/ubiquitous-language-a-key-to-success-in-professional-environments/', 'Lenguaje Ubicuo', PEOPLE_KEY, 'Lenguaje Ubicuo', '2023/09/03').addRelatedItem(Keys.ESTRATEGIAS_DESARROLLO_DDD)],
    ['hippoEfect', new Referencia('https://www.forbes.com/sites/bernardmarr/2017/10/26/data-driven-decision-making-beware-of-the-hippo-effect/', 'Efecto HIPPO', PEOPLE_KEY, 'Efecto H.I.P.P.O', '2023/11/06')],
    ['burnout', new Referencia('https://chubernetes.com/navigating-tech-industry-burnout-03c015337ba0', 'Sindrome de Burnout', PEOPLE_KEY, 'Burnout', '2024/04/21')],
    [Keys.PEOPLE_ONA, new Referencia('https://www.linkedin.com/posts/jgarzas_an%C3%A1lisis-de-redes-organizacionales-ona-activity-7185677261528842240-EQvR/', 'Analisis de Redes Organizacionales', PEOPLE_KEY, 'ONA', '2024/04/22', '2025/03/17').addRelatedItem(Keys.LEYES_CONWAY)],
    [Keys.PEOPLE_PROCESS_BLOAT, new Referencia('https://ardalis.com/process-bloat-silent-killer-developer-productivity/', 'Hinchazon de procesos', PEOPLE_KEY, 'Process Bloat', '2024/06/01').addRelatedItems(Keys.LEYES_LEHMAN, Keys.METODOLOGIAS_LEAN, Keys.METODOLOGIAS_AGILES)],
    [Keys.PEOPLE_TRIANGLES_SUCCESS, new Referencia('https://www.entrepreneur.com/growing-a-business/the-triangles-of-success-are-more-than-a-good-laugh/279979', 'Triangulos del exito', PEOPLE_KEY, 'Triangulos del exito', '2024/11/21')],
    [Keys.PEOPLE_SOMBREROS_PENSAMIENTO, new Referencia('https://xn--designthinkingespaa-d4b.com/seis-sombreros-para-pensar', 'Sombreros para Pensar', PEOPLE_KEY, 'Sombreros para Pensar', '2024/12/25')],
]);

export const POO_KEY = 'POO';
export const POO_REF = new Map<string, Referencia>([
    [Keys.POO_POO, new Referencia('https://desarrolloweb.com/articulos/499.php', 'Programación Orientada a Objetos', POO_KEY, 'POO')],
    [Keys.POO_POO_PILARES, new Referencia('https://www.campusmvp.es/recursos/post/los-conceptos-fundamentales-sobre-programacion-orientada-objetos-explicados-de-manera-simple.aspx', 'Pilares de POO', POO_KEY, 'Pilares POO')],
    ['composicion', new Referencia('https://www.seas.es/blog/informatica/agregacion-vs-composicion-en-diagramas-de-clases-uml/', 'Agregación & Composición', POO_KEY, 'Relaciones')],
    ['pooStatic', new Referencia('https://desarrolloweb.com/articulos/metodos-atributos-static-poo.html', 'palabra reservada static', POO_KEY, 'Static en POO')],
    ['acoplamiento', new Referencia('https://jummp.wordpress.com/2010/06/26/acoplamiento-aferente-acoplamiento-eferente-inestabilidad-y-abstraccion-i/', 'Tipos de acoplamiento', POO_KEY, 'Acoplamiento')],
    [Keys.POO_DESIGN_BY_CONTRACT, new Referencia('https://dosideas.com/wiki/Dise%C3%B1o_Por_Contrato', 'Diseño por Contratos', POO_KEY, 'Contratos I', '', '2025/01/08')],
    [Keys.POO_DESIGN_BY_CONTRACT_PARTS, new Referencia('https://opendatascience.com/dissecting-the-software-designing-approach-of-design-by-contract/', 'Pre/Post condiciones, Invariantes', POO_KEY, 'Contratos II', '2025/01/08').addRelatedItem(Keys.PRINCIPIOS_SOLID)],
    ['descomposicion', new Referencia('http://miguedt.blogspot.com/2013/01/descomposicion-funcional.html', 'Descomposición', POO_KEY, 'Descomposición')],
    [Keys.POO_HERENCIA, new Referencia('https://www.ecured.cu/Herencia_(Inform%C3%A1tica)', 'Herencia', POO_KEY, 'Herencia', '', '2024/12/10')],
    [Keys.POO_POLIMORFISMO, new Referencia('https://ifgeekthen.nttdata.com/es/polimorfismo-en-java-programaci%C3%B3n-orientada-objetos', 'Polimorfismo & Sobrecarga', POO_KEY, 'Polimorfismo/Sobrecarga', '', '2025/03/19').addRelatedItems(Keys.COMPILACION_COMPILACION, Keys.META_CARACTERISTICAS_GENERICS, Keys.PRINCIPIOS_SOLID)],
    [Keys.POO_HERENCIA_COMPOSICION, new Referencia('https://devexperto.com/herencia-vs-composicion/', 'Herencia VS Composición', POO_KEY, 'Herencia VS Composición', '', '2025/03/20')],
    //['enlaces', new Referencia('https://es.fondoperlaterra.org/comdifference-between-static-and-dynamic-binding-2', 'Enlace estatico & dinamico', POO_KEY, 'Enlaces')],
    [Keys.POO_ENLACES, new Referencia('https://www.geeksforgeeks.org/static-vs-dynamic-binding-in-java/', 'Enlace estatico & dinamico', POO_KEY, 'Enlaces', '', '2024/10/27')],
    [Keys.POO_COUPLING_COMPONENTS, new Referencia('https://mg-laboratory.tistory.com/189', 'Acoplamiento de componentes', POO_KEY, 'SDP, ADP, SAP')],
    ['beginingPoo', new Referencia('https://medium.com/javascript-scene/the-forgotten-history-of-oop-88d71b9b2d9f', 'Nacimiento de Poo', POO_KEY, 'Inicios de POO')],
    [Keys.POO_INMUTABILITY, new Referencia('https://www.campusmvp.es/recursos/post/programacion-funcional-inmutabilidad-y-funciones-puras.aspx', 'Inmutabilidad', POO_KEY, 'Inmutabilidad')],
    ['typesPolimorfismo', new Referencia('https://medium.com/lenguajes-y-dialectos-en-programaci%C3%B3n/polimorfismo-y-paradigmas-tipos-y-ejemplos-ca6a56093a66', 'Tipos de Polimorfismo', POO_KEY, 'Tipos de Polimorfismo')],
    ['factoryMethods', new Referencia('https://www.baeldung.com/java-constructors-vs-static-factory-methods', 'Factory Methods', POO_KEY, 'Factory Methods', '2022/11/07')],
    ['interfacesOverInheritance', new Referencia('https://www.infoworld.com/article/2073649/why-extends-is-evil.html', 'Interfaces VS Herencia', POO_KEY, 'Interfaces VS Herencia', '2023/03/13')],
    ['enumeraciones', new Referencia('https://jarroba.com/enum-enumerados-en-java-con-ejemplos/', 'Enumeraciones', POO_KEY, 'Enumeraciones', '', '2024/05/05')],
    [Keys.POO_COUPLING_AND_COHESION, new Referencia('https://ducmanhphan.github.io/2019-03-23-Coupling-and-Cohension-in-OOP/', 'Acoplamiento & Cohesion', POO_KEY, 'Acoplamiento & Cohesion', '', '2024/10/27')],
    [Keys.POO_CALISTHENICS, new Referencia('https://keyvanakbary.com/object-calisthenics-mejora-tu-diseno-orientado-a-objetos/', 'Calistenia de Objetos', POO_KEY, 'Calistenia de Objetos', '2025/09/02').addRelatedItems(Keys.CALIDAD_IF_ELSE, Keys.BUENAS_PRACTICAS_DEMETER, Keys.PRINCIPIOS_SOLID, Keys.BUENAS_PRACTICAS_COMPLEJIDAD, Keys.META_ESTRUCTURAS_VALUE_OBJECTS)],
]);

export const TESTING_KEY = 'Testing';
export const TESTING_REF = new Map<string, Referencia>([
    ['principios', new Referencia('https://todosqa.com/siete-principios-del-proceso-de-prueba/', 'Principios de testing', TESTING_KEY, 'Principios de testing')],
    ['manifiesto', new Referencia('https://www.adictosaltrabajo.com/2019/12/18/testing-en-un-mundo-agile/', 'Manifiesto para testing', TESTING_KEY, 'Testing manifiesto')],
    //['tiposPruebas', new Referencia('https://visual-engin.com/2017/10/26/importancia-pruebas-de-software-testing/', 'Tipos de pruebas', TESTING_KEY, 'Tipos')],
    ['tiposPruebas', new Referencia('https://www.certus.edu.pe/blog/pruebas-de-software-importancia/', 'Tipos de pruebas', TESTING_KEY, 'Tipos', '', '2024/07/11')],
    ['beneficios', new Referencia('https://platzi.com/blog/testing-ventajas-formas-de-realizar-pruebas/', 'Beneficios del testing', TESTING_KEY, 'Beneficios')],
    ['nombramiento', new Referencia('https://www.petrikainulainen.net/programming/testing/writing-clean-tests-naming-matters/', 'Nombramiento de los componentes', TESTING_KEY, 'Nombramiento')],
    ['first', new Referencia('https://www.paradigmadigital.com/dev/principio-first-aumentar-la-calidad-tests-unitarios/', 'Principio FIRST', TESTING_KEY, 'Principio FIRST')],
    [Keys.TESTING_DATA_SUT_DOC, new Referencia('https://www.javiergarzas.com/2015/09/que-estoy-probando-y-cuales-son-mis-dependencias-en-testing.html', 'SUT & DOC', TESTING_KEY, 'SUT & DOC', '', '2024/07/14')],
    [Keys.TESTING_MOCKS, new Referencia('https://www.codurance.com/publications/2019/04/08/introduction-to-test-doubles', 'Mocks', TESTING_KEY, 'Mocks')],
    //['aaa', new Referencia('http://oscarmoreno.com/pruebas-unitarias/', 'Arrange-Act-Assert', TESTING_KEY, 'AAA')],
    ['aaa', new Referencia('https://medium.com/@rojasjimenezjosea/aaa-unit-testing-688e3e61902a', 'Arrange-Act-Assert', TESTING_KEY, 'AAA', '', '2024/07/11')],
    ['gwt', new Referencia('https://softwareengineering.stackexchange.com/questions/308160/differences-between-given-when-then-gwt-and-arrange-act-assert-aaa', 'Given-When-Then', TESTING_KEY, 'GWT')],
    [Keys.TESTING_PIRAMIDE, new Referencia('https://medium.com/@wc.testing.qa/la-famosa-pir%C3%A1mide-de-cohn-y-la-dura-realidad-e1250dfbe5f3', 'Piramide de tests', TESTING_KEY, 'Piramide de tests', '', '2024/12/26')],
    ['triangulo', new Referencia('https://proyectosagiles.org/triangulo-hierro/', 'Triangulo de Hierro', TESTING_KEY, 'Triangulo de Hierro')],
    ['cobertura', new Referencia('https://argonur.com/2020/05/11/code-coverage-cobertura-de-codigo/', 'Cobertura de pruebas', TESTING_KEY, 'Cobertura')],
    //['falsos', new Referencia('https://www.qalovers.com/2015/03/diferencia-entre-falso-positivo-y-falso_5.html#:~:text=La%20definici%C3%B3n%20de%20falso%20negativo,sistema%20que%20est%C3%A1%20realmente%20infectada.%22&text=Un%20falso%20negativo%20llevado%20a,cuando%20en%20realidad%20est%C3%A1%20fallando.', 'Falsos positivos & Falsos negativos', TESTING_KEY, 'Falsos Resultados')],
    ['falsos', new Referencia('https://www.redradix.com/insights/detalles-implementacionl-tests-articulo-de-kentc-dodds', 'Falsos positivos & Falsos negativos', TESTING_KEY, 'Falsos Resultados')],
    [Keys.TESTING_QUALITY_ASSURANCE, new Referencia('https://www.bbvaapimarket.com/es/mundo-api/que-es-qa-y-por-que-no-debe-faltar-en-tu-proyecto/', '¿ Que es QA ?', TESTING_KEY, 'Quality Assurance', '', '2025/03/15').addRelatedItem(Keys.PEOPLE_GESTION_EXPECTATIVAS)],
    [Keys.TESTING_DATA_CREATION, new Referencia('https://www.linkedin.com/pulse/creating-test-data-object-mother-builder-patterns-alves-pimenta/', 'Patrones de creación de datos', TESTING_KEY, 'Creación de datos', '2024/07/11')],
    [Keys.TESTING_FIVE_FACTORS, new Referencia('https://madeintandem.com/blog/five-factor-testing/', 'Five Factor Testing', TESTING_KEY, 'Five Factor Testing', '2025/03/02').addRelatedItems(Keys.VERSIONAMIENTO_DOCUMENTATION, Keys.ANALISIS_OPINIONATED_NO, Keys.REFACTORING_LEGACY_CODE)],
]);

export const TESTING_ADVANCED_KEY = 'Testing-Avanzado';
export const TESTING_ADVANCED_REF = new Map<string, Referencia>([
    ['cajaNegraBlanca', new Referencia('https://www.testermoderno.com/caja-blanca-vs-caja-negra/', 'Tests de Caja negra & Caja blanca', TESTING_ADVANCED_KEY, 'Caja Negra & Blanca')],
    //['valorLimite', new Referencia('https://educandocontic.com/valores-limite-pruebas/', 'Valores limite', TESTING_ADVANCED_KEY, 'Valores Limites')],
    [Keys.TESTING_ADVANCED_VALOR_LIMITE, new Referencia('https://www.linkedin.com/pulse/an%C3%A1lisis-de-valores-l%C3%ADmite-asegurando-la-calidad-en-los-oscar-trejo-taeff/', 'Valores limite', TESTING_ADVANCED_KEY, 'Valores Limites', '2024/07/14', '2025/01/04')],
    //['clasesEquivalencia', new Referencia('https://educandocontic.com/particiones-de-equivalencia/', 'Clases de equivalencia', TESTING_ADVANCED_KEY, 'Equivalencias')],
    ['clasesEquivalencia', new Referencia('https://www.diariodeqa.com/post/tecnicas-de-prueba-de-caja-negra', 'Clases de equivalencia', TESTING_ADVANCED_KEY, 'Equivalencias', '', '2024/07/14')],
    ['grafosCausaEfecto', new Referencia('https://platzi.com/tutoriales/1421-pruebas-software/9606-pruebas-con-grafos-causa-efecto/', 'Grafos Causa -> Efecto', TESTING_ADVANCED_KEY, 'Causa -> Efecto')],
    ['tiposDePruebas', new Referencia('https://www.softwaretestinghelp.com/types-of-software-testing/', 'Clasificación de las pruebas', TESTING_ADVANCED_KEY, 'Tipos de pruebas')],
    ['outsideInside', new Referencia('https://www.adictosaltrabajo.com/2016/01/29/tdd-outside-in-vs-inside-out/', 'TDD: Outside-In VS Inside-out', TESTING_ADVANCED_KEY, 'Outside & Inside', '', '2024/07/14').addRelatedItem(Keys.ESTRATEGIAS_DESARROLLO_TDD)],
    ['casosDePruebas', new Referencia('https://medium.com/grupo-carricay/qu%C3%A9-son-los-casos-de-pruebas-4893799b5b84', 'Casos de prueba', TESTING_ADVANCED_KEY, 'Casos de prueba')],
    ['casosDeUso', new Referencia('https://blogs.encamina.com/piensa-en-software-desarrolla-en-colores/qa-caso-de-uso-vs-caso-de-prueba/', 'Casos de uso', TESTING_ADVANCED_KEY, 'Casos de uso')],
    [Keys.TESTING_ADVANCED_SMELLS_CODES1, new Referencia('https://codingcraftsman.wordpress.com/2018/09/27/test-smells/', 'Smells codes en testing #1', TESTING_ADVANCED_KEY, 'Smells codes en testing #1')],
    [Keys.TESTING_ADVANCED_SMELLS_CODES2, new Referencia('https://codingcraftsman.wordpress.com/2018/09/27/test-smells/', 'Smells codes en testing #2', TESTING_ADVANCED_KEY, 'Smells codes en testing #2')],
    [Keys.TESTING_ADVANCED_MUTATION, new Referencia('https://spa.myservername.com/what-is-mutation-testing', 'Tests de mutación', TESTING_ADVANCED_KEY, 'Pruebas de mutación')],
    [Keys.TESTING_ADVANCED_ANTI_PATTERNS, new Referencia('https://agileinaflash.blogspot.com/2009/06/tdd-antipatterns.html', 'TDD Antipatrones', TESTING_ADVANCED_KEY, 'TDD Antipatrones', '2024/07/14').addRelatedItems(Keys.ESTRATEGIAS_DESARROLLO_TDD, Keys.TESTING_DATA_SUT_DOC)],
    [Keys.TESTING_ADVANCED_APDEX, new Referencia('https://www.techtarget.com/searchitoperations/definition/Application-Performance-Index-Apdex', 'Application Performance Index', TESTING_ADVANCED_KEY, 'Apdex', '2024/12/16').addRelatedItems(Keys.HARDWARE_MONITOREO, Keys.APIS_TESTING)],
    [Keys.TESTING_ADVANCED_COSTS, new Referencia('https://fastercapital.com/es/contenido/Costo-de-las-pruebas--como-calcular-el-costo-de-verificar-la-calidad-o-el-rendimiento-de-un-producto-o-sistema.html', 'Costos del Testing', TESTING_ADVANCED_KEY, 'Costos', '2025/01/04')],
    [Keys.TESTING_ADVANCED_ISOLATION, new Referencia('https://mrslavchev.com/2018/08/03/hindsight-lessons-about-automation-test-isolation-principle/', 'Aislamiento de pruebas', TESTING_ADVANCED_KEY, 'Aislamiento', '2025/02/02')],
    [Keys.TESTING_ADVANCED_CHARGE, new Referencia('https://www.headspin.io/blog/best-performance-testing-tools', 'Pruebas de carga', TESTING_ADVANCED_KEY, 'Performance', '2025/02/11').addRelatedItems(Keys.ANALISIS_DATA_DSL, Keys.NUBE_OBSERVABILIDAD, Keys.META_CARACTERISTICAS_MEMORY_SAFETY, Keys.VERSIONAMIENTO_LICENSES)],
    [Keys.TESTING_ADVANCED_ARCH_UNIT, new Referencia('https://www.baeldung.com/java-archunit-intro', 'Tests sobre la Arquitectura', TESTING_ADVANCED_KEY, 'ArchUnit', '2025/03/06').addRelatedItems(Keys.META_ESTRUCTURAS_VERTICAL_AND_HORIZONTAL, Keys.ARQUITECTURAS_IMPORTANT_CONCEPTS, Keys.ARQUITECTURAS_MVC, Keys.ESTRATEGIAS_DESARROLLO_DDD)],
]);

export const REFACTORING_KEY = 'Refactorizacion';
export const REFACTORING_REF = new Map<string, Referencia>([
    [Keys.REFACTORING_CLEAN_CODE, new Referencia('https://refactoring.guru/es/refactoring/what-is-refactoring', '¿ Que es Codigó Limpio ?', REFACTORING_KEY, 'Codigó Limpio')],
    [Keys.REFACTORING_DEUDA_TECNICA, new Referencia('https://refactoring.guru/es/refactoring/technical-debt', 'Deuda tecnica', REFACTORING_KEY, 'Deuda tecnica')],
    ['tiposDeudaTecnica', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/deuda-tecnica-explicada/', 'Tipos de deuda tecnica', REFACTORING_KEY, 'Tipos de deuda')],
    ['comentarios', new Referencia('https://www.scrummanager.net/bok/index.php?title=Deuda_t%C3%A9cnica', 'Comentarios especiales', REFACTORING_KEY, 'Comentar la deuda')],
    ['cuandorefactorizar', new Referencia('https://refactoring.guru/es/refactoring/when', '¿ Cuando refactorizar ?', REFACTORING_KEY, '¿ Cuando ?')],
    ['comorefactorizar', new Referencia('https://refactoring.guru/es/refactoring/how-to', '¿ Como refactorizar ? ', REFACTORING_KEY, '¿ Como ?')],
    ['tecnicasRefactoring', new Referencia('https://refactoring.guru/es/refactoring/techniques', 'Tecnicas para refactorizar', REFACTORING_KEY, 'Tecnicas')],
    ['cuandoNoRefactorizar', new Referencia('https://www.digite.com/es/agile/refactorizacion-en-agil/', 'Cuando No Refactorizar', REFACTORING_KEY, 'Cuando No', '2023/01/22')],
    [Keys.REFACTORING_LEGACY_CODE, new Referencia('https://jesuslc.com/2020/11/21/tecnicas-para-mantener-al-legacy-code-bajo-control/', 'Refactorizar el Legacy Code', REFACTORING_KEY, 'Refactor en Legacy code', '2023/02/05', '2025/03/02')],
    [Keys.REFACTORING_MANAGE_DEUDA_TECNICA, new Referencia('https://newsletter.techworld-with-milan.com/p/how-to-deal-with-technical-debt', 'Manejo de la deuda tecnica', REFACTORING_KEY, '¿ Como manejarla ?', '2024/05/12')],
    [Keys.REFACTORING_MANAGE_DEPENDENCIES, new Referencia('https://levelup.gitconnected.com/world-of-dependencies-4639100d16ef', 'Manejo de las dependencias', REFACTORING_KEY, 'Dependencias', '2024/06/09').addRelatedItems(Keys.META_ESTRUCTURAS_MAQUINA_ESTADOS, Keys.ARQUITECTURAS_CAPAS, Keys.FRAMEWORKS_IOD)],
    [Keys.REFACTORING_GOOD_AND_BAD_PRACTICES, new Referencia('https://www.builder.io/blog/good-vs-bad-refactoring', 'Buenas & Malas practicas', REFACTORING_KEY, 'Buenas & Malas practicas', '2024/09/08').addRelatedItems(Keys.WEB_SEO, Keys.PRINCIPIOS_KISS)],
    [Keys.REFACTORING_REWRITE_TRAP, new Referencia('https://levelup.gitconnected.com/the-endless-rewrite-why-developers-fall-into-the-start-from-scratch-trap-and-how-to-avoid-it-4a2246837ac5', 'Refactorización & Reconstrucción', REFACTORING_KEY, 'Reconstrucción', '2025/01/01').addRelatedItems(Keys.CONOCIMIENTOS_EMPIRICOS_COSTO_HUNDIDO, Keys.PATRONES_STRANGLER_FIG)],
]);

export const REQUISITOS_KEY = 'Requisitos';
export const REQUISITOS_REF = new Map<string, Referencia>([
    [Keys.REQUISITOS_FUNCIONALES, new Referencia('https://medium.com/@requeridosblog/requerimientos-funcionales-y-no-funcionales-ejemplos-y-tips-aa31cb59b22a', 'Requisitos funcionales', REQUISITOS_KEY, 'Funcionales')],
    [Keys.REQUISITOS_NO_FUNCIONALES, new Referencia('https://medium.com/@requeridosblog/requerimientos-funcionales-y-no-funcionales-ejemplos-y-tips-aa31cb59b22a', 'Requisitos No funcionales', REQUISITOS_KEY, 'NO Funcionales')],
    //['negocio', new Referencia('https://requeridos.com/que-es-el-valor-de-negocio-y-como-medirlo/', 'El valor del negocio', REQUISITOS_KEY, 'EL Negocio')],
    [Keys.REQUISITOS_BUSINESS_VALUE, new Referencia('https://www.elproximopaso.net/2012/03/8-otra-maneras-de-definir-el-valor-de.html', 'El valor del negocio', REQUISITOS_KEY, 'EL Negocio', '', '2024/09/27')],
    //['ambiguedad', new Referencia('https://requeridos.com/requerimientos-menos-es-mas/', 'Evitar la ambiguedad', REQUISITOS_KEY, 'Evitar la ambiguedad')],
    [Keys.REQUISITOS_AMBIGUITY, new Referencia('https://www.blmovil.com/la-importancia-de-una-buena-captura-de-requisitos-en-el-desarrollo-de-software/', 'Evitar la ambiguedad', REQUISITOS_KEY, 'Evitar la ambiguedad', '2024/09/27')],
    ['calidad', new Referencia('https://platzi.com/tutoriales/1248-pro-arquitectura/5498-atributos-de-calidad-de-un-producto-de-software/', 'Atributos de calidad', REQUISITOS_KEY, 'Atributos de calidad')],
    [Keys.REQUISITOS_TRADE_OFF, new Referencia('https://medium.com/analysts-corner/those-other-requirements-quality-attributes-and-their-inescapable-tradeoffs-31dc0691974d', 'Sacrificios y ganancias', REQUISITOS_KEY, 'Trade-offs')],
    [Keys.REQUISITOS_OBJETIVOS, new Referencia('https://www.pqforce.com/es/blog/objetivos-frente-a-requisitos-cual-es-la-diferencia/', 'Objetivos & Requisitos', REQUISITOS_KEY, 'Objetivos & Requisitos')],
    ['cambioDeRequisitos', new Referencia('https://www.javiergarzas.com/2021/04/en-un-sistema-software-los-requisitos-casi-siempre-van-a-cambiar.html', 'Los requisitos cambian', REQUISITOS_KEY, 'Cambios', '2024/03/10')],
    [Keys.REQUISITOS_REQUIREMENTS_ENGINEERING, new Referencia('https://xebrio.com/requirements-engineering/', 'Ingenieria y Toma de Requisitos', REQUISITOS_KEY, '¿ Como Tomarlos ?', '2024/09/27').addRelatedItem(Keys.ESTRATEGIAS_DESARROLLO_SLDC)],
]);

export const PRINCIPIOS_KEY = 'Principios';
export const PRINCIPIOS_REF = new Map<string, Referencia>([
    [Keys.PRINCIPIOS_SOLID, new Referencia('https://profile.es/blog/principios-solid-desarrollo-software-calidad/', 'Principios SOLID', PRINCIPIOS_KEY, 'SOLID')],
    [Keys.PRINCIPIOS_KISS, new Referencia('https://manuelzapata.co/principio-kiss-keep-it-simple-stupid/', 'Mantenlo simple, estupido', PRINCIPIOS_KEY, 'KISS')],
    ['yagni', new Referencia('https://www.genbeta.com/desarrollo/la-navaja-de-occam-kiss-y-yagni-la-simplicidad-en-el-codigo-no-deberia-ser-solo-postureo-developer', 'No vas a necesitarlo', PRINCIPIOS_KEY, 'YAGNI')],
    ['occam', new Referencia('https://www.genbeta.com/desarrollo/la-navaja-de-occam-kiss-y-yagni-la-simplicidad-en-el-codigo-no-deberia-ser-solo-postureo-developer', 'La navaja de Occam', PRINCIPIOS_KEY, 'Occam')],
    [Keys.PRINCIPIOS_DRY, new Referencia('https://medium.com/@psdevraye/mastering-the-dry-principle-in-java-a-guide-to-cleaner-code-afd889bfca42', 'No te repitas', PRINCIPIOS_KEY, 'DRY', '', '2024/10/18')],
    [Keys.PRINCIPIOS_HOLLYWOOD, new Referencia('https://www.genbeta.com/desarrollo/doce-principios-de-diseno-que-todo-desarrollador-deberia-conocer', 'No nos llames, nosotros te llamamos', PRINCIPIOS_KEY, 'Hollywood')],
    [Keys.PRINCIPIOS_TELL_DONT_ASK, new Referencia('https://www.disrupciontecnologica.com/tell-dont-ask/', 'Dile, no le preguntes', PRINCIPIOS_KEY, 'Tell, Don´t Ask', '', '2025/02/02')],
    ['stupid', new Referencia('https://williamdurand.fr/2013/07/30/from-stupid-to-solid-code/#singleton', 'NO seas S.T.U.P.I.D', PRINCIPIOS_KEY, 'STUPID')],
    ['twice-one', new Referencia('https://betterprogramming.pub/measure-twice-cut-once-isnt-very-agile-3af456d932b9', 'Mide 2 veces, Corta 1 vez', PRINCIPIOS_KEY, '2-1')],
    ['divide-conquer', new Referencia('https://betterprogramming.pub/10-design-principles-in-software-engineering-f88647cf5a07', 'Divide y Conquistaras', PRINCIPIOS_KEY, 'Dividir y Conquistar')],
    [Keys.PRINCIPIOS_SOC, new Referencia('https://geeksprogramming.com/key-principles-in-software-and-acronyms/', 'Separacion de Conceptos', PRINCIPIOS_KEY, 'SOC', '2024/01/13')],
    [Keys.PRINCIPIOS_POC, new Referencia('https://geeksprogramming.com/key-principles-in-software-and-acronyms/', 'Prueba de Concepto', PRINCIPIOS_KEY, 'POC', '2024/01/13')],
    [Keys.PRINCIPIOS_SLAP, new Referencia('https://medium.com/javarevisited/slap-that-ugly-code-6ec276d3a4bc', 'Principio de abstracción de un solo nivel', PRINCIPIOS_KEY, 'SLAP', '2025/02/02')],
]);

export const SECURITY_KEY = 'Seguridad';
export const SECURITY_REF = new Map<string, Referencia>([
    //['firewall', new Referencia('https://idgrup.com/firewall-que-es-y-como-funciona/#:~:text=Un%20firewall%2C%20tambi%C3%A9n%20llamado%20cortafuegos,ordenadores%20de%20una%20misma%20red', 'Firewall', SECURITY_KEY, 'Firewall')],
    ['firewall', new Referencia('https://www.cisco.com/c/es_mx/products/security/firewalls/what-is-a-firewall.html', 'Firewall', SECURITY_KEY, 'Firewall', '', '2024/06/16')],
    [Keys.SECURITY_PROTOCOLOS_SEGURITY, new Referencia('https://www.websecurity.digicert.com/es/es/security-topics/what-is-ssl-tls-https', 'SSL, TSL, HTTPS', SECURITY_KEY, 'SSL, TSL, HTTPS')],
    [Keys.SECURITY_PROXY, new Referencia('https://www.welivesecurity.com/la-es/2020/01/02/que-es-proxy-para-que-sirve/', 'Proxy & Proxy Inverso', SECURITY_KEY, 'Proxy & Proxy Inverso', '', '2025/02/15')],
    ['ciberSeguridad', new Referencia('https://latam.kaspersky.com/resource-center/definitions/what-is-cyber-security', 'Ciberseguridad y otras amenazas', SECURITY_KEY, 'Ciberseguridad')],
    //['cia', new Referencia('https://searchdatacenter.techtarget.com/es/opinion/Que-es-la-triada-de-la-CIA', 'Confidencialidad-Integridad-Accesibilidad ', SECURITY_KEY, 'CIA')],
    ['cia', new Referencia('https://www.computerweekly.com/es/opinion/Que-es-la-triada-de-la-CIA', 'Confidencialidad-Integridad-Accesibilidad ', SECURITY_KEY, 'CIA', '', '2024/06/16')],
    ['noRepudio', new Referencia('https://www.unir.net/ingenieria/revista/no-repudio-seguridad-informatica/', 'No repudio', SECURITY_KEY, 'NO Repudio')],
    ['matrizDeRiesgo', new Referencia('https://www.protek.com.py/novedades/objetivos-de-una-matriz-de-riesgos/', 'Matriz de Riesgo', SECURITY_KEY, 'Matriz de Riesgo')],
    ['condicionDeCarrera', new Referencia('https://ciberseguridad.com/amenzas/vulnerabilidades/condicion-de-carrera/', 'Condición de Carrera', SECURITY_KEY, 'Carrera')],
    ['honeypot', new Referencia('https://latam.kaspersky.com/resource-center/threats/what-is-a-honeypot', 'Honetypot', SECURITY_KEY, 'Honeypot')],
    ['zeroDayExploit', new Referencia('https://latam.kaspersky.com/resource-center/definitions/zero-day-exploit', 'Zero Day Exploit', SECURITY_KEY, 'Zero Day Exploit')],
    ['pentest', new Referencia('https://www.hiberus.com/crecemos-contigo/pentesting-owasp-fases-metodologia/', 'Testing de intrusión', SECURITY_KEY, 'Test de Intrusión')],
    ['owaspTop', new Referencia('https://owasp.org/Top10/', 'OWASP Top 10', SECURITY_KEY, 'OWASP Top 10')],
    ['stride', new Referencia('https://www.softwaresecured.com/post/stride-threat-modelling', 'STRIDE', SECURITY_KEY, 'STRIDE')],
    ['ciam', new Referencia('https://auth0.com/blog/why-do-you-need-ciam/', 'CIAM', SECURITY_KEY, 'CIAM')],
    ['lateralChanel', new Referencia('https://ciberseguridad.com/amenzas/ataque-canal-lateral/', 'Ataques de canal lateral', SECURITY_KEY, 'Ataques de canal lateral')],
    ['csp', new Referencia('https://auth0.com/blog/from-zero-to-hero-with-csp/', 'Content Security Police', SECURITY_KEY, 'Content Security Police', '2022/11/07')],
    ['csrf', new Referencia('https://www.welivesecurity.com/la-es/2015/04/21/vulnerabilidad-cross-site-request-forgery-csrf/', 'Cross Site Request Forgery', SECURITY_KEY, 'CSRF', '2023/01/06')],
    ['restApiAuth', new Referencia('https://blog.bytebytego.com/p/ep91-rest-api-authentication-methods', 'Autenticación en APIs REST', SECURITY_KEY, 'REST API Authentication', '2024/02/15')],
    ['attacksOnModelOSI', new Referencia('https://blog.bytebytego.com/p/ep97-10-good-coding-principles-to#%C2%A7top-network-security-cheatsheet', 'Ataques contra el Modelo OSI', SECURITY_KEY, 'Modelo OSI', '2024/03/21')],
    [Keys.SECURITY_LEAST_PRIVILEGE, new Referencia('https://www.cyberark.com/what-is/least-privilege/', 'Menor privilegio', SECURITY_KEY, 'Menor Privilegio', '2024/06/16')],
    [Keys.SECURITY_AUTHENTICATION_WAYS, new Referencia('https://medium.com/@iamprovidence/authentication-history-basic-digest-cookie-session-token-jwt-api-key-55d6c21be90b', 'Formas de Authenticación', SECURITY_KEY, 'Authenticación', '2024/07/21')],
    [Keys.SECURITY_RBAC_ABAC, new Referencia('https://www.strongdm.com/blog/rbac-vs-abac', 'Control de Acceso', SECURITY_KEY, 'Control de Acceso', '2025/01/02')]
]);

export const SMELL_CODES_KEY = 'Smell-Codes';
export const SMELL_CODES_REF = new Map<string, Referencia>([
    [Keys.SMELL_CODES_SMELLS_CODES, new Referencia('https://openwebinars.net/blog/code-smells-y-deuda-tecnica/', 'Smell Codes', SMELL_CODES_KEY, 'Smell Codes', '2021/06/06', '2024/12/29').addRelatedItems(Keys.REFACTORING_DEUDA_TECNICA, Keys.PRINCIPIOS_DRY)],
    [Keys.SMELL_CODES_TYPES, new Referencia('https://refactoring.guru/es/refactoring/smells', 'Tipos de Smell Codes', SMELL_CODES_KEY, 'Tipos', '2021/06/06')],
    [Keys.SMELL_CODES_DESGLOSE, new Referencia('https://refactoring.guru/es/refactoring/smells', 'Smell Codes por tipo', SMELL_CODES_KEY, 'Desglose', '2021/06/06')],
    [Keys.SMELL_CODES_EXCEPTIONS, new Referencia('https://refactoring.guru/es/refactoring/smells', 'Casos donde pueden ser ignorados', SMELL_CODES_KEY, 'Casos especiales', '2021/06/06')],
    [Keys.SMELL_CODES_PAY_OFF, new Referencia('https://refactoring.guru/es/refactoring/smells', 'Beneficios de corregir Code Smells', SMELL_CODES_KEY, 'Ganancias', '2021/06/06')],
    [Keys.SMELL_CODES_DESIGN, new Referencia('https://www.alpharithms.com/code-smell-492316/', 'Code smells en Diseño', SMELL_CODES_KEY, 'A nivel de Diseño', '2023/01/22')],
    [Keys.SMELL_CODES_ARCHITECTURAL_SMELLS, new Referencia('https://docs.arcan.tech/latest/architectural_smells/', 'Code smells en Arquitecturas', SMELL_CODES_KEY, 'A nivel de arquitectura', '2024/12/29').addRelatedItems(Keys.POO_COUPLING_COMPONENTS, Keys.POO_COUPLING_AND_COHESION, Keys.PATRONES_GOF, Keys.POO_HERENCIA, Keys.ANALISIS_SINGLE_POINT_OF_FAILURE)],
]);

export const PERSISTENCY_KEY = 'Bases de Datos'
export const PERSISTENCY_REF = new Map<string, Referencia>([
    ['sql', new Referencia('https://www.w3schools.com/sql/default.asp', '¿ Que es SQL ?', PERSISTENCY_KEY, 'SQL')],
    //[Keys.PERSISTENCY_DBMS, new Referencia('https://www.astera.com/es/type/blog/database-management-software/', 'Software de Gestion de Bases de Datos', PERSISTENCY_KEY, 'DBMS')],
    [Keys.PERSISTENCY_DBMS, new Referencia('https://www.conectasoftware.com/magazine/glosario/dbms/', 'Software de Gestion de Bases de Datos', PERSISTENCY_KEY, 'DBMS', '', '2025/01/26')],
    ['crud', new Referencia('https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/crud-las-principales-operaciones-de-bases-de-datos/', 'Create, Read, Update, Delete', PERSISTENCY_KEY, 'CRUD')],
    [Keys.PERSISTENCY_DL, new Referencia('https://www.linkedin.com/posts/brijpandeyji_a-solid-grasp-of-sql-is-crucial-for-anyone-activity-7240803134258782208-ElvO/', 'DQL, DDL, DML, DCL, TCL', PERSISTENCY_KEY, 'DQL, DDL, DML, DCL, TCL', '2024/09/15', '2025/01/26')],
    ['integridad', new Referencia('https://platzi.com/blog/que-es-ddl-dml-dcl-y-tcl-integridad-referencial/', 'Integridad Referencial', PERSISTENCY_KEY, 'Integridad')],
    [Keys.PERSISTENCY_ERD, new Referencia('https://www.lucidchart.com/pages/es/que-es-un-diagrama-entidad-relacion', 'Diagrama Entidad Relación', PERSISTENCY_KEY, 'ERD', '', '2025/01/04')],
    //[Keys.PERSISTENCY_NORMALIZATION, new Referencia('https://docs.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description', 'Normalización', PERSISTENCY_KEY, 'Normalización')],
    [Keys.PERSISTENCY_NORMALIZATION, new Referencia('https://www.datacamp.com/es/tutorial/normalization-in-sql', 'Normalización', PERSISTENCY_KEY, 'Normalización', '', '2025/02/17')],
    [Keys.PERSISTENCY_ACID, new Referencia('https://dosideas.com/noticias/base-de-datos/973-acid-en-las-bases-de-datos', 'Esquema ACID', PERSISTENCY_KEY, 'ACID')],
    //['indices', new Referencia('https://www.ibm.com/docs/es/mam/7.6.0.8?topic=databases-database-indexing', 'Indices', PERSISTENCY_KEY, 'Indices')],
    [Keys.PERSISTENCY_INDICES, new Referencia('https://www.adesso.es/es/noticias/blog/indices-de-bases-de-datos-la-clave-para-la-optimizacion-del-rendimiento.jsp', 'Indices', PERSISTENCY_KEY, 'Indices', '', '2024/02/04').addRelatedItem(Keys.META_ESTRUCTURAS_ESTRUCTURAS_DATOS_2)],
    ['joins', new Referencia('https://ingenieriadesoftware.es/tipos-sql-join-guia-referencia/', 'Tipos de Joins', PERSISTENCY_KEY, 'Tipos de Joins')],
    ['constraints', new Referencia('https://www.w3schools.com/sql/sql_constraints.asp', 'Constraints', PERSISTENCY_KEY, 'Constraints', '2023/10/03')],
    [Keys.PERSISTENCY_DB_DESIGN, new Referencia('https://dzone.com/articles/what-is-good-database-design', 'Diseño de una BD', PERSISTENCY_KEY, 'Diseño', '2023/11/23')],
    [Keys.PERSISTENCY_OPTIMIZE_SLOW_QUERIES, new Referencia('https://digma.ai/how-to-optimize-slow-sql-queries/', 'Optimización de consultas', PERSISTENCY_KEY, 'Optimización', '2024/06/09').addRelatedItems(Keys.PERSISTENCY_ADVANCED_ORM, Keys.PERSISTENCY_ADVANCED_N_1_SELECTS)],
    [Keys.PERSISTENCY_SCHEMAS, new Referencia('https://buttondown.email/jaffray/archive/in-codd-we-trust-or-not', 'Esquema Fisico Vs Esquema Logico', PERSISTENCY_KEY, 'Esquemas (Schema)', '2024/07/16')],
    [Keys.PERSISTENCY_HARD_SOFT_DELETE, new Referencia('https://surajsinghbisht054.medium.com/understanding-soft-delete-and-hard-delete-in-software-development-best-practices-and-importance-539a935d71b5', 'Borrado Fisico Vs Logico', PERSISTENCY_KEY, 'Hard/Soft Delete', '2024/08/10')],
    [Keys.PERSISTENCY_DB_TYPES, new Referencia('https://www.linkedin.com/posts/brijpandeyji_as-data-architectures-evolve-choosing-the-activity-7234400741543587841-sp_I/', 'Tipos de Bases de Datos', PERSISTENCY_KEY, 'Tipos de BD', '2024/09/12').addRelatedItem(Keys.POO_POO)],
    [Keys.PERSISTENCY_KEY_TYPES, new Referencia('https://agiledata.org/essays/keys.html', 'Tipos de Keys', PERSISTENCY_KEY, 'Tipos de Keys', '2024/10/06')],
    [Keys.PERSISTENCY_COMMON_TABLE_EXPRESSION, new Referencia('https://learnsql.com/blog/what-is-common-table-expression/', 'Common Table Expression', PERSISTENCY_KEY, 'CTE', '2025/01/04').addRelatedItem(Keys.META_CARACTERISTICAS_RECURSIVIDAD)],
    [Keys.PERSISTENCY_DATA_MODELING, new Referencia('https://towardsdev.com/mastering-data-modeling-a-step-by-step-guide-99dd32bfaa89', 'Modelado de Datos', PERSISTENCY_KEY, 'Modelado de Datos', '2025/01/23').addRelatedItem(Keys.POO_POO)],
]);

export const PERSISTENCY_ADVANCED_KEY = 'BD Avanzado'
export const PERSISTENCY_ADVANCED_REF = new Map<string, Referencia>([
    ['nosql', new Referencia('https://pandorafms.com/blog/es/bases-de-datos-nosql/', 'Bases de Datos NO SQL', PERSISTENCY_ADVANCED_KEY, 'NoSQL')],
    ['tiposBD', new Referencia('https://www.acens.com/wp-content/images/2014/02/bbdd-nosql-wp-acens.pdf', 'Tipos de BD No SQL', PERSISTENCY_ADVANCED_KEY, 'Tipos NoSQL')],
    [Keys.PERSISTENCY_ADVANCED_ORM, new Referencia('https://programarfacil.com/blog/que-es-un-orm/', 'Mapeo Objeto-Relacional (ORM)', PERSISTENCY_ADVANCED_KEY, 'ORM')],
    //[Keys.PERSISTENCY_CONSISTENCY, new Referencia('https://medium.com/@gabanox/consistencia-eventual-en-s3-6ba5b2ecd721', 'Consistencia', PERSISTENCY_ADVANCED_KEY, 'Consistencia')],
    [Keys.PERSISTENCY_CONSISTENCY, new Referencia('https://www.scylladb.com/glossary/consistency-models/', 'Consistencia', PERSISTENCY_ADVANCED_KEY, 'Consistencia', '', '2025/03/13').addRelatedItem(Keys.NUBE_CAP_TEOREMA)],
    //['algebraRelacional', new Referencia('https://sites.google.com/site/basededatosdistribuidastics/algebra-relacional', 'Algebra Relacional', PERSISTENCY_ADVANCED_KEY, 'Algebra Relacional')],
    ['algebraRelacional', new Referencia('https://lienzos.uv.mx/Uploads/resources/LenguajeAlgebraRelacional_18e0.pdf', 'Algebra Relacional', PERSISTENCY_ADVANCED_KEY, 'Algebra Relacional', '', '2024/06/07')],
    [Keys.PERSISTENCY_ADVANCED_N_1_SELECTS, new Referencia('https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping', 'N + 1 Problem', PERSISTENCY_ADVANCED_KEY, 'N + 1 Selects')],
    ['boyceCodd', new Referencia('https://normalizacionunit4.blogspot.com/2019/05/46-forma-normal-boyce-codd.html', 'Boyce-Codd', PERSISTENCY_ADVANCED_KEY, 'Boyce-Codd')],
    [Keys.PERSISTENCY_ADVANCED_SQL_NO_SQL, new Referencia('https://medium.com/@eugeniomendoza/c%C3%B3mo-saber-si-necesitas-una-base-de-datos-nosql-b6cfd5bb7d9b', 'SQL ó NoSql', PERSISTENCY_ADVANCED_KEY, 'SQL ó NoSql', '', '2024/06/06')],
    [Keys.PERSISTENCY_ADVANCED_LOCKING, new Referencia('https://vladmihalcea.com/optimistic-vs-pessimistic-locking/', 'Bloqueo Optimista & Pesimista', PERSISTENCY_ADVANCED_KEY, 'Bloqueos', '2024/06/17')],
    ['sqlOrderExecution', new Referencia('https://matam-kirankumar.medium.com/sql-query-order-of-execution-37001da1462', 'Orden de Ejecución', PERSISTENCY_ADVANCED_KEY, 'Orden de Ejecución', '2023/08/13')],
    ['sargeable', new Referencia('https://dev.to/kanani_nirav/secret-to-optimizing-sql-queries-understand-the-sql-execution-order-28m1', 'Consultas SARGEABLE', PERSISTENCY_ADVANCED_KEY, 'SARGEABLE', '2023/08/14')],
    ['MVCC', new Referencia('https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/What-is-MVCC-How-does-Multiversion-Concurrencty-Control-work', 'Control de Concurrencia Multiversion', PERSISTENCY_ADVANCED_KEY, 'Control de Concurrencia', '2023/10/09')],
    [Keys.PERSISTENCY_ADVANCED_BASE, new Referencia('https://phoenixnap.com/kb/acid-vs-base', 'BASE', PERSISTENCY_ADVANCED_KEY, 'BASE', '2023/12/04')],
    [Keys.PERSISTENCY_ADVANCED_SCALING_DB, new Referencia('https://blog.bytebytego.com/p/ep114-7-must-know-strategies-to-scale', 'Estrategias para escalar una BD', PERSISTENCY_ADVANCED_KEY, '¿ Como escalar una BD ?', '2024/06/07')],
    [Keys.PERSISTENCY_ADVANCED_WAL, new Referencia('https://medium.com/@vinciabhinav7/write-ahead-logs-but-why-494c3efd722d', 'Registros de escritura anticipada (WAL)', PERSISTENCY_ADVANCED_KEY, 'WAL', '2024/06/15').addRelatedItems(Keys.META_CARACTERISTICAS_META_DATOS, Keys.PERSISTENCY_DBMS)],
    [Keys.PERSISTENCY_ADVANCED_UNKNOWN_PROBLEMS, new Referencia('https://rakyll.medium.com/things-i-wished-more-developers-knew-about-databases-2d0178464f78', 'Problemas desconocidos', PERSISTENCY_ADVANCED_KEY, 'Problemas desconocidos', '2024/10/06').addRelatedItem(Keys.NUBE_FALACIES_DYSTRIBUTED_SYSTEMS)],
    [Keys.PERSISTENCY_ADVANCED_PARTITIONING, new Referencia('https://medium.com/@imnazimuddinasif/a-practical-overview-of-database-partitioning-59e8e318142b', 'Particiones', PERSISTENCY_ADVANCED_KEY, 'Particiones', '2024/10/07')],
    [Keys.PERSISTENCY_ADVANCED_CONSISTENCY_EVENTUAL, new Referencia('https://newsletter.systemdesigncodex.com/p/eventual-consistency-is-tricky', 'Consistencia Eventual', PERSISTENCY_ADVANCED_KEY, 'Consistencia Eventual', '2024/10/27')],
    [Keys.PERSISTENCY_ADVANCED_DENORMALIZATION, new Referencia('https://dgraph.io/blog/post/denormalize-database/', 'Desnormalización', PERSISTENCY_ADVANCED_KEY, 'Desnormalización', '2025/02/05').addRelatedItem(Keys.PERSISTENCY_NORMALIZATION)],
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
    [Keys.UML_STATES, new Referencia('https://diagramasuml.com/estados/', 'Diagrama de estados', UML_KEY, 'De Estados')],
    ['vista', new Referencia('https://es.wikipedia.org/wiki/Modelo_de_Vistas_de_Arquitectura_4%2B1', 'Modelo 4+1 vistas', UML_KEY, '4+1 Vistas')],
    [Keys.UML_TYPES, new Referencia('https://www.microsoft.com/es-co/microsoft-365/business-insights-ideas/resources/guide-to-uml-diagramming-and-database-modeling', 'Tipos de Diagramas', UML_KEY, 'Tipos de Diagramas')],
    [Keys.UML_MODEL_C4, new Referencia('https://towardsdev.com/how-to-visualize-your-system-architecture-using-the-c4-model-247bd718e914', 'Modelo C4', UML_KEY, 'Model C4')],
]);

export const VERSIONAMIENTO_KEY = 'Versionamiento';
export const VERSIONAMIENTO_REF = new Map<string, Referencia>([
    ['git', new Referencia('https://david-estevez.gitbooks.io/the-git-the-bad-and-the-ugly/content/es/control-de-versiones.html', 'Gestores de versiones', VERSIONAMIENTO_KEY, 'Gestor de Versiones')],
    ['dependencias', new Referencia('https://www.hongkiat.com/blog/manage-dependencies-tools-webdev/', 'Gestores de dependencias', VERSIONAMIENTO_KEY, 'Dependencias Web')],
    ['gradlevsmaven', new Referencia('https://www.chakray.com/es/gradle-vs-maven-definiciones-diferencias/', 'Gradle VS Maven', VERSIONAMIENTO_KEY, 'Gradle VS Maven')],
    ['versionamiento', new Referencia('https://ed.team/blog/como-se-deciden-las-versiones-del-software', 'Manejo de versiones', VERSIONAMIENTO_KEY, 'Versionamiento')],
    //['licencias', new Referencia('https://www.bbvaapimarket.com/es/mundo-api/las-5-licencias-de-software-libre-mas-importantes-que-todo-desarrollador-debe-conocer/', 'Tipos de licencias', VERSIONAMIENTO_KEY, 'Licencias')],
    [Keys.VERSIONAMIENTO_LICENSES, new Referencia('https://snyk.io/articles/open-source-licenses/', 'Tipos de licencias open source', VERSIONAMIENTO_KEY, 'Licencias Open Source', '', '2025/02/13')],
    [Keys.VERSIONAMIENTO_DOCUMENTATION, new Referencia('https://shopify.engineering/good-documentation-productivity', 'Documentación & Productividad', VERSIONAMIENTO_KEY, 'Documentacion')],
    [Keys.VERSIONAMIENTO_LICENSES_AND_DATA, new Referencia('https://medium.com/@torgo/whats-the-deal-with-open-source-open-data-and-open-standards-licenses-d769d8e30dc0', 'Licencias y Datos abiertos', VERSIONAMIENTO_KEY, 'Licencias & Datos', '2023/08/17')],
    [Keys.VERSIONAMIENTO_DEPENDENCIES_ORDER, new Referencia('https://www.baeldung.com/maven-dependencies-order', 'Orden de Dependencias', VERSIONAMIENTO_KEY, 'Orden', '2024/08/04').addRelatedItem(Keys.META_ESTRUCTURAS_ESTRUCTURAS_DATOS_2)],
    [Keys.VERSIONAMIENTO_BACKWARD_AND_BREAKING_CHANGES, new Referencia('https://github.com/kedro-org/kedro/wiki/Backwards-compatibility-and-breaking-changes', 'Retro compatibilidad y Breaking changes', VERSIONAMIENTO_KEY, 'Cambios y compatibilidad', '2024/05/19').addRelatedItems(Keys.LEYES_HYRUM, Keys.META_ESTRUCTURAS_DEPRECATION)],
    [Keys.VERSIONAMIENTO_DOCUMENT_ARQUITECTURE, new Referencia('https://lucamezzalira.medium.com/how-to-document-software-architecture-techniques-and-best-practices-2556b1915850', 'Documentación & Arquitectura', VERSIONAMIENTO_KEY, 'Docs & Arquitectura', '2024/12/01').addRelatedItem(Keys.ESTRATEGIAS_DESARROLLO_DDD)],
]);

export const HARDWARE_KEY = 'Hardware';
export const HARDWARE_REF = new Map<string, Referencia>([
    ['virtualizacion', new Referencia('https://www.redhat.com/es/topics/virtualization/what-is-a-virtual-machine', 'Virtualización', HARDWARE_KEY, 'Virtualizacion')],
    //['cli', new Referencia('https://searchdatacenter.techtarget.com/es/definicion/Interfaz-de-linea-de-comandos-o-CLI', 'Interfaz de Linea de Comandos', HARDWARE_KEY, 'CLI')],
    ['cli', new Referencia('https://www.computerweekly.com/es/definicion/Interfaz-de-linea-de-comandos-o-CLI', 'Interfaz de Linea de Comandos', HARDWARE_KEY, 'CLI', '', '2024/06/11')],
    [Keys.HARDWARE_ESCALAMIENTO, new Referencia('https://www.oscarblancarteblog.com/2017/03/07/escalabilidad-horizontal-y-vertical/', 'Escalamiento de un sistema', HARDWARE_KEY, 'Escalamiento')],
    ['nubeVSvirtualizacion', new Referencia('https://www.redhat.com/es/topics/cloud-computing/cloud-vs-virtualization', 'Nube VS Virtualizacion', HARDWARE_KEY, 'Nube VS VM')],
    ['rendering', new Referencia('https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/', 'Server-side VS client-side rendering', HARDWARE_KEY, 'Rendering')],
    ['modelOSI', new Referencia('https://www.cloudflare.com/es-es/learning/ddos/glossary/open-systems-interconnection-model-osi/', 'Modelo OSI', HARDWARE_KEY, 'Modelo OSI')],
    [Keys.HARDWARE_MONITOREO, new Referencia('https://www.hiberus.com/crecemos-contigo/uso-de-los-apm-monitoreo-del-rendimiento-de-aplicaciones/', 'Aplication Performance Management (apm)', HARDWARE_KEY, 'Monitoreo')],
    ['vmVsContainers', new Referencia('https://cloudnativeislamabad.hashnode.dev/virtualization-vs-containerization', 'Maquinas Virtuales VS Contenedores', HARDWARE_KEY, 'VM VS Contenedores')],
    ['falseSharing', new Referencia('https://www.easytechjunkie.com/what-is-false-sharing.htm', 'False Sharing', HARDWARE_KEY, 'False Sharing', '2022/12/29')],
    [Keys.HARDWARE_PROTOCOLS, new Referencia('https://www.solarwinds.com/resources/it-glossary/network-protocols', 'Network Protocols', HARDWARE_KEY, 'Network Protocols', '2024/06/11')],
    [Keys.HARDWARE_OPERATIVE_SYSTEM, new Referencia('https://medium.com/@oyebisijemil_41110/why-understanding-operating-systems-is-important-for-every-back-end-distributed-systems-engineers-fc8412af4c6c', 'Sistema Operativo', HARDWARE_KEY, 'Sistema Operativo', '2024/06/30')],
    [Keys.HARDWARE_UTF8, new Referencia('https://medium.com/@dmosyan/utf-8-and-the-problem-that-it-solves-a294aed2aa20', 'UTF-8', HARDWARE_KEY, 'UTF-8', '2024/08/24').addRelatedItems(Keys.VERSIONAMIENTO_BACKWARD_AND_BREAKING_CHANGES, Keys.META_ESTRUCTURAS_SERIALIZATION_DESERIALIZATION)],
    [Keys.HARDWARE_CLEAN_CODE_PERFORMANCE, new Referencia('https://pvs-studio.com/en/blog/posts/1157/', 'Clean Code, peor Performance ?', HARDWARE_KEY, 'Clean Code & Performance', '2024/11/03').addRelatedItems(Keys.PRINCIPIOS_SOLID, Keys.CALIDAD_CLEAN_CODE, Keys.AGILES_MANIFEST_AGIL)],
]);

export const WEB_KEY = 'Web';
export const WEB_REF = new Map<string, Referencia>([
    ['spa', new Referencia('https://desarrolloweb.com/articulos/que-es-una-spa.html', 'Single Page Aplication', WEB_KEY, 'SPA')],
    ['pwa', new Referencia('https://www.iebschool.com/blog/progressive-web-apps-analitica-usabilidad/', 'Progressive Web App', WEB_KEY, 'PWA')],
    [Keys.WEB_SEO, new Referencia('https://www.40defiebre.com/guia-seo/que-es-seo-por-que-necesito', 'Search Engine Optimization', WEB_KEY, 'SEO')],
    //['espacio', new Referencia('https://www.dsigno.es/blog/diseno-grafico/espacios-negativos-en-diseno-grafico', 'El uso del espacio para diseñar', WEB_KEY, 'Espacio Negativo')],
    [Keys.WEB_SPACE, new Referencia('https://heyjaime.com/blog/espacio-negativo/', 'El uso del espacio para diseñar', WEB_KEY, 'Espacio Negativo', '', '2024/12/13')],
    ['diseno', new Referencia('https://seocom.agency/es/blog/diseno-grafico-web/', 'Diseño grafico', WEB_KEY, 'Diseño Grafico')],
    [Keys.WEB_USER_INTERFACE, new Referencia('https://pensamientodigital.wordpress.com/diseno-de-interfases-de-usuario/', 'Interfaces de usuario', WEB_KEY, 'UI')],
    [Keys.WEB_USER_XPERIENCE, new Referencia('https://www.coursera.org/articles/ui-vs-ux-design', 'Experiencia de usuario', WEB_KEY, 'UX')],
    ['logos', new Referencia('https://franciscotorreblanca.es/logotipo-imagotipo-isotipo-e-isologo/', 'Logotipo, Imagotipo, Isotipo, Isologo', WEB_KEY, 'Logos')],
    //['experienciasUsuario', new Referencia('https://blog.acantu.com/que-es-ux-y-ui/', 'Experiencia de usuario', WEB_KEY, 'UX')],
    ['gestalt', new Referencia('https://imborrable.com/blog/teoria-de-la-gestalt/', 'Teoria de Gestalt', WEB_KEY, 'Teoria de Gestalt')],
    ['ssr-csr-ssg-isr', new Referencia('https://medium.com/@prashantramnyc/server-side-rendering-ssr-vs-client-side-rendering-csr-vs-pre-rendering-using-static-site-89f2d05182ef', 'SSR vs CSR vs SSG', WEB_KEY, 'SSR vs CSR vs SSG')],
    ['esqueumorfismo', new Referencia('https://aderal.es/estrategias-de-marketing-y-transformacion-digital/nuevas-tendencias-en-diseno-grafico-digital-el-regreso-del-esqueumorfismo/', 'Esqueumorfismo', WEB_KEY, 'Esqueumorfismo')],
    ['menorSorpresa', new Referencia('https://www.linkedin.com/pulse/principle-least-surprise-incus-data-pty-ltd/', 'Menor Sorpresa', WEB_KEY, 'Menor Sorpresa')],
    [Keys.WEB_MICRO_FRONTENED, new Referencia('https://newsletter.systemdesign.one/p/micro-frontends', 'Micro Frontends', WEB_KEY, 'Micro Frontends', '2024/03/07')],
    ['buenasPracticasFront', new Referencia('https://dev.to/emmanuelhills/best-practices-for-frontend-web-development-a-comprehensive-guide-27h0', 'Buenas practicas Desarrollo web', WEB_KEY, 'Buenas practicas', '2024/03/31')],
    [Keys.WEB_GOLDEN_SIGNALS, new Referencia('https://www.groundcover.com/blog/4-golden-signals', 'Golden Signals', WEB_KEY, 'Golden Signals', '2024/09/22').addRelatedItems(Keys.HARDWARE_MONITOREO, Keys.PEOPLE_NO_NEWS_GOOD_NEWS)],
    [Keys.WEB_SIMPLIFY_DESIGN, new Referencia('https://uxdesign.cc/10-heuristics-to-simplify-design-decision-making-36bd41868243', 'Simplificar el Diseño', WEB_KEY, 'Simplificar el diseño', '2024/12/13')],
]);

export const NEURO_MARKETING_KEY = 'Neuro-Marketing';
export const NEURO_MARKETING_REF = new Map<string, Referencia>([
    ['pestel', new Referencia('https://www.simla.com/blog/analisis-pestel', 'Analisis PESTEL', NEURO_MARKETING_KEY, 'Analisis PESTEL', '2023/01/29')],
    ['matrizBcg', new Referencia('https://emprendepyme.net/tipos-de-productos-segun-la-matriz-bcg-y-ejemplos-reales.html', 'Matriz BCG', NEURO_MARKETING_KEY, 'Matriz BCG', '2023/01/29')],
    ['b2b-b2c', new Referencia('https://www.uup.es/blog/b2b-y-b2c-que-son-y-que-diferencias-hay-entre-ambos/', 'B2B & B2C', NEURO_MARKETING_KEY, 'B2B & B2C', '2023/02/04')],
    ['eric', new Referencia('http://www.azentoconsulting.com/2020/07/21/como-crear-un-nuevo-modelo-de-negocio-o-reformular-nuestro-modelo-de-negocio-ya-existente-la-matriz-eric/', 'Matriz ERIC', NEURO_MARKETING_KEY, 'Matriz ERIC', '2023/01/29')],
    ['gamificacionMarketing', new Referencia('https://www.yeeply.com/blog/gamificacion-marketing-estrategias-ejemplos/', 'Gamificacion & Marketing', NEURO_MARKETING_KEY, 'Gamificacion & Marketing', '2023/02/08')],
    ['maslow-barret', new Referencia('https://www.danielcolombo.com/los-7-niveles-de-consciencia-personal-y-empresarial-por-daniel-colombo/', 'Maslow & Barret', NEURO_MARKETING_KEY, 'Maslow & Barret', '2023/02/12')],
    ['cerebroTriurno', new Referencia('https://www.educaciontrespuntocero.com/recursos/neuroeducacion-cerebro-triuno/', 'Cerebro Triurno', NEURO_MARKETING_KEY, 'Cerebro Triurno', '2023/02/19')],
    ['elementValues', new Referencia('https://media.bain.com/elements-of-value/#', 'Elementos de Valor', NEURO_MARKETING_KEY, 'Elementos de Valor', '2023/02/25')],
    ['multi&omniCanal', new Referencia('https://www.chakray.com/es/omnicanal-vs-multicanal-cual-es-la-diferencia/', 'Multi & Omni Canalidad', NEURO_MARKETING_KEY, 'Multi & Omni Canalidad', '2023/03/07')],
    ['buyerPersona', new Referencia('https://es.semrush.com/blog/como-crear-un-buyer-persona/', 'Buyer Persona', NEURO_MARKETING_KEY, 'Buyer Persona', '2023/03/11')],
    [Keys.NEURO_MARKETING_WHAT_IS, new Referencia('https://rockcontent.com/es/blog/neuromarketing/', 'Neuro Marketing', NEURO_MARKETING_KEY, 'Neuro Marketing', '2023/04/02')],
    ['semanticaPragmatica', new Referencia('https://creatividadpersuasiva.cl/semiosis-sintaxis-semantica-y-pragmatica/#coming', 'Semantica & Pragmatica', NEURO_MARKETING_KEY, 'Semantica & Pragmatica', '2023/05/22')],
    ['pnl', new Referencia('https://psicologiaymente.com/coach/principios-pnl-programacion-neurolinguistica', 'Programación Neurolinguistica', NEURO_MARKETING_KEY, 'Neurolinguistica', '2023/05/28')],
    ['jobsToBeDone', new Referencia('https://rockcontent.com/es/blog/jobs-to-be-done/', 'Trabajos por acabar', NEURO_MARKETING_KEY, 'Trabajos por acabar', '2024/05/02')],
]);

export const CD_CI_KEY = 'CD/CI-Infraestructura';
export const CD_CI_REF = new Map<string, Referencia>([
    [Keys.CD_CI_CD_CI, new Referencia('https://www.aplyca.com/es/blog/integracion-entrega-continua-ci-cd', 'Integración Continua y Entrega Continua', CD_CI_KEY, 'CD/CI', '', '2024/08/25')],
    [Keys.CD_CI_DEV_OPS, new Referencia('https://www.paradigmadigital.com/techbiz/que-es-devops-y-sobre-todo-que-no-es-devops/', 'DevOps', CD_CI_KEY, 'DevOps', '', '2025/03/15').addRelatedItem(Keys.TESTING_QUALITY_ASSURANCE)],
    [Keys.CD_CI_IAS_CODE, new Referencia('https://www.redhat.com/es/topics/automation/what-is-infrastructure-as-code-iac', 'Infraestructura como Codigo', CD_CI_KEY, 'Infraestructura & Codigo').addRelatedItem(Keys.CONTENEDORES_DOCKER)],
    ['stateless-stateful', new Referencia('https://refactorizando.com/stateful-vs-stateless-arquitectura/', 'Stateful VS Stateless', CD_CI_KEY, 'Stateless VS Stateful')],
    [Keys.CD_CI_DEPLOYMENT_PATTERNS, new Referencia('https://newsletter.techworld-with-milan.com/p/what-are-deployment-patterns', 'Patrones de Despliegue', CD_CI_KEY, 'Patrones de Despliegue')],
    ['industrialDevops', new Referencia('https://itrevolution.com/articles/what-is-industrial-devops/', 'Industrial DevOps', CD_CI_KEY, 'Industrial DevOps', '2023/11/21')],
    ['pipelines', new Referencia('https://semaphoreci.com/blog/cicd-pipeline', 'Pipelines', CD_CI_KEY, '¿ Que es un Pipeline ?', '2023/12/26')],
    [Keys.CD_CI_CELL_BASED_ARQUITECTURE, new Referencia('https://docs.aws.amazon.com/wellarchitected/latest/reducing-scope-of-impact-with-cell-based-architecture/what-is-a-cell-based-architecture.html', 'Cell Based Arquitecture', CD_CI_KEY, 'Cell Based Arquitecture', '2024/08/25')],
    [Keys.CD_CI_RULES, new Referencia('https://semaphoreci.com/blog/rules-ci-pipeline', 'Rules', CD_CI_KEY, 'Rules', '2024/12/26').addRelatedItems(Keys.GIT_BRANCHS, Keys.CALIDAD_LINTING, Keys.TESTING_PIRAMIDE, Keys.CONTENEDORES_DOCKER)],
]);

export const MICRO_SERVICES_KEY = 'Microservicios';
export const MICRO_SERVICES_REF = new Map<string, Referencia>([
    [Keys.MICROSERVICES_ANALISIS, new Referencia('https://foojay.io/today/microservices-design-principles-for-well-crafted-architecture/', 'Diseño de Microservicios', MICRO_SERVICES_KEY, 'Diseño ', '2024/10/22').addRelatedItem(Keys.PRINCIPIOS_SOLID).addRelatedItem(Keys.POO_POO)],
    [Keys.MICROSERVICES_FUNDAMENTALS, new Referencia('https://medium.com/@kumuthini.program/micro-services-fundamentals-dc0fc369d75e', 'Bases de Microservicios', MICRO_SERVICES_KEY, 'Bases').addRelatedItem(Keys.META_ESTRUCTURAS_SISTEMAS_COMPLEJOS)],
    [Keys.MICROSERVICES_ARQUITECTURAS, new Referencia('https://aws.amazon.com/es/microservices/', 'Microservicios & Arquitectura', MICRO_SERVICES_KEY, 'Arquitecturas', '', '2024/08/17')],
    [Keys.MICROSERVICES_BEST_PRACTICES, new Referencia('https://www.linkedin.com/posts/nelsonamigoscode_systemdesign-coding-interviewtips-activity-7206618794188750848-lNtj/', 'Microservicios, buenas practicas', MICRO_SERVICES_KEY, 'Buenas Practicas', '', '2024/08/17').addRelatedItems(Keys.PRINCIPIOS_KISS, Keys.MICROSERVICES_ARQUITECTURAS, Keys.ARQUITECTURAS_EVENT_DRIVEN)],
    [Keys.MICROSERVICES_BY_DEFAULT, new Referencia('https://levelup.gitconnected.com/why-you-should-never-default-to-microservices-c952903fbcb6', 'Microservicios por defecto', MICRO_SERVICES_KEY, '¿ Usarlos por defecto ?', '2024/10/12').addRelatedItems(Keys.TESTING_MOCKS, Keys.APIS_REST_VS_MESSAGING, Keys.ARQUITECTURAS_MONOLITOS)],
    [Keys.MICROSERVICES_TRADEOFFS, new Referencia('https://martinfowler.com/articles/microservice-trade-offs.html', 'Microservicios Tradeoffs', MICRO_SERVICES_KEY, 'Pros & Contras', '2025/01/18').addRelatedItems(Keys.ARQUITECTURAS_DESCOMPOSICION_MODULAR, Keys.LEYES_CONWAY, Keys.CD_CI_CD_CI, Keys.NUBE_FALACIES_DYSTRIBUTED_SYSTEMS, Keys.NUBE_CAP_TEOREMA)],
    [Keys.MICROSERVICES_PATTERNS, new Referencia('https://blog.openreplay.com/7-microservice-design-patterns-to-use/', 'Patrones & Microservicios', MICRO_SERVICES_KEY, 'Patrones', '', '2025/01/19').addRelatedItem(Keys.ANALISIS_LIGHT_EVENTS_VS_RICH_EVENTS)],
    [Keys.MICROSERVICES_ANTI_PATTERNS, new Referencia('https://blog.bitsrc.io/10-microservice-anti-patterns-278bcb7f385d', 'Antipatrones & Microservicios', MICRO_SERVICES_KEY, 'Antipatrones', '2025/01/19').addRelatedItems(Keys.ANALISIS_SINGLE_POINT_OF_FAILURE, Keys.META_ESTRUCTURAS_SERIALIZATION_DESERIALIZATION, Keys.NUBE_OBSERVABILIDAD)],
    [Keys.MICROSERVICES_PRODUCER_CONSUMER_PROBLEM, new Referencia('https://www.baeldung.com/java-producer-consumer-problem', 'Problema Productor Consumidor', MICRO_SERVICES_KEY, 'Productor-Consumidor', '2025/02/15').addRelatedItems(Keys.ANALISIS_QUEUES_SYSTEM_DESIGN, Keys.META_CARACTERISTICAS_CONCURRENCY_AND_PARALLELISM, Keys.META_CARACTERISTICAS_PROCESS_AND_THREADS)],
    [Keys.MICROSERVICES_CACHE_FAILS, new Referencia('https://www.linkedin.com/posts/bytebytego_systemdesign-coding-interviewtips-activity-7296767687978827776-Dizz/', 'Fallos del cache', MICRO_SERVICES_KEY, 'Fallos del cache', '2025/02/22').addRelatedItems(Keys.META_CARACTERISTICAS_CACHE, Keys.PERSISTENCY_ADVANCED_SCALING_DB)],
    [Keys.MICROSERVICES_DISTRIBUTED_TRACING, new Referencia('https://www.dynatrace.com/news/blog/what-is-distributed-tracing/', 'Tracing Distribuido', MICRO_SERVICES_KEY, 'Tracing Distribuido', '2025/02/23').addRelatedItems(Keys.NUBE_OBSERVABILIDAD, Keys.NUBE_FALACIES_DYSTRIBUTED_SYSTEMS, Keys.BUENAS_PRACTICAS_DEBUGGING, Keys.BUENAS_PRACTICAS_LOGGING)],
    [Keys.MICROSERVICES_DEAD_LETTER_QUEUE, new Referencia('https://www.geeksforgeeks.org/dead-letter-queue-system-design/', 'Dead Letter Queue - DLQ & DLT', MICRO_SERVICES_KEY, 'Dead Letter Queue', '2025/02/26').addRelatedItem(Keys.ANALISIS_QUEUES_SYSTEM_DESIGN)],
    [Keys.MICROSERVICES_DISTRIBUTED_TRANSACTIONS, new Referencia('https://gist.github.com/rponte/9477858e619d8b986e17771c8be7827f', 'Transacciones Distribuidas', MICRO_SERVICES_KEY, 'Transacciones Distribuidas', '2025/03/14').addRelatedItems(Keys.NUBE_TWO_PHASE_COMMIT, Keys.PERSISTENCY_ACID, Keys.PATRONES_SAGA, Keys.NUBE_OBSERVABILIDAD, Keys.NUBE_FALACIES_DYSTRIBUTED_SYSTEMS, Keys.PERSISTENCY_CONSISTENCY)],
    [Keys.MICROSERVICES_PROBLEMS, new Referencia('https://blog.container-solutions.com/why-im-no-longer-talking-to-architects-about-microservices', 'Problemas de los Microservicios', MICRO_SERVICES_KEY, 'Problemas', '2025/03/17').addRelatedItems(Keys.CONTENEDORES_ORCHESTRATION, Keys.MALAS_PRACTICAS_DEATH_BY_MICROSERVICES, Keys.CD_CI_DEV_OPS, Keys.METODOLOGIAS_AGILES, Keys.NUBE_SRE, Keys.NUBE_OBSERVABILIDAD, Keys.PEOPLE_ONA)],
]);
