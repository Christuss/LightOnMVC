class LampaModel {
    #lista = [];
    constructor() {
        this.#lista = [
            0,0,0,
            0,0,0,
            0,0,0]
    }

    getLista(){
        return this.#lista;
    }

    setLista(index){
        if (this.#lista[index] === 0) {
            this.#lista[index] = 1;    
        } else {
            this.#lista[index] = 0;
        }
        
    }
}

export default LampaModel;