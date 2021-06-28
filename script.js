"use strict";
//---------------------------Užduotis Nr.1----------------------------//
class Namas {
    constructor(miestas, pastatymoData, adresas, laiptiniuSkaicius, butuSkaicius){
    this.miestas = miestas;
    this.pastatymoData = pastatymoData;
    this.adresas = adresas;
    this.laiptiniuSkaicius = laiptiniuSkaicius;
    this.butuSkaicius = butuSkaicius;
    
}
    static bendrasButuSkaicius(a) {
        let bbs = 0;
        for (let i in a) {
            bbs = bbs + a[i];
        }
        return bbs;
    }
}

let pastatymoData = new Date().getFullYear();
let laiptiniuSkaicius = [1, 2, 3, 4];
let butuSkaicius = [15, 20, 20, 20];
let namas1 = new Namas('Vilnius', pastatymoData, 'Pavilnionių g.', laiptiniuSkaicius, butuSkaicius);

console.log(namas1);
console.log("Bendras butų skaičius: " + Namas.bendrasButuSkaicius(butuSkaicius));

//---------------------------Užduotis Nr.2----------------------------//

class Butas {
    constructor(numeris, kambariuSkaicius, gyventojuSkaiciusBute) {
    this.numeris = numeris;
    this.kambariuSkaicius = kambariuSkaicius;
    this.gyventojuSkaiciusBute = gyventojuSkaiciusBute;
    } 
    info(){
        console.log(`Buto Nr. ${this.numeris}, kambarių skaičius: ${this.kambariuSkaicius}, gyventojų skaičius: ${this.gyventojuSkaiciusBute}`);
    }
    
}
let xata = new Butas(13, 3, 4);

xata.info();

//---------------------------Užduotis Nr.3----------------------------//


let masyvasNamas = [];
class Namu {
    constructor(miestas1, adresas1, laiptiniuSkaicius1, butuSkaicius1, aukstuSkaicius){
    this.miestas1 = miestas1;
    this.adresas1 = adresas1;
    this.laiptiniuSkaicius1 = laiptiniuSkaicius1;
    this.butuSkaicius1 = butuSkaicius1;
    this.aukstuSkaicius = aukstuSkaicius;
    }
}

masyvasNamas.push(new Namu('Vilnius', 'Pavilnionių', 1, 35, 7));
masyvasNamas.push(new Namu('Šiauliai', 'Gegužių', 6,[15,15,15,15,15,15], 5));
masyvasNamas.push(new Namu('Klaipėda', 'Budelkiemio', 5,[28,28,28,28,28,28], 7));
masyvasNamas.push(new Namu('Panevezys', 'Žvaigždžių', 4,[15,15,15,15,15,15], 5));
masyvasNamas.push(new Namu('Vilnius', 'Perkunkiemio', 4,[28,28,28,28,28,28], 7));

//---------------------------Užduotis Nr.4----------------------------//


console.log(masyvasNamas)

//---------------------------Papildoma užduotis----------------------------//
