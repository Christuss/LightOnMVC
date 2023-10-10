class LampaElem {
    #sorszam;
    #allapot;
    constructor(szuloElem, sorszam, allapot){
        this.#allapot = allapot
        this.#sorszam = sorszam;
        this.SZULO = szuloElem;
        szuloElem.append("<div class='elem'></div>");
        this.ELEM = $(".elem:last-child");
        this.ELEM.on("click", () => {
            this.#esemenyKezelo("kattintas");
            this.setSzin();
        });
    }

    getSorszam() {
        return this.#sorszam;
    }

    #esemenyKezelo(esemeny) {
        const es = new CustomEvent(esemeny, {detail:this.#sorszam});
        window.dispatchEvent(es);
    }

    setSzin(){
        if (this.#allapot === 0) {
            this.ELEM.css("background-color", "green");
            this.#allapot = 1
        } else {
            this.ELEM.css("background-color", "red");
            this.#allapot = 0
        }
    };

}

export default LampaElem;