import express from "express"
import {fetch,create,update, deleteuser} from "../controller/userController.mjs"

const route =express.Router()
route.post("/create",create)
route.get("/getAllUsers",fetch)
route.put("/update/:id",update)
route.delete("/delete/:id",deleteuser)

export default route

