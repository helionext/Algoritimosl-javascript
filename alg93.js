/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as 
 * a string. For example:
 * 
 * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
 * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
 * url = "https://www.cnet.com"                -> domain name = cnet"
 */

const rd = require('readline-sync')

let url = rd.question("Url: ")

let primeiroPonto = null
let segundoPonto = null

let duasBarras = url.indexOf("//")
let codigocaractereAposDuasBarras = url.substring(duasBarras + 2, duasBarras + 3).charCodeAt()
let caracteresAposDuasBarras = url.substring(duasBarras + 2, duasBarras + 5)

if(caracteresAposDuasBarras != "www" && duasBarras != -1 && codigocaractereAposDuasBarras >= 65 && codigocaractereAposDuasBarras <= 128) {
    segundoPonto = url.indexOf(".")
    primeiroPonto = duasBarras + 2
} else {
    primeiroPonto = url.indexOf(".") + 1
    segundoPonto = url.indexOf(".", primeiroPonto)
}



const DOMAIN = url.substring(primeiroPonto, segundoPonto)

console.log(`\nDomain: ${DOMAIN}`)