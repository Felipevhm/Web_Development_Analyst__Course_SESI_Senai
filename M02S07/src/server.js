const express = require("express")
const cors = require('cors')
const routes = require("./routes/routes")
const connection = require("./database/connection")
const APP_PORT = process.env.APP_PORT

class Server {
    
    constructor(server = express()) {
        this.middlewares(server)
        this.database()
        server.use(routes)
        this.initializeServer(server)
    }

    async middlewares(server) {
        console.log("Executando os middlewares")
        server.use(cors()) // Quando tiver em Produção Habilita os Cors
        server.use(express.json())
        server.use((err, req, res, next) => {
            if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
                return res.status(400).json({
                    mensagem: 'JSON mal formatado'
                });
            }
            next();
        });

        console.log("Middlewares executados")
    }

    async database() {
        try {
            console.log("Conectando ao banco de dados")
            await connection.authenticate()
        } catch (error) {
            console.log("Erro ao conectar ao banco de dados: ", error)
        }
    }

    async initializeServer(server) {
        server.listen(APP_PORT, () => {
            console.log(`Servidor rodando na porta ${APP_PORT}!`)
        })
    }
}

module.exports = { Server }