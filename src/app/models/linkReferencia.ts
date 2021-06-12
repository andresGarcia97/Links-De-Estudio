export class LinkReferencia {

    selection = '';
    referencia = '';
    titulo = '';

    protected links: Map<string, string> = new Map([
        ['moscow', 'https://proagilist.es/blog/agilidad-y-gestion-agil/priorizar-requisitos-tecnica-priorizacion-moscow/'],
        ['scoring', 'https://comunidad.iebschool.com/metodologiasparaelcambio/2014/03/23/priorizando-historias-de-usuario/'],
        ['muda', 'https://prevencontrol.com/prevenblog/las-7-mudas/#:~:text=Los%20MUDA%2C%20t%C3%A9rmino%20japon%C3%A9s%20que,Sistema%20de%20producci%C3%B3n%20de%20Toyota'],
        ['5s', 'https://www.gestiopolis.com/5s-seiri-seiton-seiso-seiketsu-y-shitsuke-base-de-la-mejora-continua/'],
        ['muda#1', 'https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-i/'],
        ['muda#2', 'https://samuelcasanova.com/2014/03/los-7-desperdicios-del-desarrollo-de-software-y-ii/'],
    ]);

    protected titulos: Map<string, string> = new Map([
        ['moscow', 'MOSCOW'],
        ['scoring', 'Theme Scoring'],
        ['muda', 'Desperdicio'],
        ['5s', 'Seiri, Seiton, Seiso, Seiketsu, Shitsuke'],
        ['muda#1', 'Muda en el software, paralelismos 1-3'],
        ['muda#2', 'Muda en el software, paralelismos 4-7'],
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
