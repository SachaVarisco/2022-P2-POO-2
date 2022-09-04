import Arma from "./Arma.js";
import Enemigo from "./Enemigo.js";
import Jugador from "./Jugador.js";

const jugador = new Jugador(150, 20);
console.log('jugador', jugador);

const puñal = new Arma('Puñal', 5, true);
const katana = new Arma('Katana', 20, true);
const revolver = new Arma('Revolver', 10, false, 3);
const fusil = new Arma('Fusil', 15, false, 8);

jugador.recolectarArma(puñal);
jugador.recolectarArma(katana);
jugador.recolectarArma(revolver);
jugador.recolectarArma(fusil);

console.log(`Puñal`, puñal);
console.log(`Katana`, katana);
console.log(`Revolver`, revolver);
console.log(`Fusil`, fusil);

const enemigos = [];
for (let i = 1; i <= 5; i++) {
    const propEnemigos = {
        vida: 100,
        poder: Math.random()*100,
        nombre: `Monstruo`+i,
    }
    enemigos.push(new Enemigo(propEnemigos))
}
console.log(enemigos);

console.log("Ataque a monstruo.")
while (enemigos.length > 0 && jugador.estaVivo) {
    const enemigo = enemigos.pop();
    console.log('Monstruo', enemigo);
    while (enemigo.vida > 0 && jugador.estaVivo) {
        const arma = jugador.armas[parseInt(Math.random()*jugador.armas.length)];
        jugador.atacar(enemigo, arma);
        console.log('Enemigo', enemigo);
        console.log('Arma', arma);
        if (enemigo.vida > 0) {
            enemigo.atacar(jugador);
            console.log('Monstruo golpea.', jugador);
        }
    }
    console.log('enemigo muerto');
}
console.warn('No hay mas enemigos');