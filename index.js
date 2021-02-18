const express = require('express')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000

let filmes = [
    {
        "title": "Avatar",
        "year": 2009,
        "director": "James Cameron"
    },
    {
        "title": "I Am Legend",
        "year": 2007,
        "director": "Francis Lawrence"
    },
    {
        "title": "300",
        "year": 2006,
        "director": "Zack Snyder"
    },
    {
        "title": "The Avengers",
        "year": 2012,
        "director": "Joss Whedon"
    }
]

let livros = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
    },
    {
        "author": "Unknown",
        "country": "India/Iran/Iraq/Egypt/Tajikistan",
        "pages": 288,
        "title": "One Thousand and One Nights",
        "year": 1200
    }
]

app.get('/movies', (req, res) => {
    res.send(filmes)
})

app.post('/movies', (req, res) => {
    filme = req.body
    filmes.push(filme)
    res.status(201)
    res.send(filmes)
})

app.get('/livros', (req, res) => {
    res.send(livros)
})

app.post('/livros', (req, res) => {
    livro = req.body
    livros.push(livro)
    res.status(201)
    res.send(livros)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})