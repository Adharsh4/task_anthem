import React from 'react'
import { useEffect } from "react"
import * as actions from "../store/actions"
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const Cart = (props) => {

    console.log(props.cart);

    return (
        // props.cart && props.cart.length > 0 ?
        //         props.cart.map(ele => {
        //             return <div class="card mb-3">
        //             <div class="row g-0">
        //                 <div class="col-md-4">
        //                 <img src={ele.image} class="img-fluid rounded-start" alt="..." />
        //                 </div>
        //                 <div class="col-md-8">
        //                 <div class="card-body">
        //                             <h3 class="card-title"> TITLE: {ele.title}</h3>
        //                                 <h5 class="card-title">DESCRIPTION :{ele.description}</h5>
        //                                 <h5 class="card-title">PRICE: {ele.price}</h5>
        //                                 <h5 class="card-title">RATED USERS: {ele.rating.count}</h5>
        //                                 <h5 class="card-title">RATING: {ele.rating.rate}</h5>
        //                                 <hr/>
        //                                 <h5>TOTal : </h5>
        //                 </div>
        //                 </div>
        //             </div>
        //         </div>
        //         }) 
        //     : null
        <div>ss</div>
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state?.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (props) => dispatch(actions.fetchProducts(props)),
        
        saveInCart: (singleProduct) => dispatch(actions.saveInCart(singleProduct))
        // getproduct: (id) => dispatch(actions.getproduct(id)),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));