import { createStore, applyMiddleware } from "redux"
import { rootReducer, initialState } from "./reducer"
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'



export const configureStore = () => {
    const history = createBrowserHistory()
    const store = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        composeWithDevTools(applyMiddleware(routerMiddleware(history)))
    )

    if (module['hot']) {
        module['hot'].accept('./reducer', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return {
        store,
        history
    }
}
