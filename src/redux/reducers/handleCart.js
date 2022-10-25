const cart = []

const handleCart = (state = cart, action) => {
    const product = action.payload
    console.log(action)
    switch (action.type) {
        case "ADD_TO_CART":
            const exists = state.find((x)=>x.id === product.id)
            if(exists) return state.map((x)=>x.id === product.id ? {...x, quantity: x.quantity+1} : x)
            else {
                const product = action.payload
                return [
                    ...state,{
                        ...product, 
                        quantity: 1
                    }
                ]
            }
        case "DELETE_FROM_CART":
            const exist = state.find((x)=>x.id === product.id)
            if (exist.quantity === 1)return state.filter((x)=>x.id !== exist.id)
            else return state.map((x)=>x.id === product.id ? {...x, quantity: x.quantity - 1} : x)
        case "CLEAR_ITEM_FROM_CART":
            const exis = state.find((x)=>x.id === product.id)
            if(exis) return state.filter((x)=>x.id !== exis.id)
            break;
        case "CLEAR_WHOLE_CART":
            const ex = state.length > 0
            if (ex) return []
            break;
        default:
            return state
    }
}

export default handleCart;