const express = require('express')
const cors = require('cors')
const controller = require('./controller.js')
const PORT = 4004
const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/houses", controller.getHouses)
app.post("/api/houses", controller.createHouse)
app.put("/api/houses/:id", controller.updateHouse)
app.delete("/api/houses/:id", controller.deleteHouse)


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
