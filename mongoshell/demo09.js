var startTime=new Date().getTime();

var db=connect('company');
var rs=db.randomInfo.find({username:'me12omr3de',randNum0:76482}).hint({randNum0:1});
rs.forEach(rs=>{printjson(rs)});



var runTime=new Date().getTime()-startTime;
print('[demo] this run time is '+runTime+'ms');