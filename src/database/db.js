//importar a dependência do SQlite 3 //Parei em 49:35 minutos da ultima aula, exporar objetivo DB.

const sqlite3 = require('sqlite3').verbose()

//Iniciar o objeto que irá fazer operações no banco de dados.. 
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db
// Utilizar o objeto banco de dados para nossas aplicações

db.serialize( () => {
//     //Com comandos SQL eu vou:

//     //Criar uma tabela
    
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places(
//             id  INTEGER PRIMARY KEY AUTOINCREMENT, 
//             image TEXT,
//             name TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT

//         );
//     `)
    
    
    
//     //2- Inserir dados na tabela
//             const query = `
//             INSERT INTO places (
//                 image,
//                 name,
//                 adress,
//                 adress2,
//                 state,
//                 city,
//                 items
//             ) VALUES (?,?,?,?,?,?,?);
//     `
    
//     const values = [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos eletrônicos, Lâmpadas"



//     ]

//     function afterInsertData(err){
//         if(err){
//             console.log(err)
//         }else{
//             console.log("Cadastrado com sucesso!")
//             console.log(this)
//         }

//     }


//     db.run(query, values, afterInsertData)


   

//     //3- DELETAR um dado da tabela
    // db.run('DELETE FROM places WHERE id = ?' , [8]), function(err){
    //     if(err){
    //         console.log(err)
    //     }
    //         console.log('Registro deletado com sucesso!')
    // }

        //4- Consultar dados na tabela
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log("Aqui está o seu registro!")
    //     console.log(rows)
    // })

})  