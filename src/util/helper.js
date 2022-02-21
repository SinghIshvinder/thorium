let today = new Date().toLocaleDateString()
const d = new Date();
let month = d.getMonth();
function getBatchInfo(message){
    console.log(message);
}

module.exports.printDate = today;
module.exports.printMonth = month;
module.exports.printBatchInfo = getBatchInfo;
