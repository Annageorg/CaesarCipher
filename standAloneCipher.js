// [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
// [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
// [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
// [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]

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