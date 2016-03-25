"use strict"

import { expect } from 'chai'
import { createStore } from 'redux'
import * as action from '../actions'
import reducer from '../reducer'

describe('Reducer', () => {
  let store, initialState

  beforeEach(() => {
    store = createStore(reducer)

    initialState = {
      initialBalance: 0,
      currentBalance: 0,
      transactions: []
    }

    store.dispatch({
      type: 'GET_INITIAL_STATE',
      data: initialState
    })
  })

  it('should handle ADD_TRANSACTION', () => {
    const newState = store.dispatch(action.ADD_TRANSACTION(5, initialState.transactions))

    expect(newState.data).to.eql({
      initialBalance: 0,
      currentBalance: 5,
      transactions: [5]
    })
  })
})
