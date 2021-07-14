import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { IProduct } from '~/types/product'
import { CartStatus, ICart } from '~/types/cart'

@Module({
  name: 'cart',
  stateFactory: true,
  namespaced: true
})

// TODO: habrá que cambiar la mayoría de operaciones para que realmente no hagan los cambios
// si no que simplemente copien el valor de carrito que llega de back, en cada operación
// (crear carrito, añadir, restar unidad, sumar unidad, borrar, etc)
export default class Cart extends VuexModule {
  cart: ICart = {
    items: [],
    subtotal: 0.0,
    status: null,
    email: '',
    shippingAddress: null
  }

  @Mutation
  CREATE_CART (cart: ICart) {
    this.cart = cart
  }

  @Mutation
  ADD_CART_ITEM (item: IProduct) {
    // TODO
    this.cart.items.push(item)
  }

  @Mutation
  UPDATE_CART_ITEM (item: IProduct, quantity: number) {
    // TODO
  }

  @Action
  async createCart (cart) {
    try {
      // debugger
      await this.store.$apiConnection.post('cart', cart)
    } catch (err) {}
  }

  @Action
  addCartItem (item: IProduct) {
    this.ADD_CART_ITEM(item)
  }

  @Action
  updateCartItem (item: IProduct, quantity: number) {
    // TODO
  }
}
