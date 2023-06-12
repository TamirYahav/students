import express from "express";
import dotenv from "dotenv"
dotenv.config()
import database from './models/database.js'
import user from './models/user.js'

const app = express()

import studentsRoute from "./controller/students.js"

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/public', express.static('public'))
app.set('view engine', 'ejs')


app.use('/students',studentsRoute)

app.get('/',(req,res) => {
    user.findAll().then(users =>{
        res.render('home',{users})
    })
    
})


database
.sync()
.then((result) => {
    app.listen(process.env.PORT,() => console.log(`server is listening via http://localhost:${process.env.PORT}`))

}).catch((err) => {
    console.log(err.message);
});







