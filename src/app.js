import express, { application } from "express"

const app = express()

//indicara para o express ler body com json.
app.use(express.json())

//mock; modelo de dados para fazer a manipulação;



function buscarMaterialPorId(id){
      return material.filter(material => material.id == id)
}


//funcão auxiliadora, para pegar a posicão ou index do elemento no array por id 

function buscarIdMaterial(id){
      return material.findIndex(material => material.id == id)
}
//mock


const livro = [
      {id: 1, livro: 'Harry Potter'},
      {id: 2, livro: 'Bíblia'},
      {id: 3, livro: 'O pequeno Principe'},
]
// mock modelo de dados para fazer a manipulação;
/*const selecoes = [
      
      {id: 2, selecao:'Suiça', grupo:'G'},
]


// criar rota padrão ou raiz  => aerofantiu
app.get('/', (req, res)=>{
      res.send('Every guys');
})*/


app.get('/', (req, res)=>{
      res.send('Meu dia favorito')
})


app.get('/livro', (req, res)=>{
      res.send(livro)
})

//Para fazer busca por id:

app.get('/material/:id', (req, res)=>{
      res.json(buscarMaterialPorId(req.params.id))
})
//atualizar a lista:
app.post('/material', (req,res)=>{
      material.push(req.body)
      res.status(201).send('Confere')
})

app.delete('/material/:id', (req, res)=>{
      let index = (buscarIdMaterial(req.params.id))
      material.splice(index, 1)
      res.send('Cortado com sucesso2')
})



//Exercício 1º faça uma lista, atualiza a lista com alguma cois nova, 2º faça o código para fazer 
//a busca por id/ após faça a rota de delete. 

export default app                                         