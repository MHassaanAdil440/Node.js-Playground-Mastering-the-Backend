function encrypt(message){
    let encryptedMessage = '';
    for(let i=0; i<message.length; i++){
        const char = message[i];
        const charNum = char.charCodeAt(0);
        const charAdd = charNum + 1;
        const character = String.fromCharCode(charAdd)
        encryptedMessage += character;
    }
    return encryptedMessage;
}
function decrypt(message){
    let encryptedMessage = '';
    for(let i=0; i<message.length; i++){
        const char = message[i];
        const charNum = char.charCodeAt(0);
        const charAdd = charNum - 1;
        const character = String.fromCharCode(charAdd)
        encryptedMessage += character;
    }
    return encryptedMessage;
}
let message = __filename;
const fs = require('fs').writeFileSync;
fs('encrypted.txt',encrypt(message))
fs('decrypted.txt',decrypt(encrypt(message)))