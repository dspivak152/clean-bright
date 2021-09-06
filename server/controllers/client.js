import Client from '../models/client.js';
import axios from 'axios';

export const createClient = async (req, res) => {
   const { firstName, lastName, vehicleNumber, ignitionCode, phone } = req.body;
   try {
      const apiRes = await axios.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=1&q=${vehicleNumber}`);
      const vehicleInfo = apiRes.data.result.records[0];
      const client = new Client({
         firstName,
         lastName,
         vehicleNumber,
         ignitionCode,
         phone,
         vehicleInfo
      })
      await client.save();
      res.status(200).json(client);
   } catch (err) {
      res.status(500).json({ msg: 'server error' });
      console.log(err);
   }
}

export const getClients = async (req, res) => {
   try {
      const clients = await Client.find();
      res.status(200).json(clients)
   } catch (err) {
      res.status(500).json({ msg: 'server error' });
      console.log(err);
   }
}