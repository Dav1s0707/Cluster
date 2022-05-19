module.exports = (app) => {
    app.get('/registro', (req, res) => {
        res.render('registro.ejs')
    })

    //gravar as informaes digitadas no mongo
    app.post("/registro", async(req, res) => {
        //recuperar as informaçoes digitas
        var dados = req.body
        //iportar as config  do database
        var database = require('../config/database')()
        //definir em qual coelção vamos gravar
        var usuarios = require("../models/usuarios")
        //gravar o documento
        var documento = await new usuarios ({
            nome: dados.nome,
            email: dados.email,
            senha: dados.senha
        }).save()
        res.redirect('/login')



    })


}