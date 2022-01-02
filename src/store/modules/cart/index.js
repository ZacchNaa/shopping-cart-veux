export default {
	namespaced: true,
	state: {
		items: [],
		total: 0,
		qty: 0,
	},
	mutations: {
		ADD_PRODUCT_TO_CART(state, payload) {
			const productData = payload;
			const productInCartIndex = state.items.findIndex(
				(ci) => ci.productId === productData.id
			);

			if (productInCartIndex >= 0) {
				state.items[productInCartIndex].qty++;
			} else {
				const newItem = {
					productId: productData.id,
					title: productData.title,
					image: productData.image,
					price: productData.price,
					qty: 1,
				};
				state.items.push(newItem);
			}
			state.qty++;
			state.total += productData.price;
		},

		REMOVE_PRODUCT_FROM_CART(state, payload) {
			const prodId = payload.productId;
			const productInCartIndex = state.items.findIndex(
				(cartItem) => cartItem.productId === prodId
			);
			const prodData = state.items[productInCartIndex];
			state.items.splice(productInCartIndex, 1);
			state.qty -= prodData.qty;
			state.total -= prodData.price * prodData.qty;
		},
	},
    actions: {        
        addProductToCart({ commit, rootGetters }, payload) {
            const prodId = payload.id
            const products = rootGetters['products/getProducts']
            const product = products.find(prod => prod.id === prodId)
            commit("ADD_PRODUCT_TO_CART", product);
        },
        removeProductFromCart({ commit }, payload) {
            commit("REMOVE_PRODUCT_FROM_CART", payload);
        },
	},
    getters: {
        getProducts(state) {
            return state.items
        },

        getTotalSum(state) {
            return state.total.toFixed(2);
        },

        getQuantity(state) {
            return state.qty
        }
    },
};
