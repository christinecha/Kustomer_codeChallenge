import { Map } from 'immutable'

function setState(state, newData) {
  console.log('store:', state.toJS())
  return state.merge(newData)
}

function reducer(state = Map(), action) {
  return setState(state, action.data)
}

export default reducer
