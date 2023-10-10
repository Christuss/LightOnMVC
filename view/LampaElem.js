class LampaElem {
    #sorszam;
    #allapot;
    constructor(szuloElem, sorszam){
        this.#allapot = false
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
        if (!this.#allapot) {
            this.ELEM.css("background-color", "green");
            this.#allapot = true
        } else {
            this.ELEM.css("background-color", "red");
            this.#allapot = false
        }
    };

}

export default LampaElem;