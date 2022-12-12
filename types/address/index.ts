/**
 * items: items del carrito
 * subtotal: subtotal actual del carrito
 * postalCode: codigo postal de la direccion de envio
 * phoneNumber: teléfono de contacto
 */
export interface IAddress {
  name: string
  street: string
  province: string
  postalCode: string
  phoneNumber: string
  email: string
}
