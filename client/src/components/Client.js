import React from 'react';

function Client({ client }) {
   return (
      <div className="client-container">
         <div className="client-info">
            <h3>לקוח: <span>{`${client.firstName} ${client.lastName}`}</span></h3>
            <h3>טלפון: <span>{client.phone}</span></h3>
            <h3>מספר רכב: <span>{client.vehicleNumber}</span></h3>
            <h3>קוד הנעה: <span>{client.ignitionCode}</span></h3>
         </div>
         <div className="options">
            <button className="btn btn-more-details">הצג עוד</button>
         </div>
      </div>
   )
}

export default Client;
