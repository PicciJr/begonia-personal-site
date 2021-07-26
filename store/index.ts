// root only used as initializer and setter for the store and its modules
import { Store } from 'vuex'
import { initialiseStores } from '~/utils/store-accessor'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { app }) {
    try {
      await dispatch('initCartData')
    } catch (err) {}
  },

  async initCartData ({ dispatch }) {
    const cartCookie = this.$cookies.get('cartToken')
    if (typeof cartCookie !== 'undefined' && cartCookie !== '') {
      await dispatch('cart/setCartToken', cartCookie)
      await dispatch('cart/getCart')
    }
  }
}
