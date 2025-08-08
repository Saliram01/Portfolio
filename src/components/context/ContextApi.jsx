import React, {createContext} from 'react';

export const ContextPro = createContext();

function ContextApi(props){
    const name = "Saliram Chaudhary";
    return(
       <ContextPro.Provider value={name}>
            {props.children}
       </ContextPro.Provider>
    )
}

export default ContextApi;