import { createStore } from "redux";
import { rootReducer, initialState } from "./reducer";
import { devToolsEnhancer } from 'redux-devtools-extension';

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        devToolsEnhancer({})
    )

    if (module['hot']) {
        module['hot'].accept('./reducer', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return store
}
