import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { IProduct } from '~/types/product'
import { ICart } from '~/types/cart'

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
  UPDATE_CART_ITEM (updatedCart: ICart) {
    this.cart = updatedCart
  }

  @Mutation
  REMOVE_CART_ITEM (updatedCart: ICart) {
    this.cart = updatedCart
  }

  @Action
  async createCart ({ productId, quantity }) {
    try {
      const newCart = await this.store.$apiConnection.post('cart', {
        productId,
        quantity
      })
      this.CREATE_CART(newCart.data)
    } catch (err) {}
  }

  @Action
  addCartItem (product: IProduct) {
    // TODO: integracion API
    this.ADD_CART_ITEM(product)
  }

  @Action
  async updateCartItem ({ product, quantity }) {
    try {
      const updatedCart = await this.store.$apiConnection.put(
        `cart/${this.cart.token}/${product.id}`,
        { quantity }
      )
      this.UPDATE_CART_ITEM(updatedCart.data)
    } catch (err) {}
  }

  @Action
  removeCartItem (product: IProduct) {
    // TODO: integracion API
  }
}
