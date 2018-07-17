//查询在js文本中使用  hasNext
var db=connect('company');
var result=db.workmate.find();
// while(result.hasNext()){
//     printjson(result.next())
// }

result.forEach(function(result)
{
    printjson(result);
})