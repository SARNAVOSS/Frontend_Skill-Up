import { useReducer,createContext } from "react";
import { BaseReducer } from "./BaseReducer";

const INNITIAL_STATE = {
    wallet:null
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