/* eslint-disable no-unreachable */
/* eslint-disable no-self-assign */
/* eslint-disable no-fallthrough */
const stateCart = {
    cart : []
}
const cartReducer = ( state = stateCart, action ) => {
    switch ( action.type ) {
        case "addToCart":{
            let index = state.cart.findIndex( product => product.id === action.infoProduct.id );
            if ( index !== -1 ) {
                state.cart[index].quantity += 1;
            } else {
                state.cart.push(action.infoProduct);
            }
            state.cart = state.cart;
            return {...state};
        }; break;
        case "removeItem": {
            let updateCart = [...state.cart];
            let index = updateCart.findIndex( product => product.id === action.id);
            if ( index !== -1 ) {
                updateCart.splice(index,1);
            };
            state.cart = updateCart;
            return {...state};
        }; break;
        case "increasingNumber": {
            let updateCart = [...state.cart];
            let index = updateCart.findIndex( product => product.id === action.id);
            if ( index !== -1 ) {
                updateCart[index].quantity += 1;
            };
            state.cart = updateCart;
            return {...state};
        }; break;
        case "reduceNumber": {
            let updateCart = [...state.cart];
            let index = updateCart.findIndex( product => product.id === action.id);
            if (updateCart[index].quantity === 1) {
                return {...state};
            }
            if ( index !== -1 ) {
                updateCart[index].quantity -= 1;
            };
            state.cart = updateCart;
            return {...state};
        }; break;
        default: ;
    }
    return {...state};
}
export default cartReducer;