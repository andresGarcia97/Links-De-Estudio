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
    moreReferences: string[] = [];

    constructor(referencia: string, tittle: string, component: string, tittleShort: string, dateRead = '', dateUpdate = '') {
        this.referencia = referencia;
        this.tittle = tittle;
        this.component = component;
        this.tittleShort = tittleShort;
        this.dateRead = dateRead;
        this.dateUpdate = dateUpdate;
    }

    public addRelatedItems(...relatedItems: string[]): Referencia {
        this.relatedItems.push(...relatedItems);
        return this;
    }

    public addMoreReferences(...moreReferences: string[]): Referencia {
        this.moreReferences.push(...moreReferences);
        return this;
    }

}

export class PreviousAndNextSection {
    titlePrevious = '';
    sectionPrevious = '';
    titleNext = '';
    sectionNext = '';

    constructor(titlePrevious = '', sectionPrevious = '', titleNext = '', sectionNext = '') {
        this.titlePrevious = titlePrevious;
        this.sectionPrevious = sectionPrevious;
        this.titleNext = titleNext;
        this.sectionNext = sectionNext;
    }
}