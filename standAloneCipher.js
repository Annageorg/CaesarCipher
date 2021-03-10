const str="xyz"
const key=1
console.log(encode(str, key))
const str1="yza"
const key1=1
console.log(decode(str1, key1))

function encode (str, key){
    let message = "";
    for (let i = 0; i < str.length; i++){
        let ascii = str[i].charCodeAt();
        let newAscii = ascii + key;
        if (ascii >= 65 && ascii <=90){
            if (newAscii <= 90) {
                message += String.fromCharCode(newAscii);
            } else {
                message += String.fromCharCode(newAscii - 26);
            }
        } else if (ascii >= 97 && ascii <= 122){
            if (newAscii <= 122) {
                message += String.fromCharCode(newAscii);
            } else {
                message += String.fromCharCode(newAscii - 26);
            }
        } else {
            message += str[i];
        }
    }
    return message;
}

function decode (str, key){
    let message = "";
    for (let i = 0; i < str.length; i++){
        let ascii = str[i].charCodeAt();
        let newAscii = ascii - key;
        if (ascii >= 65 && ascii <=90){
            if (newAscii < 65){
                message += String.fromCharCode(newAscii + 26)
            } else {
                message += String.fromCharCode(newAscii)
            }
        } else if (ascii >= 97 && ascii <= 122){
            if (newAscii < 97){
                message += String.fromCharCode(newAscii + 26)
            } else {
                message += String.fromCharCode(newAscii)
            }
        } else {
            message += str[i];
        }
    }
    return message;
}