// Declaración de variables
console.log("igualdad relajada == ", (13 == "13"));
console.log("igualdad estricta === ", (13 === "13"));

let num = 13;
console.log(num);
console.log(num.toString());

let booleano = true;

console.log(booleano);
console.log(booleano.toString());

console.log(0.2 -0.1);
console.log("resta decimal -> ", 0.3 - 0.2);
console.log("resta decimal con toFixed -> ",(0.3 - 0.2).toFixed(2));
console.log("resta decimal con toFixed -> ",(0.3 - 0.2).toFixed(2)+1);

console.log("resta decimal con toFixed Number-> ",Number((0.3 - 0.2).toFixed(2)));
console.log("resta decimal con toFixed Number-> ",Number((0.3 - 0.2)).toFixed(2)+1);

console.log("119_223_372_036_854_775_808",119_223_372_036_854_775_808);
console.log("119_223_372_036_854_775_808 bigint",119_223_372_036_854_775_808n);


console.log("número mayor computable ", 1e308);
console.log("número NO computable ", 2e308);

console.log("Infinity" == Infinity);
console.log("Infinity" === Infinity);




