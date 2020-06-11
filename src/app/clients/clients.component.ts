import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.model';
import { ClientItem } from '../store/models/client-item.model';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import {
  AddItemAction,
  DeleteItemAction,
  LoadItemAction,
} from '../store/actions/client.actions';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clientItems: Observable<Array<ClientItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  myTempVar: Array<ClientItem> = [];
  newClientItem: ClientItem = {
    id: '',
    name: '',
    city: '',
    membership: '',
  };

  constructor(
    private store: Store<AppState>,
    public confirmationDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.clientItems = this.store.select((store) => store.clients.list);
    this.loading$ = this.store.select((store) => store.clients.loading);
    this.error$ = this.store.select((store) => store.clients.error);
    console.log('--> ', this.clientItems);

    this.store.dispatch(new LoadItemAction());
    this.clientItems.subscribe((data) => {
      this.myTempVar = data;
    });
  }

  addItem() {
    this.newClientItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newClientItem));
    this.newClientItem = { id: '', name: '', city: '', membership: '' };
  }

  deleteItemConfirmclickMethod(name: string, id: string) {
    let dialogRef =
    this.confirmationDialog.open(CustomDialogComponent, {data: { name }, height: '150px', width: '400px'});
    dialogRef.afterClosed().subscribe((result) => {
      //console.log('Dialog result: ', result);
      if (result == 'true') {
        //console.log('result is : ', result);
        this.deleteItem(id);
      }
    });
    // EASY SOLUTION :
    //if (confirm('Are you sure to delete : ' + name + ' ?')) {
    //  this.deleteItem(id);
    //}
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
