const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

// User login to page

router.post(
  "/login",
  body("name", "name should be of atleast 4 characters.").isLength({ min: 4 }),
  body("email", "Not a valid email").isEmail(),
  body("password", "password should be of atleast 6 characters.").isLength({
    min: 6,
  }),
  body("address", "address should be of atleast 8 characters.").isLength({
    min: 8,
  }),
  body("gender", "gender section cannot be empty!").isLength({ min: 1 }),
  async (req, res) => {
    const result = await validationResult(req);
    console.log("checking");
    if (result.errors.length !== 0) {
      res.status(400).json({ mag: result.errors });
    } else {
      try {
        // Hashing of password
        var salt = await bcrypt.genSaltSync(10);
        var hashedPassword = bcrypt.hashSync(req.body.password, salt);

        let user = await new User({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          address: req.body.address,
          gender: req.body.gender,
        });
        await user.save();
        res.json({ user , msg:"Saved successfully"});
        
      } catch (error) {
        res.status(404).json({error});
      }
    }
  }
);
module.exports = router;
