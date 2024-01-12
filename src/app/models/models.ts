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

    constructor(referencia: string, tittle: string, component: string, tittleShort: string) {
        this.referencia = referencia;
        this.tittle = tittle;
        this.component = component;
        this.tittleShort = tittleShort;
    }
}