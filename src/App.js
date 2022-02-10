import React, { Fragment} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/home/index'
import Trucks from './pages/trucks/index'
import NewTruck from './pages/trucks/new'

import Brands from './pages/brands/index'
import Brand from './pages/brands/brand';
import NewBrand from './pages/brands/new';


function App() {
  return (
    <Fragment>
      <Router>
        <div className="flex">
          <div className="h-screen w-36 bg-gradient-to-b from-rose-800 to-rose-500">
            <div className="bg-gradient-to-bl from-blue-800 to-rose-800 h-14 grid grid-flow-row auto-rows-max place-content-center mb-4">
              <Link to="/" className='font-semibold text-xl'>Mein LKW</Link>
            </div>
          <div className="grid grid-flow-row auto-rows-max px-4">
              <Link to="/trucks">Truck</Link>
              <Link to="/brands">Brand</Link>
            </div>
          </div>
          <div className='w-screen'>
            <div className="bg-gradient-to-r from-blue-800 to-blue-500">
              <div className="container px-4 h-14 grid gap-4 grid-flow-col auto-cols-max content-center">
 
              </div>
            </div>
            <div className="container px-4">
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/trucks" exact component={Trucks}/>
                <Route path="/trucks/new"  component={NewTruck}/>
                <Route path="/brands" exact component={Brands}/>
                <Route path="/brands/new"  component={NewBrand}/>
                <Route path="/brands/:slug" component={Brand}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Fragment> 
  );
}

export default App;
