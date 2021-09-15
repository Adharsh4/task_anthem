import React from 'react'
import { useEffect } from "react"
import * as actions from "../store/actions"
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const ProductDetails = (props) => {
    // const history = useHistory();
    useEffect(() => {
        props.fetchProducts(props);
        // props.getproduct(props.match.params.id)
    }, [])
    console.log(props.selectedProduct)
    return (
        props.selectedProduct && props.selectedProduct.length > 0 ? 
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={props.selectedProduct.image} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                            <h3 class="card-title">{props.selectedProduct.title}</h3>
                                <h5 class="card-title">{props.selectedProduct.description}</h5>
                                <h5 class="card-title">{props.selectedProduct.price}</h5>
                                <h5 class="card-title">{props.selectedProduct.rating.count}</h5>
                                <h5 class="card-title">{props.selectedProduct.rating.rate}</h5>
                </div>
                </div>
            </div>
        </div>: null
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
        // getproduct: (id) => dispatch(actions.getproduct(id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetails));