// calling variables to set up my boiler plate code for my index.js

const express = require('express');

const cors = require('cors');

const app = express()

app.use(express.json())

app.use(cors())
// creating a destuctering fuction
const {getHouses, 
    deleteHouse, 
    createHouse,
    updateHouse,
} = require('./controller')

//declaring end points for the functions
app.get('/api/houses', getHouses)

//creating a deleteHouse request 

app.delete('/api/houses/:id', deleteHouse)

//creating a post request
app.post('/api/houses', createHouse)

// creating a put to updateHoouse 
app.put('/api/houses/:id', updateHouse)


app.listen(4004, () => {console.log('Listen on port 4004')})