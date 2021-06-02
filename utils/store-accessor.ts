// used to generate the different modules that compose the store and that are used in the components
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import common from '~/store/common'
import cart from '~/store/cart'

let commonStore: common
let cartStore: cart

function initialiseStores (store: Store<any>): void {
  commonStore = getModule(common, store)
  cartStore = getModule(cart, store)
}

export { initialiseStores, commonStore, cartStore }
