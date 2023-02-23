import { ACTION_TYPES } from "./Actiontypes"


export const SetWalletAddress = (address :any) => ({
    type:ACTION_TYPES.SET_WALLET_ADDRESS,
    payload:address
})

export const SetWalletConnected = (toggle :any) => ({
    type:ACTION_TYPES.SET_WALLET_CONNECTED,
    payload:toggle
})
