
import './App.css';
import {  Switch, Route } from 'react-router';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Home from './components/Home';
import {withRouter} from 'react-router-dom'

function App() {
  return (
    <div>
        <Switch>
          <Route path="/details/:id">
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    
  );
}

export default withRouter(App);
