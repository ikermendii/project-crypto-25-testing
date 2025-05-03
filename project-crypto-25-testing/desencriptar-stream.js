const { createECDH, createDecipheriv } = require("crypto");
const args = require("yargs").argv;
const fs = require("fs");

if (!args.private && !args.public && !args.data) {
    console.log("Faltan argumentos de --private, --public y --data");
    exit(0);
}

const origen = createECDH("secp521r1");
const key = fs.readFileSync("./data/" + args.private + ".key").toString();
origen.setPrivateKey(key, "hex");
const pub = fs.readFileSync("./data/" + args.public + ".pb").toString();

//creacion de la clave secreta compartida
const secret = Uint8Array.from(origen.computeSecret(pub, "hex", "binary"))

//descifrador de fichero
const algo = "aes-256-cbc";
var descifrador = createDecipheriv(algo, secret.slice(0, 32), secret.slice(0, 16));

fs.createReadStream("./data/" + args.data + ".enc")
    .pipe(descifrador)
    .pipe(fs.createWriteStream("./data/" + args.data + ".des"))