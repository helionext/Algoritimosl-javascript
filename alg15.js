const rd = require("readline-sync");

let numero = 0;

function UserException(message) {
    this.message = message; 
    this.name = "UserException"; // Aqui é como se fosse o tipo da Exception
}

try{
    numero = rd.question("Entre com número inteiro: ");

    if(!Number.isInteger(numero))
    {
        throw new UserException("Numero invalido.");
    }
    console.log(numero);

} catch(e){
    console.error(e.message, e.name);
}






