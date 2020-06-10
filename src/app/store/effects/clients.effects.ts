import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  LoadItemAction,
  ClientActionTypes,
  LoadItemSuccessAction,
  LoadItemFailureAction,
  AddItemAction,
  AddItemSuccessAction,
  AddItemFailureAction,
  DeleteItemAction,
  DeleteItemSuccessAction,
  DeleteItemFailureAction,
} from '../actions/client.actions';
import { of } from 'rxjs';
import { ClientService } from 'src/app/client.service';

@Injectable()
export class ClientsEffects {
  @Effect() loadClients$ = this.actions$.pipe(
    ofType<LoadItemAction>(ClientActionTypes.LOAD_ITEMS),
    mergeMap(() =>
      this.clientService.getItems().pipe(
        map((data) => {
          return new LoadItemSuccessAction(data);
        }),
        catchError((error) => of(new LoadItemFailureAction(error)))
      )
    )
  );


  @Effect() addClientItem$ = this.actions$
    .pipe(
      ofType<AddItemAction>(ClientActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.clientService.addItem(data.payload)
          .pipe(
            map(() => new AddItemSuccessAction(data.payload)),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
  )

  @Effect() deleteShoppingItem$ = this.actions$
    .pipe(
      ofType<DeleteItemAction>(ClientActionTypes.DELETE_ITEM),
      mergeMap(
        (data) => this.clientService.deleteItem(data.payload)
          .pipe(
            map(() => new DeleteItemSuccessAction(data.payload)),
            catchError(error => of(new DeleteItemFailureAction(error)))
          )
      )
    )

  constructor(
    private actions$: Actions,
    private clientService: ClientService
  ) {}
}
