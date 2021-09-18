import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { IProduct } from '~/types/product'
import { ICart } from '~/types/cart'
import { IAddress } from '~/types/address'

@Module({
  name: 'cart',
  stateFactory: true,
  namespaced: true
})
export default class Cart extends VuexModule {
  cart: ICart = {
    items: [],
    subtotal: 0.0,
    status: null
    // email: '',
  }

  shippingAddress: IAddress = {
    email: '',
    phoneNumber: '',
    postalCode: '',
    province: '',
    street: ''
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
  // ADD_CART_ITEM (cart: ICart) {
  //   // TODO
  // }

  @Mutation
  // UPDATE_CART_ITEM (updatedCart: ICart) {
  //   this.cart = updatedCart
  // }

  // @Mutation
  // REMOVE_CART_ITEM (updatedCart: ICart) {
  //   this.cart = updatedCart
  // }

  @Mutation
  RESET_CART () {
    this.cart = {
      items: [],
      subtotal: 0.0,
      status: null,
      email: ''
      // shippingAddress: null
    }
  }

  @Mutation
  UPDATE_EMAIL (email) {
    this.shippingAddress.email = email
  }

  @Mutation
  UPDATE_STREET (street) {
    this.shippingAddress.street = street
  }

  @Mutation
  UPDATE_PROVINCE (province) {
    this.shippingAddress.province = province
  }

  @Mutation
  UPDATE_POSTALCODE (postalCode) {
    this.shippingAddress.postalCode = postalCode
  }

  @Mutation
  UPDATE_PHONENUMBER (phoneNumber) {
    this.shippingAddress.phoneNumber = phoneNumber
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
  async addCartItem ({ productId, quantity }) {
    try {
      const updatedCart = await this.store.$apiConnection.post(
        `cart/${this.cart.token}/${productId}`,
        { quantity }
      )
      this.SET_CART(updatedCart.data)
    } catch (err) {}
  }

  @Action
  async updateCartItem ({ product, quantity }) {
    try {
      const updatedCart = await this.store.$apiConnection.put(
        `cart/${this.cart.token}/${product.id}`,
        { quantity }
      )
      this.SET_CART(updatedCart.data)
    } catch (err) {}
  }

  @Action
  async removeCartItem (product) {
    try {
      const updatedCart = await this.store.$apiConnection.delete(
        `cart/${this.cart.token}/${product.id}`
      )
      this.SET_CART(updatedCart.data)
      return updatedCart.data
    } catch (err) {}
  }

  @Action
  async setCartAddress () {
    try {
      await this.store.$apiConnection.put(
        `cart/${this.cart.token}/address`, {
          address: this.shippingAddress
        }
      )
    } catch (err) {}
  }

  @Action
  async completeOrder () {
    try {
      const response = await this.store.$apiConnection.put(
        `cart/checkout/complete/${this.cart.token}`
      )
      this.RESET_CART()
      this.store.$cookies.remove('cartToken')
      return response.data
    } catch (err) {}
  }

  @Action
  updateEmail (email) {
    this.UPDATE_EMAIL(email)
  }

  @Action
  updateStreet (street) {
    this.UPDATE_STREET(street)
  }

  @Action
  updateProvince (province) {
    this.UPDATE_PROVINCE(province)
  }

  @Action
  updatePostalCode (postalCode) {
    this.UPDATE_POSTALCODE(postalCode)
  }

  @Action
  updatePhoneNumber (phoneNumber) {
    this.UPDATE_PHONENUMBER(phoneNumber)
  }

  get cartItemsTotalAmount () {
    return this.cart.items.reduce((acc, item) => {
      return acc + item.amount
    }, 0)
  }
}
