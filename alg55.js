function getAdmins(funcionarios) {
    const funcAdminstradores = new Map()

    for (const [key, value] of funcionarios) {
        if(value == "Admin") {
            funcAdminstradores.set(key, value)
        }    
    }

    return funcAdminstradores
}

const meusFuncionarios = new Map()

meusFuncionarios.set("Andre", "Admin")
meusFuncionarios.set("Jose", "Analista")
meusFuncionarios.set("Pedro", "Dba")
meusFuncionarios.set("Marcos", "Qa")
meusFuncionarios.set("Jose", "Admin")

const funcAdm = getAdmins(meusFuncionarios)

console.log(funcAdm)
