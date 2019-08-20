export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {...state, data: action.data }
    case "REVERSED_DATA":
      return {...state, data: action.data }
    case "SEARCH_DATA":
      return { ...state, data: action.data }
    
    default:
      throw new Error("Unexpected action");
  }
}

export const initialState = {
  data: {}
};