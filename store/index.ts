// root only used as initializer and setter for the store and its modules
import { Store } from 'vuex'
import { initialiseStores } from '~/utils/store-accessor'

export const actions = {
  nuxtServerInit ({ commit }, { app }) {
    app.$apiConnection.get('/cart').then(res => console.log(res.data))
  }
}

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export * from '~/utils/store-accessor'
