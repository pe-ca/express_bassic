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

//regresa un objeto
app.get('/explorersInNode', (req, res) =>{
    const explorer = {name:"Explorer", msg:"hello"}
    res.send(explorer)
})

//ruta que recibira un parametro
app.get('/explorers/:explorerName', (req, res) =>{
    res.send(req.params)
})

//inicializador de la app
app.listen(port, () =>{
    console.log(`Example app listening on por ${port}`)
})