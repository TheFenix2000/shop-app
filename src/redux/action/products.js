export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

export const deleteFromCart = (product) => {
    return {
        type: "DELETE_FROM_CART",
        payload: product
    }
}

export const clearItemFromCart = (product) =>{
    return {
        type: "CLEAR_ITEM_FROM_CART",
        payload: product
    }
}

export const clearWholeCart = ()=>{
    return {
        type: "CLEAR_WHOLE_CART",
        payload: []
    }
}