import { createStore,applyMiddleware,compose } from 'redux';
import * as thunk from 'redux-thunk'
import { reducers } from './reducers/root.reducer'

const middleware = [thunk.thunk]

const initState = {}

export default createStore(
    reducers,
    initState,
    compose(
        // @ts-ignore
        applyMiddleware(...middleware)
    )
)