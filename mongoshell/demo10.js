//创建用户

db.createUser(
    {
        user:"qsls",
        pwd:"123456",
        customData:{
            name:"qslshan",
            email:"qslshan@163.com",
            age:18,

        },
        roles:[
            {
                role:"readWrite",
                db:"company"
            },
            'read'
        ]
    }
)



//备份  在mongo外进行操作

mongodump --host 127.0.0.1 --port 27017 --out /Users/qsls/Documents/MongoDB/backup

//还原

mongorestore --host 127.0.0.1 --port 27017 /Users/qsls/Documents/MongoDB/backup