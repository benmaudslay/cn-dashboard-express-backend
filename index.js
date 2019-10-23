const express = require("express")
// const hbs = require("express-handlebars")
const path = require("path")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 3010

const routes = require("./routes/index")

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ encoded: false }))
app.use(bodyParser.json())

// app.engine(
//   ".hbs",
//   hbs({
//     defaultLayout: "layout",
//     extname: ".hbs"
//   })
// )

// app.set("view engine", ".hbs")

app.use("/", routes)

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})
