import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './main/reducers'

const store = createStore(reducers)
const element = document.getElementById('app')
ReactDOM.render(
<div>
    <Provider store={store}>
    <App/>
    </Provider>
</div>

,element)