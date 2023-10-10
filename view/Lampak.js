import LampaElem from "./LampaElem.js";

class Lampak {
    constructor(szuloElem){
        this.SZULO = szuloElem;
        this.jatekterFeltolt();
        this.SZULO.append("<button class = 'gomb'>Új játék</button>");
        this.GOMB = $(".gomb");
        

    }
    jatekterFeltolt() {
        for (let index = 0; index < 9; index++) {
            new LampaElem(this.SZULO, index);
        }
    }
}

export default Lampak;