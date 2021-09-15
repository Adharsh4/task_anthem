
import axios from 'axios';
import * as actionTypes from "./actionTypes"

export const saveProducts = (products) => {
    return {
        type: actionTypes.SAVE_PRODUCT,
        products: products
    }
}


export const saveInCart = (singleproduct) => {
    return {
        type: actionTypes.ADDINCART,
        singleproduct: singleproduct
    }
}


export const getproduct = (id) => {
    return {
        type: actionTypes.GETSELECTEDPRODUCT,
        id: id
    }
}


export const fetchProducts = (props) => {
    return (dispatch) => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            dispatch(saveProducts(response.data))
            if(props){
                dispatch(getproduct(props.match.params.id))
            }
        })
    }
}