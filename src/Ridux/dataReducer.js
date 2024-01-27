const initialState={
    favData:[],
    updateData:null
}
export const dataReducer=(state=initialState,action)=>{
switch (action.type) {
    case "ADD_TO_FAV":
       return{
...state ,favData:[...state.favData,{items:action.items}]
       } 
     case "REMOVE_FROM_FAV":
    
     const newarr=state.cart
     return{
    
  ...state ,   favData:[...state.favData.filter(newarr=>newarr.items.id!== action.id)]
     }
     case "UPDATE_DATA":
    
     
     return{
    
  ...state ,   updateData:action.update
     }

    default:
    return state
}
}