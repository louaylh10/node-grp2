module.exports=(server)=>{
    var userslist=[{id:1,name:"Si louay"},
{id:2,name:"Noussayer"},
{id:3,name:"Ayoub"},
]
server.get('/',(req,res)=>{
    res.send('Hello')
})
server.get('/users',(req,res)=>{

    res.send(userslist)
})
server.get('/users/:id',(req,res)=>{
let id=req.params.id
let user=userslist.find((u)=>u.id==id)
if(user)
    res.send(user)
else{
res.status(420).send("Not found")

}})
server.post('/create-user',(req,res)=>{
    userslist.push(req.body)
    res.send({message : "User added Successfuly"})
})
server.put('/update-user/:id',(req,res)=>{
    let id=req.params.id
    let us=userslist.findIndex((u)=>u.id==id)
    if (us !=-1){
userslist[us].name=req.body.name
res.send({message : "User updated Successfuly"})
    }
    else{
        res.status(420).send("Not found")
    }
})
server.delete('/remove-user/:id',(req,res)=>{
    let id=req.params.id
    let us=userslist.findIndex((u)=>u.id==id)
    if (us !=-1){
userslist.splice(us,1)
res.send({message : "User removed Successfuly"})
    }
    else{
        res.status(420).send("Not found")
    }
})
}