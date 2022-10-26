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
    titulo = '';
    component = '';

    constructor(referencia: string, titulo: string, component: string) {
        this.referencia = referencia;
        this.titulo = titulo;
        this.component = component;
    }
}