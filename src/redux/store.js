import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducers'
import persistedReducer from './reducers'

import { persistStore } from 'redux-persist'

const middleware = applyMiddleware(thunk)

// eslint-disable-next-line
export default () => {
    const store = createStore(persistedReducer, composeWithDevTools(middleware))
    const persistor = persistStore(store)
    return { store, persistor }
}
// export default store

