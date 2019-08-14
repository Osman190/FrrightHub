export interface shipmentInterface {
  id: number;
  title: string;
  address: string;
  length: number;
  filter: Function;
  map: Function;
  data: { longitude: number; latitude: number };
}