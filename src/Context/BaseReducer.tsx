export const BaseReducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_WALLET_ADDRESS":
            return({
                ...state,
                walletAddress:action.payload
            });
        case "SET_USER_ACCESS_TOKEN":
            return({
                ...state,
                userAccessToken:action.payload
            });
        case "SET_USER":
            return({
                ...state,
                user:action.payload
            });
        case "SET_COMPANY_ACCESS_TOKEN":
            return({
                ...state,
                companyAccessToken:action.payload
            })
        case "SET_WALLET_CONNECTED":
            return({
                ...state,
                walletConnected:action.payload
            });
        case "SET_PROFILE_TAB_OPTION":
            return({
                ...state,
                profileTab:action.payload
            });
        default:
            return state;
    }
}