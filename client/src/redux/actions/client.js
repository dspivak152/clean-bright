import * as api from '../../api';
import { CREATE_CLIENT, GET_CLIENTS } from '../types';

export const createClient = (clientData) => async (dispatch) => {
   try {
      const { data } = await api.createClient(clientData);
      dispatch({ type: CREATE_CLIENT, payload: data });
   } catch (err) {
      console.log(err)
   }
}

export const getClients = () => async (dispatch) => {
   try {
      const { data } = await api.getClients();
      dispatch({ type: GET_CLIENTS, payload: data });
   } catch (err) {
      console.log(err);
   }
}