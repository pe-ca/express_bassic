const express = require('express') //usando objeto express
const app = express() //app de express
const port = 3000 //puerto en el que se mostrara la app localhost:300

//path inicial, respondera a la url localhost:3000
app.get('/', (req, res) =>{
    res.send("hello world!")
})

app.get('/launchx', (req, res) =>{
    res.send("bienvenido a LaunchX")
})

//inicializador de la app
app.listen(port, () =>{
    console.log(`Example app listening on por ${port}`)
})