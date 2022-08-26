
function calcularCustoConsumidor(clientes) {
    clientes.forEach((costumer) => {
        if(costumer.tipoConsumidor === 1) {
            costumer['totalKWH'] = 0.3 * costumer.quantidadeKw;
        } else if(costumer.tipoConsumidor === 2) {
            costumer['totalKWH'] = 0.5 * costumer.quantidadeKw;
        } else {
            costumer['totalKWH'] = 0.7 * costumer.quantidadeKw;
        }
    })
}

function calcularCustoTipoConsumidor(clientes) {

    let consumidorResidencial = 0;
    let consumidorComercial = 0;
    let consumidorIndustrial = 0;
    clientes.forEach((costumer) => {
        
        if(costumer.tipoConsumidor === 1) {
            consumidorResidencial +=  costumer.totalKWH;
        } else if(costumer.tipoConsumidor === 2) {
            consumidorComercial +=  costumer.totalKWH;
        } else {
            consumidorIndustrial +=  costumer.totalKWH;
        }
    })

    return [consumidorResidencial, consumidorComercial, consumidorIndustrial];
}

function calcularMediaConsumidoresUmEDois(clientes) {
    let consumidoresUmEDois = 0;
    let cont = 0;
    clientes.forEach((costumer) => {
        
        if(costumer.tipoConsumidor === 1 || costumer.tipoConsumidor === 2) {
            consumidoresUmEDois += costumer.totalKWH;
            cont++;
        }
    });

    let mediaConsumidorUmEDois = consumidoresUmEDois / cont;
    return mediaConsumidorUmEDois;
}

module.exports = {
    calcularCustoConsumidor,
    calcularCustoTipoConsumidor,
    calcularMediaConsumidoresUmEDois 
}