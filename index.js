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

let message = 'hi there just checking the cipher'
const fs = require('fs');
fs.writeFileSync('hello.txt',encrypt(message))