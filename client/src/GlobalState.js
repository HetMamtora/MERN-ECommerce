import { createContext } from "react";
import ProductAPI from "./api/ProductAPI";

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    ProductAPI()

    return(
        <GlobalState.Provider value={"Value is Global"}>
            {children}
        </GlobalState.Provider>
    )
}