
// db.workmate.find(
//     {"skill.skillOne":"HTML+CSS"},
//     {name:true,"skill.skillOne":true,_id:false}
//     )

// db.workmate.find(
//     {age:{$lte:30,$gte:25}},
//     {name:1,"skill.skillOne":1,age:1,_id:0}
// )


// var startDate=new Date('01/01/2018');
// db.workmate.find(
//     {regeditTime:{$gt:startDate}},
//     {name:1,"skill.skillOne":1,age:1,_id:0}
// )


/**
 多条件查询**/
//$in 一个key多个value

// db.workmate.find({age:{$in:[25,33]}},
//     {name:1,"skill.skillOne":1,age:1,_id:0}
//     )

//$or  $and
// db.workmate.find(
//     {$and:[
//         {age:{$gte:30}},
//         {"skill.skillThree":"PHP"}
//         ]},
//     {name:1,"skill.skillThree":1,age:1,_id:0}
//     )


//$not
// db.workmate.find({
//     age:{
//         $not:{
//             $lte:30,
//             $gte:20
//         }
//     }
// },
//     {name:1,"skill.skillThree":1,age:1,_id:0}
// )
//

//$all 相当于$and
// db.workmate.find({interest:{$all:['看电影','看书']}},
//     {name:1,interest:1,age:1,_id:0})


//$in 相当于$or
// db.workmate.find({interest:{$in:['看电影','看书']}},
//     {name:1,interest:1,age:1,_id:0})

//$size  数组个数
//db.workmate.find({interest:{$size:5}},
   // {name:1,interest:1,age:1,_id:0})

//$slice  数组个数
//db.workmate.find({interest:{$size:3}},
  //  {name:1,interest:{$slice:2},age:1,_id:0})

//分页  每页显示两个 年龄从小到大显示
// db.workmate.find(
//     {},
//     {name:1,age:1,_id:0}
//     ).limit(5).skip(2).sort({age:1})

//$where  查询修饰符  少用  会加重输出负担
db.workmate.find(
    {$where:"this.age>30 && this.age<35"},
    {name:1,age:1,_id:0}
)



// var workmate1={
//     name:'JSPang',
//     age:33,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate2={
//     name:'ShengLei',
//     age:31,
//     sex:1,
//     job:'JAVA后端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'J2EE',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate3={
//     name:'MinJie',
//     age:18,
//     sex:0,
//     job:'UI',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'UI',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate4={
//     name:'XiaoWang',
//     age:25,
//     sex:1,
//     job:'UI',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'UI',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate5={
//     name:'LiangPeng',
//     age:28,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate6={
//     name:'HouFei',
//     age:25,
//     sex:0,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate7={
//     name:'LiuYan',
//     age:35,
//     sex:0,
//     job:'美工',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'CAD',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate8={
//     name:'DingLu',
//     age:20,
//     sex:0,
//     job:'美工',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'CAD',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate9={
//     name:'JiaPeng',
//     age:29,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate10={
//     name:'LiJia',
//     age:26,
//     sex:0,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var db=connect('company');
// var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
// db.workmate.insert(workmateArray);
// print('[SUCCESS]：The data was inserted successfully');