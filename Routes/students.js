import express from "express";
const router = express.Router();
import user from "../modules/user.js";

router.get("/postStudents", (req, res) => {
  res.render("postStudents");
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
