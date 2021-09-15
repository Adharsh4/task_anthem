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
            let item = [...state.cart]
            if(item && item.length > 0){
                item = state.products.filter(ele => ele.id == action.singleProduct.id)
                item = {
                    ...item,
                    quantity: item.quantity+1
                }
            }
            return{
                ...state,
                cart: [...state.cart, {...item }]
            }
        case actionTypes.GETSELECTEDPRODUCT:
            let products = state.products
            console.log(action.id, products)
            return{
                ...state,
                selectedProduct: state.products.filter((ele) => ele.id == action.id)
            }
    }
}

export default reducer