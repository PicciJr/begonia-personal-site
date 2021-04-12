// store for common things, not entitled to specific entities (cart, users, etc).
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'common',
  stateFactory: true,
  namespaced: true
})
export default class Common extends VuexModule {
  isMenuOpen: boolean = false

  @Mutation
  SET_IS_MENU_OPEN (status: boolean) {
    this.isMenuOpen = status
  }

  @Action
  setIsMenuOpen (status: boolean) {
    this.SET_IS_MENU_OPEN(status)
  }
}
