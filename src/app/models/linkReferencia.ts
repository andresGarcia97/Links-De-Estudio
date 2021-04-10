export class LinkReferencia {

    selection = '';
    referencia = '';

    public linkReferencia(seleccion: string = '', link: string = ''): void {
        this.selection = seleccion;
        this.referencia = link;
    }
}
