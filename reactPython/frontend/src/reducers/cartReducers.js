import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_CLEAR_ITEMS,
   
} from '../constantes/cartConstants'



export const cartReducer = (state = {cartItems: [],shippingAddress: {},paymentMethod:""}, action) => {
    // Déclaration du `cartReducer` qui gère l'état du panier (`cartItems`).
    // Par défaut, `cartItems` est initialisé comme un tableau vide.

    switch (action.type) {
    // On vérifie le type d'action pour déterminer quelle logique exécuter.

        case CART_ADD_ITEM:

            const item = action.payload
            // On récupère les données envoyées dans `action.payload`.
            // Cet objet représente l'article que l'utilisateur veut ajouter au panier.

            const existItem = state.cartItems.find(x => x.product === item.product)
            // On vérifie si l'article qu'on veut ajouter existe déjà dans le panier.
            // La comparaison se fait sur `product`, qui est l'identifiant unique du produit.

            if (existItem) {
            // Si l'article existe déjà dans le panier :
                return {
                    ...state,
                // On conserve l'état actuel (`state`) du panier.

                    cartItems: state.cartItems.map(x =>
             // On crée une nouvelle version de `cartItems` en parcourant chaque élément.

                        x.product === existItem.product ? item : x
                        // Si l'article actuel (`x`) correspond à celui qui existe déjà (`existItem`), 
                        // on le remplace par le nouvel article (`item`).
                        // Sinon, on conserve l'article tel qu'il est.
                    )


                }

            } else {
            // Si l'article n'existe pas encore dans le panier :

                return {
                    ...state,
                    // On conserve l'état actuel (`state`) du panier.

                    cartItems: [...state.cartItems, item]
                    // On ajoute le nouvel article (`item`) à la liste existante de `cartItems`.
                    // On utilise l'opérateur `...` pour étendre le tableau existant.
                }
            }

         case CART_REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: state.cartItems.filter(x => x.product !== action.payload)
                }
         case CART_SAVE_SHIPPING_ADDRESS:
                    return {
                        ...state,
                        shippingAddress: action.payload
                    }  
                        
         case CART_SAVE_PAYMENT_METHOD:
                    return {
                        ...state,
                       paymentMethod: action.payload
                    }  
         case CART_CLEAR_ITEMS:
                    return {
                            ...state,
                            cartItems: []
                    }           

        default:
            return state
    }
}