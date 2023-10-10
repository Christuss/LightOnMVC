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
            this.#lista[index+1] = 1;    
            this.#lista[index-1] = 1;    
            this.#lista[index+3] = 1;    
            this.#lista[index-3] = 1;   
            this.#lista.length = 9;  
        } else {
            this.#lista[index] = 0;
            this.#lista[index+1] = 0;    
            this.#lista[index-1] = 0;    
            this.#lista[index+3] = 0;    
            this.#lista[index-3] = 0;    
            this.#lista.length = 9;
        }

    }


}

export default LampaModel;