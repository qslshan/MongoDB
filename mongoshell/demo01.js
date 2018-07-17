
//批量插入


var startTime=(new Date()).getTime();
// for(let i=0;i<1000;i++){
//     db.test.insert({num:i});
//
// }


var tempArray=[];
for(let i=0;i<1000;i++){
    tempArray.push({num:i});
}
db.test.insert(tempArray);



var runTime=(new Date()).getTime()-startTime;
print('[demo]:this run is '+runTime+'ms');


