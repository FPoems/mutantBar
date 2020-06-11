import { ClientsState } from "../reducers/client.reducer";

export interface AppState {
  readonly clients: ClientsState;
}
