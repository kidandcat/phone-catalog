
import { Reducer } from "redux";
import { Mobile } from "./types"
import * as fromActions from './actions'
import { RouterState } from 'connected-react-router'

export type RootState = typeof initialState & { router: RouterState }

export const initialState = {
    mobiles: [] as Mobile[],
    detailMobile: {} as Mobile,
    loading: false,
    error: false,
    errorMsg: "",
    router: null
};

export const rootReducer: Reducer<RootState> = (
    state = initialState,
    action: fromActions.Actions
) => {
    switch (action.type) {
        case fromActions.FETCH_MOBILES_START:
            return {
                ...state,
                loading: true
            };
        case fromActions.FETCH_MOBILES_SUCCESS:
            return {
                ...state,
                mobiles: action.payload,
                loading: false
            };
        case fromActions.FETCH_MOBILES_ERROR:
            return {
                ...state,
                error: true,
                errorMsg: action.payload,
                loading: false
            };
        case fromActions.DISMISS_ERROR:
            return {
                ...state,
                error: false,
                errorMsg: "",
            };
        default:
            return state;
    }
};