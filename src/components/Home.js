import React from 'react'
import { useEffect } from "react"
import * as actions from "../store/actions"
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {useHistory} from 'react-router-dom'


const Home = (props) => {

    
    const history = useHistory();
    useEffect(() => {
        props.fetchProducts();
    }, [])
    
    const addproductHandler = (e, singleProduct) => {
        e.preventDefault();
        props.saveInCart(singleProduct);
    }
    const detailsHandler = (e, id) => {
        e.preventDefault();
        history.push({
            pathname: `/details/${id}`,
        })
    }

    console.log(props.products)

    return (
        <>
        <div>
            <button className="btn btn-primary">Go to cart</button>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
        {props.products && props.products.map((ele) => {
            return (
                
                    <div class="col" key={ele.id}>
                        <div class="card">
                            <img src={ele.image} class="card-img-top" alt={ele.image} onClick={(e) => detailsHandler(e, ele.id)}/>
                            <div class="card-body">
                                <h3 class="card-title">{ele.title}</h3>
                                <h5 class="card-title">{ele.price}</h5>
                            </div>
                            <button className="btn btn-primary" onClick={(e) => addproductHandler(e, ele)}>Add to cart</button>
                        </div>
                    </div>
            )
        })}</div></>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state?.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(actions.fetchProducts()),
        saveInCart: (singleProduct) => dispatch(actions.saveInCart(singleProduct))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));