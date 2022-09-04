class Arma{
    constructor(nombre, poder, manual, balas=null){
        this.nombre = nombre;
        this.poder = poder;
        this.manuela = manual;
        if(!manual){
            this.balas = balas;
        }
    
    }
}
export default Arma;