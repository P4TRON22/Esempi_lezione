"use strict";

let a = [1, 4, 9, 16];

console.log(a);
let a_string = a.join(',');

console.log(a_string);

let b = ['a', 'b', 'c'];
let c = a.concat(b);
console.log(c);

let d = ['*', ...b, '*'];
console.log(d);
let l = d.push('+');      //ritorna nuova lunghezza dell'array
console.log(d);
console.log(l);

//var pericoloso perchè lo definisco in unn certo punnto ma esiste dall'inizio
const e = [...d];   //non posso fare riassegnazione con const
console.log(e);
//e = 2;               //non posso farlo!!!
e[0] = 2;          //questo posso farlo perchè modifico qualcosa puntata dalla variabile
console.log(e);

let f = e;
console.log(f);
f = 3;
for(const val of e){   //val ricreata ad ogni iterazione
    console.log(val);
}
console.log("");
for(let i=0; i<e.length; i++)         //se mettessi const i non funzionerebbe
    console.log(e[i]);
