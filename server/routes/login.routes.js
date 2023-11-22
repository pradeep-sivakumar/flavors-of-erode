const express = require('express');
const router = express.Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    // for new user
    const newUser = new User({ username, password});
    await newUser.save()
  
    try {
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ userError: 'Invalid username', passwordError : '' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ userError:'', passwordError: 'Invalid password' });
      }
  
      const token = jwt.sign({ userId: user._id }, 'eatWiseRestaurant', { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;