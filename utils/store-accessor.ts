// used to generate the different modules that compose the store and that are used in the components
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import common from '~/store/common'

let commonStore: common

function initialiseStores (store: Store<any>): void {
  commonStore = getModule(common, store)
}

export { initialiseStores, commonStore }
