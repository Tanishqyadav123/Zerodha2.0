const express = require("express")
const { createNewStock, deleteStock, updateStock } = require("../Controllers/stockController")

const router = express.Router()

router.post("/createNewStock" , createNewStock)
router.delete("/deleteStock/:stockSymbol" , deleteStock)
router.get("/updateStock" , updateStock)

module.exports = router