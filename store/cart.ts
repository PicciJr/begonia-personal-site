// Cart store
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'cart',
  stateFactory: true,
  namespaced: true
})

export default class Cart extends VuexModule {

}
