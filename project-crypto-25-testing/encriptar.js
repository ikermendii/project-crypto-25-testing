const { createCipheriv, createECDH } = require("crypto");
const args = require("yargs").argv;
const fs = require("fs");

if (!args.private && !args.public && !args.data) {
    console.log("Faltan argumentos de --private, --public y --data");
    exit(0);
}

const origen = createECDH("secp521r1");
const key = fs.readFileSync("./data/" + args.private + ".key").toString();
origen.setPrivateKey(key, "hex");
const destino = createECDH("secp521r1");
const pub = fs.readFileSync("./data/" + args.public + ".pb").toString();
destino.setPublicKey(pub, "hex");

//creacion de la clave secreta compartida
const secret = Uint8Array.from(origen.computeSecret(pub, "hex", "binary"));

//cifrador de fichero
const algo = "aes-256-cbc";
var cifrador = createCipheriv(algo, secret.slice(0, 32), secret.slice(0, 16));
const content = fs.readFileSync("./data/" + args.data);
let encripContent = cifrador.update(content, "utf-8", "hex");
encripContent += cifrador.final("hex");
console.log(encripContent);
fs.writeFileSync("./data/" + args.data + ".enc", encripContent);