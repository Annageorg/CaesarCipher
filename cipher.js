function encode (){
    let str = document.getElementById("pText").value;
    let key = document.getElementById("keys").value;
    let message = "";
    for (let i = 0; i < str.length; i++){
        let ascii = str[i].charCodeAt();
        let newAscii = Number(ascii) + Number(key);
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
    document.getElementById("cipheredText").innerHTML = message;
    document.getElementById("pText").value = "";
}

function decode (){
    let str = document.getElementById("cText").value;
    let key = document.getElementById("keys").value;
    let message = "";    
    for (let i = 0; i < str.length; i++){
        let ascii = str[i].charCodeAt();
        let newAscii = Number(ascii) - Number(key);
        if (ascii >= 65 && ascii <=90){
            if (newAscii < 65){
                message += String.fromCharCode(newAscii + 26);
            } else {
                message += String.fromCharCode(newAscii);
            }
        } else if (ascii >= 97 && ascii <= 122){
            if (newAscii < 97){
                message += String.fromCharCode(newAscii + 26);
            } else {
                message += String.fromCharCode(newAscii);
            }
        } else {
            message += str[i];
        }
    }
    document.getElementById("plainText").innerHTML = message;
    document.getElementById("cText").value = "";
}





