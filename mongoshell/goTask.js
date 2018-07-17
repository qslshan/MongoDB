//创建记录

// var userName="qslshan";
// var timeStamp=Date.parse(new Date());
// var jsonDatabase={"loginName":userName,"loginTime":timeStamp};
// let db= connect('log');  //use log
// db.login.insert(jsonDatabase);
// print("[demo]:log print success");


var username="qsls";
var timeStamp=Date.parse(new Date());
var jsonDatabase={"loginName":username,"loginTime":timeStamp};
var db=connect('log'); //use log
db.login.insert(jsonDatabase);
print('[demo]:log print success');







