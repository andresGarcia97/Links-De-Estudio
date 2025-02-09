export class Item {

    key = '';
    content: string[] = [];

    constructor(key: string, content: string[]) {
        this.key = key;
        this.content = content;
    }

}

export class Fuente {
    titulo = '';
    referencia = '';
}

export class Referencia {
    referencia = '';
    tittle = '';
    component = '';
    tittleShort = '';
    dateRead = '';
    dateUpdate = '';
    relatedItems: string[] = [];

    constructor(referencia: string, tittle: string, component: string, tittleShort: string, dateRead = '', dateUpdate = '') {
        this.referencia = referencia;
        this.tittle = tittle;
        this.component = component;
        this.tittleShort = tittleShort;
        this.dateRead = dateRead;
        this.dateUpdate = dateUpdate;
    }

    public addRelatedItem(relatedItem: string): Referencia {
        this.relatedItems.push(relatedItem);
        return this;
    }

    public addRelatedItems(...relatedItems: string[]): Referencia {
        this.relatedItems.push(...relatedItems);
        return this;
    }

}