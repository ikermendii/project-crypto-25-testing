const { createECDH } = require("crypto");
const args = require("yargs").argv;
const fs = require("fs");
console.log(args.name);
if(!args.name){
    console.log("Falta el argumento --name");
    exit(0);
}

const parejaDeClaves = createECDH("secp521r1");
const clavePublica = parejaDeClaves.generateKeys("hex");
const clavePrivada = parejaDeClaves.getPrivateKey("hex");
fs.writeFileSync("./data/" + args.name + ".pb", clavePublica)
fs.writeFileSync("./data/" + args.name + ".key", clavePrivada);