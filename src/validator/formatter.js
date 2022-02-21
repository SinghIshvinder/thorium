let text = "       FunctionUp        ";
let trimResult = text.trim();
function toLowerCase(text){
    let a = text.toLowerCase();
    console.log(a);
}
function toUpperCase(text){
    let b = text.toUpperCase();
    console.log(b);
}





module.exports.nonTrimText = text;
module.exports.trimText = trimResult;
module.exports.smallLetters = toLowerCase;
module.exports.blockLetters = toUpperCase;