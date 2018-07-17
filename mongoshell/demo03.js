// var db=connect('company');
// var workmate2={
//     name:'leilei',
//     age:28,
//     sex:0,
//     job:'JAVA',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'J2EE',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date()
// }
//$set 修改

//db.workmate.update({name:'xikan'},{$set:{sex:0,age:20}});
//db.workmate.update({name:'xikan'},{$set:{"skill.skillThree":'word'}});


//$unset  字段隐藏  重新添加用$set
//db.workmate.update({name:'xikan'},{$set:{age:''}});

//$inc  对数据进行修改
//db.workmate.update({name:'xikan'},{$inc:{age:-2}});

//$multi  添加字段  $set只添加一条
//db.workmate.update({},{$set:{interset:[]}},{multi:true});

//$upsert  查找字段，如果没有则进行添加。
//db.workmate.update({name:'xiaowang'},{$set:{age:20}},{upsert:true});

//$push  字段里添加值
//db.workmate.update({name:'xiaowang'},{$push:{interset:'draw'}});

//$ne 查找到不修改 否则添加
//db.workmate.update({name:'xiaowang',interset:{$ne:'playGame'}},{$push:{interset:'Game'}});

//$addToSet  查找添加  没有则修改 有则不修改
// db.workmate.update({name:'xiaowang'},{$addToSet:{interset:'readBook'}});

//$each  批量追加
//var newInternets=['Sing','Dance','Code'];
//db.workmate.update({name:'xiaowang'},{$addToSet:{interset:{$each:newInternets}}});

//$pop 1从末端进行删除  -1开始位置进行删除
//db.workmate.update({name:'xiaowang'},{$pop:{interset:1}});

// 进行数组定位修改   非应答式操作
//db.workmate.update({name:'xiaowang'},{$set:{"interset.2":"code"}});

//findAndModify   应答式操作

//db.runCommand()
db.workmate.update({name:'xiaowang'},{$pop:{interset:1}});


print('[update]:The data was updated successfully')