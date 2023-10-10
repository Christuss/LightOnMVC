import LampaModel from "../model/LampaModel.js";
import Lampak from "../view/Lampak.js";

class Controller {
    constructor(){
        this.LAMPA = new LampaModel(); 
        this.LAMPAK = new Lampak($(".tarolo"));
        $(window).on("kattintas", () => {
            console.log(event.detail);
            this.LAMPA.setLista(event.detail);
            console.log(this.LAMPA.getLista());
        })
    }
   
}
export default Controller;