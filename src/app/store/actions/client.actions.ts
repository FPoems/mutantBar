import { Action } from '@ngrx/store';
import { ClientItem } from '../models/client-item.model';

export enum ClientActionTypes {
  LOAD_ITEMS = '[CLIENT] Load Items',
  LOAD_ITEMS_SUCCESS = '[CLIENT] Load Items Success',
  LOAD_ITEMS_FAILURE = '[CLIENT] Load Items Failure',
  ADD_ITEM = '[CLIENT] Add Item',
  ADD_ITEM_SUCCESS = '[CLIENT] Add Item Success',
  ADD_ITEM_FAILURE = '[CLIENT] Add Item Failure',
  DELETE_ITEM = '[CLIENT] Delete Item',
  DELETE_ITEM_SUCCESS = '[CLIENT] Delete Item Success',
  DELETE_ITEM_FAILURE = '[CLIENT] Delete Item Failure',
}

export class LoadItemAction implements Action {
  readonly type = ClientActionTypes.LOAD_ITEMS;
}
export class LoadItemSuccessAction implements Action {
  readonly type = ClientActionTypes.LOAD_ITEMS_SUCCESS;
  constructor(public payload: Array<ClientItem>) {}
}

export class LoadItemFailureAction implements Action {
  readonly type = ClientActionTypes.LOAD_ITEMS_FAILURE;
  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type = ClientActionTypes.ADD_ITEM;
  constructor(public payload: ClientItem) {}
}

export class AddItemSuccessAction implements Action {
  readonly type = ClientActionTypes.ADD_ITEM_SUCCESS;
  constructor(public payload: ClientItem) {}
}
export class AddItemFailureAction implements Action {
  readonly type = ClientActionTypes.ADD_ITEM_FAILURE;
  constructor(public payload: Error) {}
}

export class DeleteItemAction implements Action {
  readonly type = ClientActionTypes.DELETE_ITEM;
  constructor(public payload: string) {}
}

export class DeleteItemSuccessAction implements Action {
  readonly type = ClientActionTypes.DELETE_ITEM_SUCCESS;
  constructor(public payload: string) {}
}

export class DeleteItemFailureAction implements Action {
  readonly type = ClientActionTypes.DELETE_ITEM_FAILURE;
  constructor(public payload: string) {}
}

export type ClientAction =
  | AddItemAction
  | AddItemSuccessAction
  | AddItemFailureAction
  | DeleteItemAction
  | DeleteItemSuccessAction
  | DeleteItemFailureAction
  | LoadItemAction
  | LoadItemFailureAction
  | LoadItemSuccessAction;
