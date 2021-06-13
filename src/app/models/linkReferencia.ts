export class LinkReferencia {

    selection = '';
    referencia = '';
    titulo = '';

    protected links: Map<string, string> = new Map([
        // componenente agiles
        ['moscow', 'https://proagilist.es/blog/agilidad-y-gestion-agil/priorizar-requisitos-tecnica-priorizacion-moscow/'],
        ['scoring', 'https://comunidad.iebschool.com/metodologiasparaelcambio/2014/03/23/priorizando-historias-de-usuario/'],
        ['muda', 'https://prevencontrol.com/prevenblog/las-7-mudas/#:~:text=Los%20MUDA%2C%20t%C3%A9rmino%20japon%C3%A9s%20que,Sistema%20de%20producci%C3%B3n%20de%20Toyota'],
        ['5s', 'https://www.gestiopolis.com/5s-seiri-seiton-seiso-seiketsu-y-shitsuke-base-de-la-mejora-continua/'],
        ['muda#1', 'https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-i/'],
        ['muda#2', 'https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-y-ii/'],
        // componente analisis
        ['comportamiento', 'https://es.wikipedia.org/wiki/Modelo_de_comportamiento_(inform%C3%A1tica)'],
        ['dominio', 'https://www.redalyc.org/jatsRepo/4768/476862530003/html/index.html#:~:text=El%20An%C3%A1lisis%20de%20Dominio%20es,la%20identificaci%C3%B3n%2C%20el%20an%C3%A1lisis%20y'],
        ['case', 'https://www.tutorialspoint.com/es/software_engineering/case_tools_overview.htm'],
        ['divide', 'https://es.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms'],
        ['diseño', 'https://www.bravent.net/la-importancia-de-un-buen-diseno-del-software/'],
        ['crc', 'https://medium.com/@marcosrrg9813/tarjetas-crc-clase-responsabilidad-colaborador-81924cec3af0'],
        // componente arquitecturas
        ['definicion', 'https://cgrw01.cgr.go.cr/rup/RUP.es/SmallProjects/core.base_rup/guidances/concepts/software_architecture_4269A354.html'],
        ['capas', 'https://geeks.ms/jkpelaez/2009/05/30/arquitectura-basada-en-capas/'],
        ['cliente', 'https://desarrolloweb.com/articulos/arquitectura-cliente-servidor.html'],
        ['intermediario', 'https://conasa.grupocibernos.com/blog/patrones-comunes-de-arquitecturas-de-software'],
        ['servicios', 'https://aws.amazon.com/es/microservices/'],
        ['hexagonal', 'https://medium.com/@edusalguero/arquitectura-hexagonal-59834bb44b7f'],
        ['otrasArquitecturas', 'https://medium.com/@maniakhitoccori/los-10-patrones-comunes-de-arquitectura-de-software-d8b9047edf0b'],
        // componente buenas practicas
        ['practicas1', 'https://www.tithink.com/es/2018/06/13/12-buenas-practicas-para-el-desarrollo-software/'],
        ['practicas2', 'https://sg.com.mx/revista/mejores-pr%C3%A1cticas-para-el-desarrollo-software'],
        ['practicas3', 'https://velneo.es/15-buenas-practicas-proyectos-desarrollo-software/'],
        ['practicas4', 'http://www.noussintelligence.com/desarrollo-software-buenas-practicas-recomendaciones/'],
        ['demeter', 'https://www.adictosaltrabajo.com/2015/07/24/ley-de-demeter/'],
        ['complejidad', 'http://oscarmoreno.com/la-complejidad-ciclomatica/'],
        // componente compilación
        ['compilacion', 'https://developer.mozilla.org/es/docs/Glossary/Compile'],
        ['nivel', 'https://desarrolloweb.com/articulos/2358.php#:~:text=Existen%20dos%20tipos%20de%20lenguajes,y%20los%20de%20alto%20nivel.&text=Los%20lenguajes%20m%C3%A1s%20pr%C3%B3ximos%20a,denominan%20lenguajes%20de%20alto%20nivel.'],
        ['interprete', 'https://yosoy.dev/diferencia-entre-lenguajes-compilados-e-interpretados/'],
        ['transpilacion', 'https://ingenieriadesoftware.es/diferencia-transpilacion-compilacion/#:~:text=Si%20traduce%20c%C3%B3digo%20entre%20lenguajes,a%20Bytecode%20ser%C3%ADa%20una%20compilaci%C3%B3n.'],
    ]);

    protected titulos: Map<string, string> = new Map([
        // componenente agiles
        ['moscow', 'MOSCOW'],
        ['scoring', 'Theme Scoring'],
        ['muda', 'Desperdicio'],
        ['5s', 'Seiri, Seiton, Seiso, Seiketsu, Shitsuke'],
        ['muda#1', 'Muda en el software, paralelismos 1-3'],
        ['muda#2', 'Muda en el software, paralelismos 4-7'],
        // componente analisis
        ['comportamiento', 'Comportamiento del sistema'],
        ['dominio', 'Analisis de Dominio'],
        ['case', 'Herramientas Case'],
        ['divide', 'Divide y Venceras'],
        ['diseño', 'Ventajas de un buen diseño'],
        ['crc', 'Tarjetas Clase-Responsabilidad-Colaborador'],
        // componente arquitecturas
        ['definicion', '¿ Que es una arquitectura ?'],
        ['capas', 'Capas'],
        ['cliente', 'Cliente-Servidor'],
        ['intermediario', 'Intermediario'],
        ['servicios', 'MicroServicios'],
        ['hexagonal', 'Hexagonal'],
        ['otrasArquitecturas', 'Otras Arquitecturas'],
        // componente buenas practicas
        ['practicas1', 'Buenas practicas parte #1'],
        ['practicas2', 'Buenas practicas parte #2'],
        ['practicas3', 'Buenas practicas parte #3'],
        ['practicas4', 'Buenas practicas parte #4'],
        ['demeter', 'Ley de Demeter'],
        ['complejidad', 'Complejidad Ciclomatica'],
        // componente compilación
        ['compilacion', '¿ Que es compilar ?'],
        ['nivel', 'Niveles de compilación'],
        ['interprete', 'Tipos de lenguajes'],
        ['transpilacion', '¿ Que es la transpilación ?'],
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
