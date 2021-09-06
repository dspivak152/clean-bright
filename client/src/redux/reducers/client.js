import { CREATE_CLIENT, GET_CLIENTS } from "../types";

const clientsReducer = (clients = [], action) => {
   switch (action.type) {
      case GET_CLIENTS:
         return action.payload;
      case CREATE_CLIENT:
         return [...clients, action.payload];
      default:
         return clients;
   }
}

export default clientsReducer;