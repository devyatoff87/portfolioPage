import { createContext } from "react";

export const initState = {
    cvShow: false
}


const AppStore = createContext(() => initState);

export default AppStore