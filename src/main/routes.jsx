import React from 'react'
import { Route, Router, Redirect, hashHistory } from 'react-router'
import Dashbord from '../deashboard/deashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory} >
        <Route path='/' component={Dashbord} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)