import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
   firstName: String,
   lastName: String,
   vehicleNumber: String,
   ignitionCode: String,
   phone: String,
   vehicleInfo: {},
   jobHistory: [{ title: String, comments: String, cost: Number, status: Boolean }]
}, {timestamps: true})

const Client = mongoose.model('Client', clientSchema);

export default Client;