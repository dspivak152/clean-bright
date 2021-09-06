import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const login = async (req, res) => {
   const { username, password } = req.body;
   try {
      const adminUser = await User.findOne({ username });
      if (!adminUser) return res.status(404).json({ msg: 'Incorrect Username or Password' });
      const isCorrectPassword = await bcrypt.compare(password, adminUser.password);
      if (!isCorrectPassword) return res.status(404).json({ msg: 'Incorrect Username or Password' });
      const token = jwt.sign({ username: adminUser.username, id: adminUser._id }, 'secretKeyTest');
      res.status(200).json({ token });
   } catch (err) {
      res.status(500).json({ msg: 'Server Error!' })
   }
}