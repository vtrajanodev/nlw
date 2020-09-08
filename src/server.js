const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")


//Configurar pasta pública 
server.use(express.static("public"))

//Habilitar o uso do req.body
server.use(express.urlencoded({extended: true}))

//Utilizando tamplate engine

const nunjucks = require('nunjucks')
nunjucks.configure('src/views' , {
    express: server,
    noCache: true
})

//Configurar as rotas (Caminhos) da minha aplicação
//req = requisição (pedido)
//res = resposta 
server.get("/" , (req, res) =>  {
   return  res.render("index.html" , {title:"Ecoleta"
})
})
 
server.get("/create-point" , (req, res) =>  {

    //re.query = Query Strings da nossa URL
    // req.query()
    

    return res.render("create-point.html")
})


server.get("/search" , (req, res) =>  {
    //pegar os dados do banco de dados

    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        const total = rows.length
                
        console.log("Aqui estão seus registros")
        console.log(rows)
        //Mostrar a página HTML com os dados do DB.
        return res.render("search-results.html" , {places: rows , total: total})               
    })

})

server.post("/savepoint" , (req, res) => {
    
    // req.body: O corpo do nosso formulário
        // console.log(req.body)
    
    
    
        //inserir no banco de dados

            const query = `

            INSERT INTO places (
                image,
                name,
                adress,
                adress2,
                state,
                city,
                items
            ) VALUES (?,?,?,?,?,?,?);
    `
    
    const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items

    ]

    function afterInsertData(err){
        if(err){
            console.log(err)
        }else{
            console.log("Cadastrado com sucesso!")
            console.log(this)
            return res.render("create-point.html" , {saved: true})
        }

    }



    db.run(query, values, afterInsertData)


   
    
    
        
})


//ligar o servidor
server.listen(3000) 

// parei em 1h20 aula 4, desinstalar extensoes adicionadas que são muito chatas.