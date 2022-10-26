import { Content1 } from "./content/content1";
import { Content2 } from "./content/content2";
import { Content3 } from "./content/content3";
import { Item } from "./models";

export class ContentMain {

    temas1 = new Content1();
    temas2 = new Content2();
    temas3 = new Content3();

    public temas: Item[] = Array.from(this.temas1.temas)
        .concat(this.temas2.temas)
        .concat(this.temas3.temas)

}
