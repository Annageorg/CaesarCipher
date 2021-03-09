//[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
//[65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
//[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
//[97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]

function encrypt (str, key){
    let message = "";
    for (let i=0; i<str.length; i++){
        let ascii = str[i].charCodeAt();
        if ( ascii >= 65 && ascii <= (90 - key) ){
            message += String.fromCharCode(ascii + key);
        } else if ( ascii > (90 - key)  && ascii <= 90 ){
            message += String.fromCharCode(ascii - key);
        } else if ( ascii >= 97 && ascii <= (122 - key) ){
            message += String.fromCharCode(ascii + key);
        } else if ( ascii > (122 - key)  && ascii <= 122 ){
            message += String.fromCharCode(ascii - key);
        } else {
            message += str[i];
        }
    }
    return message;
}

function decrypt (str, key){
    let message = "";
    for (let i=0; i<str.length; i++){
        let ascii = str[i].charCodeAt();
        if ( ascii >= 65 && ascii <= (90 - key) ){
            message += String.fromCharCode(ascii - key);
        } else if ( ascii > (90 - key)  && ascii <= 90 ){
            message += String.fromCharCode(ascii + key);
        } else if ( ascii >= 97 && ascii <= (122 - key) ){
            message += String.fromCharCode(ascii - key);
        } else if ( ascii > (122 - key)  && ascii <= 122 ){
            message += String.fromCharCode(ascii + key);
        } else {
            message += str[i];
        }
    }
    return message;
}

let input1 = "defend the East wall of the castle"
let num = 1
let output1 =  encrypt(input1, num)
let input2 = "efgfoe uif Fbtu xbmm pg uif dbtumf"
let output2 =  decrypt(input2, num)
console.log(output1)
console.log(output2)

