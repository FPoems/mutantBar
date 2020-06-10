import { ClientsState } from "../reducers/client.reducer";

export interface AppState {
  readonly client: ClientsState;
}
