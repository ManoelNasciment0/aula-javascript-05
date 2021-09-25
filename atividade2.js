var txt = "abcdefghijklm";
console.log(txt.charAt(7));

var txt1 = "Posso comer bananas o dia todo";
console.log(txt1.slice(12, -11));

var txt2 = "Olá, Mundo"
console.log(txt2.replace("Olá", "Bem-Vindo"));

var txt3 = "Olá, mundo";
console.log(txt3.toUpperCase());

var txt4 = "Olá, mundo";
console.log(txt4.toLowerCase());

var txt5 = "Posso comer bananas o dia todo";
console.log(txt5.length);

var str1 = "Hello";
var str2 = " World!";
console.log(str1.concat(str2));

var frutas = ["Banana", "Orange", "Apple", "Kiwi"];
console.log(frutas.sort());

var frutas1 = ["Banana", "Orange", "Apple", "Kiwi"];
frutas1.shift();
frutas1.pop();
console.log(frutas1);

var frutas2 = ["Banana", "Orange", "Apple"];
frutas2.push("Uva", "Caju", "Kiwi");
console.log(frutas2);

var frutas3 = ["Banana", "Orange", "Apple"];
frutas3.unshift("Pera", "Manga");
frutas3.pop();
console.log(frutas3);