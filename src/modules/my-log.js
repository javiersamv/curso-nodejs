// module.exports.info =function info(text) {
//     console.log("INFO:",text);
//     return text;
// }




function info (text){
    console.log("INFO:",text);
    return text;
}
module.exports.error=function error(text) {
    console.log("ERROR:",text);
    return text;
}
module.exports.info=info;
//module.exports={info,error}
