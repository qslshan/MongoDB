db.workmate.update({sex:1},{$set:{money:1000}},false,true);
var resultMessage=db.runCommand({getLastError:1})
