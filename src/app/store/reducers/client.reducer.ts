import {
  ClientActionTypes,
  ClientAction,
} from '../actions/client.actions';
import { ClientItem } from '../models/client-item.model';

export interface ClientsState {
  list: ClientItem[];
  loading: boolean;
  error: Error;
}

const initialState: ClientsState = {
  list: [],
  loading: false,
  error: undefined,
};

export function ClientReducer(
  state: ClientsState = initialState,
  action: ClientAction
) {
  switch (action.type) {
    case ClientActionTypes.LOAD_ITEMS:
      return {
        ...state,
        loading: true,
      };
    case ClientActionTypes.LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case ClientActionTypes.LOAD_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ClientActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ClientActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case ClientActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ClientActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ClientActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case ClientActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
