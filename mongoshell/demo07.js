//生成随机数

function GetRandomNum(min,max) {
    let range=max-min;
    let rand=Math.random();
    return (min+Math.round(rand*range));
    
}

//生成随机用户名
function GetRandomUserName(min,max) {
    let tempStringArray="123456789qwertyuiopasdfghjklzxcvbnm".split("");
    //console.log(tempStringArray);
    let outputtext="";
    for(let i=1;i<GetRandomNum(min,max);i++){
        outputtext=outputtext+tempStringArray[GetRandomNum(0,tempStringArray.length)]

    }
    return outputtext;

}

//console.log(GetRandomUserName(7,16));
//200百万条数据
var db=connect('company');
var startTime=(new Date()).getTime();
db.randomInfo.drop();
var tempInfo=[];
for(let i=0;i<2000000;i++){
    tempInfo.push({
        username:GetRandomUserName(7,16),
        regediteTime:new Date(),
        randNum0:GetRandomNum(10000,99999),
        randNum1:GetRandomNum(10000,99999),
        randNum2:GetRandomNum(10000,99999),
        randNum3:GetRandomNum(10000,99999),
        randNum4:GetRandomNum(10000,99999),
        randNum5:GetRandomNum(10000,99999),
        randNum6:GetRandomNum(10000,99999),
        randNum7:GetRandomNum(10000,99999),
        randNum8:GetRandomNum(10000,99999),
        randNum9:GetRandomNum(10000,99999)
    })

}

db.randomInfo.insert(tempInfo);
var endTime=(new Date()).getTime()-startTime;
print("[demo]:............"+endTime+"ms");