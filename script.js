"use strict"

console.log("//---------------------Užduotis Nr.1----------------------//")
class Namas {
    constructor(miestas, pastatymoData, adresas, laiptiniuSkaicius, butai){
    this.miestas = miestas;
    this.pastatymoData = pastatymoData;
    this.adresas = adresas;
    this.laiptiniuSkaicius = laiptiniuSkaicius;
    this.butai = butai;
    }

    static butuPildymas(min, max) {

        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
}

let laiptiniuSkaicius = ["laiptine1", "laiptine2", "laiptine3",'laiptine4', 'laiptine5'];

let laiptiniuSkIlgis = laiptiniuSkaicius.length;

let atsitiktinisSk = Namas.butuPildymas(1, 100);

let butai = [];
for (let i = 0; i< laiptiniuSkIlgis; i++) {
    butai.push(Namas.butuPildymas(1, 100));
}

let bendrasButuSk = 0;

for (let i = 0; i < butai.length; i++) {
    bendrasButuSk += butai[i];
}

let pastatymoData = new Date().getFullYear();

let namas1 = new Namas('Vilnius', pastatymoData, 'Pavilnionių g.', laiptiniuSkaicius, butai);

console.log(namas1);
console.log("Bendras butų skaičius: " + bendrasButuSk);


console.log("//---------------------Užduotis Nr.2----------------------//")

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


console.log("//---------------------Užduotis Nr.3----------------------//")


let masyvasNamas = [];


masyvasNamas.push(new Namas('Vilnius', pastatymoData, 'Pavilnionių', [1], 35,));
masyvasNamas.push(new Namas('Šiauliai', pastatymoData, 'Gegužių', [1,2,3,4,5,6], 15));
masyvasNamas.push(new Namas('Klaipėda', pastatymoData, 'Budelkiemio', [1,2,3,4,5], 28));
masyvasNamas.push(new Namas('Panevezys', pastatymoData, 'Žvaigždžių', [1,2,3,4], 15));
masyvasNamas.push(new Namas('Vilnius', pastatymoData, 'Perkunkiemio', [1,2,3,4], 28));

console.log("Sukurtas masyvasNamas su 5 objektais pagal klase Namas")

console.log("//---------------------Užduotis Nr.4----------------------//")

console.log(masyvasNamas);

console.log("//------------------Papildoma užduotis--------------------//")

console.log(masyvasNamas[4[Namas.laiptiniuSkaicius]]);