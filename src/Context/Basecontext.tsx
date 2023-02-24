import { useReducer,createContext } from "react";
import { BaseReducer } from "./BaseReducer";

const INNITIAL_STATE = {
    walletAddress:null,
    walletConnected:false,
    user:null,
    userAccessToken:null,
    companyAccessToken:null
}

export const Basecontext = createContext(undefined);

export const BasecontextProvider = ({children}) => {
    const [state, dispatch] = useReducer(BaseReducer, INNITIAL_STATE);

    return(
        <Basecontext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </Basecontext.Provider>
    )

} 