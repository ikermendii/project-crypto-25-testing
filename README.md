# 🔐 Crypto Project: Encryption/Decryption with Streams

File encryption/decryption project demonstrating ECDH key exchange, AES-256-CBC encryption, and efficient stream processing in Node.js.

## 🛠️ Tech Stack

- **ECDH**: `secp521r1` curve for key exchange
- **Encryption**: AES-256-CBC symmetric cipher  
- **Libraries**: `crypto`, `fs`, `stream`, `yargs`

## 📁 Project Structure

```
├── data/                # Keys and files
├── genKeys.js           # Key generation
├── encriptar.js         # Standard encryption
├── desencriptar.js      # Standard decryption  
├── encriptar-stream.js  # Stream encryption (large files)
└── desencriptar-stream.js # Stream decryption
```

## 🚀 Quick Start

### Generate Keys
```bash
node genKeys.js --keyname mykey
```

### Encrypt/Decrypt Files
```bash
# Regular mode (small files)
node encriptar.js --private key1 --public key2 --data file.txt
node desencriptar.js --private key2 --public key1 --data file.txt

# Stream mode (large files)
node encriptar-stream.js --private key1 --public key2 --data bigfile.bin
node desencriptar-stream.js --private key2 --public key1 --data bigfile.bin
```

## ⚡ Stream vs Regular

| Mode | Memory Usage | Best For |
|------|--------------|----------|
| Regular | High | Small files |
| Stream | Low | Large files |

---

⚠️ Educational project only. Not for production use.