
//复合索引


var startTime=new Date().getTime();
var db=connect('company');
var rs=db.randomInfo.find({username:'hhay5gwt7fh'});
rs.forEach(rs=>{printjson(rs)});



var runTime=new Date().getTime()-startTime;
print('[demo]: this run time is '+runTime+'ms');


//建立索引
db.randomInfo.ensureIndex({username:1});

//删除索引

db.randomInfo.dropIndex('randNum0_1');