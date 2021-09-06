import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createClient } from '../redux/actions/client';

function NewClientForm({ setNewClientForm }) {
   const dispatch = useDispatch();

   const [clientData, setClientData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      ignitionCode: '',
      vehicleNumber: ''
   })

   const handleSubmit = e => {
      e.preventDefault();
      dispatch(createClient(clientData));
      setNewClientForm(false);
   }

   return (
      <div className="new-client-form">
         <form onSubmit={handleSubmit}>

            <div className="close-form" onClick={() => setNewClientForm(false)}>
               <h1>x</h1>
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="שם פרטי"
                  value={clientData.firstName}
                  onChange={e => setClientData({ ...clientData, firstName: e.target.value })}
               />
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="שם משפחה"
                  value={clientData.lastName}
                  onChange={e => setClientData({ ...clientData, lastName: e.target.value })}
               />
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="טלפון"
                  value={clientData.phone}
                  onChange={e => setClientData({ ...clientData, phone: e.target.value })}
               />
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="קוד הנעה"
                  value={clientData.ignitionCode}
                  onChange={e => setClientData({ ...clientData, ignitionCode: e.target.value })}
               />
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="מספר רכב"
                  value={clientData.vehicleNumber}
                  onChange={e => setClientData({ ...clientData, vehicleNumber: e.target.value })}
               />
            </div>

            <button className="btn btn-create-client" type="submit">צור לקוח חדש</button>

         </form>
      </div>
   )
}

export default NewClientForm;
