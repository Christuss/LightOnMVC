import LampaModel from "../model/LampaModel.js";
import Lampak from "../view/Lampak.js";

class Controller {
    constructor(){
        this.LAMPA = new LampaModel(); 
        this.LAMPAK = new Lampak(this.LAMPA.getLista());
        $(window).on("kattintas", () => {
            console.log(event.detail);
            this.LAMPA.setLista(event.detail);
            console.log(this.LAMPA.getLista());
        })
        this.LAMPAK.GOMB.on("click", function ()  {
            //nem túl jó, de működik 
            window.location.reload();
        })
    }
   
}
export default Controller;