import express from "express";
const router = express.Router()
import user from '../models/user.js'

router.get('/postStudents',(req,res) => {
    res.render('postStudents')
})
router.get('/deleteStudents',(req,res) => {
    res.render('deleteStudents')
})


router.post('/postStudents',(req,res) => {

    const userDetails = req.body
  user.create(userDetails).then( d => {
    res.redirect('/')
    
 })
})




router.delete('/:firstName',(req,res) => {
    const userName = req.params.firstName
    user.destroy({
        where:{firstName:userName}
    }).then( d => {
        res. res.redirect('/')
    })
})




export default router