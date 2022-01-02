import { createStore } from 'vuex'
import products from "./modules/products/index";
import cart from "./modules/cart/index";

export default createStore({
	state: {
		isLoggedIn: false,
	},

	mutations: {
		IS_LOGGED_IN(state) {
			state.isLoggedIn = true;
		},
		IS_LOGGED_OUT(state) {
			state.isLoggedIn = false;
		},
	},

	actions: {
		isLoggedIn({ commit }, payload) {
			commit("IS_LOGGED_IN", payload);
		},

		isLoggedOut({ commit }, payload) {
			commit("IS_LOGGED_OUT", payload);
		},
	},

	getters: {
		getAuthState(state) {
			return state.isLoggedIn;
		},
	},

	modules: {
		products,
		cart,
	},
});
