// const e = require("express")
const Express = require("express")
const app = Express()

const PORT = 5200

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/api/answers.json")
// })

app.get("/api/answers.json", (req, res) => {
    res.sendFile()
})

fetch("/answers.jason")
.then((res) => res.json())
.then(json => {
    this.setState({
      setName: "name",
      setQuest: "quest",
      setColor: "color",
    })
  });


document.getElementById("name").addEventListener("click", changeText);

document.getElementById("quest").addEventListener("click", changeText);

document.getElementById("color").addEventListener("click", changeText);

if (setName = name, setQuest = quest, setColor = color){
    getElementByIdpass("pass-dontPass").changeText("You may pass")
}else{
    getElementByIdpass("pass-dontPass").changeText("Go away")
}


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
