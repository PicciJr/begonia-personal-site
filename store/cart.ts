import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
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
  }

  shippingAddress: IAddress = {
    email: '',
    phoneNumber: '',
    postalCode: '',
    province: '-- Provincia --',
    street: ''
  }

  @Mutation
  SET_CART (cart: ICart) {
    this.cart = cart
  }

  @Mutation
  SET_SHIPPING_ADDRESS (shippingAddress: IAddress) {
    this.shippingAddress = shippingAddress
  }

  @Mutation
  SET_CART_TOKEN (token) {
    this.cart.token = token
  }

  @Mutation
  RESET_CART () {
    this.cart = {
      items: [],
      subtotal: 0.0
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

  @Mutation
  SET_CART_STATUS (status) {
    this.cart.status = status
  }

  @Action
  async createCart ({ productId, variantId = null, quantity }) {
    try {
      const newCart = await this.store.$apiConnection.post('cart', {
        productId,
        variantId,
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
    if (response.data?.shippingAddress) {
      this.SET_SHIPPING_ADDRESS(response.data.shippingAddress)
    }
  }

  @Action
  async addCartItem ({ productId, variantId = null, quantity }) {
    try {
      const updatedCart = await this.store.$apiConnection.post(
        `cart/${this.cart.token}/${productId}`,
        { variantId, quantity }
      )
      this.SET_CART(updatedCart.data)
    } catch (err) {}
  }

  @Action
  async updateCartItem ({ product, variantId = null, quantity }) {
    try {
      const updatedCart = await this.store.$apiConnection.put(
        `cart/${this.cart.token}/${product.id}`,
        { variantId, quantity }
      )
      this.SET_CART(updatedCart.data)
    } catch (err) {}
  }

  @Action
  async removeCartItem ({ product, variantId = null }) {
    // NuxtJS@axios does NOT work with "delete" if used with BODY payload
    try {
      const updatedCart = await this.store.$apiConnection.request(
        `cart/${this.cart.token}/${product.id}`,
        {
          data: {
            variantId
          },
          method: 'delete'
        }
      )
      this.SET_CART(updatedCart.data)
      return updatedCart.data
    } catch (err) {}
  }

  @Action
  async setCartAddress () {
    try {
      const updatedCart = await this.store.$apiConnection.put(
        `cart/${this.cart.token}/address`,
        {
          address: this.shippingAddress
        }
      )
      this.SET_CART(updatedCart.data)
    } catch (err) {}
  }

  @Action
  async completeOrder () {
    try {
      const response = await this.store.$apiConnection.put(
        `cart/checkout/complete/${this.cart.token}`
      )
      this.RESET_CART()
      this.SET_CART_STATUS('Completed')
      this.store.$cookies.remove('cartToken')
      return response.data
    } catch (err) {}
  }

  @Action
  resetCartToInitialStatus () {
    this.RESET_CART()
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

  @Action
  updateCartStatus (status) {
    this.SET_CART_STATUS(status)
  }

  get cartItemsTotalAmount () {
    return this.cart.items.reduce((acc, item) => {
      return acc + item.amount
    }, 0)
  }

  get productInCart () {
    return (productId) => {
      return this.cart?.items?.find(product => product.id === productId)
    }
  }

  get productVariantInCart () {
    return (variantId) => {
      return (
        this.cart.items.find(
          ({ variantSelected }) => variantSelected?.id === variantId ?? false
        ) ?? null
      )
    }
  }
}
