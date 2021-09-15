import React from 'react'
import { useEffect } from "react"
import * as actions from "../store/actions"
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const ProductDetails = (props) => {
    const history = useHistory();
    useEffect(() => {
        props.fetchProducts(props);
        // props.getproduct(props.match.params.id)
    }, [])

    const addproductHandler = (e, singleProduct) => {
        e.preventDefault();
        props.saveInCart(singleProduct);
    }

    const  cartHandler = (e) => {
        e.preventDefault()
        history.push("/cart")
    }
    // console.log(props.selectedProduct)
    return (
        <>
        <div>
            <button className="btn btn-primary" onClick={cartHandler}>Go to cart</button>
        </div>
        {props.selectedProduct && props.selectedProduct.length > 0 ? 
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={props.selectedProduct[0].image} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                            <h3 class="card-title"> TITLE: {props.selectedProduct[0].title}</h3>
                                <h5 class="card-title">DESCRIPTION :{props.selectedProduct[0].description}</h5>
                                <h5 class="card-title">PRICE: {props.selectedProduct[0].price}</h5>
                                <h5 class="card-title">RATED USERS: {props.selectedProduct[0].rating.count}</h5>
                                <h5 class="card-title">RATING: {props.selectedProduct[0].rating.rate}</h5>
                                <button className="btn btn-primary" onClick={(e) => addproductHandler(e, props.selectedProduct)}>Add to cart</button>
                </div>
                </div>
            </div>
        </div>: null}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedProduct: state?.selectedProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (props) => dispatch(actions.fetchProducts(props)),
        
        saveInCart: (singleProduct) => dispatch(actions.saveInCart(singleProduct))
        // getproduct: (id) => dispatch(actions.getproduct(id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetails));