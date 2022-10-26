const Express = require("express")
const app = Express()

const PORT = 5200

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/api/answers.json")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
