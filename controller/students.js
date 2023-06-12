import express from "express";
const router = express.Router();
import user from "../models/user.js";

router.get("/postStudents", (req, res) => {
  res.render("postStudents");
});

router.get("/deleteStudents", (req, res) => {
  res.render("deleteStudents");
});

router.get("/deleteUser/:id", (req, res) => {
  const userId = req.params.id;
  user
    .findByPk(userId)
    .then((user) => {
      user.destroy().then((user_deleted) => {
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.redirect("/");
    });
});

router.post("/postStudents", (req, res) => {
  const userDetails = req.body;
  if ( userDetails.firstName.length === 0 || userDetails.lastName.length === 0  || userDetails.email.length === 0 || userDetails.tel.length === 0) {
     return res.status(400).send("Please fill in all the fields.");
  }

  user
    .create(userDetails)
    .then((d) => {
      res.redirect("/");
    })

    .catch((error) => {
      res.status(500).send("An error occurred while adding the student.");
    });
});

export default router;
