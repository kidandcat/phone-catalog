import { Mobile } from './types';
import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'

export const FETCH_MOBILES_START = 'FETCH_MOBILES_START'
export const FETCH_MOBILES_SUCCESS = 'FETCH_MOBILES_SUCCESS'
export const FETCH_MOBILES_ERROR = 'FETCH_MOBILES_ERROR'
export const DISMISS_ERROR = 'DISMISS_ERROR'


export const Actions = {
    fetchMobiles: () => createAction(FETCH_MOBILES_START),
    fetchMobilesSuccess: (data: Mobile[]) => createAction(FETCH_MOBILES_SUCCESS, data),
    fetchMobilesError: (error: string) => createAction(FETCH_MOBILES_ERROR, error),
    dismissError: () => createAction(DISMISS_ERROR),
}

export type Actions = ActionsUnion<typeof Actions>