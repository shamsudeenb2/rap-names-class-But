const express = require('express')
const app = express()
const PORT = 8000

const rappers ={
    '21 savage':{
        'age': 29,
        'birthName': 'sheyaa Bin Abraham-joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinoid'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'London, England'
    },
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res)=>{
    console.log(req.params.rapperName)
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}! you better go catch it`)
})