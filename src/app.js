"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import * as action from './actions'
import * as helper from './helpers'
import { BankingAppContainer } from './components/BankingApp'

export const store = createStore(reducer)

store.dispatch({
  type: 'GET_INITIAL_STATE',
  data: {
    initialBalance: 0,
    currentBalance: 0,
    transactions: []
  }
})


ReactDOM.render(
  <Provider store={store}>
    <BankingAppContainer />
  </Provider>,
  document.getElementById('react-app')
)
