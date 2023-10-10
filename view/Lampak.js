import LampaElem from "./LampaElem.js";

class Lampak {
    #lista
    constructor(lista){
        this.#lista = lista;
        $("main").html("<div class='tarolo'></div>");
        this.SZULO = $(".tarolo");
        this.jatekterFeltolt();
        this.SZULO.append("<button class ='gomb'>Új játék</button>");
        this.GOMB = $(".gomb");
    }
    jatekterFeltolt() {
        for (let index = 0; index < 9; index++) {
            let lamp = new LampaElem(this.SZULO, index, this.#lista[index]);
        }
    }
}

export default Lampak;