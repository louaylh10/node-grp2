//1. importations
const express = require('express')

//2. initialisations
const server = express()
server.use(express.json())
//3.traitements

require('./apis.routes')(server)


//4.lancement du serveur
server.listen(3002,(err)=>{
if(err){
    console.log("err")
}
else {
    console.log("Connecté")
}
 

})

