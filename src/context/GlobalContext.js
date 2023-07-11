import React,{createContext} from "react";

export const GlobalContext=createContext()
const GlobalContextProvider=(props)=>{
    const student={
        name:'Ram Adhikari',
        age:22,
        address:'kathmandu'
    }
    return(
    
    <GlobalContext.Provider value={student}>
        {props.children}

    </GlobalContext.Provider>
    
    )
}
export default GlobalContextProvider