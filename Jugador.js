class Jugador{
    constructor(vida, tiempo, armas=[], estaVivo=true){
        this.estaVivo = estaVivo
        this.vida = vida;
        this.tiempo = tiempo;
        this.armas = armas;
        this.descontarTiempo()
    }

    recolectarArma(nuevaArma){
        this.armas.push(nuevaArma)
    }

    atacarEnemigo(enemigo,arma){
        enemigo.vida-=arma.poder;
        if(enemigo.vida <= 0){
            enemigo.vida = 0;
        }
    }
     
    recibirDano(dano){
        this.vida -= dano;
        if(this.vida <= 0){
            this.estaVivo = false;
            this.vida = 0;
            console.error("Jugador ha muerto.")
        }
    }

    descontarTiempo(){
        console.info("Tiempo restante", this.tiempo);
        if(this.tiempo <= 0 || !this.estaVivo) {
            console.error("Se acabo el tiempo.")
            return;
        }
        this.tiempo--;
        setTimeout(() => {
            this.descontarTiempo();
            
        }, 1000);
    }

}
export default Jugador;