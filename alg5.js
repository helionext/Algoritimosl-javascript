console.log("Raiz:", Math.sqrt(64));
console.log("Raiz com exp e log e realint:", parseInt(Math.exp(1/2 * Math.log(64))));
console.log("Raiz com exp e log sem realint:", Math.exp(1/2 * Math.log(64)));
console.log("", (Math.sin(45 * Math.PI / 180) + 0.000001).toFixed(3));
console.log("potencia com exp e log sem formatar:", Math.exp(3 * Math.log(8)));

console.log("potencia com operador ** e formatar:", (8**3).toFixed(3));
console.log("Raiz cubica:", Math.exp(1/3 * Math.log(8)));
console.log("Absoluto:", Math.abs(-8));
console.log("Absoluto:", Math.abs(8));
console.log("Convertendo para inteiro 5.5:", parseInt(5.5));
console.log("Convertendo para inteiro 6.5:", parseInt(6.5));
console.log("Convertendo para inteiro 6.5 + 0.0001:", parseInt((6.5 + 0.0001)));
console.log("Convertendo para inteiro 5.45:", parseInt(5.45));
console.log("Convertendo para inteiro 5.51:", parseInt(5.51));
console.log("Convertendo para real 87:", parseFloat(87));
console.log("Convertendo para int 3/4:", parseInt(3/4));

// parseInt() sempre arredonda para baixo
// Vamos fazer o teste com outra função que prefixa as casas decimais

console.log();
// Arredondando com toPrecision()
console.log(" 5.5:", (5.5).toPrecision(1));
console.log(" 6.5:", (6.5).toPrecision(1));
console.log(" 6.5 + 0.0001:", (6.5 + 0.0001).toPrecision(1));
console.log(" 5.45:", (5.45).toPrecision(1));
console.log(" 5.51:", (5.51).toPrecision(1));
console.log("87:", (87).toFixed(1));
console.log(" 3/4:", (3/4).toPrecision(1));




