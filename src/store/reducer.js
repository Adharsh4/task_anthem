import * as actionTypes from "./actionTypes"
export const initialState = {
    products: [],
    cart: [],
    selectedProduct: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SAVE_PRODUCT:
            return {
                ...state,
                products: action.products
            }
        case actionTypes.ADDINCART:
            return{
                ...state,
                cart: [...state.cart, action.singleProduct]
            }
        case actionTypes.GETSELECTEDPRODUCT:
            let products = state.products
            console.log(action.id, products)
            return{
                ...state,
                selectedProduct: state.products.filter((ele) => ele.id === action.id)
            }
    }
}

export default reducer