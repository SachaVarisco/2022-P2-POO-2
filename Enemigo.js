class Enemigo{
    constructor(vida, poder){
        this.vida = vida;
        this.poder = poder;
    }
    atacar(jugador){
        console.log("Jugador dañado")
        jugador.recibirDano(this.poder);
    }
}
export default Enemigo;