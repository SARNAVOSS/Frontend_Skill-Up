import { ACTION_TYPES } from "./Actiontypes"


export const SetWalletAddress = (address :any) => ({
    type:ACTION_TYPES.SET_WALLET_ADDRESS,
    payload:address
})

export const SetWalletConnected = (toggle :any) => ({
    type:ACTION_TYPES.SET_WALLET_CONNECTED,
    payload:toggle
})

export const SetUserAccessToken = (token) => ({
    type:ACTION_TYPES.SET_USER_ACCESS_TOKEN,
    payload:token
})

export const SetUser = (name) => ({
    type:ACTION_TYPES.SET_USER_ACCESS_TOKEN,
    payload:name
})

export const SetCompanyAccessToken = (token) => ({
    type:ACTION_TYPES.SET_COMPANY_ACCESS_TOKEN,
    payload:token
})

export const SetProfileTabOption = (option) => ({
    type:ACTION_TYPES.SET_PROFILE_TAB_OPTION,
    payload:option
})