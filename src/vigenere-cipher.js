class VigenereCipheringMachine {

    constructor(direction=true) {
        this.direction = !direction?false:direction;
    }

    encrypt(message, key) {
    let res =[];

    if (!message || !key) {throw Error};

    while (key.length<message.length) {
        key = key + key;
    }

    for (let key_i=0,i=0;i<message.length;i++) {
        if (/^[a-zA-Z]$/.test(message[i])) {
        res[i] = String.fromCharCode((this.indexFromChar(message[i])+this.indexFromChar(key[key_i]))%26 +97).toLocaleUpperCase();
        key_i++;
        } else {
        res[i] = message[i];
        }
    }

    return this.direction?res.join(""):res.reverse().join("");
    }

    decrypt(encryptedMessage,key) {
        let res =[];

        if (!encryptedMessage || !key) {throw Error};

        while (key.length<encryptedMessage.length) {
        key = key + key;
        }

        for (let key_i=0,i=0;i<encryptedMessage.length;i++) {
        if (/^[a-zA-Z]$/.test(encryptedMessage[i])) {
            res[i] = String.fromCharCode((this.indexFromChar(encryptedMessage[i])-this.indexFromChar(key[key_i])+26)%26 +97).toUpperCase();
            key_i++;
        } else {
            res[i] = encryptedMessage[i];
        }
        }
        return this.direction?res.join(""):res.reverse().join("");
    }

    indexFromChar(x) {
        return x.toLowerCase().charCodeAt()-97;
    }
}

module.exports = VigenereCipheringMachine;
