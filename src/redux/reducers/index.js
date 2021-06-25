const reducers = (state,action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                Cart: [...state.Cart,state.Store.find((product) => product.id === action.payload)]
            }
        default:
            return state
    }
}

export default reducers