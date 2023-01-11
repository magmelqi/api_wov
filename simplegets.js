const {readFileSync, readdirSync} = require ("fs");

API = async() => {  
    var DOr = readdirSync(`././Information/xp/absence`, 'utf-8')
var test1 = "a0deff6b-681a-488b-8c41-38c58e66bf36"; var confirmAbsence = false  //f8d9eddb-28f5-4032-9c79-cbd03ac524dd

var i = 0
while(i < DOr.length && !confirmAbsence) {
    var InfoA = JSON.parse(readFileSync(`././Information/xp/absence/${DOr[i]}`, 'utf-8')); 
       if (InfoA.PlayerId == test1) {confirmAbsence = true}
       var i = i +1;
};
if (confirmAbsence) {console.log('pas dans les fichiers d\'absence')}
}

API()