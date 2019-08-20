export interface shipmentsInterface {
 
}
export interface StateInterface {
  data: {
    cargo: {
      type: string;
      description: string;
      volume: string;
  }
    destination: string;
    id: string;
    mode: string;
    name: string;
    origin: string;
    services: {
      type: string;
    }
    status: string;
    total: string;
    type: string;
    userId: string;
    reverse: Function;
    filter: Function;
    }
}
export interface ReducerInterface {
  state: StateInterface;
  dispatch: ({ type: string, data: any }) => void;
}
