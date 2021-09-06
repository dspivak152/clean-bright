import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/user.js';
import clientRoutes from './routes/client.js';

const app = express()

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use('/user', userRoutes);
app.use('/client', clientRoutes);

app.get('/', (req, res) => {
   res.send('clean and bright api');
})

const CONNECTION_URL = 'mongodb+srv://lirongol:I67nK7K1WFS0U5CW@cleanandbright.xwjgo.mongodb.net/cleanandbright?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('connected to DB'))
   .catch((err) => console.log('DB connection Error!', err))

const port = process.env.PORT || 5000;
app.listen(port , () => {
   console.log(`server started on port ${port}`)
})