import { createContext, useState } from "react";

export const AppContext = createContext({
    showInProgress:false,
    setShowInProgress:()=>{}
  });

export const AppProvider =({children})=>{
    const [showInProgress, setShowInProgress]=useState(false)
    const value ={showInProgress, setShowInProgress}
    return (<AppContext.Provider value={value} >{children}</AppContext.Provider>)
}