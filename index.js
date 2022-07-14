// config inicial 
const express = require('express')
const app = express()

// forma de ler JSON 
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rota inicial/ endpoint
app.post("/login", (req, res) => {
    try {
        const { email, password } = req.body;

        if(email == "luiz@gmail.com" && password == "123") {
            console.log('bateu na api')
            return res.status(200).json({message : "sucess"})
        } else {
            return res.status(401).json({message : "unauthorized"})
        }
    } catch {
        return res.status(500).json({message : "internal error"})
    }
})

// entregar uma porta 
app.listen(3000, () => {
    console.log("running at port 3000")
})