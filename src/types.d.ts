export interface shipmentsInterface {
  cargo: {
    type: string
    description: string
    volume: string
  }
  destination: string
  id: string
  mode: string
  name: string
  origin: string
  services: {
    type: string
  }
  status: string
  total: string
  type: string
  userId: string
}


