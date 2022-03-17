/*
import {useReducer, useContext, createContext} from 'react'

import { toast } from "react-toastify";

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) => {
    switch (acction.type) {
        case "ADD":
          //  return [...state, action.items]
        
        default:
            toast.error(err)
            break;
    }
}

export const CartProvider = ({children}) =>{ 
    const [state, dispatch] = useReducer(reducer, [])
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children   }
            </CartStateContext.Provider>

        </CartDispatchContext.Provider>
    )
}

//export const useCart = () => useContext(CartStateContext)

//export const useDispatchCart = useContext(CartDispatchContext)

*/