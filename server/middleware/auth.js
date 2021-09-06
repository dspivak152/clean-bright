import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
   try {
      const token = req.headers.token;
      if (token) {
         const decodedData = jwt.verify(token, 'secretKeyTest');
         req.userId = decodedData?.id;
         next();
      } else {
         res.status(401).json({ msg: 'Unauthorized' });
      }
   } catch (err) {
      console.log('Auth Error', err);
   }
}

export default auth;