export const BaseReducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_WALLET_ADDRESS":
            return({
                ...state,
                walletAddress:action.payload
            });
        case "SET_WALLET_CONNECTED":
            return({
                ...state,
                walletConnected:action.payload
            })
        default:
            return state;
    }
}