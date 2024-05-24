const express = require('express');
var mysql = require('mysql');

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const db = mysql.createConnection({
  host     : 'database',
  user     : 'myapp',
  password : 'myapp',
  database: 'myapp'
});

//Conexão com o banco de dados
db.connect((error) => {
  if(error){
    console.error('Error ao conectar com o banco de dados:', error)
    return;
  }
  console.log('Conexão com o banco de dados efetuado com sucesso!')
})

//Rota GET by Raylan


app.get('/product', (req, res, next) => { 
  db.query('SELECT * FROM produtos', function(err, rows, fields) {
  if (err) throw err;
  res.json({
    status: 200,
    data: rows,
  })
});
})

//Get de um item específico by Dirceu

app.get('/product/:id', (req, res) => {
  const id = req.params.id

  const queryGETPorId = 'SELECT * FROM produtos WHERE ID = ?';
  db.query(queryGETPorId, [id], function(err, results) {
    if(err) {
      console.error('Erro ao realizar sua pesquisa: ', err)
      return res.status(404).json({error: 'Item não encontrado.'})
    }
    res.status(200).json(results[0])
  })
})

//Função POST by Dirceu

app.post('/product', (req, res) => {
  const { nome, preco, descricao, imagem_url } = req.body
  //Validação
  if(!nome || !preco || !descricao || !imagem_url ) {
    return res.status(400).json({error: 'Nome, preço, descrição e url da imagem são obrigatórios!'});
  }
  const queryPost = 'INSERT INTO produtos (nome, preco, descricao, imagem_url) VALUES (?, ?, ?, ?)';
  db.query(queryPost, [nome, preco, descricao, imagem_url], function (error, results) {
    if(error) {
      console.error('Erro ao inserir os dados no banco de dados: ', error)
      return res.status(500).json({error: 'Erro ao inserir os dados no banco de dados.'})
    }
    res.status(201).json({message: 'Dados inseridos com sucesso', id: results.id})
  })
})

//Método PUT by Dirceu

app.put('/product/:id', (req, res) => {
  const id = req.params.id
  
  res.status(201).json({
    status: 201,
    data: request.body
})
})

app.delete('/product/:id', (req, res, next) => {
  res.status(200)
  res.json({
    status: 200,
    data: {
        message: "Produto deletado com sucesso"
      }
  })
})


app.listen(port, '0.0.0.0',() => {
  console.log(`Example app listening on port ${port}`)
})

