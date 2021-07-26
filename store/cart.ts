import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { IProduct } from '~/types/product'
import { ICart } from '~/types/cart'

@Module({
  name: 'cart',
  stateFactory: true,
  namespaced: true
})

export default class Cart extends VuexModule {
  cart: ICart = {
    items: [],
    subtotal: 0.0,
    status: null,
    email: '',
    shippingAddress: null
  }

  @Mutation
  SET_CART (cart: ICart) {
    this.cart = cart
  }

  @Mutation
  SET_CART_TOKEN (token) {
    this.cart.token = token
  }

  @Mutation
  ADD_CART_ITEM (item: IProduct) {
    // TODO
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
      this.SET_CART(newCart.data)
      this.SET_CART_TOKEN(newCart.data.token)
      this.store.$cookies.set('cartToken', newCart.data.token, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    } catch (err) {}
  }

  @Action
  setCartToken (token) {
    this.SET_CART_TOKEN(token)
  }

  @Action
  async getCart () {
    const response = await this.store.$apiConnection.get(
      `cart/${this.cart.token}`
    )
    this.SET_CART(response.data)
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
  async removeCartItem (product) {
    try {
      const response = await this.store.$apiConnection.delete(
        `cart/${this.cart.token}/${product.id}`
      )
      this.REMOVE_CART_ITEM(response.data)
      return response.data
    } catch (err) {}
  }

  get cartItemsTotalAmount () {
    return this.cart.items.reduce((acc, item) => {
      return acc + item.amount
    }, 0)
  }
}
